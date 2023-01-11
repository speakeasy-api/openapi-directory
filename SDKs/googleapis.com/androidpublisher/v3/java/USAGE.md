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
                    packageName = "veritatis";
                }};
                queryParams = new AndroidpublisherApplicationsDeviceTierConfigsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "eum";
                    allowUnknownDevices = false;
                    alt = "proto";
                    callback = "deleniti";
                    fields = "libero";
                    key = "saepe";
                    oauthToken = "et";
                    prettyPrint = false;
                    quotaUser = "a";
                    uploadType = "illum";
                    uploadProtocol = "numquam";
                }};
                request = new DeviceTierConfigInput() {{
                    deviceGroups = new openapisdk.models.shared.DeviceGroup[]() {{
                        add(new DeviceGroup() {{
                            deviceSelectors = new openapisdk.models.shared.DeviceSelector[]() {{
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "voluptatibus";
                                        minBytes = "sint";
                                    }};
                                    excludedDeviceIds = new openapisdk.models.shared.DeviceId[]() {{
                                        add(new DeviceId() {{
                                            buildBrand = "repudiandae";
                                            buildDevice = "quo";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "omnis";
                                            buildDevice = "adipisci";
                                        }}),
                                    }};
                                    forbiddenSystemFeatures = new openapisdk.models.shared.SystemFeature[]() {{
                                        add(new SystemFeature() {{
                                            name = "qui";
                                        }}),
                                    }};
                                    includedDeviceIds = new openapisdk.models.shared.DeviceId[]() {{
                                        add(new DeviceId() {{
                                            buildBrand = "in";
                                            buildDevice = "et";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "est";
                                            buildDevice = "eos";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "quas";
                                            buildDevice = "commodi";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new openapisdk.models.shared.SystemFeature[]() {{
                                        add(new SystemFeature() {{
                                            name = "ex";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "aut";
                                        }}),
                                    }};
                                }}),
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "deleniti";
                                        minBytes = "quam";
                                    }};
                                    excludedDeviceIds = new openapisdk.models.shared.DeviceId[]() {{
                                        add(new DeviceId() {{
                                            buildBrand = "est";
                                            buildDevice = "aperiam";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "molestiae";
                                            buildDevice = "molestias";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "magnam";
                                            buildDevice = "voluptatem";
                                        }}),
                                    }};
                                    forbiddenSystemFeatures = new openapisdk.models.shared.SystemFeature[]() {{
                                        add(new SystemFeature() {{
                                            name = "et";
                                        }}),
                                    }};
                                    includedDeviceIds = new openapisdk.models.shared.DeviceId[]() {{
                                        add(new DeviceId() {{
                                            buildBrand = "error";
                                            buildDevice = "praesentium";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "et";
                                            buildDevice = "ratione";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "est";
                                            buildDevice = "in";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new openapisdk.models.shared.SystemFeature[]() {{
                                        add(new SystemFeature() {{
                                            name = "dolores";
                                        }}),
                                    }};
                                }}),
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "perferendis";
                                        minBytes = "laboriosam";
                                    }};
                                    excludedDeviceIds = new openapisdk.models.shared.DeviceId[]() {{
                                        add(new DeviceId() {{
                                            buildBrand = "necessitatibus";
                                            buildDevice = "aperiam";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "veniam";
                                            buildDevice = "velit";
                                        }}),
                                    }};
                                    forbiddenSystemFeatures = new openapisdk.models.shared.SystemFeature[]() {{
                                        add(new SystemFeature() {{
                                            name = "hic";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "quis";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "sunt";
                                        }}),
                                    }};
                                    includedDeviceIds = new openapisdk.models.shared.DeviceId[]() {{
                                        add(new DeviceId() {{
                                            buildBrand = "eveniet";
                                            buildDevice = "veniam";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "reiciendis";
                                            buildDevice = "non";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "dolor";
                                            buildDevice = "maiores";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new openapisdk.models.shared.SystemFeature[]() {{
                                        add(new SystemFeature() {{
                                            name = "pariatur";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "ad";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "aperiam";
                                        }}),
                                    }};
                                }}),
                            }};
                            name = "earum";
                        }}),
                        add(new DeviceGroup() {{
                            deviceSelectors = new openapisdk.models.shared.DeviceSelector[]() {{
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "earum";
                                        minBytes = "est";
                                    }};
                                    excludedDeviceIds = new openapisdk.models.shared.DeviceId[]() {{
                                        add(new DeviceId() {{
                                            buildBrand = "ipsa";
                                            buildDevice = "sint";
                                        }}),
                                    }};
                                    forbiddenSystemFeatures = new openapisdk.models.shared.SystemFeature[]() {{
                                        add(new SystemFeature() {{
                                            name = "qui";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "mollitia";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "neque";
                                        }}),
                                    }};
                                    includedDeviceIds = new openapisdk.models.shared.DeviceId[]() {{
                                        add(new DeviceId() {{
                                            buildBrand = "ab";
                                            buildDevice = "dolore";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new openapisdk.models.shared.SystemFeature[]() {{
                                        add(new SystemFeature() {{
                                            name = "saepe";
                                        }}),
                                    }};
                                }}),
                            }};
                            name = "enim";
                        }}),
                        add(new DeviceGroup() {{
                            deviceSelectors = new openapisdk.models.shared.DeviceSelector[]() {{
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "rerum";
                                        minBytes = "et";
                                    }};
                                    excludedDeviceIds = new openapisdk.models.shared.DeviceId[]() {{
                                        add(new DeviceId() {{
                                            buildBrand = "occaecati";
                                            buildDevice = "eum";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "ut";
                                            buildDevice = "assumenda";
                                        }}),
                                    }};
                                    forbiddenSystemFeatures = new openapisdk.models.shared.SystemFeature[]() {{
                                        add(new SystemFeature() {{
                                            name = "aut";
                                        }}),
                                    }};
                                    includedDeviceIds = new openapisdk.models.shared.DeviceId[]() {{
                                        add(new DeviceId() {{
                                            buildBrand = "amet";
                                            buildDevice = "et";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "iusto";
                                            buildDevice = "voluptatem";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "nesciunt";
                                            buildDevice = "natus";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new openapisdk.models.shared.SystemFeature[]() {{
                                        add(new SystemFeature() {{
                                            name = "et";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "quod";
                                        }}),
                                    }};
                                }}),
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "autem";
                                        minBytes = "quod";
                                    }};
                                    excludedDeviceIds = new openapisdk.models.shared.DeviceId[]() {{
                                        add(new DeviceId() {{
                                            buildBrand = "nostrum";
                                            buildDevice = "repudiandae";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "dicta";
                                            buildDevice = "vero";
                                        }}),
                                    }};
                                    forbiddenSystemFeatures = new openapisdk.models.shared.SystemFeature[]() {{
                                        add(new SystemFeature() {{
                                            name = "delectus";
                                        }}),
                                    }};
                                    includedDeviceIds = new openapisdk.models.shared.DeviceId[]() {{
                                        add(new DeviceId() {{
                                            buildBrand = "deleniti";
                                            buildDevice = "omnis";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "eius";
                                            buildDevice = "consequuntur";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new openapisdk.models.shared.SystemFeature[]() {{
                                        add(new SystemFeature() {{
                                            name = "laudantium";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "similique";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "ullam";
                                        }}),
                                    }};
                                }}),
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "quis";
                                        minBytes = "facilis";
                                    }};
                                    excludedDeviceIds = new openapisdk.models.shared.DeviceId[]() {{
                                        add(new DeviceId() {{
                                            buildBrand = "aut";
                                            buildDevice = "id";
                                        }}),
                                    }};
                                    forbiddenSystemFeatures = new openapisdk.models.shared.SystemFeature[]() {{
                                        add(new SystemFeature() {{
                                            name = "dicta";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "quis";
                                        }}),
                                    }};
                                    includedDeviceIds = new openapisdk.models.shared.DeviceId[]() {{
                                        add(new DeviceId() {{
                                            buildBrand = "aliquam";
                                            buildDevice = "quos";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "omnis";
                                            buildDevice = "illum";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new openapisdk.models.shared.SystemFeature[]() {{
                                        add(new SystemFeature() {{
                                            name = "id";
                                        }}),
                                    }};
                                }}),
                            }};
                            name = "blanditiis";
                        }}),
                    }};
                    deviceTierSet = new DeviceTierSet() {{
                        deviceTiers = new openapisdk.models.shared.DeviceTier[]() {{
                            add(new DeviceTier() {{
                                deviceGroupNames = new String[]() {{
                                    add("aut"),
                                    add("adipisci"),
                                }};
                                level = 3214739643573370622;
                            }}),
                            add(new DeviceTier() {{
                                deviceGroupNames = new String[]() {{
                                    add("in"),
                                    add("fuga"),
                                    add("nemo"),
                                }};
                                level = 7802801472849929626;
                            }}),
                            add(new DeviceTier() {{
                                deviceGroupNames = new String[]() {{
                                    add("architecto"),
                                    add("ratione"),
                                }};
                                level = 5969817432109258462;
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