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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Pools.ReplicapoolPoolsDelete(ctx, operations.ReplicapoolPoolsDeleteRequest{
        PoolsDeleteRequest: &shared.PoolsDeleteRequest{
            AbandonInstances: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("unde"),
        Key: sdk.String("nulla"),
        OauthToken: sdk.String("corrupti"),
        PoolName: "illum",
        PrettyPrint: sdk.Bool(false),
        ProjectName: "vel",
        QuotaUser: sdk.String("error"),
        UserIP: sdk.String("deserunt"),
        Zone: "suscipit",
    }, operations.ReplicapoolPoolsDeleteSecurity{
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


### [Pools](docs/pools/README.md)

* [ReplicapoolPoolsDelete](docs/pools/README.md#replicapoolpoolsdelete) - Deletes a replica pool.
* [ReplicapoolPoolsGet](docs/pools/README.md#replicapoolpoolsget) - Gets information about a single replica pool.
* [ReplicapoolPoolsInsert](docs/pools/README.md#replicapoolpoolsinsert) - Inserts a new replica pool.
* [ReplicapoolPoolsList](docs/pools/README.md#replicapoolpoolslist) - List all replica pools.
* [ReplicapoolPoolsResize](docs/pools/README.md#replicapoolpoolsresize) - Resize a pool. This is an asynchronous operation, and multiple overlapping resize requests can be made. Replica Pools will use the information from the last resize request.
* [ReplicapoolPoolsUpdatetemplate](docs/pools/README.md#replicapoolpoolsupdatetemplate) - Update the template used by the pool.

### [Replicas](docs/replicas/README.md)

* [ReplicapoolReplicasDelete](docs/replicas/README.md#replicapoolreplicasdelete) - Deletes a replica from the pool.
* [ReplicapoolReplicasGet](docs/replicas/README.md#replicapoolreplicasget) - Gets information about a specific replica.
* [ReplicapoolReplicasList](docs/replicas/README.md#replicapoolreplicaslist) - Lists all replicas in a pool.
* [ReplicapoolReplicasRestart](docs/replicas/README.md#replicapoolreplicasrestart) - Restarts a replica in a pool.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
