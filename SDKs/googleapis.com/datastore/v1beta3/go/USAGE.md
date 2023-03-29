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
            ProjectID: "unde",
        },
        QueryParams: operations.DatastoreProjectsAllocateIdsQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.AllocateIdsRequest{
            Keys: []shared.Key{
                shared.Key{
                    PartitionID: &shared.PartitionID{
                        NamespaceID: "iusto",
                        ProjectID: "ullam",
                    },
                    Path: []shared.PathElement{
                        shared.PathElement{
                            ID: "inventore",
                            Kind: "sapiente",
                            Name: "enim",
                        },
                        shared.PathElement{
                            ID: "eum",
                            Kind: "voluptatum",
                            Name: "autem",
                        },
                        shared.PathElement{
                            ID: "vel",
                            Kind: "non",
                            Name: "deleniti",
                        },
                        shared.PathElement{
                            ID: "similique",
                            Kind: "reprehenderit",
                            Name: "molestiae",
                        },
                    },
                },
                shared.Key{
                    PartitionID: &shared.PartitionID{
                        NamespaceID: "quo",
                        ProjectID: "quasi",
                    },
                    Path: []shared.PathElement{
                        shared.PathElement{
                            ID: "dicta",
                            Kind: "est",
                            Name: "voluptatem",
                        },
                        shared.PathElement{
                            ID: "consequatur",
                            Kind: "fugiat",
                            Name: "a",
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