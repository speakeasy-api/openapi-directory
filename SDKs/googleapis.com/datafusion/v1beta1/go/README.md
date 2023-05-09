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
    res, err := s.Projects.DatafusionProjectsLocationsInstancesCreate(ctx, operations.DatafusionProjectsLocationsInstancesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        InstanceInput: &shared.InstanceInput{
            CryptoKeyConfig: &shared.CryptoKeyConfig{
                KeyReference: sdk.String("provident"),
            },
            DataprocServiceAccount: sdk.String("distinctio"),
            Description: sdk.String("quibusdam"),
            DisplayName: sdk.String("unde"),
            EnableRbac: sdk.Bool(false),
            EnableStackdriverLogging: sdk.Bool(false),
            EnableStackdriverMonitoring: sdk.Bool(false),
            EnableZoneSeparation: sdk.Bool(false),
            EventPublishConfig: &shared.EventPublishConfig{
                Enabled: sdk.Bool(false),
                Topic: sdk.String("nulla"),
            },
            Labels: map[string]string{
                "illum": "vel",
                "error": "deserunt",
                "suscipit": "iure",
            },
            NetworkConfig: &shared.NetworkConfig{
                IPAllocation: sdk.String("magnam"),
                Network: sdk.String("debitis"),
            },
            Options: map[string]string{
                "delectus": "tempora",
            },
            PrivateInstance: sdk.Bool(false),
            Type: shared.InstanceTypeEnumBasic.ToPointer(),
            Version: sdk.String("molestiae"),
            Zone: sdk.String("minus"),
        },
        AccessToken: sdk.String("placeat"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("iusto"),
        Fields: sdk.String("excepturi"),
        InstanceID: sdk.String("nisi"),
        Key: sdk.String("recusandae"),
        OauthToken: sdk.String("temporibus"),
        Parent: "ab",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quis"),
        UploadType: sdk.String("veritatis"),
        UploadProtocol: sdk.String("deserunt"),
    }, operations.DatafusionProjectsLocationsInstancesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
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
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [DatafusionProjectsLocationsInstancesCreate](docs/projects/README.md#datafusionprojectslocationsinstancescreate) - Creates a new Data Fusion instance in the specified project and location.
* [DatafusionProjectsLocationsInstancesDNSPeeringsCreate](docs/projects/README.md#datafusionprojectslocationsinstancesdnspeeringscreate) - Creates DNS peering on the given resource.
* [DatafusionProjectsLocationsInstancesDNSPeeringsList](docs/projects/README.md#datafusionprojectslocationsinstancesdnspeeringslist) - Lists DNS peerings for a given resource.
* [DatafusionProjectsLocationsInstancesList](docs/projects/README.md#datafusionprojectslocationsinstanceslist) - Lists Data Fusion instances in the specified project and location.
* [DatafusionProjectsLocationsInstancesNamespacesGetIamPolicy](docs/projects/README.md#datafusionprojectslocationsinstancesnamespacesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [DatafusionProjectsLocationsInstancesNamespacesList](docs/projects/README.md#datafusionprojectslocationsinstancesnamespaceslist) - List namespaces in a given instance
* [DatafusionProjectsLocationsInstancesNamespacesSetIamPolicy](docs/projects/README.md#datafusionprojectslocationsinstancesnamespacessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [DatafusionProjectsLocationsInstancesNamespacesTestIamPermissions](docs/projects/README.md#datafusionprojectslocationsinstancesnamespacestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [DatafusionProjectsLocationsInstancesPatch](docs/projects/README.md#datafusionprojectslocationsinstancespatch) - Updates a single Data Fusion instance.
* [DatafusionProjectsLocationsInstancesRestart](docs/projects/README.md#datafusionprojectslocationsinstancesrestart) - Restart a single Data Fusion instance. At the end of an operation instance is fully restarted.
* [DatafusionProjectsLocationsInstancesUpgrade](docs/projects/README.md#datafusionprojectslocationsinstancesupgrade) - Upgrade a single Data Fusion instance. At the end of an operation instance is fully upgraded.
* [DatafusionProjectsLocationsList](docs/projects/README.md#datafusionprojectslocationslist) - Lists information about the supported locations for this service.
* [DatafusionProjectsLocationsOperationsCancel](docs/projects/README.md#datafusionprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [DatafusionProjectsLocationsOperationsDelete](docs/projects/README.md#datafusionprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [DatafusionProjectsLocationsOperationsGet](docs/projects/README.md#datafusionprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [DatafusionProjectsLocationsOperationsList](docs/projects/README.md#datafusionprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [DatafusionProjectsLocationsRemoveIamPolicy](docs/projects/README.md#datafusionprojectslocationsremoveiampolicy) - Remove IAM policy that is currently set on the given resource.
* [DatafusionProjectsLocationsVersionsList](docs/projects/README.md#datafusionprojectslocationsversionslist) - Lists possible versions for Data Fusion instances in the specified project and location.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
