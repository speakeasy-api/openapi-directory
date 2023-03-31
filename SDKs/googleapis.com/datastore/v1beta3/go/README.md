# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/datastore/v1beta3/go
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

    req := operations.DatastoreProjectsAllocateIdsRequest{
        DollarXgafv: "2",
        AllocateIdsRequest: &shared.AllocateIdsRequest{
            Keys: []shared.Key{
                shared.Key{
                    PartitionID: &shared.PartitionID{
                        NamespaceID: "distinctio",
                        ProjectID: "quibusdam",
                    },
                    Path: []shared.PathElement{
                        shared.PathElement{
                            ID: "nulla",
                            Kind: "corrupti",
                            Name: "illum",
                        },
                        shared.PathElement{
                            ID: "vel",
                            Kind: "error",
                            Name: "deserunt",
                        },
                        shared.PathElement{
                            ID: "suscipit",
                            Kind: "iure",
                            Name: "magnam",
                        },
                    },
                },
                shared.Key{
                    PartitionID: &shared.PartitionID{
                        NamespaceID: "debitis",
                        ProjectID: "ipsa",
                    },
                    Path: []shared.PathElement{
                        shared.PathElement{
                            ID: "tempora",
                            Kind: "suscipit",
                            Name: "molestiae",
                        },
                        shared.PathElement{
                            ID: "minus",
                            Kind: "placeat",
                            Name: "voluptatum",
                        },
                        shared.PathElement{
                            ID: "iusto",
                            Kind: "excepturi",
                            Name: "nisi",
                        },
                        shared.PathElement{
                            ID: "recusandae",
                            Kind: "temporibus",
                            Name: "ab",
                        },
                    },
                },
                shared.Key{
                    PartitionID: &shared.PartitionID{
                        NamespaceID: "quis",
                        ProjectID: "veritatis",
                    },
                    Path: []shared.PathElement{
                        shared.PathElement{
                            ID: "perferendis",
                            Kind: "ipsam",
                            Name: "repellendus",
                        },
                        shared.PathElement{
                            ID: "sapiente",
                            Kind: "quo",
                            Name: "odit",
                        },
                        shared.PathElement{
                            ID: "at",
                            Kind: "at",
                            Name: "maiores",
                        },
                    },
                },
            },
        },
        AccessToken: "molestiae",
        Alt: "proto",
        Callback: "quod",
        Fields: "esse",
        Key: "totam",
        OauthToken: "porro",
        PrettyPrint: false,
        ProjectID: "dolorum",
        QuotaUser: "dicta",
        UploadType: "nam",
        UploadProtocol: "officia",
    }

    ctx := context.Background()
    res, err := s.Projects.DatastoreProjectsAllocateIds(ctx, req, operations.DatastoreProjectsAllocateIdsSecurity{
        Option1: &operations.DatastoreProjectsAllocateIdsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AllocateIdsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Projects

* `DatastoreProjectsAllocateIds` - Allocates IDs for the given keys, which is useful for referencing an entity before it is inserted.
* `DatastoreProjectsBeginTransaction` - Begins a new transaction.
* `DatastoreProjectsCommit` - Commits a transaction, optionally creating, deleting or modifying some entities.
* `DatastoreProjectsLookup` - Looks up entities by key.
* `DatastoreProjectsReserveIds` - Prevents the supplied keys' IDs from being auto-allocated by Cloud Datastore.
* `DatastoreProjectsRollback` - Rolls back a transaction.
* `DatastoreProjectsRunAggregationQuery` - Runs an aggregation query.
* `DatastoreProjectsRunQuery` - Queries for entities.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
