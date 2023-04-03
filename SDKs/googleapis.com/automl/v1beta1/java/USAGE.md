<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AutomlProjectsLocationsDatasetsCreateSecurity;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsDatasetsCreateRequest;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsDatasetsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Dataset;
import org.openapis.openapi.models.shared.TranslationDatasetMetadata;
import org.openapis.openapi.models.shared.TextSentimentDatasetMetadata;
import org.openapis.openapi.models.shared.TextClassificationDatasetMetadataClassificationTypeEnum;
import org.openapis.openapi.models.shared.TextClassificationDatasetMetadata;
import org.openapis.openapi.models.shared.TablesDatasetMetadata;
import org.openapis.openapi.models.shared.CorrelationStats;
import org.openapis.openapi.models.shared.ImageClassificationDatasetMetadataClassificationTypeEnum;
import org.openapis.openapi.models.shared.ImageClassificationDatasetMetadata;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AutomlProjectsLocationsDatasetsCreateRequest req = new AutomlProjectsLocationsDatasetsCreateRequest() {{
                dollarXgafv = "2";
                dataset = new Dataset() {{
                    createTime = "provident";
                    description = "distinctio";
                    displayName = "quibusdam";
                    etag = "unde";
                    exampleCount = 857946;
                    imageClassificationDatasetMetadata = new ImageClassificationDatasetMetadata() {{
                        classificationType = "MULTICLASS";
                    }};
                    imageObjectDetectionDatasetMetadata = new java.util.HashMap<String, Object>() {{
                        put("vel", "error");
                        put("deserunt", "suscipit");
                        put("iure", "magnam");
                        put("debitis", "ipsa");
                    }};
                    name = "delectus";
                    tablesDatasetMetadata = new TablesDatasetMetadata() {{
                        mlUseColumnSpecId = "tempora";
                        primaryTableSpecId = "suscipit";
                        statsUpdateTime = "molestiae";
                        targetColumnCorrelations = new java.util.HashMap<String, org.openapis.openapi.models.shared.CorrelationStats>() {{
                            put("placeat", new CorrelationStats() {{
                                cramersV = 5288.95;
                            }});
                            put("iusto", new CorrelationStats() {{
                                cramersV = 5680.45;
                            }});
                            put("nisi", new CorrelationStats() {{
                                cramersV = 9255.97;
                            }});
                            put("temporibus", new CorrelationStats() {{
                                cramersV = 710.36;
                            }});
                        }};
                        targetColumnSpecId = "quis";
                        weightColumnSpecId = "veritatis";
                    }};
                    textClassificationDatasetMetadata = new TextClassificationDatasetMetadata() {{
                        classificationType = "MULTICLASS";
                    }};
                    textExtractionDatasetMetadata = new java.util.HashMap<String, Object>() {{
                        put("ipsam", "repellendus");
                    }};
                    textSentimentDatasetMetadata = new TextSentimentDatasetMetadata() {{
                        sentimentMax = 957156;
                    }};
                    translationDatasetMetadata = new TranslationDatasetMetadata() {{
                        sourceLanguageCode = "quo";
                        targetLanguageCode = "odit";
                    }};
                    videoClassificationDatasetMetadata = new java.util.HashMap<String, Object>() {{
                        put("at", "maiores");
                        put("molestiae", "quod");
                        put("quod", "esse");
                        put("totam", "porro");
                    }};
                    videoObjectTrackingDatasetMetadata = new java.util.HashMap<String, Object>() {{
                        put("dicta", "nam");
                        put("officia", "occaecati");
                        put("fugit", "deleniti");
                    }};
                }};
                accessToken = "hic";
                alt = "proto";
                callback = "totam";
                fields = "beatae";
                key = "commodi";
                oauthToken = "molestiae";
                parent = "modi";
                prettyPrint = false;
                quotaUser = "qui";
                uploadType = "impedit";
                uploadProtocol = "cum";
            }}            

            AutomlProjectsLocationsDatasetsCreateResponse res = sdk.projects.automlProjectsLocationsDatasetsCreate(req, new AutomlProjectsLocationsDatasetsCreateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.dataset.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->