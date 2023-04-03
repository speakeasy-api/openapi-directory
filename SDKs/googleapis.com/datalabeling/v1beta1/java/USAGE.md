<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DatalabelingProjectsAnnotationSpecSetsCreateSecurity;
import org.openapis.openapi.models.operations.DatalabelingProjectsAnnotationSpecSetsCreateRequest;
import org.openapis.openapi.models.operations.DatalabelingProjectsAnnotationSpecSetsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1AnnotationSpecSet;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1AnnotationSpec;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalabelingProjectsAnnotationSpecSetsCreateRequest req = new DatalabelingProjectsAnnotationSpecSetsCreateRequest() {{
                dollarXgafv = "2";
                googleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest = new GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest() {{
                    annotationSpecSet = new GoogleCloudDatalabelingV1beta1AnnotationSpecSet() {{
                        annotationSpecs = new org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1AnnotationSpec[]{{
                            add(new GoogleCloudDatalabelingV1beta1AnnotationSpec() {{
                                description = "distinctio";
                                displayName = "quibusdam";
                                index = 602763;
                            }}),
                            add(new GoogleCloudDatalabelingV1beta1AnnotationSpec() {{
                                description = "nulla";
                                displayName = "corrupti";
                                index = 847252;
                            }}),
                            add(new GoogleCloudDatalabelingV1beta1AnnotationSpec() {{
                                description = "vel";
                                displayName = "error";
                                index = 645894;
                            }}),
                        }};
                        blockingResources = new String[]{{
                            add("iure"),
                            add("magnam"),
                        }};
                        description = "debitis";
                        displayName = "ipsa";
                        name = "delectus";
                    }};
                }};
                accessToken = "tempora";
                alt = "media";
                callback = "molestiae";
                fields = "minus";
                key = "placeat";
                oauthToken = "voluptatum";
                parent = "iusto";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "nisi";
                uploadProtocol = "recusandae";
            }}            

            DatalabelingProjectsAnnotationSpecSetsCreateResponse res = sdk.projects.datalabelingProjectsAnnotationSpecSetsCreate(req, new DatalabelingProjectsAnnotationSpecSetsCreateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatalabelingV1beta1AnnotationSpecSet.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->