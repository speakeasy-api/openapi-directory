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
        Security: operations.DatastoreProjectsAllocateIdsSecurity{
            Option1: &operations.DatastoreProjectsAllocateIdsSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.DatastoreProjectsAllocateIdsPathParams{
            ProjectID: "corrupti",
        },
        QueryParams: operations.DatastoreProjectsAllocateIdsQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.AllocateIdsRequest{
            DatabaseID: "suscipit",
            Keys: []shared.Key{
                shared.Key{
                    PartitionID: &shared.PartitionID{
                        DatabaseID: "magnam",
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
                        DatabaseID: "quis",
                        NamespaceID: "veritatis",
                        ProjectID: "deserunt",
                    },
                    Path: []shared.PathElement{
                        shared.PathElement{
                            ID: "ipsam",
                            Kind: "repellendus",
                            Name: "sapiente",
                        },
                    },
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.DatastoreProjectsAllocateIds(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AllocateIdsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->