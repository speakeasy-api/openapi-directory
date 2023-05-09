# v1p7beta1

### Available Operations

* [cloudassetExportAssets](#cloudassetexportassets) - Exports assets with time and resource types to a given Cloud Storage location/BigQuery table. For Cloud Storage location destinations, the output format is newline-delimited JSON. Each line represents a google.cloud.asset.v1p7beta1.Asset in the JSON format; for BigQuery table destinations, the output table stores the fields in asset proto as columns. This API implements the google.longrunning.Operation API , which allows you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. For regular-size resource parent, the export operation usually finishes within 5 minutes.

## cloudassetExportAssets

Exports assets with time and resource types to a given Cloud Storage location/BigQuery table. For Cloud Storage location destinations, the output format is newline-delimited JSON. Each line represents a google.cloud.asset.v1p7beta1.Asset in the JSON format; for BigQuery table destinations, the output table stores the fields in asset proto as columns. This API implements the google.longrunning.Operation API , which allows you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. For regular-size resource parent, the export operation usually finishes within 5 minutes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudassetExportAssetsRequest;
import org.openapis.openapi.models.operations.CloudassetExportAssetsResponse;
import org.openapis.openapi.models.operations.CloudassetExportAssetsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudAssetV1p7beta1BigQueryDestination;
import org.openapis.openapi.models.shared.GoogleCloudAssetV1p7beta1ExportAssetsRequest;
import org.openapis.openapi.models.shared.GoogleCloudAssetV1p7beta1ExportAssetsRequestContentTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudAssetV1p7beta1GcsDestination;
import org.openapis.openapi.models.shared.GoogleCloudAssetV1p7beta1OutputConfig;
import org.openapis.openapi.models.shared.GoogleCloudAssetV1p7beta1PartitionSpec;
import org.openapis.openapi.models.shared.GoogleCloudAssetV1p7beta1PartitionSpecPartitionKeyEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudassetExportAssetsRequest req = new CloudassetExportAssetsRequest("recusandae") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudAssetV1p7beta1ExportAssetsRequest = new GoogleCloudAssetV1p7beta1ExportAssetsRequest() {{
                    assetTypes = new String[]{{
                        add("quis"),
                    }};
                    contentType = GoogleCloudAssetV1p7beta1ExportAssetsRequestContentTypeEnum.CONTENT_TYPE_UNSPECIFIED;
                    outputConfig = new GoogleCloudAssetV1p7beta1OutputConfig() {{
                        bigqueryDestination = new GoogleCloudAssetV1p7beta1BigQueryDestination() {{
                            dataset = "deserunt";
                            force = false;
                            partitionSpec = new GoogleCloudAssetV1p7beta1PartitionSpec() {{
                                partitionKey = GoogleCloudAssetV1p7beta1PartitionSpecPartitionKeyEnum.PARTITION_KEY_UNSPECIFIED;
                            }};;
                            separateTablesPerAssetType = false;
                            table = "ipsam";
                        }};;
                        gcsDestination = new GoogleCloudAssetV1p7beta1GcsDestination() {{
                            uri = "https://well-informed-screamer.com";
                            uriPrefix = "at";
                        }};;
                    }};;
                    readTime = "at";
                    relationshipTypes = new String[]{{
                        add("molestiae"),
                        add("quod"),
                        add("quod"),
                        add("esse"),
                    }};
                }};;
                accessToken = "totam";
                alt = AltEnum.PROTO;
                callback = "dolorum";
                fields = "dicta";
                key = "nam";
                oauthToken = "officia";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "fugit";
                uploadProtocol = "deleniti";
            }};            

            CloudassetExportAssetsResponse res = sdk.v1p7beta1.cloudassetExportAssets(req, new CloudassetExportAssetsSecurity("hic", "optio") {{
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
