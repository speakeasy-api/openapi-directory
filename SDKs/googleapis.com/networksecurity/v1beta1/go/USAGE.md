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
            Parent: "sit",
        },
        QueryParams: operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            AuthorizationPolicyID: "consequuntur",
            Callback: "dolor",
            Fields: "expedita",
            Key: "voluptas",
            OauthToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "rerum",
            UploadProtocol: "dicta",
        },
        Request: &shared.AuthorizationPolicyInput{
            Action: "ACTION_UNSPECIFIED",
            Description: "voluptatum",
            Labels: map[string]string{
                "ut": "dolorem",
            },
            Name: "et",
            Rules: []shared.Rule{
                shared.Rule{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Hosts: []string{
                                "totam",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "dolores",
                                RegexMatch: "illum",
                            },
                            Methods: []string{
                                "vel",
                            },
                            Ports: []int64{
                                6303220950515014660,
                            },
                        },
                        shared.Destination{
                            Hosts: []string{
                                "aspernatur",
                                "accusantium",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "totam",
                                RegexMatch: "commodi",
                            },
                            Methods: []string{
                                "est",
                                "aut",
                                "odit",
                            },
                            Ports: []int64{
                                167566062957544642,
                                4778690082005258714,
                                1059542851699319360,
                            },
                        },
                        shared.Destination{
                            Hosts: []string{
                                "sed",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "officiis",
                                RegexMatch: "autem",
                            },
                            Methods: []string{
                                "nobis",
                            },
                            Ports: []int64{
                                7699391924090763411,
                            },
                        },
                    },
                    Sources: []shared.Source{
                        shared.Source{
                            IPBlocks: []string{
                                "ipsum",
                                "eveniet",
                            },
                            Principals: []string{
                                "sint",
                                "inventore",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "exercitationem",
                                "aut",
                                "reprehenderit",
                            },
                            Principals: []string{
                                "maiores",
                                "incidunt",
                                "dolor",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "veritatis",
                                "in",
                                "et",
                            },
                            Principals: []string{
                                "ipsum",
                                "ex",
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