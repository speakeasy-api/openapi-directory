# applications

### Available Operations

* [androidpublisherApplicationsDeviceTierConfigsCreate](#androidpublisherapplicationsdevicetierconfigscreate) - Creates a new device tier config for an app.
* [androidpublisherApplicationsDeviceTierConfigsGet](#androidpublisherapplicationsdevicetierconfigsget) - Returns a particular device tier config.
* [androidpublisherApplicationsDeviceTierConfigsList](#androidpublisherapplicationsdevicetierconfigslist) - Returns created device tier configs, ordered by descending creation time.

## androidpublisherApplicationsDeviceTierConfigsCreate

Creates a new device tier config for an app.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherApplicationsDeviceTierConfigsCreateRequest;
import org.openapis.openapi.models.operations.AndroidpublisherApplicationsDeviceTierConfigsCreateResponse;
import org.openapis.openapi.models.operations.AndroidpublisherApplicationsDeviceTierConfigsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DeviceGroup;
import org.openapis.openapi.models.shared.DeviceId;
import org.openapis.openapi.models.shared.DeviceRam;
import org.openapis.openapi.models.shared.DeviceSelector;
import org.openapis.openapi.models.shared.DeviceTier;
import org.openapis.openapi.models.shared.DeviceTierConfigInput;
import org.openapis.openapi.models.shared.DeviceTierSet;
import org.openapis.openapi.models.shared.SystemFeature;
import org.openapis.openapi.models.shared.UserCountrySet;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherApplicationsDeviceTierConfigsCreateRequest req = new AndroidpublisherApplicationsDeviceTierConfigsCreateRequest("alias") {{
                dollarXgafv = XgafvEnum.TWO;
                deviceTierConfigInput = new DeviceTierConfigInput() {{
                    deviceGroups = new org.openapis.openapi.models.shared.DeviceGroup[]{{
                        add(new DeviceGroup() {{
                            deviceSelectors = new org.openapis.openapi.models.shared.DeviceSelector[]{{
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "vel";
                                        minBytes = "quod";
                                    }};
                                    excludedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "qui";
                                            buildDevice = "dolorum";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "a";
                                            buildDevice = "esse";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "harum";
                                            buildDevice = "iusto";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "ipsum";
                                            buildDevice = "quisquam";
                                        }}),
                                    }};
                                    forbiddenSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "Kelli Thompson";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "Jeannie Leannon MD";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "Jane Kassulke";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "Darryl Emard";
                                        }}),
                                    }};
                                    includedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "maxime";
                                            buildDevice = "pariatur";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "soluta";
                                            buildDevice = "dicta";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "laborum";
                                            buildDevice = "totam";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "Bonnie Raynor";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "Felicia Spencer";
                                        }}),
                                    }};
                                }}),
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "fugit";
                                        minBytes = "magni";
                                    }};
                                    excludedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "sunt";
                                            buildDevice = "ullam";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "nam";
                                            buildDevice = "hic";
                                        }}),
                                    }};
                                    forbiddenSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "Dr. Dominic Rohan";
                                        }}),
                                    }};
                                    includedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "nobis";
                                            buildDevice = "quos";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "Kevin Willms";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "Mr. Josephine Pagac V";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "William Ortiz";
                                        }}),
                                    }};
                                }}),
                            }};
                            name = "Alexander Prosacco";
                        }}),
                        add(new DeviceGroup() {{
                            deviceSelectors = new org.openapis.openapi.models.shared.DeviceSelector[]{{
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "laudantium";
                                        minBytes = "odio";
                                    }};
                                    excludedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "voluptatibus";
                                            buildDevice = "quisquam";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "vero";
                                            buildDevice = "omnis";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "quis";
                                            buildDevice = "ipsum";
                                        }}),
                                    }};
                                    forbiddenSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "Victoria Thiel";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "Kelvin Schmidt";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "Hugo Kuphal";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "Earl Mosciski DVM";
                                        }}),
                                    }};
                                    includedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "nulla";
                                            buildDevice = "fugit";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "porro";
                                            buildDevice = "maiores";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "Miss Vicky Kuphal";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "Terri Collins";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "Paula Jacobs I";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "Ryan Jaskolski";
                                        }}),
                                    }};
                                }}),
                            }};
                            name = "Gordon Willms";
                        }}),
                    }};
                    deviceTierSet = new DeviceTierSet() {{
                        deviceTiers = new org.openapis.openapi.models.shared.DeviceTier[]{{
                            add(new DeviceTier() {{
                                deviceGroupNames = new String[]{{
                                    add("corporis"),
                                    add("veniam"),
                                    add("aliquid"),
                                    add("inventore"),
                                }};
                                level = 301831;
                            }}),
                            add(new DeviceTier() {{
                                deviceGroupNames = new String[]{{
                                    add("quo"),
                                    add("consectetur"),
                                }};
                                level = 926213;
                            }}),
                        }};
                    }};;
                    userCountrySets = new org.openapis.openapi.models.shared.UserCountrySet[]{{
                        add(new UserCountrySet() {{
                            countryCodes = new String[]{{
                                add("eaque"),
                                add("a"),
                            }};
                            name = "Richard Anderson";
                        }}),
                    }};
                }};;
                accessToken = "aliquam";
                allowUnknownDevices = false;
                alt = AltEnum.JSON;
                callback = "accusamus";
                fields = "inventore";
                key = "non";
                oauthToken = "et";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "laborum";
                uploadProtocol = "placeat";
            }};            

            AndroidpublisherApplicationsDeviceTierConfigsCreateResponse res = sdk.applications.androidpublisherApplicationsDeviceTierConfigsCreate(req, new AndroidpublisherApplicationsDeviceTierConfigsCreateSecurity("velit", "eum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.deviceTierConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherApplicationsDeviceTierConfigsGet

Returns a particular device tier config.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherApplicationsDeviceTierConfigsGetRequest;
import org.openapis.openapi.models.operations.AndroidpublisherApplicationsDeviceTierConfigsGetResponse;
import org.openapis.openapi.models.operations.AndroidpublisherApplicationsDeviceTierConfigsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherApplicationsDeviceTierConfigsGetRequest req = new AndroidpublisherApplicationsDeviceTierConfigsGetRequest("autem", "nobis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "assumenda";
                alt = AltEnum.PROTO;
                callback = "voluptas";
                fields = "libero";
                key = "quasi";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "numquam";
                uploadType = "explicabo";
                uploadProtocol = "provident";
            }};            

            AndroidpublisherApplicationsDeviceTierConfigsGetResponse res = sdk.applications.androidpublisherApplicationsDeviceTierConfigsGet(req, new AndroidpublisherApplicationsDeviceTierConfigsGetSecurity("ipsa", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.deviceTierConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherApplicationsDeviceTierConfigsList

Returns created device tier configs, ordered by descending creation time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherApplicationsDeviceTierConfigsListRequest;
import org.openapis.openapi.models.operations.AndroidpublisherApplicationsDeviceTierConfigsListResponse;
import org.openapis.openapi.models.operations.AndroidpublisherApplicationsDeviceTierConfigsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherApplicationsDeviceTierConfigsListRequest req = new AndroidpublisherApplicationsDeviceTierConfigsListRequest("magnam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eius";
                alt = AltEnum.MEDIA;
                callback = "esse";
                fields = "rem";
                key = "fuga";
                oauthToken = "reprehenderit";
                pageSize = 695626L;
                pageToken = "fugiat";
                prettyPrint = false;
                quotaUser = "ut";
                uploadType = "eum";
                uploadProtocol = "suscipit";
            }};            

            AndroidpublisherApplicationsDeviceTierConfigsListResponse res = sdk.applications.androidpublisherApplicationsDeviceTierConfigsList(req, new AndroidpublisherApplicationsDeviceTierConfigsListSecurity("assumenda", "eos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listDeviceTierConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
