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
            Keys: []shared.Key{
                shared.Key{
                    PartitionID: &shared.PartitionID{
                        NamespaceID: "iure",
                        ProjectID: "magnam",
                    },
                    Path: []shared.PathElement{
                        shared.PathElement{
                            ID: "ipsa",
                            Kind: "delectus",
                            Name: "tempora",
                        },
                        shared.PathElement{
                            ID: "suscipit",
                            Kind: "molestiae",
                            Name: "minus",
                        },
                        shared.PathElement{
                            ID: "placeat",
                            Kind: "voluptatum",
                            Name: "iusto",
                        },
                        shared.PathElement{
                            ID: "excepturi",
                            Kind: "nisi",
                            Name: "recusandae",
                        },
                    },
                },
                shared.Key{
                    PartitionID: &shared.PartitionID{
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