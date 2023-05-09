<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatalabelingProjectsAnnotationSpecSetsCreateRequest;
import org.openapis.openapi.models.operations.DatalabelingProjectsAnnotationSpecSetsCreateResponse;
import org.openapis.openapi.models.operations.DatalabelingProjectsAnnotationSpecSetsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1AnnotationSpec;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1AnnotationSpecSet;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalabelingProjectsAnnotationSpecSetsCreateRequest req = new DatalabelingProjectsAnnotationSpecSetsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest = new GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest() {{
                    annotationSpecSet = new GoogleCloudDatalabelingV1beta1AnnotationSpecSet() {{
                        annotationSpecs = new org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1AnnotationSpec[]{{
                            add(new GoogleCloudDatalabelingV1beta1AnnotationSpec() {{
                                description = "quibusdam";
                                displayName = "unde";
                                index = 857946;
                            }}),
                            add(new GoogleCloudDatalabelingV1beta1AnnotationSpec() {{
                                description = "corrupti";
                                displayName = "illum";
                                index = 423655;
                            }}),
                            add(new GoogleCloudDatalabelingV1beta1AnnotationSpec() {{
                                description = "error";
                                displayName = "deserunt";
                                index = 384382;
                            }}),
                        }};
                        blockingResources = new String[]{{
                            add("magnam"),
                            add("debitis"),
                        }};
                        description = "ipsa";
                        displayName = "delectus";
                        name = "Laurie Kreiger";
                    }};;
                }};;
                accessToken = "voluptatum";
                alt = AltEnum.MEDIA;
                callback = "excepturi";
                fields = "nisi";
                key = "recusandae";
                oauthToken = "temporibus";
                prettyPrint = false;
                quotaUser = "ab";
                uploadType = "quis";
                uploadProtocol = "veritatis";
            }};            

            DatalabelingProjectsAnnotationSpecSetsCreateResponse res = sdk.projects.datalabelingProjectsAnnotationSpecSetsCreate(req, new DatalabelingProjectsAnnotationSpecSetsCreateSecurity("deserunt", "perferendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatalabelingV1beta1AnnotationSpecSet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->