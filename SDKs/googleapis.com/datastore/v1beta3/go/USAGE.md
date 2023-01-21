<!-- Start SDK Example Usage -->
```go
package main

import (
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
            ProjectID: "sit",
        },
        QueryParams: operations.DatastoreProjectsAllocateIdsQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.AllocateIdsRequest{
            Keys: []shared.Key{
                shared.Key{
                    PartitionID: &shared.PartitionID{
                        NamespaceID: "debitis",
                        ProjectID: "voluptatum",
                    },
                    Path: []shared.PathElement{
                        shared.PathElement{
                            ID: "ut",
                            Kind: "dolorem",
                            Name: "et",
                        },
                    },
                },
                shared.Key{
                    PartitionID: &shared.PartitionID{
                        NamespaceID: "voluptate",
                        ProjectID: "iste",
                    },
                    Path: []shared.PathElement{
                        shared.PathElement{
                            ID: "totam",
                            Kind: "dolores",
                            Name: "illum",
                        },
                    },
                },
                shared.Key{
                    PartitionID: &shared.PartitionID{
                        NamespaceID: "debitis",
                        ProjectID: "vel",
                    },
                    Path: []shared.PathElement{
                        shared.PathElement{
                            ID: "dolore",
                            Kind: "id",
                            Name: "aspernatur",
                        },
                    },
                },
            },
        },
    }
    
    res, err := s.Projects.DatastoreProjectsAllocateIds(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AllocateIdsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->