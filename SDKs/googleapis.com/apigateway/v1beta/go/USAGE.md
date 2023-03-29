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
            Parent: "unde",
        },
        QueryParams: operations.ApigatewayProjectsLocationsApisConfigsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            APIConfigID: "id",
            Callback: "vero",
            Fields: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            UploadType: "facilis",
            UploadProtocol: "eum",
        },
        Request: &shared.ApigatewayAPIConfigInput{
            DisplayName: "iusto",
            GatewayConfig: &shared.ApigatewayGatewayConfig{
                BackendConfig: &shared.ApigatewayBackendConfig{
                    GoogleServiceAccount: "ullam",
                },
            },
            GatewayServiceAccount: "saepe",
            GrpcServices: []shared.ApigatewayAPIConfigGrpcServiceDefinition{
                shared.ApigatewayAPIConfigGrpcServiceDefinition{
                    FileDescriptorSet: &shared.ApigatewayAPIConfigFile{
                        Contents: "sapiente",
                        Path: "enim",
                    },
                    Source: []shared.ApigatewayAPIConfigFile{
                        shared.ApigatewayAPIConfigFile{
                            Contents: "voluptatum",
                            Path: "autem",
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: "vel",
                            Path: "non",
                        },
                    },
                },
            },
            Labels: map[string]string{
                "similique": "reprehenderit",
                "molestiae": "quo",
            },
            ManagedServiceConfigs: []shared.ApigatewayAPIConfigFile{
                shared.ApigatewayAPIConfigFile{
                    Contents: "laboriosam",
                    Path: "dicta",
                },
            },
            OpenapiDocuments: []shared.ApigatewayAPIConfigOpenAPIDocument{
                shared.ApigatewayAPIConfigOpenAPIDocument{
                    Document: &shared.ApigatewayAPIConfigFile{
                        Contents: "voluptatem",
                        Path: "consequatur",
                    },
                },
                shared.ApigatewayAPIConfigOpenAPIDocument{
                    Document: &shared.ApigatewayAPIConfigFile{
                        Contents: "fugiat",
                        Path: "a",
                    },
                },
                shared.ApigatewayAPIConfigOpenAPIDocument{
                    Document: &shared.ApigatewayAPIConfigFile{
                        Contents: "omnis",
                        Path: "eos",
                    },
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.ApigatewayProjectsLocationsApisConfigsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ApigatewayOperation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->