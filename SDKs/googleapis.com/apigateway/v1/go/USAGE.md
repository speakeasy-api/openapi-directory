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
            Parent: "ut",
        },
        QueryParams: operations.ApigatewayProjectsLocationsApisConfigsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "omnis",
            Alt: "json",
            APIConfigID: "quisquam",
            Callback: "maxime",
            Fields: "et",
            Key: "eaque",
            OauthToken: "voluptatibus",
            PrettyPrint: true,
            QuotaUser: "iure",
            UploadType: "doloremque",
            UploadProtocol: "quo",
        },
        Request: &shared.ApigatewayAPIConfigInput{
            DisplayName: "qui",
            GatewayServiceAccount: "molestias",
            GrpcServices: []shared.ApigatewayAPIConfigGrpcServiceDefinition{
                shared.ApigatewayAPIConfigGrpcServiceDefinition{
                    FileDescriptorSet: &shared.ApigatewayAPIConfigFile{
                        Contents: "minus",
                        Path: "recusandae",
                    },
                    Source: []shared.ApigatewayAPIConfigFile{
                        shared.ApigatewayAPIConfigFile{
                            Contents: "tenetur",
                            Path: "eius",
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: "repellat",
                            Path: "sit",
                        },
                    },
                },
            },
            Labels: map[string]string{
                "consequatur": "id",
                "non": "saepe",
            },
            ManagedServiceConfigs: []shared.ApigatewayAPIConfigFile{
                shared.ApigatewayAPIConfigFile{
                    Contents: "neque",
                    Path: "ut",
                },
                shared.ApigatewayAPIConfigFile{
                    Contents: "dolorem",
                    Path: "fugiat",
                },
                shared.ApigatewayAPIConfigFile{
                    Contents: "sit",
                    Path: "id",
                },
            },
            OpenapiDocuments: []shared.ApigatewayAPIConfigOpenAPIDocument{
                shared.ApigatewayAPIConfigOpenAPIDocument{
                    Document: &shared.ApigatewayAPIConfigFile{
                        Contents: "qui",
                        Path: "quod",
                    },
                },
                shared.ApigatewayAPIConfigOpenAPIDocument{
                    Document: &shared.ApigatewayAPIConfigFile{
                        Contents: "dignissimos",
                        Path: "fugit",
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