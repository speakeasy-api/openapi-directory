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
            GatewayServiceAccount: "distinctio",
            GrpcServices: []shared.ApigatewayAPIConfigGrpcServiceDefinition{
                shared.ApigatewayAPIConfigGrpcServiceDefinition{
                    FileDescriptorSet: &shared.ApigatewayAPIConfigFile{
                        Contents: "unde",
                        Path: "nulla",
                    },
                    Source: []shared.ApigatewayAPIConfigFile{
                        shared.ApigatewayAPIConfigFile{
                            Contents: "illum",
                            Path: "vel",
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: "error",
                            Path: "deserunt",
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: "suscipit",
                            Path: "iure",
                        },
                    },
                },
                shared.ApigatewayAPIConfigGrpcServiceDefinition{
                    FileDescriptorSet: &shared.ApigatewayAPIConfigFile{
                        Contents: "magnam",
                        Path: "debitis",
                    },
                    Source: []shared.ApigatewayAPIConfigFile{
                        shared.ApigatewayAPIConfigFile{
                            Contents: "delectus",
                            Path: "tempora",
                        },
                    },
                },
                shared.ApigatewayAPIConfigGrpcServiceDefinition{
                    FileDescriptorSet: &shared.ApigatewayAPIConfigFile{
                        Contents: "suscipit",
                        Path: "molestiae",
                    },
                    Source: []shared.ApigatewayAPIConfigFile{
                        shared.ApigatewayAPIConfigFile{
                            Contents: "placeat",
                            Path: "voluptatum",
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: "iusto",
                            Path: "excepturi",
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: "nisi",
                            Path: "recusandae",
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: "temporibus",
                            Path: "ab",
                        },
                    },
                },
                shared.ApigatewayAPIConfigGrpcServiceDefinition{
                    FileDescriptorSet: &shared.ApigatewayAPIConfigFile{
                        Contents: "quis",
                        Path: "veritatis",
                    },
                    Source: []shared.ApigatewayAPIConfigFile{
                        shared.ApigatewayAPIConfigFile{
                            Contents: "perferendis",
                            Path: "ipsam",
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: "repellendus",
                            Path: "sapiente",
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: "quo",
                            Path: "odit",
                        },
                    },
                },
            },
            Labels: map[string]string{
                "at": "maiores",
                "molestiae": "quod",
                "quod": "esse",
                "totam": "porro",
            },
            ManagedServiceConfigs: []shared.ApigatewayAPIConfigFile{
                shared.ApigatewayAPIConfigFile{
                    Contents: "dicta",
                    Path: "nam",
                },
                shared.ApigatewayAPIConfigFile{
                    Contents: "officia",
                    Path: "occaecati",
                },
                shared.ApigatewayAPIConfigFile{
                    Contents: "fugit",
                    Path: "deleniti",
                },
            },
            OpenapiDocuments: []shared.ApigatewayAPIConfigOpenAPIDocument{
                shared.ApigatewayAPIConfigOpenAPIDocument{
                    Document: &shared.ApigatewayAPIConfigFile{
                        Contents: "optio",
                        Path: "totam",
                    },
                },
                shared.ApigatewayAPIConfigOpenAPIDocument{
                    Document: &shared.ApigatewayAPIConfigFile{
                        Contents: "beatae",
                        Path: "commodi",
                    },
                },
                shared.ApigatewayAPIConfigOpenAPIDocument{
                    Document: &shared.ApigatewayAPIConfigFile{
                        Contents: "molestiae",
                        Path: "modi",
                    },
                },
                shared.ApigatewayAPIConfigOpenAPIDocument{
                    Document: &shared.ApigatewayAPIConfigFile{
                        Contents: "qui",
                        Path: "impedit",
                    },
                },
            },
        },
        AccessToken: "cum",
        Alt: "media",
        APIConfigID: "ipsum",
        Callback: "excepturi",
        Fields: "aspernatur",
        Key: "perferendis",
        OauthToken: "ad",
        Parent: "natus",
        PrettyPrint: false,
        QuotaUser: "sed",
        UploadType: "iste",
        UploadProtocol: "dolor",
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