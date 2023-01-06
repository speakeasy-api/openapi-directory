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
            Parent: "labore",
        },
        QueryParams: operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "sit",
            Alt: "json",
            AuthorizationPolicyID: "veniam",
            Callback: "odit",
            Fields: "ipsa",
            Key: "aspernatur",
            OauthToken: "deserunt",
            PrettyPrint: true,
            QuotaUser: "accusantium",
            UploadType: "atque",
            UploadProtocol: "possimus",
        },
        Request: &shared.AuthorizationPolicyInput{
            Action: "ACTION_UNSPECIFIED",
            Description: "repellendus",
            Labels: map[string]string{
                "omnis": "cupiditate",
            },
            Name: "voluptas",
            Rules: []shared.Rule{
                shared.Rule{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Hosts: []string{
                                "consequatur",
                                "molestiae",
                                "rerum",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "exercitationem",
                                RegexMatch: "nesciunt",
                            },
                            Methods: []string{
                                "odio",
                                "blanditiis",
                                "veritatis",
                            },
                            Ports: []int64{
                                6695643534660566332,
                            },
                        },
                        shared.Destination{
                            Hosts: []string{
                                "magni",
                                "quibusdam",
                                "assumenda",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "qui",
                                RegexMatch: "minus",
                            },
                            Methods: []string{
                                "quod",
                                "corporis",
                            },
                            Ports: []int64{
                                8980937939307082954,
                                2944845089668073648,
                            },
                        },
                    },
                    Sources: []shared.Source{
                        shared.Source{
                            IPBlocks: []string{
                                "et",
                                "neque",
                                "enim",
                            },
                            Principals: []string{
                                "ut",
                                "expedita",
                                "quo",
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