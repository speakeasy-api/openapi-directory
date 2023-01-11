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

            ClouddeployProjectsLocationsDeliveryPipelinesCreateRequest req = new ClouddeployProjectsLocationsDeliveryPipelinesCreateRequest() {{
                security = new ClouddeployProjectsLocationsDeliveryPipelinesCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new ClouddeployProjectsLocationsDeliveryPipelinesCreatePathParams() {{
                    parent = "sit";
                }};
                queryParams = new ClouddeployProjectsLocationsDeliveryPipelinesCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    deliveryPipelineId = "dolor";
                    fields = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    requestId = "rerum";
                    uploadType = "dicta";
                    uploadProtocol = "debitis";
                    validateOnly = true;
                }};
                request = new DeliveryPipelineInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("ut", "dolorem");
                    }};
                    condition = new PipelineCondition() {{
                        pipelineReadyCondition = new PipelineReadyCondition() {{
                            status = false;
                            updateTime = "voluptate";
                        }};
                        targetsPresentCondition = new TargetsPresentCondition() {{
                            missingTargets = new String[]() {{
                                add("vitae"),
                                add("totam"),
                                add("dolores"),
                            }};
                            status = false;
                            updateTime = "debitis";
                        }};
                    }};
                    description = "vel";
                    etag = "odio";
                    labels = new java.util.HashMap<String, String>() {{
                        put("id", "aspernatur");
                        put("accusantium", "totam");
                    }};
                    name = "commodi";
                    serialPipeline = new SerialPipeline() {{
                        stages = new openapisdk.models.shared.Stage[]() {{
                            add(new Stage() {{
                                profiles = new String[]() {{
                                    add("aut"),
                                    add("odit"),
                                }};
                                strategy = new Strategy() {{
                                    standard = new Standard() {{
                                        verify = true;
                                    }};
                                }};
                                targetId = "voluptas";
                            }}),
                            add(new Stage() {{
                                profiles = new String[]() {{
                                    add("aut"),
                                    add("illo"),
                                }};
                                strategy = new Strategy() {{
                                    standard = new Standard() {{
                                        verify = false;
                                    }};
                                }};
                                targetId = "officiis";
                            }}),
                            add(new Stage() {{
                                profiles = new String[]() {{
                                    add("consectetur"),
                                    add("nobis"),
                                }};
                                strategy = new Strategy() {{
                                    standard = new Standard() {{
                                        verify = false;
                                    }};
                                }};
                                targetId = "qui";
                            }}),
                        }};
                    }};
                    suspended = true;
                }};
            }};

            ClouddeployProjectsLocationsDeliveryPipelinesCreateResponse res = sdk.projects.clouddeployProjectsLocationsDeliveryPipelinesCreate(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->