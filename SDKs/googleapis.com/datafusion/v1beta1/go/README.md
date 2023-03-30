# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/datafusion/v1beta1/go
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
            Parent: "corrupti",
        },
        QueryParams: operations.DatafusionProjectsLocationsInstancesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            InstanceID: "corrupti",
            Key: "illum",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            UploadType: "deserunt",
            UploadProtocol: "suscipit",
        },
        Request: &shared.InstanceInput{
            CryptoKeyConfig: &shared.CryptoKeyConfig{
                KeyReference: "iure",
            },
            DataprocServiceAccount: "magnam",
            Description: "debitis",
            DisplayName: "ipsa",
            EnableRbac: false,
            EnableStackdriverLogging: false,
            EnableStackdriverMonitoring: false,
            EnableZoneSeparation: false,
            EventPublishConfig: &shared.EventPublishConfig{
                Enabled: false,
                Topic: "delectus",
            },
            Labels: map[string]string{
                "suscipit": "molestiae",
                "minus": "placeat",
            },
            NetworkConfig: &shared.NetworkConfig{
                IPAllocation: "voluptatum",
                Network: "iusto",
            },
            Options: map[string]string{
                "nisi": "recusandae",
                "temporibus": "ab",
                "quis": "veritatis",
            },
            PrivateInstance: false,
            Type: "ENTERPRISE",
            Version: "perferendis",
            Zone: "ipsam",
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
* `DatafusionProjectsLocationsInstancesList` - Lists Data Fusion instances in the specified project and location.
* `DatafusionProjectsLocationsInstancesNamespacesGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `DatafusionProjectsLocationsInstancesNamespacesList` - List namespaces in a given instance
* `DatafusionProjectsLocationsInstancesNamespacesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `DatafusionProjectsLocationsInstancesNamespacesTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `DatafusionProjectsLocationsInstancesPatch` - Updates a single Data Fusion instance.
* `DatafusionProjectsLocationsInstancesRestart` - Restart a single Data Fusion instance. At the end of an operation instance is fully restarted.
* `DatafusionProjectsLocationsInstancesUpgrade` - Upgrade a single Data Fusion instance. At the end of an operation instance is fully upgraded.
* `DatafusionProjectsLocationsList` - Lists information about the supported locations for this service.
* `DatafusionProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `DatafusionProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `DatafusionProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `DatafusionProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `DatafusionProjectsLocationsRemoveIamPolicy` - Remove IAM policy that is currently set on the given resource.
* `DatafusionProjectsLocationsVersionsList` - Lists possible versions for Data Fusion instances in the specified project and location.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
