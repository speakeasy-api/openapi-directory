<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    parent = "sit";
                }};
                queryParams = new DatalabelingProjectsAnnotationSpecSetsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
                request = new GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest() {{
                    annotationSpecSet = new GoogleCloudDatalabelingV1beta1AnnotationSpecSet() {{
                        annotationSpecs = new openapisdk.models.shared.GoogleCloudDatalabelingV1beta1AnnotationSpec[]() {{
                            add(new GoogleCloudDatalabelingV1beta1AnnotationSpec() {{
                                description = "debitis";
                                displayName = "voluptatum";
                                index = 2339563716805116249;
                            }}),
                            add(new GoogleCloudDatalabelingV1beta1AnnotationSpec() {{
                                description = "ut";
                                displayName = "dolorem";
                                index = 7259475919510918339;
                            }}),
                            add(new GoogleCloudDatalabelingV1beta1AnnotationSpec() {{
                                description = "voluptate";
                                displayName = "iste";
                                index = 3930927879439176946;
                            }}),
                        }};
                        blockingResources = new String[]() {{
                            add("dolores"),
                            add("illum"),
                            add("debitis"),
                        }};
                        description = "vel";
                        displayName = "odio";
                        name = "dolore";
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