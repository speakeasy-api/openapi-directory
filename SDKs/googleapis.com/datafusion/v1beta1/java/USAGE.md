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
                    parent = "enim";
                }};
                queryParams = new DatafusionProjectsLocationsInstancesCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "occaecati";
                    alt = "media";
                    callback = "praesentium";
                    fields = "illo";
                    instanceId = "ab";
                    key = "distinctio";
                    oauthToken = "minus";
                    prettyPrint = false;
                    quotaUser = "excepturi";
                    uploadType = "accusantium";
                    uploadProtocol = "alias";
                }};
                request = new InstanceInput() {{
                    accelerators = new openapisdk.models.shared.Accelerator[]() {{
                        add(new Accelerator() {{
                            acceleratorType = "CDC";
                        }}),
                    }};
                    availableVersion = new openapisdk.models.shared.Version[]() {{
                        add(new Version() {{
                            availableFeatures = new String[]() {{
                                add("voluptatibus"),
                                add("soluta"),
                            }};
                            defaultVersion = true;
                            type = "TYPE_UNSPECIFIED";
                            versionNumber = "error";
                        }}),
                    }};
                    cryptoKeyConfig = new CryptoKeyConfig() {{
                        keyReference = "aut";
                    }};
                    dataprocServiceAccount = "aut";
                    description = "consectetur";
                    displayName = "autem";
                    enableRbac = true;
                    enableStackdriverLogging = true;
                    enableStackdriverMonitoring = true;
                    eventPublishConfig = new EventPublishConfig() {{
                        enabled = false;
                        topic = "laudantium";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("et", "beatae");
                    }};
                    networkConfig = new NetworkConfig() {{
                        ipAllocation = "facere";
                        network = "placeat";
                    }};
                    options = new java.util.HashMap<String, String>() {{
                        put("aut", "et");
                        put("voluptatem", "deleniti");
                        put("enim", "saepe");
                    }};
                    privateInstance = true;
                    type = "BASIC";
                    version = "non";
                    zone = "iusto";
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