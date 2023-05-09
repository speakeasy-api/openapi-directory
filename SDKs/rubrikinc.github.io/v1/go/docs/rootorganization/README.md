# RootOrganization

## Overview

Organization.

### Available Operations

* [BulkCreateEnvoys](#bulkcreateenvoys) - Create a list of Rubrik Envoy objects
* [BulkDeleteEnvoys](#bulkdeleteenvoys) - Remove a list of Rubrik Envoy objects
* [BulkUpdateEnvoys](#bulkupdateenvoys) - Update a list of Rubrik Envoy objects

## BulkCreateEnvoys

Create a list of Rubrik Envoy objects for a specified organization and specify the properties to assign to the Rubrik Envoy objects.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
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
    res, err := s.RootOrganization.BulkCreateEnvoys(ctx, operations.BulkCreateEnvoysRequest{
        RequestBody: []shared.EnvoyCreate{
            shared.EnvoyCreate{
                IPAddress: "perspiciatis",
                Port: 37384,
            },
        },
        ID: "f957f385-189a-4d7e-b807-aae03f33ca79",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnvoyDetailList != nil {
        // handle response
    }
}
```

## BulkDeleteEnvoys

Remove a list of Rubrik Envoy objects from an organization and delete the objects from the Rubrik cluster.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
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
    res, err := s.RootOrganization.BulkDeleteEnvoys(ctx, operations.BulkDeleteEnvoysRequest{
        EnvoyIDList: shared.EnvoyIDList{
            EnvoyIds: []string{
                "nam",
                "provident",
                "fugiat",
                "recusandae",
            },
        },
        ID: "4032ba26-fd36-48ba-9216-bcb415835c73",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## BulkUpdateEnvoys

Change one or more of the properties of a list of Rubrik Envoy objects.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
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
    res, err := s.RootOrganization.BulkUpdateEnvoys(ctx, operations.BulkUpdateEnvoysRequest{
        RequestBody: []shared.EnvoyBulkUpdate{
            shared.EnvoyBulkUpdate{
                ID: "41723133-edc0-446b-8516-3bbca49227c4",
                UpdateProperties: shared.EnvoyUpdate{
                    IPAddress: sdk.String("odit"),
                    Port: sdk.Int(803846),
                },
            },
            shared.EnvoyBulkUpdate{
                ID: "22c55350-495c-45db-b3c5-7c1e4981e8aa",
                UpdateProperties: shared.EnvoyUpdate{
                    IPAddress: sdk.String("qui"),
                    Port: sdk.Int(314053),
                },
            },
        },
        ID: "7ddc1912-ebde-464b-bcc5-469d4015dfa7",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnvoyDetailList != nil {
        // handle response
    }
}
```
