<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsDatasetsCreateRequest;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsDatasetsCreateResponse;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsDatasetsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CorrelationStats;
import org.openapis.openapi.models.shared.Dataset;
import org.openapis.openapi.models.shared.ImageClassificationDatasetMetadata;
import org.openapis.openapi.models.shared.ImageClassificationDatasetMetadataClassificationTypeEnum;
import org.openapis.openapi.models.shared.TablesDatasetMetadata;
import org.openapis.openapi.models.shared.TextClassificationDatasetMetadata;
import org.openapis.openapi.models.shared.TextClassificationDatasetMetadataClassificationTypeEnum;
import org.openapis.openapi.models.shared.TextSentimentDatasetMetadata;
import org.openapis.openapi.models.shared.TranslationDatasetMetadata;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AutomlProjectsLocationsDatasetsCreateRequest req = new AutomlProjectsLocationsDatasetsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                dataset = new Dataset() {{
                    createTime = "distinctio";
                    description = "quibusdam";
                    displayName = "unde";
                    etag = "nulla";
                    exampleCount = 544883;
                    imageClassificationDatasetMetadata = new ImageClassificationDatasetMetadata() {{
                        classificationType = ImageClassificationDatasetMetadataClassificationTypeEnum.MULTILABEL;
                    }};;
                    imageObjectDetectionDatasetMetadata = new java.util.HashMap<String, Object>() {{
                        put("error", "deserunt");
                        put("suscipit", "iure");
                    }};
                    name = "Raquel Bednar";
                    tablesDatasetMetadata = new TablesDatasetMetadata() {{
                        mlUseColumnSpecId = "suscipit";
                        primaryTableSpecId = "molestiae";
                        statsUpdateTime = "minus";
                        targetColumnCorrelations = new java.util.HashMap<String, org.openapis.openapi.models.shared.CorrelationStats>() {{
                            put("voluptatum", new CorrelationStats() {{
                                cramersV = 4799.77;
                            }});
                            put("excepturi", new CorrelationStats() {{
                                cramersV = 3927.85;
                            }});
                            put("recusandae", new CorrelationStats() {{
                                cramersV = 8360.79;
                            }});
                            put("ab", new CorrelationStats() {{
                                cramersV = 3373.96;
                            }});
                        }};
                        targetColumnSpecId = "veritatis";
                        weightColumnSpecId = "deserunt";
                    }};;
                    textClassificationDatasetMetadata = new TextClassificationDatasetMetadata() {{
                        classificationType = TextClassificationDatasetMetadataClassificationTypeEnum.CLASSIFICATION_TYPE_UNSPECIFIED;
                    }};;
                    textExtractionDatasetMetadata = new java.util.HashMap<String, Object>() {{
                        put("repellendus", "sapiente");
                        put("quo", "odit");
                    }};
                    textSentimentDatasetMetadata = new TextSentimentDatasetMetadata() {{
                        sentimentMax = 870013;
                    }};;
                    translationDatasetMetadata = new TranslationDatasetMetadata() {{
                        sourceLanguageCode = "at";
                        targetLanguageCode = "maiores";
                    }};;
                    videoClassificationDatasetMetadata = new java.util.HashMap<String, Object>() {{
                        put("quod", "quod");
                        put("esse", "totam");
                    }};
                    videoObjectTrackingDatasetMetadata = new java.util.HashMap<String, Object>() {{
                        put("dolorum", "dicta");
                        put("nam", "officia");
                        put("occaecati", "fugit");
                        put("deleniti", "hic");
                    }};
                }};;
                accessToken = "optio";
                alt = AltEnum.MEDIA;
                callback = "beatae";
                fields = "commodi";
                key = "molestiae";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "qui";
                uploadType = "impedit";
                uploadProtocol = "cum";
            }};            

            AutomlProjectsLocationsDatasetsCreateResponse res = sdk.projects.automlProjectsLocationsDatasetsCreate(req, new AutomlProjectsLocationsDatasetsCreateSecurity("esse", "ipsum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.dataset != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->