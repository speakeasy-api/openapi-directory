# PolicyAPI

## Overview

Allows you to add, remove and modify policy modules. *Policy module identifiers are only used for management purposes. They are not used outside the Policy API.*

### Available Operations

* [DeletePolicyModule](#deletepolicymodule) - Delete a policy module
* [GetPolicies](#getpolicies) - List policies
* [GetPolicyModule](#getpolicymodule) - Get a policy module
* [PutPolicyModule](#putpolicymodule) - Create or update a policy module

## DeletePolicyModule

This API endpoint removes an existing policy module from the server

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PolicyAPI.DeletePolicyModule(ctx, operations.DeletePolicyModuleRequest{
        ID: "8fc81674-2cb7-4392-8592-9396fea7596e",
        Pretty: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeletePolicyModule200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetPolicies

This API endpoint responds with a list of all policy modules on the server (result response)

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PolicyAPI.GetPolicies(ctx, operations.GetPoliciesRequest{
        Pretty: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TwoHundredResult != nil {
        // handle response
    }
}
```

## GetPolicyModule

This API endpoint returns the details of the specified policy module (`{id}`)

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PolicyAPI.GetPolicyModule(ctx, operations.GetPolicyModuleRequest{
        ID: "b10faaa2-352c-4595-9907-aff1a3a2fa94",
        Pretty: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TwoHundredResult != nil {
        // handle response
    }
}
```

## PutPolicyModule

- If the policy module does not exist, it is created.
- If the policy module already exists, it is replaced.

If the policy module isn't correctly defined, a *bad request* (400) response is returned.

### Example policy module
```yaml
package opa.examples

import data.servers
import data.networks
import data.ports

public_servers[server] {
  some k, m
  	server := servers[_]
  	server.ports[_] == ports[k].id
  	ports[k].networks[_] == networks[m].id
  	networks[m].public == true
}
```

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PolicyAPI.PutPolicyModule(ctx, operations.PutPolicyModuleRequest{
        RequestBody: "package opa.examples
    
    import data.servers
    import data.networks
    import data.ports
    
    public_servers[server] {
      some k, m
      	server := servers[_]
      	server.ports[_] == ports[k].id
      	ports[k].networks[_] == networks[m].id
      	networks[m].public == true
    }",
        ID: "67739251-aa52-4c3f-9ad0-19da1ffe78f0",
        Metrics: sdk.Bool(false),
        Pretty: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TwoHundredResult != nil {
        // handle response
    }
}
```
