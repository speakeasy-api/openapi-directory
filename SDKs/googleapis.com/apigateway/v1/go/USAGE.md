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
            GatewayServiceAccount: sdk.String("distinctio"),
            GrpcServices: []shared.ApigatewayAPIConfigGrpcServiceDefinition{
                shared.ApigatewayAPIConfigGrpcServiceDefinition{
                    FileDescriptorSet: &shared.ApigatewayAPIConfigFile{
                        Contents: sdk.String("unde"),
                        Path: sdk.String("nulla"),
                    },
                    Source: []shared.ApigatewayAPIConfigFile{
                        shared.ApigatewayAPIConfigFile{
                            Contents: sdk.String("illum"),
                            Path: sdk.String("vel"),
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: sdk.String("error"),
                            Path: sdk.String("deserunt"),
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: sdk.String("suscipit"),
                            Path: sdk.String("iure"),
                        },
                    },
                },
                shared.ApigatewayAPIConfigGrpcServiceDefinition{
                    FileDescriptorSet: &shared.ApigatewayAPIConfigFile{
                        Contents: sdk.String("magnam"),
                        Path: sdk.String("debitis"),
                    },
                    Source: []shared.ApigatewayAPIConfigFile{
                        shared.ApigatewayAPIConfigFile{
                            Contents: sdk.String("delectus"),
                            Path: sdk.String("tempora"),
                        },
                    },
                },
                shared.ApigatewayAPIConfigGrpcServiceDefinition{
                    FileDescriptorSet: &shared.ApigatewayAPIConfigFile{
                        Contents: sdk.String("suscipit"),
                        Path: sdk.String("molestiae"),
                    },
                    Source: []shared.ApigatewayAPIConfigFile{
                        shared.ApigatewayAPIConfigFile{
                            Contents: sdk.String("placeat"),
                            Path: sdk.String("voluptatum"),
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: sdk.String("iusto"),
                            Path: sdk.String("excepturi"),
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: sdk.String("nisi"),
                            Path: sdk.String("recusandae"),
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: sdk.String("temporibus"),
                            Path: sdk.String("ab"),
                        },
                    },
                },
                shared.ApigatewayAPIConfigGrpcServiceDefinition{
                    FileDescriptorSet: &shared.ApigatewayAPIConfigFile{
                        Contents: sdk.String("quis"),
                        Path: sdk.String("veritatis"),
                    },
                    Source: []shared.ApigatewayAPIConfigFile{
                        shared.ApigatewayAPIConfigFile{
                            Contents: sdk.String("perferendis"),
                            Path: sdk.String("ipsam"),
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: sdk.String("repellendus"),
                            Path: sdk.String("sapiente"),
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: sdk.String("quo"),
                            Path: sdk.String("odit"),
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
                    Contents: sdk.String("dicta"),
                    Path: sdk.String("nam"),
                },
                shared.ApigatewayAPIConfigFile{
                    Contents: sdk.String("officia"),
                    Path: sdk.String("occaecati"),
                },
                shared.ApigatewayAPIConfigFile{
                    Contents: sdk.String("fugit"),
                    Path: sdk.String("deleniti"),
                },
            },
            OpenapiDocuments: []shared.ApigatewayAPIConfigOpenAPIDocument{
                shared.ApigatewayAPIConfigOpenAPIDocument{
                    Document: &shared.ApigatewayAPIConfigFile{
                        Contents: sdk.String("optio"),
                        Path: sdk.String("totam"),
                    },
                },
                shared.ApigatewayAPIConfigOpenAPIDocument{
                    Document: &shared.ApigatewayAPIConfigFile{
                        Contents: sdk.String("beatae"),
                        Path: sdk.String("commodi"),
                    },
                },
                shared.ApigatewayAPIConfigOpenAPIDocument{
                    Document: &shared.ApigatewayAPIConfigFile{
                        Contents: sdk.String("molestiae"),
                        Path: sdk.String("modi"),
                    },
                },
                shared.ApigatewayAPIConfigOpenAPIDocument{
                    Document: &shared.ApigatewayAPIConfigFile{
                        Contents: sdk.String("qui"),
                        Path: sdk.String("impedit"),
                    },
                },
            },
        },
        AccessToken: sdk.String("cum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        APIConfigID: sdk.String("ipsum"),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("aspernatur"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("ad"),
        Parent: "natus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sed"),
        UploadType: sdk.String("iste"),
        UploadProtocol: sdk.String("dolor"),
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