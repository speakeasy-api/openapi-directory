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
            Parent: "et",
        },
        QueryParams: operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "minima",
            Alt: "media",
            AuthorizationPolicyID: "dolor",
            Callback: "explicabo",
            Fields: "voluptates",
            Key: "dolor",
            OauthToken: "iure",
            PrettyPrint: false,
            QuotaUser: "at",
            UploadType: "nostrum",
            UploadProtocol: "quo",
        },
        Request: &shared.AuthorizationPolicyInput{
            Action: "ALLOW",
            Description: "qui",
            Labels: map[string]string{
                "odio": "beatae",
                "nobis": "totam",
                "sunt": "adipisci",
            },
            Name: "ullam",
            Rules: []shared.Rule{
                shared.Rule{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Hosts: []string{
                                "eum",
                                "sed",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "eveniet",
                                RegexMatch: "est",
                            },
                            Methods: []string{
                                "et",
                                "ipsa",
                                "assumenda",
                            },
                            Ports: []int64{
                                4943689285477287669,
                                3160307118056465289,
                            },
                        },
                        shared.Destination{
                            Hosts: []string{
                                "id",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "cupiditate",
                                RegexMatch: "dolorem",
                            },
                            Methods: []string{
                                "esse",
                                "ratione",
                                "soluta",
                            },
                            Ports: []int64{
                                3231685339067003690,
                                5512569230175251860,
                                8584494059737821751,
                            },
                        },
                    },
                    Sources: []shared.Source{
                        shared.Source{
                            IPBlocks: []string{
                                "omnis",
                            },
                            Principals: []string{
                                "accusamus",
                                "atque",
                                "et",
                            },
                        },
                    },
                },
                shared.Rule{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Hosts: []string{
                                "ratione",
                                "occaecati",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "et",
                                RegexMatch: "neque",
                            },
                            Methods: []string{
                                "ea",
                            },
                            Ports: []int64{
                                4607326647308611294,
                                6100199300792176061,
                                3576388956540400177,
                            },
                        },
                    },
                    Sources: []shared.Source{
                        shared.Source{
                            IPBlocks: []string{
                                "asperiores",
                                "non",
                            },
                            Principals: []string{
                                "ab",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "aut",
                                "unde",
                            },
                            Principals: []string{
                                "repellat",
                                "sed",
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