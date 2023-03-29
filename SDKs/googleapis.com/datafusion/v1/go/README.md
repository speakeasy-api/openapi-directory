# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/datafusion/v1/go
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

    req := operations.DatafusionProjectsLocationsInstancesCreateRequest{
        Security: operations.DatafusionProjectsLocationsInstancesCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.DatafusionProjectsLocationsInstancesCreatePathParams{
            Parent: "unde",
        },
        QueryParams: operations.DatafusionProjectsLocationsInstancesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            InstanceID: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            UploadType: "facilis",
            UploadProtocol: "eum",
        },
        Request: &shared.InstanceInput{
            Accelerators: []shared.Accelerator{
                shared.Accelerator{
                    AcceleratorType: "CDC",
                    State: "UNKNOWN",
                },
                shared.Accelerator{
                    AcceleratorType: "ACCELERATOR_TYPE_UNSPECIFIED",
                    State: "UNKNOWN",
                },
            },
            AvailableVersion: []shared.Version{
                shared.Version{
                    AvailableFeatures: []string{
                        "voluptatum",
                        "autem",
                    },
                    DefaultVersion: false,
                    Type: "TYPE_GENERAL_AVAILABILITY",
                    VersionNumber: "non",
                },
                shared.Version{
                    AvailableFeatures: []string{
                        "similique",
                        "reprehenderit",
                    },
                    DefaultVersion: false,
                    Type: "TYPE_GENERAL_AVAILABILITY",
                    VersionNumber: "quo",
                },
            },
            CryptoKeyConfig: &shared.CryptoKeyConfig{
                KeyReference: "quasi",
            },
            DataprocServiceAccount: "laboriosam",
            Description: "dicta",
            DisplayName: "est",
            EnableRbac: false,
            EnableStackdriverLogging: false,
            EnableStackdriverMonitoring: false,
            EnableZoneSeparation: false,
            EventPublishConfig: &shared.EventPublishConfig{
                Enabled: false,
                Topic: "voluptatem",
            },
            Labels: map[string]string{
                "fugiat": "a",
                "omnis": "eos",
            },
            NetworkConfig: &shared.NetworkConfig{
                IPAllocation: "accusamus",
                Network: "accusamus",
            },
            Options: map[string]string{
                "rem": "quibusdam",
                "et": "praesentium",
                "occaecati": "dolor",
                "soluta": "sed",
            },
            PrivateInstance: false,
            Type: "ENTERPRISE",
            Version: "rerum",
            Zone: "culpa",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.DatafusionProjectsLocationsInstancesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### Projects

* `DatafusionProjectsLocationsInstancesCreate` - Creates a new Data Fusion instance in the specified project and location.
* `DatafusionProjectsLocationsInstancesDNSPeeringsCreate` - Creates DNS peering on the given resource.
* `DatafusionProjectsLocationsInstancesDNSPeeringsList` - Lists DNS peerings for a given resource.
* `DatafusionProjectsLocationsInstancesGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `DatafusionProjectsLocationsInstancesList` - Lists Data Fusion instances in the specified project and location.
* `DatafusionProjectsLocationsInstancesPatch` - Updates a single Data Fusion instance.
* `DatafusionProjectsLocationsInstancesRestart` - Restart a single Data Fusion instance. At the end of an operation instance is fully restarted.
* `DatafusionProjectsLocationsInstancesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `DatafusionProjectsLocationsInstancesTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `DatafusionProjectsLocationsList` - Lists information about the supported locations for this service.
* `DatafusionProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `DatafusionProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `DatafusionProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `DatafusionProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `DatafusionProjectsLocationsVersionsList` - Lists possible versions for Data Fusion instances in the specified project and location.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
