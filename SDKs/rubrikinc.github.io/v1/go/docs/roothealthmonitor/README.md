# RootHealthMonitor

## Overview

Health monitor operations.

### Available Operations

* [GetPolicies](#getpolicies) - Get details of health monitor policies
* [GetPolicyStatus](#getpolicystatus) - Get the status of health monitor policy enforcement
* [RunPolicies](#runpolicies) - Enforce health monitor policies

## GetPolicies

Retrieves the details of all the health monitor policies when policy IDs are not specified in the query parameter. If the request includes a list of policy IDs in the query parameter, the response will include the details of the specified policies.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootHealthMonitor.GetPolicies(ctx, operations.GetPoliciesRequest{
        PolicyIds: []string{
            "ab",
            "deserunt",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HealthMonitorPolicies != nil {
        // handle response
    }
}
```

## GetPolicyStatus

Retrieves the status of the policy enforcement for a list of nodes if specified. If nodes are not specified, the response includes the policy enforcement status for all the nodes on the Rubrik cluster.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootHealthMonitor.GetPolicyStatus(ctx, operations.GetPolicyStatusRequest{
        HasDetailedStatus: sdk.Bool(false),
        NodeIds: []string{
            "blanditiis",
        },
        PolicyIds: []string{
            "placeat",
            "ullam",
            "molestiae",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NodePolicyCheckResults != nil {
        // handle response
    }
}
```

## RunPolicies

Triggers on-demand enforcement of the set of policies specified in the request body. If a list of nodes is provided, policies are run against these nodes, otherwise the policies are run on all active nodes of the Rubrik cluster.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootHealthMonitor.RunPolicies(ctx, shared.RunPolicyArg{
        NodeIds: []string{
            "rem",
            "nemo",
            "non",
            "recusandae",
        },
        PolicyIds: []string{
            "ipsa",
            "aliquam",
            "dolor",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NodePolicyCheckResults != nil {
        // handle response
    }
}
```
