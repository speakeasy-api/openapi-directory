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
            Parent: "tempora",
        },
        QueryParams: operations.ApigatewayProjectsLocationsApisConfigsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "in",
            Alt: "proto",
            APIConfigID: "asperiores",
            Callback: "explicabo",
            Fields: "molestiae",
            Key: "commodi",
            OauthToken: "blanditiis",
            PrettyPrint: true,
            QuotaUser: "eaque",
            UploadType: "sequi",
            UploadProtocol: "quos",
        },
        Request: &shared.ApigatewayAPIConfigInput{
            DisplayName: "unde",
            GatewayConfig: &shared.ApigatewayGatewayConfig{
                BackendConfig: &shared.ApigatewayBackendConfig{
                    GoogleServiceAccount: "enim",
                },
            },
            GatewayServiceAccount: "iusto",
            GrpcServices: []shared.ApigatewayAPIConfigGrpcServiceDefinition{
                shared.ApigatewayAPIConfigGrpcServiceDefinition{
                    FileDescriptorSet: &shared.ApigatewayAPIConfigFile{
                        Contents: "non",
                        Path: "dignissimos",
                    },
                    Source: []shared.ApigatewayAPIConfigFile{
                        shared.ApigatewayAPIConfigFile{
                            Contents: "omnis",
                            Path: "rerum",
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: "saepe",
                            Path: "quasi",
                        },
                    },
                },
                shared.ApigatewayAPIConfigGrpcServiceDefinition{
                    FileDescriptorSet: &shared.ApigatewayAPIConfigFile{
                        Contents: "rerum",
                        Path: "ratione",
                    },
                    Source: []shared.ApigatewayAPIConfigFile{
                        shared.ApigatewayAPIConfigFile{
                            Contents: "quod",
                            Path: "sint",
                        },
                    },
                },
                shared.ApigatewayAPIConfigGrpcServiceDefinition{
                    FileDescriptorSet: &shared.ApigatewayAPIConfigFile{
                        Contents: "deserunt",
                        Path: "et",
                    },
                    Source: []shared.ApigatewayAPIConfigFile{
                        shared.ApigatewayAPIConfigFile{
                            Contents: "ad",
                            Path: "aperiam",
                        },
                    },
                },
            },
            Labels: map[string]string{
                "pariatur": "minima",
                "rerum": "aut",
            },
            ManagedServiceConfigs: []shared.ApigatewayAPIConfigFile{
                shared.ApigatewayAPIConfigFile{
                    Contents: "facere",
                    Path: "non",
                },
                shared.ApigatewayAPIConfigFile{
                    Contents: "consectetur",
                    Path: "eum",
                },
            },
            OpenapiDocuments: []shared.ApigatewayAPIConfigOpenAPIDocument{
                shared.ApigatewayAPIConfigOpenAPIDocument{
                    Document: &shared.ApigatewayAPIConfigFile{
                        Contents: "inventore",
                        Path: "est",
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