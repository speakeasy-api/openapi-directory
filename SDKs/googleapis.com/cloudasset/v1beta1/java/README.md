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

import org.openapis.openapi.models.operations.CloudassetProjectsBatchGetAssetsHistorySecurity;
import org.openapis.openapi.models.operations.CloudassetProjectsBatchGetAssetsHistoryPathParams;
import org.openapis.openapi.models.operations.CloudassetProjectsBatchGetAssetsHistoryContentTypeEnum;
import org.openapis.openapi.models.operations.CloudassetProjectsBatchGetAssetsHistoryQueryParams;
import org.openapis.openapi.models.operations.CloudassetProjectsBatchGetAssetsHistoryRequest;
import org.openapis.openapi.models.operations.CloudassetProjectsBatchGetAssetsHistoryResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudassetProjectsBatchGetAssetsHistoryRequest req = new CloudassetProjectsBatchGetAssetsHistoryRequest() {{
                security = new CloudassetProjectsBatchGetAssetsHistorySecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new CloudassetProjectsBatchGetAssetsHistoryPathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new CloudassetProjectsBatchGetAssetsHistoryQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    assetNames = new String[]{{
                        add("nulla"),
                        add("corrupti"),
                        add("illum"),
                    }};
                    callback = "vel";
                    contentType = "RESOURCE";
                    fields = "deserunt";
                    key = "suscipit";
                    oauthToken = "iure";
                    prettyPrint = false;
                    quotaUser = "magnam";
                    readTimeWindowEndTime = "debitis";
                    readTimeWindowStartTime = "ipsa";
                    uploadType = "delectus";
                    uploadProtocol = "tempora";
                }};
            }};            

            CloudassetProjectsBatchGetAssetsHistoryResponse res = sdk.projects.cloudassetProjectsBatchGetAssetsHistory(req);

            if (res.batchGetAssetsHistoryResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### projects

* `cloudassetProjectsBatchGetAssetsHistory` - Batch gets the update history of assets that overlap a time window. For IAM_POLICY content, this API outputs history when the asset and its attached IAM POLICY both exist. This can create gaps in the output history. Otherwise, this API outputs history with asset in both non-delete or deleted status. If a specified asset does not exist, this API returns an INVALID_ARGUMENT error.
* `cloudassetProjectsExportAssets` - Exports assets with time and resource types to a given Cloud Storage location. The output format is newline-delimited JSON. This API implements the google.longrunning.Operation API allowing you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. For regular-size resource parent, the export operation usually finishes within 5 minutes.
* `cloudassetProjectsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
