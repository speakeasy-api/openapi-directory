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
import org.openapis.openapi.models.operations.TestingApplicationDetailServiceGetApkDetailsRequest;
import org.openapis.openapi.models.operations.TestingApplicationDetailServiceGetApkDetailsResponse;
import org.openapis.openapi.models.operations.TestingApplicationDetailServiceGetApkDetailsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FileReference;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestingApplicationDetailServiceGetApkDetailsRequest req = new TestingApplicationDetailServiceGetApkDetailsRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                fileReference = new FileReference() {{
                    gcsPath = "provident";
                }};;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                key = "corrupti";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "error";
                uploadProtocol = "deserunt";
            }};            

            TestingApplicationDetailServiceGetApkDetailsResponse res = sdk.applicationDetailService.testingApplicationDetailServiceGetApkDetails(req, new TestingApplicationDetailServiceGetApkDetailsSecurity("suscipit", "iure") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getApkDetailsResponse != null) {
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


### [applicationDetailService](docs/applicationdetailservice/README.md)

* [testingApplicationDetailServiceGetApkDetails](docs/applicationdetailservice/README.md#testingapplicationdetailservicegetapkdetails) - Gets the details of an Android application APK.

### [projects](docs/projects/README.md)

* [testingProjectsTestMatricesCancel](docs/projects/README.md#testingprojectstestmatricescancel) - Cancels unfinished test executions in a test matrix. This call returns immediately and cancellation proceeds asynchronously. If the matrix is already final, this operation will have no effect. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Test Matrix does not exist
* [testingProjectsTestMatricesCreate](docs/projects/README.md#testingprojectstestmatricescreate) - Creates and runs a matrix of tests according to the given specifications. Unsupported environments will be returned in the state UNSUPPORTED. A test matrix is limited to use at most 2000 devices in parallel. The returned matrix will not yet contain the executions that will be created for this matrix. That happens later on and will require a call to GetTestMatrix. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed or if the matrix tries to use too many simultaneous devices.
* [testingProjectsTestMatricesGet](docs/projects/README.md#testingprojectstestmatricesget) - Checks the status of a test matrix and the executions once they are created. The test matrix will contain the list of test executions to run if and only if the resultStorage.toolResultsExecution fields have been populated. Note: Flaky test executions may still be added to the matrix at a later stage. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Test Matrix does not exist

### [testEnvironmentCatalog](docs/testenvironmentcatalog/README.md)

* [testingTestEnvironmentCatalogGet](docs/testenvironmentcatalog/README.md#testingtestenvironmentcatalogget) - Gets the catalog of supported test environments. May return any of the following canonical error codes: - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the environment type does not exist - INTERNAL - if an internal error occurred
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
