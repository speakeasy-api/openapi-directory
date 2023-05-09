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
    res, err := s.Projects.DatastoreProjectsAllocateIds(ctx, operations.DatastoreProjectsAllocateIdsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AllocateIdsRequest: &shared.AllocateIdsRequest{
            DatabaseID: sdk.String("provident"),
            Keys: []shared.Key{
                shared.Key{
                    PartitionID: &shared.PartitionID{
                        DatabaseID: sdk.String("quibusdam"),
                        NamespaceID: sdk.String("unde"),
                        ProjectID: sdk.String("nulla"),
                    },
                    Path: []shared.PathElement{
                        shared.PathElement{
                            ID: sdk.String("illum"),
                            Kind: sdk.String("vel"),
                            Name: sdk.String("Doug Hoppe"),
                        },
                        shared.PathElement{
                            ID: sdk.String("debitis"),
                            Kind: sdk.String("ipsa"),
                            Name: sdk.String("Ricky Hoppe"),
                        },
                        shared.PathElement{
                            ID: sdk.String("placeat"),
                            Kind: sdk.String("voluptatum"),
                            Name: sdk.String("Miriam Huel"),
                        },
                    },
                },
                shared.Key{
                    PartitionID: &shared.PartitionID{
                        DatabaseID: sdk.String("ab"),
                        NamespaceID: sdk.String("quis"),
                        ProjectID: sdk.String("veritatis"),
                    },
                    Path: []shared.PathElement{
                        shared.PathElement{
                            ID: sdk.String("perferendis"),
                            Kind: sdk.String("ipsam"),
                            Name: sdk.String("Timmy Satterfield"),
                        },
                        shared.PathElement{
                            ID: sdk.String("at"),
                            Kind: sdk.String("maiores"),
                            Name: sdk.String("Bernadette Schmidt"),
                        },
                        shared.PathElement{
                            ID: sdk.String("porro"),
                            Kind: sdk.String("dolorum"),
                            Name: sdk.String("Antoinette Nikolaus"),
                        },
                    },
                },
                shared.Key{
                    PartitionID: &shared.PartitionID{
                        DatabaseID: sdk.String("deleniti"),
                        NamespaceID: sdk.String("hic"),
                        ProjectID: sdk.String("optio"),
                    },
                    Path: []shared.PathElement{
                        shared.PathElement{
                            ID: sdk.String("beatae"),
                            Kind: sdk.String("commodi"),
                            Name: sdk.String("Pauline Dibbert"),
                        },
                        shared.PathElement{
                            ID: sdk.String("esse"),
                            Kind: sdk.String("ipsum"),
                            Name: sdk.String("Brandon Auer"),
                        },
                        shared.PathElement{
                            ID: sdk.String("sed"),
                            Kind: sdk.String("iste"),
                            Name: sdk.String("Faye Howe"),
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("fuga"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("iste"),
        Key: sdk.String("iure"),
        OauthToken: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "quidem",
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("reiciendis"),
    }, operations.DatastoreProjectsAllocateIdsSecurity{
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