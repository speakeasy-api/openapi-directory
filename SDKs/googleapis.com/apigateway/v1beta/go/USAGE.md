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
        DollarXgafv: "2",
        ApigatewayAPIConfigInput: &shared.ApigatewayAPIConfigInput{
            DisplayName: "provident",
            GatewayConfig: &shared.ApigatewayGatewayConfig{
                BackendConfig: &shared.ApigatewayBackendConfig{
                    GoogleServiceAccount: "distinctio",
                },
            },
            GatewayServiceAccount: "quibusdam",
            GrpcServices: []shared.ApigatewayAPIConfigGrpcServiceDefinition{
                shared.ApigatewayAPIConfigGrpcServiceDefinition{
                    FileDescriptorSet: &shared.ApigatewayAPIConfigFile{
                        Contents: "nulla",
                        Path: "corrupti",
                    },
                    Source: []shared.ApigatewayAPIConfigFile{
                        shared.ApigatewayAPIConfigFile{
                            Contents: "vel",
                            Path: "error",
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: "deserunt",
                            Path: "suscipit",
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: "iure",
                            Path: "magnam",
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: "debitis",
                            Path: "ipsa",
                        },
                    },
                },
                shared.ApigatewayAPIConfigGrpcServiceDefinition{
                    FileDescriptorSet: &shared.ApigatewayAPIConfigFile{
                        Contents: "delectus",
                        Path: "tempora",
                    },
                    Source: []shared.ApigatewayAPIConfigFile{
                        shared.ApigatewayAPIConfigFile{
                            Contents: "molestiae",
                            Path: "minus",
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: "placeat",
                            Path: "voluptatum",
                        },
                    },
                },
                shared.ApigatewayAPIConfigGrpcServiceDefinition{
                    FileDescriptorSet: &shared.ApigatewayAPIConfigFile{
                        Contents: "iusto",
                        Path: "excepturi",
                    },
                    Source: []shared.ApigatewayAPIConfigFile{
                        shared.ApigatewayAPIConfigFile{
                            Contents: "recusandae",
                            Path: "temporibus",
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: "ab",
                            Path: "quis",
                        },
                    },
                },
            },
            Labels: map[string]string{
                "deserunt": "perferendis",
            },
            ManagedServiceConfigs: []shared.ApigatewayAPIConfigFile{
                shared.ApigatewayAPIConfigFile{
                    Contents: "repellendus",
                    Path: "sapiente",
                },
                shared.ApigatewayAPIConfigFile{
                    Contents: "quo",
                    Path: "odit",
                },
            },
            OpenapiDocuments: []shared.ApigatewayAPIConfigOpenAPIDocument{
                shared.ApigatewayAPIConfigOpenAPIDocument{
                    Document: &shared.ApigatewayAPIConfigFile{
                        Contents: "at",
                        Path: "maiores",
                    },
                },
                shared.ApigatewayAPIConfigOpenAPIDocument{
                    Document: &shared.ApigatewayAPIConfigFile{
                        Contents: "molestiae",
                        Path: "quod",
                    },
                },
                shared.ApigatewayAPIConfigOpenAPIDocument{
                    Document: &shared.ApigatewayAPIConfigFile{
                        Contents: "quod",
                        Path: "esse",
                    },
                },
                shared.ApigatewayAPIConfigOpenAPIDocument{
                    Document: &shared.ApigatewayAPIConfigFile{
                        Contents: "totam",
                        Path: "porro",
                    },
                },
            },
        },
        AccessToken: "dolorum",
        Alt: "json",
        APIConfigID: "nam",
        Callback: "officia",
        Fields: "occaecati",
        Key: "fugit",
        OauthToken: "deleniti",
        Parent: "hic",
        PrettyPrint: false,
        QuotaUser: "optio",
        UploadType: "totam",
        UploadProtocol: "beatae",
    }

    ctx := context.Background()
    res, err := s.Projects.ApigatewayProjectsLocationsApisConfigsCreate(ctx, req, operations.ApigatewayProjectsLocationsApisConfigsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApigatewayOperation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->