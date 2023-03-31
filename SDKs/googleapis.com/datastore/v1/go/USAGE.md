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
            DatabaseID: "provident",
            Keys: []shared.Key{
                shared.Key{
                    PartitionID: &shared.PartitionID{
                        DatabaseID: "quibusdam",
                        NamespaceID: "unde",
                        ProjectID: "nulla",
                    },
                    Path: []shared.PathElement{
                        shared.PathElement{
                            ID: "illum",
                            Kind: "vel",
                            Name: "error",
                        },
                        shared.PathElement{
                            ID: "deserunt",
                            Kind: "suscipit",
                            Name: "iure",
                        },
                        shared.PathElement{
                            ID: "magnam",
                            Kind: "debitis",
                            Name: "ipsa",
                        },
                    },
                },
                shared.Key{
                    PartitionID: &shared.PartitionID{
                        DatabaseID: "delectus",
                        NamespaceID: "tempora",
                        ProjectID: "suscipit",
                    },
                    Path: []shared.PathElement{
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
                    },
                },
                shared.Key{
                    PartitionID: &shared.PartitionID{
                        DatabaseID: "recusandae",
                        NamespaceID: "temporibus",
                        ProjectID: "ab",
                    },
                    Path: []shared.PathElement{
                        shared.PathElement{
                            ID: "veritatis",
                            Kind: "deserunt",
                            Name: "perferendis",
                        },
                        shared.PathElement{
                            ID: "ipsam",
                            Kind: "repellendus",
                            Name: "sapiente",
                        },
                    },
                },
            },
        },
        AccessToken: "quo",
        Alt: "json",
        Callback: "at",
        Fields: "at",
        Key: "maiores",
        OauthToken: "molestiae",
        PrettyPrint: false,
        ProjectID: "quod",
        QuotaUser: "quod",
        UploadType: "esse",
        UploadProtocol: "totam",
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