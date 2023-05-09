# projects

### Available Operations

* [cloudassetProjectsBatchGetAssetsHistory](#cloudassetprojectsbatchgetassetshistory) - Batch gets the update history of assets that overlap a time window. For IAM_POLICY content, this API outputs history when the asset and its attached IAM POLICY both exist. This can create gaps in the output history. Otherwise, this API outputs history with asset in both non-delete or deleted status. If a specified asset does not exist, this API returns an INVALID_ARGUMENT error.
* [cloudassetProjectsExportAssets](#cloudassetprojectsexportassets) - Exports assets with time and resource types to a given Cloud Storage location. The output format is newline-delimited JSON. This API implements the google.longrunning.Operation API allowing you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. For regular-size resource parent, the export operation usually finishes within 5 minutes.
* [cloudassetProjectsOperationsGet](#cloudassetprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

## cloudassetProjectsBatchGetAssetsHistory

Batch gets the update history of assets that overlap a time window. For IAM_POLICY content, this API outputs history when the asset and its attached IAM POLICY both exist. This can create gaps in the output history. Otherwise, this API outputs history with asset in both non-delete or deleted status. If a specified asset does not exist, this API returns an INVALID_ARGUMENT error.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudassetProjectsBatchGetAssetsHistoryContentTypeEnum;
import org.openapis.openapi.models.operations.CloudassetProjectsBatchGetAssetsHistoryRequest;
import org.openapis.openapi.models.operations.CloudassetProjectsBatchGetAssetsHistoryResponse;
import org.openapis.openapi.models.operations.CloudassetProjectsBatchGetAssetsHistorySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudassetProjectsBatchGetAssetsHistoryRequest req = new CloudassetProjectsBatchGetAssetsHistoryRequest("minus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptatum";
                alt = AltEnum.MEDIA;
                assetNames = new String[]{{
                    add("nisi"),
                    add("recusandae"),
                    add("temporibus"),
                }};
                callback = "ab";
                contentType = CloudassetProjectsBatchGetAssetsHistoryContentTypeEnum.RESOURCE;
                fields = "veritatis";
                key = "deserunt";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "ipsam";
                readTimeWindowEndTime = "repellendus";
                readTimeWindowStartTime = "sapiente";
                uploadType = "quo";
                uploadProtocol = "odit";
            }};            

            CloudassetProjectsBatchGetAssetsHistoryResponse res = sdk.projects.cloudassetProjectsBatchGetAssetsHistory(req, new CloudassetProjectsBatchGetAssetsHistorySecurity("at", "at") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.batchGetAssetsHistoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudassetProjectsExportAssets

Exports assets with time and resource types to a given Cloud Storage location. The output format is newline-delimited JSON. This API implements the google.longrunning.Operation API allowing you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. For regular-size resource parent, the export operation usually finishes within 5 minutes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudassetProjectsExportAssetsRequest;
import org.openapis.openapi.models.operations.CloudassetProjectsExportAssetsResponse;
import org.openapis.openapi.models.operations.CloudassetProjectsExportAssetsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ExportAssetsRequest;
import org.openapis.openapi.models.shared.ExportAssetsRequestContentTypeEnum;
import org.openapis.openapi.models.shared.GcsDestination;
import org.openapis.openapi.models.shared.OutputConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudassetProjectsExportAssetsRequest req = new CloudassetProjectsExportAssetsRequest("maiores") {{
                dollarXgafv = XgafvEnum.ONE;
                exportAssetsRequest = new ExportAssetsRequest() {{
                    assetTypes = new String[]{{
                        add("quod"),
                        add("esse"),
                        add("totam"),
                        add("porro"),
                    }};
                    contentType = ExportAssetsRequestContentTypeEnum.IAM_POLICY;
                    outputConfig = new OutputConfig() {{
                        gcsDestination = new GcsDestination() {{
                            uri = "http://scaly-pathway.name";
                            uriPrefix = "fugit";
                        }};;
                    }};;
                    readTime = "deleniti";
                }};;
                accessToken = "hic";
                alt = AltEnum.PROTO;
                callback = "totam";
                fields = "beatae";
                key = "commodi";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "qui";
                uploadProtocol = "impedit";
            }};            

            CloudassetProjectsExportAssetsResponse res = sdk.projects.cloudassetProjectsExportAssets(req, new CloudassetProjectsExportAssetsSecurity("cum", "esse") {{
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

## cloudassetProjectsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudassetProjectsOperationsGetRequest;
import org.openapis.openapi.models.operations.CloudassetProjectsOperationsGetResponse;
import org.openapis.openapi.models.operations.CloudassetProjectsOperationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudassetProjectsOperationsGetRequest req = new CloudassetProjectsOperationsGetRequest("ipsum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aspernatur";
                alt = AltEnum.JSON;
                callback = "ad";
                fields = "natus";
                key = "sed";
                oauthToken = "iste";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "natus";
                uploadProtocol = "laboriosam";
            }};            

            CloudassetProjectsOperationsGetResponse res = sdk.projects.cloudassetProjectsOperationsGet(req, new CloudassetProjectsOperationsGetSecurity("hic", "saepe") {{
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
