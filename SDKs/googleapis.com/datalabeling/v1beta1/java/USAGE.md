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
                    parent = "doloribus";
                }};
                queryParams = new DatalabelingProjectsAnnotationSpecSetsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "expedita";
                    alt = "media";
                    callback = "eos";
                    fields = "et";
                    key = "eaque";
                    oauthToken = "blanditiis";
                    prettyPrint = false;
                    quotaUser = "est";
                    uploadType = "expedita";
                    uploadProtocol = "aut";
                }};
                request = new GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest() {{
                    annotationSpecSet = new GoogleCloudDatalabelingV1beta1AnnotationSpecSet() {{
                        annotationSpecs = new openapisdk.models.shared.GoogleCloudDatalabelingV1beta1AnnotationSpec[]() {{
                            add(new GoogleCloudDatalabelingV1beta1AnnotationSpec() {{
                                description = "necessitatibus";
                                displayName = "reprehenderit";
                                index = 5104645972237816757;
                            }}),
                            add(new GoogleCloudDatalabelingV1beta1AnnotationSpec() {{
                                description = "suscipit";
                                displayName = "dolores";
                                index = 2030713232457923632;
                            }}),
                            add(new GoogleCloudDatalabelingV1beta1AnnotationSpec() {{
                                description = "doloribus";
                                displayName = "rerum";
                                index = 446862703991005078;
                            }}),
                        }};
                        blockingResources = new String[]() {{
                            add("recusandae"),
                            add("aliquid"),
                        }};
                        description = "accusamus";
                        displayName = "culpa";
                        name = "consequatur";
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