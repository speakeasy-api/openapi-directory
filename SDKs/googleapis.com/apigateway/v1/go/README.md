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

<!-- Start SDK Available Operations -->
## SDK Available Operations


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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
