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
            Parent: "at",
        },
        QueryParams: operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "voluptas",
            Alt: "proto",
            AuthorizationPolicyID: "quod",
            Callback: "aperiam",
            Fields: "dolorem",
            Key: "id",
            OauthToken: "rerum",
            PrettyPrint: false,
            QuotaUser: "eum",
            UploadType: "iusto",
            UploadProtocol: "repudiandae",
        },
        Request: &shared.AuthorizationPolicyInput{
            Action: "ACTION_UNSPECIFIED",
            Description: "aut",
            Labels: map[string]string{
                "sunt": "sunt",
                "corrupti": "minus",
            },
            Name: "consectetur",
            Rules: []shared.Rule{
                shared.Rule{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Hosts: []string{
                                "nulla",
                                "harum",
                                "aliquid",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "est",
                                RegexMatch: "ut",
                            },
                            Methods: []string{
                                "aperiam",
                                "voluptates",
                            },
                            Ports: []int64{
                                5608578254048966378,
                            },
                        },
                        shared.Destination{
                            Hosts: []string{
                                "quo",
                                "dolor",
                                "nisi",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "provident",
                                RegexMatch: "inventore",
                            },
                            Methods: []string{
                                "magni",
                                "error",
                            },
                            Ports: []int64{
                                3121704883122059694,
                                8783722961125201754,
                            },
                        },
                    },
                    Sources: []shared.Source{
                        shared.Source{
                            IPBlocks: []string{
                                "tempore",
                                "qui",
                            },
                            Principals: []string{
                                "voluptate",
                            },
                        },
                    },
                },
            },
        },
    }
    
    res, err := s.Projects.NetworksecurityProjectsLocationsAuthorizationPoliciesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->