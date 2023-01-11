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
                    parent = "sit";
                }};
                queryParams = new DatafusionProjectsLocationsInstancesCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    instanceId = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    uploadType = "rerum";
                    uploadProtocol = "dicta";
                }};
                request = new InstanceInput() {{
                    accelerators = new openapisdk.models.shared.Accelerator[]() {{
                        add(new Accelerator() {{
                            acceleratorType = "ACCELERATOR_TYPE_UNSPECIFIED";
                        }}),
                    }};
                    availableVersion = new openapisdk.models.shared.Version[]() {{
                        add(new Version() {{
                            availableFeatures = new String[]() {{
                                add("dolorem"),
                                add("et"),
                                add("voluptate"),
                            }};
                            defaultVersion = true;
                            type = "TYPE_UNSPECIFIED";
                            versionNumber = "totam";
                        }}),
                    }};
                    cryptoKeyConfig = new CryptoKeyConfig() {{
                        keyReference = "dolores";
                    }};
                    dataprocServiceAccount = "illum";
                    description = "debitis";
                    displayName = "vel";
                    enableRbac = false;
                    enableStackdriverLogging = true;
                    enableStackdriverMonitoring = false;
                    eventPublishConfig = new EventPublishConfig() {{
                        enabled = true;
                        topic = "accusantium";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("commodi", "quis");
                        put("est", "aut");
                        put("odit", "non");
                    }};
                    networkConfig = new NetworkConfig() {{
                        ipAllocation = "voluptas";
                        network = "omnis";
                    }};
                    options = new java.util.HashMap<String, String>() {{
                        put("illo", "sed");
                    }};
                    privateInstance = false;
                    type = "DEVELOPER";
                    version = "consectetur";
                    zone = "nobis";
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