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
            Parent: "corrupti",
        },
        QueryParams: operations.ApigatewayProjectsLocationsApisConfigsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            APIConfigID: "unde",
            Callback: "nulla",
            Fields: "corrupti",
            Key: "illum",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            UploadType: "deserunt",
            UploadProtocol: "suscipit",
        },
        Request: &shared.ApigatewayAPIConfigInput{
            DisplayName: "iure",
            GatewayServiceAccount: "magnam",
            GrpcServices: []shared.ApigatewayAPIConfigGrpcServiceDefinition{
                shared.ApigatewayAPIConfigGrpcServiceDefinition{
                    FileDescriptorSet: &shared.ApigatewayAPIConfigFile{
                        Contents: "ipsa",
                        Path: "delectus",
                    },
                    Source: []shared.ApigatewayAPIConfigFile{
                        shared.ApigatewayAPIConfigFile{
                            Contents: "suscipit",
                            Path: "molestiae",
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: "minus",
                            Path: "placeat",
                        },
                    },
                },
                shared.ApigatewayAPIConfigGrpcServiceDefinition{
                    FileDescriptorSet: &shared.ApigatewayAPIConfigFile{
                        Contents: "voluptatum",
                        Path: "iusto",
                    },
                    Source: []shared.ApigatewayAPIConfigFile{
                        shared.ApigatewayAPIConfigFile{
                            Contents: "nisi",
                            Path: "recusandae",
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: "temporibus",
                            Path: "ab",
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: "quis",
                            Path: "veritatis",
                        },
                    },
                },
                shared.ApigatewayAPIConfigGrpcServiceDefinition{
                    FileDescriptorSet: &shared.ApigatewayAPIConfigFile{
                        Contents: "deserunt",
                        Path: "perferendis",
                    },
                    Source: []shared.ApigatewayAPIConfigFile{
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
                shared.ApigatewayAPIConfigGrpcServiceDefinition{
                    FileDescriptorSet: &shared.ApigatewayAPIConfigFile{
                        Contents: "at",
                        Path: "at",
                    },
                    Source: []shared.ApigatewayAPIConfigFile{
                        shared.ApigatewayAPIConfigFile{
                            Contents: "molestiae",
                            Path: "quod",
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: "quod",
                            Path: "esse",
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: "totam",
                            Path: "porro",
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: "dolorum",
                            Path: "dicta",
                        },
                    },
                },
            },
            Labels: map[string]string{
                "officia": "occaecati",
                "fugit": "deleniti",
                "hic": "optio",
            },
            ManagedServiceConfigs: []shared.ApigatewayAPIConfigFile{
                shared.ApigatewayAPIConfigFile{
                    Contents: "beatae",
                    Path: "commodi",
                },
                shared.ApigatewayAPIConfigFile{
                    Contents: "molestiae",
                    Path: "modi",
                },
                shared.ApigatewayAPIConfigFile{
                    Contents: "qui",
                    Path: "impedit",
                },
            },
            OpenapiDocuments: []shared.ApigatewayAPIConfigOpenAPIDocument{
                shared.ApigatewayAPIConfigOpenAPIDocument{
                    Document: &shared.ApigatewayAPIConfigFile{
                        Contents: "esse",
                        Path: "ipsum",
                    },
                },
                shared.ApigatewayAPIConfigOpenAPIDocument{
                    Document: &shared.ApigatewayAPIConfigFile{
                        Contents: "excepturi",
                        Path: "aspernatur",
                    },
                },
                shared.ApigatewayAPIConfigOpenAPIDocument{
                    Document: &shared.ApigatewayAPIConfigFile{
                        Contents: "perferendis",
                        Path: "ad",
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