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
                            state = "DISABLED";
                        }}),
                    }};
                    availableVersion = new openapisdk.models.shared.Version[]() {{
                        add(new Version() {{
                            availableFeatures = new String[]() {{
                                add("et"),
                                add("voluptate"),
                                add("iste"),
                            }};
                            defaultVersion = true;
                            type = "TYPE_GENERAL_AVAILABILITY";
                            versionNumber = "dolores";
                        }}),
                        add(new Version() {{
                            availableFeatures = new String[]() {{
                                add("debitis"),
                                add("vel"),
                                add("odio"),
                            }};
                            defaultVersion = true;
                            type = "TYPE_PREVIEW";
                            versionNumber = "aspernatur";
                        }}),
                        add(new Version() {{
                            availableFeatures = new String[]() {{
                                add("totam"),
                                add("commodi"),
                                add("quis"),
                            }};
                            defaultVersion = false;
                            type = "TYPE_GENERAL_AVAILABILITY";
                            versionNumber = "odit";
                        }}),
                    }};
                    cryptoKeyConfig = new CryptoKeyConfig() {{
                        keyReference = "non";
                    }};
                    dataprocServiceAccount = "voluptas";
                    description = "omnis";
                    displayName = "aut";
                    enableRbac = true;
                    enableStackdriverLogging = false;
                    enableStackdriverMonitoring = false;
                    eventPublishConfig = new EventPublishConfig() {{
                        enabled = true;
                        topic = "consectetur";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("odio", "qui");
                    }};
                    networkConfig = new NetworkConfig() {{
                        ipAllocation = "recusandae";
                        network = "at";
                    }};
                    options = new java.util.HashMap<String, String>() {{
                        put("eveniet", "modi");
                    }};
                    privateInstance = true;
                    type = "BASIC";
                    version = "ut";
                    zone = "exercitationem";
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