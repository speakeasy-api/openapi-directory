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
            Parent: "saepe",
        },
        QueryParams: operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "et",
            Alt: "media",
            AuthorizationPolicyID: "quas",
            Callback: "doloribus",
            Fields: "qui",
            Key: "aliquam",
            OauthToken: "sequi",
            PrettyPrint: true,
            QuotaUser: "officia",
            UploadType: "sint",
            UploadProtocol: "et",
        },
        Request: &shared.AuthorizationPolicyInput{
            Action: "ACTION_UNSPECIFIED",
            Description: "commodi",
            Labels: map[string]string{
                "temporibus": "aut",
                "beatae": "aut",
            },
            Name: "tempora",
            Rules: []shared.Rule{
                shared.Rule{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Hosts: []string{
                                "architecto",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "omnis",
                                RegexMatch: "est",
                            },
                            Methods: []string{
                                "beatae",
                                "laboriosam",
                            },
                            Ports: []int64{
                                7415710680596502931,
                            },
                        },
                    },
                    Sources: []shared.Source{
                        shared.Source{
                            IPBlocks: []string{
                                "ipsum",
                                "asperiores",
                                "deleniti",
                            },
                            Principals: []string{
                                "cupiditate",
                            },
                        },
                    },
                },
                shared.Rule{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Hosts: []string{
                                "dolore",
                                "eos",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "autem",
                                RegexMatch: "ut",
                            },
                            Methods: []string{
                                "odio",
                                "quia",
                                "voluptas",
                            },
                            Ports: []int64{
                                6128040509177040184,
                                4551968008281478867,
                            },
                        },
                        shared.Destination{
                            Hosts: []string{
                                "nulla",
                                "quia",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "enim",
                                RegexMatch: "cum",
                            },
                            Methods: []string{
                                "veniam",
                                "ipsum",
                                "harum",
                            },
                            Ports: []int64{
                                4371946014492395686,
                                1464290273605482076,
                            },
                        },
                        shared.Destination{
                            Hosts: []string{
                                "dolorem",
                                "sunt",
                                "molestiae",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "nam",
                                RegexMatch: "eius",
                            },
                            Methods: []string{
                                "ex",
                            },
                            Ports: []int64{
                                7744083498162407862,
                                3478255059356988526,
                                8028515407834417809,
                            },
                        },
                    },
                    Sources: []shared.Source{
                        shared.Source{
                            IPBlocks: []string{
                                "maxime",
                                "quod",
                            },
                            Principals: []string{
                                "occaecati",
                                "nisi",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "iste",
                                "ducimus",
                                "ipsam",
                            },
                            Principals: []string{
                                "voluptas",
                                "animi",
                                "quos",
                            },
                        },
                    },
                },
                shared.Rule{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Hosts: []string{
                                "labore",
                                "voluptatem",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "id",
                                RegexMatch: "labore",
                            },
                            Methods: []string{
                                "iste",
                                "quia",
                                "fugiat",
                            },
                            Ports: []int64{
                                559646147369155099,
                                3006668431082548483,
                            },
                        },
                        shared.Destination{
                            Hosts: []string{
                                "esse",
                                "ex",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "magnam",
                                RegexMatch: "aliquam",
                            },
                            Methods: []string{
                                "vitae",
                                "suscipit",
                            },
                            Ports: []int64{
                                2484632256685155095,
                                7341035035727093925,
                            },
                        },
                        shared.Destination{
                            Hosts: []string{
                                "doloremque",
                                "accusamus",
                                "quo",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "veritatis",
                                RegexMatch: "mollitia",
                            },
                            Methods: []string{
                                "harum",
                                "dolor",
                            },
                            Ports: []int64{
                                1265033285511156307,
                                6666991780916946900,
                            },
                        },
                    },
                    Sources: []shared.Source{
                        shared.Source{
                            IPBlocks: []string{
                                "quod",
                                "delectus",
                                "eius",
                            },
                            Principals: []string{
                                "maiores",
                                "fuga",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "in",
                                "quae",
                                "ipsum",
                            },
                            Principals: []string{
                                "et",
                                "ipsum",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "autem",
                                "laboriosam",
                            },
                            Principals: []string{
                                "incidunt",
                                "distinctio",
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