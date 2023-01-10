# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
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
            Parent: "sint",
        },
        QueryParams: operations.ApigatewayProjectsLocationsApisConfigsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "a",
            Alt: "media",
            APIConfigID: "eveniet",
            Callback: "perferendis",
            Fields: "numquam",
            Key: "assumenda",
            OauthToken: "vitae",
            PrettyPrint: true,
            QuotaUser: "a",
            UploadType: "mollitia",
            UploadProtocol: "ut",
        },
        Request: &shared.ApigatewayAPIConfigInput{
            DisplayName: "consequatur",
            GatewayServiceAccount: "repellat",
            GrpcServices: []shared.ApigatewayAPIConfigGrpcServiceDefinition{
                shared.ApigatewayAPIConfigGrpcServiceDefinition{
                    FileDescriptorSet: &shared.ApigatewayAPIConfigFile{
                        Contents: "repellendus",
                        Path: "alias",
                    },
                    Source: []shared.ApigatewayAPIConfigFile{
                        shared.ApigatewayAPIConfigFile{
                            Contents: "blanditiis",
                            Path: "pariatur",
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: "ipsam",
                            Path: "veritatis",
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: "voluptatem",
                            Path: "ullam",
                        },
                    },
                },
                shared.ApigatewayAPIConfigGrpcServiceDefinition{
                    FileDescriptorSet: &shared.ApigatewayAPIConfigFile{
                        Contents: "quasi",
                        Path: "deleniti",
                    },
                    Source: []shared.ApigatewayAPIConfigFile{
                        shared.ApigatewayAPIConfigFile{
                            Contents: "sit",
                            Path: "assumenda",
                        },
                    },
                },
                shared.ApigatewayAPIConfigGrpcServiceDefinition{
                    FileDescriptorSet: &shared.ApigatewayAPIConfigFile{
                        Contents: "quo",
                        Path: "ipsum",
                    },
                    Source: []shared.ApigatewayAPIConfigFile{
                        shared.ApigatewayAPIConfigFile{
                            Contents: "laudantium",
                            Path: "aperiam",
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: "eos",
                            Path: "qui",
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: "perspiciatis",
                            Path: "quod",
                        },
                    },
                },
            },
            Labels: map[string]string{
                "aliquam": "aut",
                "laborum": "voluptatem",
                "enim": "non",
            },
            ManagedServiceConfigs: []shared.ApigatewayAPIConfigFile{
                shared.ApigatewayAPIConfigFile{
                    Contents: "saepe",
                    Path: "dolores",
                },
                shared.ApigatewayAPIConfigFile{
                    Contents: "dolorum",
                    Path: "ab",
                },
                shared.ApigatewayAPIConfigFile{
                    Contents: "earum",
                    Path: "nihil",
                },
            },
            OpenapiDocuments: []shared.ApigatewayAPIConfigOpenAPIDocument{
                shared.ApigatewayAPIConfigOpenAPIDocument{
                    Document: &shared.ApigatewayAPIConfigFile{
                        Contents: "consectetur",
                        Path: "ut",
                    },
                },
                shared.ApigatewayAPIConfigOpenAPIDocument{
                    Document: &shared.ApigatewayAPIConfigFile{
                        Contents: "qui",
                        Path: "deleniti",
                    },
                },
            },
        },
    }
    
    res, err := s.Projects.ApigatewayProjectsLocationsApisConfigsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ApigatewayOperation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

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
* `ApigatewayProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
