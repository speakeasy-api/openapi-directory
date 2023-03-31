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