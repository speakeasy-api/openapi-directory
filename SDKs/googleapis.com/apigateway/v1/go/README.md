# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/apigateway/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [ApigatewayProjectsLocationsApisConfigsCreate](docs/projects/README.md#apigatewayprojectslocationsapisconfigscreate) - Creates a new ApiConfig in a given project and location.
* [ApigatewayProjectsLocationsApisConfigsList](docs/projects/README.md#apigatewayprojectslocationsapisconfigslist) - Lists ApiConfigs in a given project and location.
* [ApigatewayProjectsLocationsApisCreate](docs/projects/README.md#apigatewayprojectslocationsapiscreate) - Creates a new Api in a given project and location.
* [ApigatewayProjectsLocationsApisList](docs/projects/README.md#apigatewayprojectslocationsapislist) - Lists Apis in a given project and location.
* [ApigatewayProjectsLocationsGatewaysCreate](docs/projects/README.md#apigatewayprojectslocationsgatewayscreate) - Creates a new Gateway in a given project and location.
* [ApigatewayProjectsLocationsGatewaysGetIamPolicy](docs/projects/README.md#apigatewayprojectslocationsgatewaysgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [ApigatewayProjectsLocationsGatewaysList](docs/projects/README.md#apigatewayprojectslocationsgatewayslist) - Lists Gateways in a given project and location.
* [ApigatewayProjectsLocationsGatewaysPatch](docs/projects/README.md#apigatewayprojectslocationsgatewayspatch) - Updates the parameters of a single Gateway.
* [ApigatewayProjectsLocationsGatewaysSetIamPolicy](docs/projects/README.md#apigatewayprojectslocationsgatewayssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [ApigatewayProjectsLocationsGatewaysTestIamPermissions](docs/projects/README.md#apigatewayprojectslocationsgatewaystestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [ApigatewayProjectsLocationsList](docs/projects/README.md#apigatewayprojectslocationslist) - Lists information about the supported locations for this service.
* [ApigatewayProjectsLocationsOperationsCancel](docs/projects/README.md#apigatewayprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [ApigatewayProjectsLocationsOperationsDelete](docs/projects/README.md#apigatewayprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [ApigatewayProjectsLocationsOperationsGet](docs/projects/README.md#apigatewayprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [ApigatewayProjectsLocationsOperationsList](docs/projects/README.md#apigatewayprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
