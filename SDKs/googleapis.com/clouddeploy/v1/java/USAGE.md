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
                    parent = "ab";
                }};
                queryParams = new ClouddeployProjectsLocationsDeliveryPipelinesCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "enim";
                    alt = "json";
                    callback = "necessitatibus";
                    deliveryPipelineId = "vero";
                    fields = "hic";
                    key = "alias";
                    oauthToken = "id";
                    prettyPrint = true;
                    quotaUser = "doloribus";
                    requestId = "facilis";
                    uploadType = "occaecati";
                    uploadProtocol = "iste";
                    validateOnly = false;
                }};
                request = new DeliveryPipelineInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("tenetur", "mollitia");
                        put("veniam", "eum");
                    }};
                    condition = new PipelineCondition() {{
                        pipelineReadyCondition = new PipelineReadyCondition() {{
                            status = false;
                            updateTime = "et";
                        }};
                        targetsPresentCondition = new TargetsPresentCondition() {{
                            missingTargets = new String[]() {{
                                add("adipisci"),
                                add("quod"),
                                add("sed"),
                            }};
                            status = true;
                            updateTime = "ipsum";
                        }};
                    }};
                    description = "saepe";
                    etag = "velit";
                    labels = new java.util.HashMap<String, String>() {{
                        put("corrupti", "dolor");
                        put("itaque", "rem");
                    }};
                    name = "temporibus";
                    serialPipeline = new SerialPipeline() {{
                        stages = new openapisdk.models.shared.Stage[]() {{
                            add(new Stage() {{
                                profiles = new String[]() {{
                                    add("adipisci"),
                                }};
                                strategy = new Strategy() {{
                                    standard = new Standard() {{
                                        verify = false;
                                    }};
                                }};
                                targetId = "et";
                            }}),
                        }};
                    }};
                    suspended = false;
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