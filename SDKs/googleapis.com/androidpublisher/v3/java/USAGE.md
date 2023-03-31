<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AndroidpublisherApplicationsDeviceTierConfigsCreateSecurity;
import org.openapis.openapi.models.operations.AndroidpublisherApplicationsDeviceTierConfigsCreatePathParams;
import org.openapis.openapi.models.operations.AndroidpublisherApplicationsDeviceTierConfigsCreateQueryParams;
import org.openapis.openapi.models.operations.AndroidpublisherApplicationsDeviceTierConfigsCreateRequest;
import org.openapis.openapi.models.operations.AndroidpublisherApplicationsDeviceTierConfigsCreateResponse;
import org.openapis.openapi.models.shared.DeviceTierConfigInput;
import org.openapis.openapi.models.shared.UserCountrySet;
import org.openapis.openapi.models.shared.DeviceTierSet;
import org.openapis.openapi.models.shared.DeviceTier;
import org.openapis.openapi.models.shared.DeviceGroup;
import org.openapis.openapi.models.shared.DeviceSelector;
import org.openapis.openapi.models.shared.SystemFeature;
import org.openapis.openapi.models.shared.DeviceId;
import org.openapis.openapi.models.shared.DeviceRam;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    packageName = "corrupti";
                }};
                queryParams = new AndroidpublisherApplicationsDeviceTierConfigsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    allowUnknownDevices = false;
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new DeviceTierConfigInput() {{
                    deviceGroups = new org.openapis.openapi.models.shared.DeviceGroup[]{{
                        add(new DeviceGroup() {{
                            deviceSelectors = new org.openapis.openapi.models.shared.DeviceSelector[]{{
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "magnam";
                                        minBytes = "debitis";
                                    }};
                                    excludedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "delectus";
                                            buildDevice = "tempora";
                                        }}),
                                    }};
                                    forbiddenSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "molestiae";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "minus";
                                        }}),
                                    }};
                                    includedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "voluptatum";
                                            buildDevice = "iusto";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "excepturi";
                                            buildDevice = "nisi";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "recusandae";
                                            buildDevice = "temporibus";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "ab";
                                            buildDevice = "quis";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "deserunt";
                                        }}),
                                    }};
                                }}),
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "perferendis";
                                        minBytes = "ipsam";
                                    }};
                                    excludedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "sapiente";
                                            buildDevice = "quo";
                                        }}),
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
                                    }};
                                    forbiddenSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "esse";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "totam";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "porro";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "dolorum";
                                        }}),
                                    }};
                                    includedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "nam";
                                            buildDevice = "officia";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "fugit";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "deleniti";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "hic";
                                        }}),
                                    }};
                                }}),
                            }};
                            name = "optio";
                        }}),
                        add(new DeviceGroup() {{
                            deviceSelectors = new org.openapis.openapi.models.shared.DeviceSelector[]{{
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "beatae";
                                        minBytes = "commodi";
                                    }};
                                    excludedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "modi";
                                            buildDevice = "qui";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "impedit";
                                            buildDevice = "cum";
                                        }}),
                                    }};
                                    forbiddenSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "ipsum";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "excepturi";
                                        }}),
                                    }};
                                    includedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "perferendis";
                                            buildDevice = "ad";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "sed";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "iste";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "dolor";
                                        }}),
                                    }};
                                }}),
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "natus";
                                        minBytes = "laboriosam";
                                    }};
                                    excludedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "saepe";
                                            buildDevice = "fuga";
                                        }}),
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
                                    forbiddenSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "ipsa";
                                        }}),
                                    }};
                                    includedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "est";
                                            buildDevice = "mollitia";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "laborum";
                                            buildDevice = "dolores";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "dolorem";
                                            buildDevice = "corporis";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "explicabo";
                                            buildDevice = "nobis";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "omnis";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "nemo";
                                        }}),
                                    }};
                                }}),
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "minima";
                                        minBytes = "excepturi";
                                    }};
                                    excludedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "iure";
                                            buildDevice = "culpa";
                                        }}),
                                    }};
                                    forbiddenSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "sapiente";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "architecto";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "mollitia";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "dolorem";
                                        }}),
                                    }};
                                    includedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "consequuntur";
                                            buildDevice = "repellat";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "mollitia";
                                            buildDevice = "occaecati";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "numquam";
                                            buildDevice = "commodi";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "molestiae";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "velit";
                                        }}),
                                    }};
                                }}),
                            }};
                            name = "error";
                        }}),
                    }};
                    deviceTierSet = new DeviceTierSet() {{
                        deviceTiers = new org.openapis.openapi.models.shared.DeviceTier[]{{
                            add(new DeviceTier() {{
                                deviceGroupNames = new String[]{{
                                    add("vitae"),
                                    add("laborum"),
                                }};
                                level = 656330;
                            }}),
                        }};
                    }};
                    userCountrySets = new org.openapis.openapi.models.shared.UserCountrySet[]{{
                        add(new UserCountrySet() {{
                            countryCodes = new String[]{{
                                add("quo"),
                            }};
                            name = "sequi";
                        }}),
                        add(new UserCountrySet() {{
                            countryCodes = new String[]{{
                                add("ipsam"),
                                add("id"),
                                add("possimus"),
                                add("aut"),
                            }};
                            name = "quasi";
                        }}),
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