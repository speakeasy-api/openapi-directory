# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsEnvironmentsCheckUpgradeRequest;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsEnvironmentsCheckUpgradeResponse;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsEnvironmentsCheckUpgradeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CheckUpgradeRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComposerProjectsLocationsEnvironmentsCheckUpgradeRequest req = new ComposerProjectsLocationsEnvironmentsCheckUpgradeRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                checkUpgradeRequest = new CheckUpgradeRequest() {{
                    imageVersion = "distinctio";
                }};;
                accessToken = "quibusdam";
                alt = AltEnum.MEDIA;
                callback = "nulla";
                fields = "corrupti";
                key = "illum";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "deserunt";
                uploadProtocol = "suscipit";
            }};            

            ComposerProjectsLocationsEnvironmentsCheckUpgradeResponse res = sdk.projects.composerProjectsLocationsEnvironmentsCheckUpgrade(req, new ComposerProjectsLocationsEnvironmentsCheckUpgradeSecurity("iure", "magnam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [composerProjectsLocationsEnvironmentsCheckUpgrade](docs/projects/README.md#composerprojectslocationsenvironmentscheckupgrade) - Check if an upgrade operation on the environment will succeed. In case of problems detailed info can be found in the returned Operation.
* [composerProjectsLocationsEnvironmentsCreate](docs/projects/README.md#composerprojectslocationsenvironmentscreate) - Create a new environment.
* [composerProjectsLocationsEnvironmentsList](docs/projects/README.md#composerprojectslocationsenvironmentslist) - List environments.
* [composerProjectsLocationsEnvironmentsLoadSnapshot](docs/projects/README.md#composerprojectslocationsenvironmentsloadsnapshot) - Loads a snapshot of a Cloud Composer environment. As a result of this operation, a snapshot of environment's specified in LoadSnapshotRequest is loaded into the environment.
* [composerProjectsLocationsEnvironmentsPatch](docs/projects/README.md#composerprojectslocationsenvironmentspatch) - Update an environment.
* [composerProjectsLocationsEnvironmentsRestartWebServer](docs/projects/README.md#composerprojectslocationsenvironmentsrestartwebserver) - Restart Airflow web server.
* [composerProjectsLocationsEnvironmentsSaveSnapshot](docs/projects/README.md#composerprojectslocationsenvironmentssavesnapshot) - Creates a snapshots of a Cloud Composer environment. As a result of this operation, snapshot of environment's state is stored in a location specified in the SaveSnapshotRequest.
* [composerProjectsLocationsImageVersionsList](docs/projects/README.md#composerprojectslocationsimageversionslist) - List ImageVersions for provided location.
* [composerProjectsLocationsOperationsDelete](docs/projects/README.md#composerprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [composerProjectsLocationsOperationsGet](docs/projects/README.md#composerprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [composerProjectsLocationsOperationsList](docs/projects/README.md#composerprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
