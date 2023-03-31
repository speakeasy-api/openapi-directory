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
        DollarXgafv: "2",
        AuthorizationPolicyInput: &shared.AuthorizationPolicyInput{
            Action: "ALLOW",
            Description: "distinctio",
            Labels: map[string]string{
                "unde": "nulla",
                "corrupti": "illum",
                "vel": "error",
                "deserunt": "suscipit",
            },
            Name: "iure",
            Rules: []shared.Rule{
                shared.Rule{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Hosts: []string{
                                "delectus",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "tempora",
                                RegexMatch: "suscipit",
                            },
                            Methods: []string{
                                "minus",
                                "placeat",
                            },
                            Ports: []int64{
                                479977,
                                568045,
                                392785,
                            },
                        },
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
                        shared.Destination{
                            Hosts: []string{
                                "totam",
                                "beatae",
                                "commodi",
                                "molestiae",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "modi",
                                RegexMatch: "qui",
                            },
                            Methods: []string{
                                "cum",
                                "esse",
                                "ipsum",
                                "excepturi",
                            },
                            Ports: []int64{
                                18789,
                            },
                        },
                    },
                    Sources: []shared.Source{
                        shared.Source{
                            IPBlocks: []string{
                                "sed",
                                "iste",
                                "dolor",
                            },
                            Principals: []string{
                                "laboriosam",
                                "hic",
                                "saepe",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "in",
                                "corporis",
                                "iste",
                            },
                            Principals: []string{
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
            },
        },
        AccessToken: "repellat",
        Alt: "media",
        AuthorizationPolicyID: "occaecati",
        Callback: "numquam",
        Fields: "commodi",
        Key: "quam",
        OauthToken: "molestiae",
        Parent: "velit",
        PrettyPrint: false,
        QuotaUser: "error",
        UploadType: "quia",
        UploadProtocol: "quis",
    }

    ctx := context.Background()
    res, err := s.Projects.NetworksecurityProjectsLocationsAuthorizationPoliciesCreate(ctx, req, operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateSecurity{
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