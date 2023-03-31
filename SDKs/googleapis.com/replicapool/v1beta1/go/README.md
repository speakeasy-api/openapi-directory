# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/replicapool/v1beta1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.ReplicapoolPoolsDeleteRequest{
        PoolsDeleteRequest: &shared.PoolsDeleteRequest{
            AbandonInstances: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
        },
        Alt: "json",
        Fields: "unde",
        Key: "nulla",
        OauthToken: "corrupti",
        PoolName: "illum",
        PrettyPrint: false,
        ProjectName: "vel",
        QuotaUser: "error",
        UserIP: "deserunt",
        Zone: "suscipit",
    }

    ctx := context.Background()
    res, err := s.Pools.ReplicapoolPoolsDelete(ctx, req, operations.ReplicapoolPoolsDeleteSecurity{
        Option1: &operations.ReplicapoolPoolsDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Pools

* `ReplicapoolPoolsDelete` - Deletes a replica pool.
* `ReplicapoolPoolsGet` - Gets information about a single replica pool.
* `ReplicapoolPoolsInsert` - Inserts a new replica pool.
* `ReplicapoolPoolsList` - List all replica pools.
* `ReplicapoolPoolsResize` - Resize a pool. This is an asynchronous operation, and multiple overlapping resize requests can be made. Replica Pools will use the information from the last resize request.
* `ReplicapoolPoolsUpdatetemplate` - Update the template used by the pool.

### Replicas

* `ReplicapoolReplicasDelete` - Deletes a replica from the pool.
* `ReplicapoolReplicasGet` - Gets information about a specific replica.
* `ReplicapoolReplicasList` - Lists all replicas in a pool.
* `ReplicapoolReplicasRestart` - Restarts a replica in a pool.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
