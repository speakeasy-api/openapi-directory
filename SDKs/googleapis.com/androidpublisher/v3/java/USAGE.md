<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AndroidpublisherApplicationsDeviceTierConfigsCreateSecurity;
import org.openapis.openapi.models.operations.AndroidpublisherApplicationsDeviceTierConfigsCreateRequest;
import org.openapis.openapi.models.operations.AndroidpublisherApplicationsDeviceTierConfigsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DeviceTierConfigInput;
import org.openapis.openapi.models.shared.UserCountrySet;
import org.openapis.openapi.models.shared.DeviceTierSet;
import org.openapis.openapi.models.shared.DeviceTier;
import org.openapis.openapi.models.shared.DeviceGroup;
import org.openapis.openapi.models.shared.DeviceSelector;
import org.openapis.openapi.models.shared.SystemFeature;
import org.openapis.openapi.models.shared.DeviceId;
import org.openapis.openapi.models.shared.DeviceRam;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherApplicationsDeviceTierConfigsCreateRequest req = new AndroidpublisherApplicationsDeviceTierConfigsCreateRequest() {{
                dollarXgafv = "2";
                deviceTierConfigInput = new DeviceTierConfigInput() {{
                    deviceGroups = new org.openapis.openapi.models.shared.DeviceGroup[]{{
                        add(new DeviceGroup() {{
                            deviceSelectors = new org.openapis.openapi.models.shared.DeviceSelector[]{{
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "quibusdam";
                                        minBytes = "unde";
                                    }};
                                    excludedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "corrupti";
                                            buildDevice = "illum";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "vel";
                                            buildDevice = "error";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "deserunt";
                                            buildDevice = "suscipit";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "iure";
                                            buildDevice = "magnam";
                                        }}),
                                    }};
                                    forbiddenSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "ipsa";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "delectus";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "tempora";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "suscipit";
                                        }}),
                                    }};
                                    includedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "minus";
                                            buildDevice = "placeat";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "voluptatum";
                                            buildDevice = "iusto";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "nisi";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "recusandae";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "temporibus";
                                        }}),
                                    }};
                                }}),
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "ab";
                                        minBytes = "quis";
                                    }};
                                    excludedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "deserunt";
                                            buildDevice = "perferendis";
                                        }}),
                                    }};
                                    forbiddenSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "repellendus";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "sapiente";
                                        }}),
                                    }};
                                    includedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "odit";
                                            buildDevice = "at";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "at";
                                            buildDevice = "maiores";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "molestiae";
                                            buildDevice = "quod";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "quod";
                                            buildDevice = "esse";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "porro";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "dolorum";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "dicta";
                                        }}),
                                    }};
                                }}),
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "nam";
                                        minBytes = "officia";
                                    }};
                                    excludedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "fugit";
                                            buildDevice = "deleniti";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "hic";
                                            buildDevice = "optio";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "totam";
                                            buildDevice = "beatae";
                                        }}),
                                    }};
                                    forbiddenSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "molestiae";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "modi";
                                        }}),
                                    }};
                                    includedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "impedit";
                                            buildDevice = "cum";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "ipsum";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "excepturi";
                                        }}),
                                    }};
                                }}),
                            }};
                            name = "aspernatur";
                        }}),
                        add(new DeviceGroup() {{
                            deviceSelectors = new org.openapis.openapi.models.shared.DeviceSelector[]{{
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "ad";
                                        minBytes = "natus";
                                    }};
                                    excludedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "iste";
                                            buildDevice = "dolor";
                                        }}),
                                    }};
                                    forbiddenSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "laboriosam";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "hic";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "saepe";
                                        }}),
                                    }};
                                    includedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "in";
                                            buildDevice = "corporis";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "iste";
                                            buildDevice = "iure";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "saepe";
                                            buildDevice = "quidem";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "ipsa";
                                        }}),
                                    }};
                                }}),
                            }};
                            name = "reiciendis";
                        }}),
                        add(new DeviceGroup() {{
                            deviceSelectors = new org.openapis.openapi.models.shared.DeviceSelector[]{{
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "mollitia";
                                        minBytes = "laborum";
                                    }};
                                    excludedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "dolorem";
                                            buildDevice = "corporis";
                                        }}),
                                    }};
                                    forbiddenSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "nobis";
                                        }}),
                                    }};
                                    includedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "omnis";
                                            buildDevice = "nemo";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "minima";
                                            buildDevice = "excepturi";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "iure";
                                        }}),
                                    }};
                                }}),
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "culpa";
                                        minBytes = "doloribus";
                                    }};
                                    excludedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "architecto";
                                            buildDevice = "mollitia";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "dolorem";
                                            buildDevice = "culpa";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "consequuntur";
                                            buildDevice = "repellat";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "mollitia";
                                            buildDevice = "occaecati";
                                        }}),
                                    }};
                                    forbiddenSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "commodi";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "quam";
                                        }}),
                                    }};
                                    includedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "velit";
                                            buildDevice = "error";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "quia";
                                            buildDevice = "quis";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "laborum";
                                        }}),
                                    }};
                                }}),
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "animi";
                                        minBytes = "enim";
                                    }};
                                    excludedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "quo";
                                            buildDevice = "sequi";
                                        }}),
                                    }};
                                    forbiddenSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "ipsam";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "id";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "possimus";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "aut";
                                        }}),
                                    }};
                                    includedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "error";
                                            buildDevice = "temporibus";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "quasi";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "reiciendis";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "voluptatibus";
                                        }}),
                                    }};
                                }}),
                            }};
                            name = "vero";
                        }}),
                    }};
                    deviceTierSet = new DeviceTierSet() {{
                        deviceTiers = new org.openapis.openapi.models.shared.DeviceTier[]{{
                            add(new DeviceTier() {{
                                deviceGroupNames = new String[]{{
                                    add("voluptatibus"),
                                    add("ipsa"),
                                    add("omnis"),
                                }};
                                level = 451159;
                            }}),
                            add(new DeviceTier() {{
                                deviceGroupNames = new String[]{{
                                    add("perferendis"),
                                    add("doloremque"),
                                    add("reprehenderit"),
                                }};
                                level = 282807;
                            }}),
                        }};
                    }};
                    userCountrySets = new org.openapis.openapi.models.shared.UserCountrySet[]{{
                        add(new UserCountrySet() {{
                            countryCodes = new String[]{{
                                add("corporis"),
                            }};
                            name = "dolore";
                        }}),
                        add(new UserCountrySet() {{
                            countryCodes = new String[]{{
                                add("dicta"),
                                add("harum"),
                            }};
                            name = "enim";
                        }}),
                        add(new UserCountrySet() {{
                            countryCodes = new String[]{{
                                add("commodi"),
                                add("repudiandae"),
                                add("quae"),
                                add("ipsum"),
                            }};
                            name = "quidem";
                        }}),
                        add(new UserCountrySet() {{
                            countryCodes = new String[]{{
                                add("excepturi"),
                                add("pariatur"),
                                add("modi"),
                            }};
                            name = "praesentium";
                        }}),
                    }};
                }};
                accessToken = "rem";
                allowUnknownDevices = false;
                alt = "proto";
                callback = "quasi";
                fields = "repudiandae";
                key = "sint";
                oauthToken = "veritatis";
                packageName = "itaque";
                prettyPrint = false;
                quotaUser = "incidunt";
                uploadType = "enim";
                uploadProtocol = "consequatur";
            }}            

            AndroidpublisherApplicationsDeviceTierConfigsCreateResponse res = sdk.applications.androidpublisherApplicationsDeviceTierConfigsCreate(req, new AndroidpublisherApplicationsDeviceTierConfigsCreateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.deviceTierConfig.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->