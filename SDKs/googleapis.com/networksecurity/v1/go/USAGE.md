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

    req := operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest{
        Security: operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreatePathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            AuthorizationPolicyID: "unde",
            Callback: "nulla",
            Fields: "corrupti",
            Key: "illum",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            UploadType: "deserunt",
            UploadProtocol: "suscipit",
        },
        Request: &shared.AuthorizationPolicyInput{
            Action: "ALLOW",
            Description: "magnam",
            Labels: map[string]string{
                "ipsa": "delectus",
                "tempora": "suscipit",
                "molestiae": "minus",
                "placeat": "voluptatum",
            },
            Name: "iusto",
            Rules: []shared.Rule{
                shared.Rule{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Hosts: []string{
                                "temporibus",
                                "ab",
                                "quis",
                                "veritatis",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "deserunt",
                                RegexMatch: "perferendis",
                            },
                            Methods: []string{
                                "repellendus",
                                "sapiente",
                            },
                            Ports: []int64{
                                140350,
                                870013,
                                870088,
                                978619,
                            },
                        },
                        shared.Destination{
                            Hosts: []string{
                                "quod",
                                "quod",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "esse",
                                RegexMatch: "totam",
                            },
                            Methods: []string{
                                "dolorum",
                                "dicta",
                                "nam",
                                "officia",
                            },
                            Ports: []int64{
                                143353,
                                537373,
                                944669,
                            },
                        },
                    },
                    Sources: []shared.Source{
                        shared.Source{
                            IPBlocks: []string{
                                "beatae",
                                "commodi",
                                "molestiae",
                            },
                            Principals: []string{
                                "qui",
                                "impedit",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "esse",
                                "ipsum",
                                "excepturi",
                            },
                            Principals: []string{
                                "perferendis",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "natus",
                                "sed",
                            },
                            Principals: []string{
                                "dolor",
                                "natus",
                                "laboriosam",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "saepe",
                                "fuga",
                                "in",
                                "corporis",
                            },
                            Principals: []string{
                                "iure",
                                "saepe",
                                "quidem",
                            },
                        },
                    },
                },
                shared.Rule{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Hosts: []string{
                                "reiciendis",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "est",
                                RegexMatch: "mollitia",
                            },
                            Methods: []string{
                                "dolores",
                                "dolorem",
                                "corporis",
                            },
                            Ports: []int64{
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
                shared.Rule{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Hosts: []string{
                                "occaecati",
                                "numquam",
                                "commodi",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "quam",
                                RegexMatch: "molestiae",
                            },
                            Methods: []string{
                                "error",
                            },
                            Ports: []int64{
                                338007,
                            },
                        },
                        shared.Destination{
                            Hosts: []string{
                                "laborum",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "animi",
                                RegexMatch: "enim",
                            },
                            Methods: []string{
                                "quo",
                            },
                            Ports: []int64{
                                949572,
                            },
                        },
                        shared.Destination{
                            Hosts: []string{
                                "id",
                                "possimus",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "aut",
                                RegexMatch: "quasi",
                            },
                            Methods: []string{
                                "temporibus",
                                "laborum",
                                "quasi",
                            },
                            Ports: []int64{
                                976460,
                                878194,
                                468651,
                                509624,
                            },
                        },
                        shared.Destination{
                            Hosts: []string{
                                "ipsa",
                                "omnis",
                                "voluptate",
                                "cum",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "perferendis",
                                RegexMatch: "doloremque",
                            },
                            Methods: []string{
                                "ut",
                                "maiores",
                            },
                            Ports: []int64{
                                359444,
                            },
                        },
                    },
                    Sources: []shared.Source{
                        shared.Source{
                            IPBlocks: []string{
                                "dicta",
                                "harum",
                            },
                            Principals: []string{
                                "accusamus",
                                "commodi",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "quae",
                                "ipsum",
                                "quidem",
                                "molestias",
                            },
                            Principals: []string{
                                "pariatur",
                                "modi",
                                "praesentium",
                            },
                        },
                    },
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.NetworksecurityProjectsLocationsAuthorizationPoliciesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->