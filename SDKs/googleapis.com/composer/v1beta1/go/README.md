# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/composer/v1beta1/go
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
    res, err := s.Projects.ComposerProjectsLocationsEnvironmentsCheckUpgrade(ctx, operations.ComposerProjectsLocationsEnvironmentsCheckUpgradeRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CheckUpgradeRequest: &shared.CheckUpgradeRequest{
            ImageVersion: sdk.String("provident"),
        },
        AccessToken: sdk.String("distinctio"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("unde"),
        Environment: "nulla",
        Fields: sdk.String("corrupti"),
        Key: sdk.String("illum"),
        OauthToken: sdk.String("vel"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("suscipit"),
    }, operations.ComposerProjectsLocationsEnvironmentsCheckUpgradeSecurity{
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

* [ComposerProjectsLocationsEnvironmentsCheckUpgrade](docs/projects/README.md#composerprojectslocationsenvironmentscheckupgrade) - Check if an upgrade operation on the environment will succeed. In case of problems detailed info can be found in the returned Operation.
* [ComposerProjectsLocationsEnvironmentsCreate](docs/projects/README.md#composerprojectslocationsenvironmentscreate) - Create a new environment.
* [ComposerProjectsLocationsEnvironmentsList](docs/projects/README.md#composerprojectslocationsenvironmentslist) - List environments.
* [ComposerProjectsLocationsEnvironmentsLoadSnapshot](docs/projects/README.md#composerprojectslocationsenvironmentsloadsnapshot) - Loads a snapshot of a Cloud Composer environment. As a result of this operation, a snapshot of environment's specified in LoadSnapshotRequest is loaded into the environment.
* [ComposerProjectsLocationsEnvironmentsPatch](docs/projects/README.md#composerprojectslocationsenvironmentspatch) - Update an environment.
* [ComposerProjectsLocationsEnvironmentsRestartWebServer](docs/projects/README.md#composerprojectslocationsenvironmentsrestartwebserver) - Restart Airflow web server.
* [ComposerProjectsLocationsEnvironmentsSaveSnapshot](docs/projects/README.md#composerprojectslocationsenvironmentssavesnapshot) - Creates a snapshots of a Cloud Composer environment. As a result of this operation, snapshot of environment's state is stored in a location specified in the SaveSnapshotRequest.
* [ComposerProjectsLocationsImageVersionsList](docs/projects/README.md#composerprojectslocationsimageversionslist) - List ImageVersions for provided location.
* [ComposerProjectsLocationsOperationsDelete](docs/projects/README.md#composerprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [ComposerProjectsLocationsOperationsGet](docs/projects/README.md#composerprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [ComposerProjectsLocationsOperationsList](docs/projects/README.md#composerprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
