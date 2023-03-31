<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DatalabelingProjectsAnnotationSpecSetsCreateSecurity;
import org.openapis.openapi.models.operations.DatalabelingProjectsAnnotationSpecSetsCreatePathParams;
import org.openapis.openapi.models.operations.DatalabelingProjectsAnnotationSpecSetsCreateQueryParams;
import org.openapis.openapi.models.operations.DatalabelingProjectsAnnotationSpecSetsCreateRequest;
import org.openapis.openapi.models.operations.DatalabelingProjectsAnnotationSpecSetsCreateResponse;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1AnnotationSpecSet;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1AnnotationSpec;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalabelingProjectsAnnotationSpecSetsCreateRequest req = new DatalabelingProjectsAnnotationSpecSetsCreateRequest() {{
                security = new DatalabelingProjectsAnnotationSpecSetsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new DatalabelingProjectsAnnotationSpecSetsCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new DatalabelingProjectsAnnotationSpecSetsCreateQueryParams() {{
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
                request = new GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest() {{
                    annotationSpecSet = new GoogleCloudDatalabelingV1beta1AnnotationSpecSet() {{
                        annotationSpecs = new org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1AnnotationSpec[]{{
                            add(new GoogleCloudDatalabelingV1beta1AnnotationSpec() {{
                                description = "iure";
                                displayName = "magnam";
                                index = 891773;
                            }}),
                            add(new GoogleCloudDatalabelingV1beta1AnnotationSpec() {{
                                description = "ipsa";
                                displayName = "delectus";
                                index = 272656;
                            }}),
                        }};
                        blockingResources = new String[]{{
                            add("molestiae"),
                            add("minus"),
                        }};
                        description = "placeat";
                        displayName = "voluptatum";
                        name = "iusto";
                    }};
                }};
            }};            

            DatalabelingProjectsAnnotationSpecSetsCreateResponse res = sdk.projects.datalabelingProjectsAnnotationSpecSetsCreate(req);

            if (res.googleCloudDatalabelingV1beta1AnnotationSpecSet.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->