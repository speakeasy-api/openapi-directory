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
    
    req := operations.ApigatewayProjectsLocationsApisConfigsCreateRequest{
        Security: operations.ApigatewayProjectsLocationsApisConfigsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.ApigatewayProjectsLocationsApisConfigsCreatePathParams{
            Parent: "sint",
        },
        QueryParams: operations.ApigatewayProjectsLocationsApisConfigsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "a",
            Alt: "media",
            APIConfigID: "eveniet",
            Callback: "perferendis",
            Fields: "numquam",
            Key: "assumenda",
            OauthToken: "vitae",
            PrettyPrint: true,
            QuotaUser: "a",
            UploadType: "mollitia",
            UploadProtocol: "ut",
        },
        Request: &shared.ApigatewayAPIConfigInput{
            DisplayName: "consequatur",
            GatewayServiceAccount: "repellat",
            GrpcServices: []shared.ApigatewayAPIConfigGrpcServiceDefinition{
                shared.ApigatewayAPIConfigGrpcServiceDefinition{
                    FileDescriptorSet: &shared.ApigatewayAPIConfigFile{
                        Contents: "repellendus",
                        Path: "alias",
                    },
                    Source: []shared.ApigatewayAPIConfigFile{
                        shared.ApigatewayAPIConfigFile{
                            Contents: "blanditiis",
                            Path: "pariatur",
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: "ipsam",
                            Path: "veritatis",
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: "voluptatem",
                            Path: "ullam",
                        },
                    },
                },
                shared.ApigatewayAPIConfigGrpcServiceDefinition{
                    FileDescriptorSet: &shared.ApigatewayAPIConfigFile{
                        Contents: "quasi",
                        Path: "deleniti",
                    },
                    Source: []shared.ApigatewayAPIConfigFile{
                        shared.ApigatewayAPIConfigFile{
                            Contents: "sit",
                            Path: "assumenda",
                        },
                    },
                },
                shared.ApigatewayAPIConfigGrpcServiceDefinition{
                    FileDescriptorSet: &shared.ApigatewayAPIConfigFile{
                        Contents: "quo",
                        Path: "ipsum",
                    },
                    Source: []shared.ApigatewayAPIConfigFile{
                        shared.ApigatewayAPIConfigFile{
                            Contents: "laudantium",
                            Path: "aperiam",
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: "eos",
                            Path: "qui",
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: "perspiciatis",
                            Path: "quod",
                        },
                    },
                },
            },
            Labels: map[string]string{
                "aliquam": "aut",
                "laborum": "voluptatem",
                "enim": "non",
            },
            ManagedServiceConfigs: []shared.ApigatewayAPIConfigFile{
                shared.ApigatewayAPIConfigFile{
                    Contents: "saepe",
                    Path: "dolores",
                },
                shared.ApigatewayAPIConfigFile{
                    Contents: "dolorum",
                    Path: "ab",
                },
                shared.ApigatewayAPIConfigFile{
                    Contents: "earum",
                    Path: "nihil",
                },
            },
            OpenapiDocuments: []shared.ApigatewayAPIConfigOpenAPIDocument{
                shared.ApigatewayAPIConfigOpenAPIDocument{
                    Document: &shared.ApigatewayAPIConfigFile{
                        Contents: "consectetur",
                        Path: "ut",
                    },
                },
                shared.ApigatewayAPIConfigOpenAPIDocument{
                    Document: &shared.ApigatewayAPIConfigFile{
                        Contents: "qui",
                        Path: "deleniti",
                    },
                },
            },
        },
    }
    
    res, err := s.Projects.ApigatewayProjectsLocationsApisConfigsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ApigatewayOperation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->