<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AutomlProjectsLocationsDatasetsCreateSecurity;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsDatasetsCreatePathParams;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsDatasetsCreateQueryParams;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsDatasetsCreateRequest;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsDatasetsCreateResponse;
import org.openapis.openapi.models.shared.Dataset;
import org.openapis.openapi.models.shared.TranslationDatasetMetadata;
import org.openapis.openapi.models.shared.TextSentimentDatasetMetadata;
import org.openapis.openapi.models.shared.TextClassificationDatasetMetadataClassificationTypeEnum;
import org.openapis.openapi.models.shared.TextClassificationDatasetMetadata;
import org.openapis.openapi.models.shared.TablesDatasetMetadata;
import org.openapis.openapi.models.shared.CorrelationStats;
import org.openapis.openapi.models.shared.ImageClassificationDatasetMetadataClassificationTypeEnum;
import org.openapis.openapi.models.shared.ImageClassificationDatasetMetadata;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AutomlProjectsLocationsDatasetsCreateRequest req = new AutomlProjectsLocationsDatasetsCreateRequest() {{
                security = new AutomlProjectsLocationsDatasetsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new AutomlProjectsLocationsDatasetsCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new AutomlProjectsLocationsDatasetsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new Dataset() {{
                    createTime = "suscipit";
                    description = "iure";
                    displayName = "magnam";
                    etag = "debitis";
                    exampleCount = 56713;
                    imageClassificationDatasetMetadata = new ImageClassificationDatasetMetadata() {{
                        classificationType = "MULTILABEL";
                    }};
                    imageObjectDetectionDatasetMetadata = new java.util.HashMap<String, Object>() {{
                        put("suscipit", "molestiae");
                        put("minus", "placeat");
                    }};
                    name = "voluptatum";
                    tablesDatasetMetadata = new TablesDatasetMetadata() {{
                        mlUseColumnSpecId = "iusto";
                        primaryTableSpecId = "excepturi";
                        statsUpdateTime = "nisi";
                        targetColumnCorrelations = new java.util.HashMap<String, org.openapis.openapi.models.shared.CorrelationStats>() {{
                            put("temporibus", new CorrelationStats() {{
                                cramersV = 710.36;
                            }});
                            put("quis", new CorrelationStats() {{
                                cramersV = 871.29;
                            }});
                            put("deserunt", new CorrelationStats() {{
                                cramersV = 202.18;
                            }});
                            put("ipsam", new CorrelationStats() {{
                                cramersV = 8326.2;
                            }});
                        }};
                        targetColumnSpecId = "sapiente";
                        weightColumnSpecId = "quo";
                    }};
                    textClassificationDatasetMetadata = new TextClassificationDatasetMetadata() {{
                        classificationType = "CLASSIFICATION_TYPE_UNSPECIFIED";
                    }};
                    textExtractionDatasetMetadata = new java.util.HashMap<String, Object>() {{
                        put("at", "maiores");
                        put("molestiae", "quod");
                        put("quod", "esse");
                        put("totam", "porro");
                    }};
                    textSentimentDatasetMetadata = new TextSentimentDatasetMetadata() {{
                        sentimentMax = 678880;
                    }};
                    translationDatasetMetadata = new TranslationDatasetMetadata() {{
                        sourceLanguageCode = "dicta";
                        targetLanguageCode = "nam";
                    }};
                    videoClassificationDatasetMetadata = new java.util.HashMap<String, Object>() {{
                        put("occaecati", "fugit");
                        put("deleniti", "hic");
                        put("optio", "totam");
                    }};
                    videoObjectTrackingDatasetMetadata = new java.util.HashMap<String, Object>() {{
                        put("commodi", "molestiae");
                    }};
                }};
            }};            

            AutomlProjectsLocationsDatasetsCreateResponse res = sdk.projects.automlProjectsLocationsDatasetsCreate(req);

            if (res.dataset.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->