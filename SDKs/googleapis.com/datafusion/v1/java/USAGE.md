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

            DatafusionProjectsLocationsInstancesCreateRequest req = new DatafusionProjectsLocationsInstancesCreateRequest() {{
                security = new DatafusionProjectsLocationsInstancesCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new DatafusionProjectsLocationsInstancesCreatePathParams() {{
                    parent = "quis";
                }};
                queryParams = new DatafusionProjectsLocationsInstancesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "debitis";
                    alt = "json";
                    callback = "veniam";
                    fields = "quae";
                    instanceId = "nisi";
                    key = "voluptatem";
                    oauthToken = "in";
                    prettyPrint = true;
                    quotaUser = "est";
                    uploadType = "vero";
                    uploadProtocol = "autem";
                }};
                request = new InstanceInput() {{
                    accelerators = new openapisdk.models.shared.Accelerator[]() {{
                        add(new Accelerator() {{
                            acceleratorType = "ACCELERATOR_TYPE_UNSPECIFIED";
                            state = "UNKNOWN";
                        }}),
                        add(new Accelerator() {{
                            acceleratorType = "CCAI_INSIGHTS";
                            state = "ENABLED";
                        }}),
                        add(new Accelerator() {{
                            acceleratorType = "CDC";
                            state = "ENABLED";
                        }}),
                    }};
                    availableVersion = new openapisdk.models.shared.Version[]() {{
                        add(new Version() {{
                            availableFeatures = new String[]() {{
                                add("quam"),
                                add("ipsa"),
                                add("delectus"),
                            }};
                            defaultVersion = true;
                            type = "TYPE_GENERAL_AVAILABILITY";
                            versionNumber = "eum";
                        }}),
                        add(new Version() {{
                            availableFeatures = new String[]() {{
                                add("nihil"),
                                add("est"),
                            }};
                            defaultVersion = true;
                            type = "TYPE_GENERAL_AVAILABILITY";
                            versionNumber = "eaque";
                        }}),
                        add(new Version() {{
                            availableFeatures = new String[]() {{
                                add("corporis"),
                                add("exercitationem"),
                            }};
                            defaultVersion = false;
                            type = "TYPE_UNSPECIFIED";
                            versionNumber = "ut";
                        }}),
                    }};
                    cryptoKeyConfig = new CryptoKeyConfig() {{
                        keyReference = "quisquam";
                    }};
                    dataprocServiceAccount = "eaque";
                    description = "nemo";
                    displayName = "corrupti";
                    enableRbac = false;
                    enableStackdriverLogging = false;
                    enableStackdriverMonitoring = true;
                    eventPublishConfig = new EventPublishConfig() {{
                        enabled = false;
                        topic = "assumenda";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("et", "atque");
                        put("vero", "molestiae");
                        put("aliquam", "consequatur");
                    }};
                    networkConfig = new NetworkConfig() {{
                        ipAllocation = "dolor";
                        network = "placeat";
                    }};
                    options = new java.util.HashMap<String, String>() {{
                        put("temporibus", "odio");
                        put("quo", "enim");
                    }};
                    privateInstance = false;
                    type = "BASIC";
                    version = "atque";
                    zone = "suscipit";
                }};
            }};

            DatafusionProjectsLocationsInstancesCreateResponse res = sdk.projects.datafusionProjectsLocationsInstancesCreate(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->