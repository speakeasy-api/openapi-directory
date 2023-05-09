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
            Keys: []shared.Key{
                shared.Key{
                    PartitionID: &shared.PartitionID{
                        NamespaceID: sdk.String("distinctio"),
                        ProjectID: sdk.String("quibusdam"),
                    },
                    Path: []shared.PathElement{
                        shared.PathElement{
                            ID: sdk.String("nulla"),
                            Kind: sdk.String("corrupti"),
                            Name: sdk.String("Ben Mueller"),
                        },
                        shared.PathElement{
                            ID: sdk.String("iure"),
                            Kind: sdk.String("magnam"),
                            Name: sdk.String("Larry Windler"),
                        },
                        shared.PathElement{
                            ID: sdk.String("molestiae"),
                            Kind: sdk.String("minus"),
                            Name: sdk.String("Ken Kshlerin"),
                        },
                    },
                },
                shared.Key{
                    PartitionID: &shared.PartitionID{
                        NamespaceID: sdk.String("recusandae"),
                        ProjectID: sdk.String("temporibus"),
                    },
                    Path: []shared.PathElement{
                        shared.PathElement{
                            ID: sdk.String("quis"),
                            Kind: sdk.String("veritatis"),
                            Name: sdk.String("Christopher Hills"),
                        },
                    },
                },
                shared.Key{
                    PartitionID: &shared.PartitionID{
                        NamespaceID: sdk.String("quo"),
                        ProjectID: sdk.String("odit"),
                    },
                    Path: []shared.PathElement{
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
                        shared.PathElement{
                            ID: sdk.String("deleniti"),
                            Kind: sdk.String("hic"),
                            Name: sdk.String("Everett Breitenberg"),
                        },
                        shared.PathElement{
                            ID: sdk.String("modi"),
                            Kind: sdk.String("qui"),
                            Name: sdk.String("Jonathon Klocko"),
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("aspernatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ad"),
        Fields: sdk.String("natus"),
        Key: sdk.String("sed"),
        OauthToken: sdk.String("iste"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "dolor",
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("laboriosam"),
        UploadProtocol: sdk.String("hic"),
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