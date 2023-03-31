# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/apigateway/v1beta/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Projects

* `ApigatewayProjectsLocationsApisConfigsCreate` - Creates a new ApiConfig in a given project and location.
* `ApigatewayProjectsLocationsApisConfigsList` - Lists ApiConfigs in a given project and location.
* `ApigatewayProjectsLocationsApisCreate` - Creates a new Api in a given project and location.
* `ApigatewayProjectsLocationsApisList` - Lists Apis in a given project and location.
* `ApigatewayProjectsLocationsGatewaysCreate` - Creates a new Gateway in a given project and location.
* `ApigatewayProjectsLocationsGatewaysGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `ApigatewayProjectsLocationsGatewaysList` - Lists Gateways in a given project and location.
* `ApigatewayProjectsLocationsGatewaysPatch` - Updates the parameters of a single Gateway.
* `ApigatewayProjectsLocationsGatewaysSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `ApigatewayProjectsLocationsGatewaysTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `ApigatewayProjectsLocationsList` - Lists information about the supported locations for this service.
* `ApigatewayProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `ApigatewayProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `ApigatewayProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `ApigatewayProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
