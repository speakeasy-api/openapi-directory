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

            AndroidpublisherApplicationsDeviceTierConfigsCreateRequest req = new AndroidpublisherApplicationsDeviceTierConfigsCreateRequest() {{
                security = new AndroidpublisherApplicationsDeviceTierConfigsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new AndroidpublisherApplicationsDeviceTierConfigsCreatePathParams() {{
                    packageName = "sit";
                }};
                queryParams = new AndroidpublisherApplicationsDeviceTierConfigsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    allowUnknownDevices = false;
                    alt = "proto";
                    callback = "dolor";
                    fields = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    uploadType = "rerum";
                    uploadProtocol = "dicta";
                }};
                request = new DeviceTierConfigInput() {{
                    deviceGroups = new openapisdk.models.shared.DeviceGroup[]() {{
                        add(new DeviceGroup() {{
                            deviceSelectors = new openapisdk.models.shared.DeviceSelector[]() {{
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "et";
                                        minBytes = "ut";
                                    }};
                                    excludedDeviceIds = new openapisdk.models.shared.DeviceId[]() {{
                                        add(new DeviceId() {{
                                            buildBrand = "et";
                                            buildDevice = "voluptate";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "iste";
                                            buildDevice = "vitae";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "totam";
                                            buildDevice = "dolores";
                                        }}),
                                    }};
                                    forbiddenSystemFeatures = new openapisdk.models.shared.SystemFeature[]() {{
                                        add(new SystemFeature() {{
                                            name = "debitis";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "vel";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "odio";
                                        }}),
                                    }};
                                    includedDeviceIds = new openapisdk.models.shared.DeviceId[]() {{
                                        add(new DeviceId() {{
                                            buildBrand = "id";
                                            buildDevice = "aspernatur";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "accusantium";
                                            buildDevice = "totam";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new openapisdk.models.shared.SystemFeature[]() {{
                                        add(new SystemFeature() {{
                                            name = "quis";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "est";
                                        }}),
                                    }};
                                }}),
                            }};
                            name = "aut";
                        }}),
                    }};
                    deviceTierSet = new DeviceTierSet() {{
                        deviceTiers = new openapisdk.models.shared.DeviceTier[]() {{
                            add(new DeviceTier() {{
                                deviceGroupNames = new String[]() {{
                                    add("voluptas"),
                                    add("omnis"),
                                    add("aut"),
                                }};
                                level = 6972732843819909978;
                            }}),
                            add(new DeviceTier() {{
                                deviceGroupNames = new String[]() {{
                                    add("officiis"),
                                    add("autem"),
                                    add("consectetur"),
                                }};
                                level = 8683452355129068124;
                            }}),
                        }};
                    }};
                }};
            }};

            AndroidpublisherApplicationsDeviceTierConfigsCreateResponse res = sdk.applications.androidpublisherApplicationsDeviceTierConfigsCreate(req);

            if (res.deviceTierConfig.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->