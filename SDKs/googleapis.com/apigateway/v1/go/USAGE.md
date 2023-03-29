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
            GatewayServiceAccount: "ullam",
            GrpcServices: []shared.ApigatewayAPIConfigGrpcServiceDefinition{
                shared.ApigatewayAPIConfigGrpcServiceDefinition{
                    FileDescriptorSet: &shared.ApigatewayAPIConfigFile{
                        Contents: "inventore",
                        Path: "sapiente",
                    },
                    Source: []shared.ApigatewayAPIConfigFile{
                        shared.ApigatewayAPIConfigFile{
                            Contents: "eum",
                            Path: "voluptatum",
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: "autem",
                            Path: "vel",
                        },
                    },
                },
                shared.ApigatewayAPIConfigGrpcServiceDefinition{
                    FileDescriptorSet: &shared.ApigatewayAPIConfigFile{
                        Contents: "non",
                        Path: "deleniti",
                    },
                    Source: []shared.ApigatewayAPIConfigFile{
                        shared.ApigatewayAPIConfigFile{
                            Contents: "reprehenderit",
                            Path: "molestiae",
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: "quo",
                            Path: "quasi",
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: "laboriosam",
                            Path: "dicta",
                        },
                    },
                },
                shared.ApigatewayAPIConfigGrpcServiceDefinition{
                    FileDescriptorSet: &shared.ApigatewayAPIConfigFile{
                        Contents: "est",
                        Path: "voluptatem",
                    },
                    Source: []shared.ApigatewayAPIConfigFile{
                        shared.ApigatewayAPIConfigFile{
                            Contents: "fugiat",
                            Path: "a",
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: "omnis",
                            Path: "eos",
                        },
                    },
                },
                shared.ApigatewayAPIConfigGrpcServiceDefinition{
                    FileDescriptorSet: &shared.ApigatewayAPIConfigFile{
                        Contents: "accusamus",
                        Path: "accusamus",
                    },
                    Source: []shared.ApigatewayAPIConfigFile{
                        shared.ApigatewayAPIConfigFile{
                            Contents: "rem",
                            Path: "quibusdam",
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: "et",
                            Path: "praesentium",
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: "occaecati",
                            Path: "dolor",
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: "soluta",
                            Path: "sed",
                        },
                    },
                },
            },
            Labels: map[string]string{
                "rerum": "culpa",
                "qui": "sed",
                "rerum": "possimus",
            },
            ManagedServiceConfigs: []shared.ApigatewayAPIConfigFile{
                shared.ApigatewayAPIConfigFile{
                    Contents: "odit",
                    Path: "esse",
                },
                shared.ApigatewayAPIConfigFile{
                    Contents: "rem",
                    Path: "voluptatem",
                },
                shared.ApigatewayAPIConfigFile{
                    Contents: "amet",
                    Path: "est",
                },
            },
            OpenapiDocuments: []shared.ApigatewayAPIConfigOpenAPIDocument{
                shared.ApigatewayAPIConfigOpenAPIDocument{
                    Document: &shared.ApigatewayAPIConfigFile{
                        Contents: "blanditiis",
                        Path: "numquam",
                    },
                },
                shared.ApigatewayAPIConfigOpenAPIDocument{
                    Document: &shared.ApigatewayAPIConfigFile{
                        Contents: "similique",
                        Path: "dolores",
                    },
                },
                shared.ApigatewayAPIConfigOpenAPIDocument{
                    Document: &shared.ApigatewayAPIConfigFile{
                        Contents: "sit",
                        Path: "quia",
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