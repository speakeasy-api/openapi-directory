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
    res, err := s.Projects.NetworksecurityProjectsLocationsAuthorizationPoliciesCreate(ctx, operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AuthorizationPolicyInput: &shared.AuthorizationPolicyInput{
            Action: shared.AuthorizationPolicyActionEnumAllow.ToPointer(),
            Description: sdk.String("distinctio"),
            Labels: map[string]string{
                "unde": "nulla",
                "corrupti": "illum",
                "vel": "error",
                "deserunt": "suscipit",
            },
            Name: sdk.String("Dr. Valerie Toy"),
            Rules: []shared.Rule{
                shared.Rule{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Hosts: []string{
                                "placeat",
                                "voluptatum",
                                "iusto",
                                "excepturi",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: sdk.String("nisi"),
                                RegexMatch: sdk.String("recusandae"),
                            },
                            Methods: []string{
                                "ab",
                                "quis",
                                "veritatis",
                                "deserunt",
                            },
                            Ports: []int64{
                                368241,
                            },
                        },
                        shared.Destination{
                            Hosts: []string{
                                "sapiente",
                                "quo",
                                "odit",
                                "at",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: sdk.String("at"),
                                RegexMatch: sdk.String("maiores"),
                            },
                            Methods: []string{
                                "quod",
                                "quod",
                            },
                            Ports: []int64{
                                520478,
                                780529,
                            },
                        },
                    },
                    Sources: []shared.Source{
                        shared.Source{
                            IPBlocks: []string{
                                "nam",
                            },
                            Principals: []string{
                                "occaecati",
                                "fugit",
                                "deleniti",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "optio",
                                "totam",
                                "beatae",
                                "commodi",
                            },
                            Principals: []string{
                                "modi",
                                "qui",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "cum",
                                "esse",
                                "ipsum",
                                "excepturi",
                            },
                            Principals: []string{
                                "perferendis",
                            },
                        },
                    },
                },
                shared.Rule{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Hosts: []string{
                                "sed",
                                "iste",
                                "dolor",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: sdk.String("natus"),
                                RegexMatch: sdk.String("laboriosam"),
                            },
                            Methods: []string{
                                "saepe",
                                "fuga",
                                "in",
                                "corporis",
                            },
                            Ports: []int64{
                                437032,
                                902349,
                                697631,
                            },
                        },
                        shared.Destination{
                            Hosts: []string{
                                "ipsa",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: sdk.String("reiciendis"),
                                RegexMatch: sdk.String("est"),
                            },
                            Methods: []string{
                                "laborum",
                                "dolores",
                                "dolorem",
                            },
                            Ports: []int64{
                                128926,
                                750686,
                            },
                        },
                    },
                    Sources: []shared.Source{
                        shared.Source{
                            IPBlocks: []string{
                                "nemo",
                                "minima",
                                "excepturi",
                            },
                            Principals: []string{
                                "iure",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "doloribus",
                                "sapiente",
                                "architecto",
                            },
                            Principals: []string{
                                "dolorem",
                                "culpa",
                                "consequuntur",
                            },
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("repellat"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AuthorizationPolicyID: sdk.String("occaecati"),
        Callback: sdk.String("numquam"),
        Fields: sdk.String("commodi"),
        Key: sdk.String("quam"),
        OauthToken: sdk.String("molestiae"),
        Parent: "velit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        UploadType: sdk.String("quia"),
        UploadProtocol: sdk.String("quis"),
    }, operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->