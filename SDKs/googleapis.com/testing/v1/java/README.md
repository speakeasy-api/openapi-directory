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

import org.openapis.openapi.models.operations.TestingApplicationDetailServiceGetApkDetailsSecurity;
import org.openapis.openapi.models.operations.TestingApplicationDetailServiceGetApkDetailsQueryParams;
import org.openapis.openapi.models.operations.TestingApplicationDetailServiceGetApkDetailsRequest;
import org.openapis.openapi.models.operations.TestingApplicationDetailServiceGetApkDetailsResponse;
import org.openapis.openapi.models.shared.FileReference;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestingApplicationDetailServiceGetApkDetailsRequest req = new TestingApplicationDetailServiceGetApkDetailsRequest() {{
                security = new TestingApplicationDetailServiceGetApkDetailsSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new TestingApplicationDetailServiceGetApkDetailsQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    prettyPrint = false;
                    quotaUser = "illum";
                    uploadType = "vel";
                    uploadProtocol = "error";
                }};
                request = new FileReference() {{
                    gcsPath = "deserunt";
                }};
            }};            

            TestingApplicationDetailServiceGetApkDetailsResponse res = sdk.applicationDetailService.testingApplicationDetailServiceGetApkDetails(req);

            if (res.getApkDetailsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### applicationDetailService

* `testingApplicationDetailServiceGetApkDetails` - Gets the details of an Android application APK.

### projects

* `testingProjectsTestMatricesCancel` - Cancels unfinished test executions in a test matrix. This call returns immediately and cancellation proceeds asynchronously. If the matrix is already final, this operation will have no effect. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Test Matrix does not exist
* `testingProjectsTestMatricesCreate` - Creates and runs a matrix of tests according to the given specifications. Unsupported environments will be returned in the state UNSUPPORTED. A test matrix is limited to use at most 2000 devices in parallel. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed or if the matrix tries to use too many simultaneous devices.
* `testingProjectsTestMatricesGet` - Checks the status of a test matrix. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Test Matrix does not exist

### testEnvironmentCatalog

* `testingTestEnvironmentCatalogGet` - Gets the catalog of supported test environments. May return any of the following canonical error codes: - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the environment type does not exist - INTERNAL - if an internal error occurred
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
