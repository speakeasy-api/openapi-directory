<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.ApigatewayProjectsLocationsApisConfigsCreate(ctx, operations.ApigatewayProjectsLocationsApisConfigsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ApigatewayAPIConfigInput: &shared.ApigatewayAPIConfigInput{
            DisplayName: sdk.String("provident"),
            GatewayConfig: &shared.ApigatewayGatewayConfig{
                BackendConfig: &shared.ApigatewayBackendConfig{
                    GoogleServiceAccount: sdk.String("distinctio"),
                },
            },
            GatewayServiceAccount: sdk.String("quibusdam"),
            GrpcServices: []shared.ApigatewayAPIConfigGrpcServiceDefinition{
                shared.ApigatewayAPIConfigGrpcServiceDefinition{
                    FileDescriptorSet: &shared.ApigatewayAPIConfigFile{
                        Contents: sdk.String("nulla"),
                        Path: sdk.String("corrupti"),
                    },
                    Source: []shared.ApigatewayAPIConfigFile{
                        shared.ApigatewayAPIConfigFile{
                            Contents: sdk.String("vel"),
                            Path: sdk.String("error"),
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: sdk.String("deserunt"),
                            Path: sdk.String("suscipit"),
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: sdk.String("iure"),
                            Path: sdk.String("magnam"),
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: sdk.String("debitis"),
                            Path: sdk.String("ipsa"),
                        },
                    },
                },
                shared.ApigatewayAPIConfigGrpcServiceDefinition{
                    FileDescriptorSet: &shared.ApigatewayAPIConfigFile{
                        Contents: sdk.String("delectus"),
                        Path: sdk.String("tempora"),
                    },
                    Source: []shared.ApigatewayAPIConfigFile{
                        shared.ApigatewayAPIConfigFile{
                            Contents: sdk.String("molestiae"),
                            Path: sdk.String("minus"),
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: sdk.String("placeat"),
                            Path: sdk.String("voluptatum"),
                        },
                    },
                },
                shared.ApigatewayAPIConfigGrpcServiceDefinition{
                    FileDescriptorSet: &shared.ApigatewayAPIConfigFile{
                        Contents: sdk.String("iusto"),
                        Path: sdk.String("excepturi"),
                    },
                    Source: []shared.ApigatewayAPIConfigFile{
                        shared.ApigatewayAPIConfigFile{
                            Contents: sdk.String("recusandae"),
                            Path: sdk.String("temporibus"),
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: sdk.String("ab"),
                            Path: sdk.String("quis"),
                        },
                    },
                },
            },
            Labels: map[string]string{
                "deserunt": "perferendis",
            },
            ManagedServiceConfigs: []shared.ApigatewayAPIConfigFile{
                shared.ApigatewayAPIConfigFile{
                    Contents: sdk.String("repellendus"),
                    Path: sdk.String("sapiente"),
                },
                shared.ApigatewayAPIConfigFile{
                    Contents: sdk.String("quo"),
                    Path: sdk.String("odit"),
                },
            },
            OpenapiDocuments: []shared.ApigatewayAPIConfigOpenAPIDocument{
                shared.ApigatewayAPIConfigOpenAPIDocument{
                    Document: &shared.ApigatewayAPIConfigFile{
                        Contents: sdk.String("at"),
                        Path: sdk.String("maiores"),
                    },
                },
                shared.ApigatewayAPIConfigOpenAPIDocument{
                    Document: &shared.ApigatewayAPIConfigFile{
                        Contents: sdk.String("molestiae"),
                        Path: sdk.String("quod"),
                    },
                },
                shared.ApigatewayAPIConfigOpenAPIDocument{
                    Document: &shared.ApigatewayAPIConfigFile{
                        Contents: sdk.String("quod"),
                        Path: sdk.String("esse"),
                    },
                },
                shared.ApigatewayAPIConfigOpenAPIDocument{
                    Document: &shared.ApigatewayAPIConfigFile{
                        Contents: sdk.String("totam"),
                        Path: sdk.String("porro"),
                    },
                },
            },
        },
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        APIConfigID: sdk.String("nam"),
        Callback: sdk.String("officia"),
        Fields: sdk.String("occaecati"),
        Key: sdk.String("fugit"),
        OauthToken: sdk.String("deleniti"),
        Parent: "hic",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("optio"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("beatae"),
    }, operations.ApigatewayProjectsLocationsApisConfigsCreateSecurity{
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