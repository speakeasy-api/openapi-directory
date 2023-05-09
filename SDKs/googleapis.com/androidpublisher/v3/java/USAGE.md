<!-- Start SDK Example Usage -->
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

            AndroidpublisherApplicationsDeviceTierConfigsCreateRequest req = new AndroidpublisherApplicationsDeviceTierConfigsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                deviceTierConfigInput = new DeviceTierConfigInput() {{
                    deviceGroups = new org.openapis.openapi.models.shared.DeviceGroup[]{{
                        add(new DeviceGroup() {{
                            deviceSelectors = new org.openapis.openapi.models.shared.DeviceSelector[]{{
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "unde";
                                        minBytes = "nulla";
                                    }};
                                    excludedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "illum";
                                            buildDevice = "vel";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "error";
                                            buildDevice = "deserunt";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "suscipit";
                                            buildDevice = "iure";
                                        }}),
                                    }};
                                    forbiddenSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "Larry Windler";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "Alexandra Schulist";
                                        }}),
                                    }};
                                    includedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "nisi";
                                            buildDevice = "recusandae";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "temporibus";
                                            buildDevice = "ab";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "quis";
                                            buildDevice = "veritatis";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "Roberta Sipes";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "Teri Strosin";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "Forrest Koepp";
                                        }}),
                                    }};
                                }}),
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "dolorum";
                                        minBytes = "dicta";
                                    }};
                                    excludedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "officia";
                                            buildDevice = "occaecati";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "fugit";
                                            buildDevice = "deleniti";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "hic";
                                            buildDevice = "optio";
                                        }}),
                                    }};
                                    forbiddenSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "Lucy Krajcik";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "Jonathon Klocko";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "Dorothy Hane";
                                        }}),
                                    }};
                                    includedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "dolor";
                                            buildDevice = "natus";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "laboriosam";
                                            buildDevice = "hic";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "saepe";
                                            buildDevice = "fuga";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "Sheryl Kertzmann";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "Brenda Wisozk";
                                        }}),
                                    }};
                                }}),
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "laborum";
                                        minBytes = "dolores";
                                    }};
                                    excludedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "corporis";
                                            buildDevice = "explicabo";
                                        }}),
                                    }};
                                    forbiddenSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "Guadalupe Hickle";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "Charlene Nicolas";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "Angie Durgan";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "Shaun McCullough";
                                        }}),
                                    }};
                                    includedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "molestiae";
                                            buildDevice = "velit";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "error";
                                            buildDevice = "quia";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "Kayla O'Kon";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "Jimmy Wiegand";
                                        }}),
                                    }};
                                }}),
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "possimus";
                                        minBytes = "aut";
                                    }};
                                    excludedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "error";
                                            buildDevice = "temporibus";
                                        }}),
                                    }};
                                    forbiddenSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "Johanna Wolf";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "Jan Bednar";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "Thomas Batz";
                                        }}),
                                    }};
                                    includedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "dicta";
                                            buildDevice = "corporis";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "dolore";
                                            buildDevice = "iusto";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "dicta";
                                            buildDevice = "harum";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "enim";
                                            buildDevice = "accusamus";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "Eric Emmerich";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "Ervin Gleason";
                                        }}),
                                    }};
                                }}),
                            }};
                            name = "Carl Waelchi DVM";
                        }}),
                        add(new DeviceGroup() {{
                            deviceSelectors = new org.openapis.openapi.models.shared.DeviceSelector[]{{
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "enim";
                                        minBytes = "consequatur";
                                    }};
                                    excludedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "quibusdam";
                                            buildDevice = "explicabo";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "deserunt";
                                            buildDevice = "distinctio";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "quibusdam";
                                            buildDevice = "labore";
                                        }}),
                                    }};
                                    forbiddenSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "Beth McGlynn Sr.";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "Vernon Abshire";
                                        }}),
                                    }};
                                    includedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "tempora";
                                            buildDevice = "facilis";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "tempore";
                                            buildDevice = "labore";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "delectus";
                                            buildDevice = "eum";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "Sergio Hyatt";
                                        }}),
                                    }};
                                }}),
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "sint";
                                        minBytes = "officia";
                                    }};
                                    excludedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "debitis";
                                            buildDevice = "a";
                                        }}),
                                    }};
                                    forbiddenSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "Arlene Stamm";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "Valerie Runolfsson";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "Kayla Thompson";
                                        }}),
                                    }};
                                    includedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "accusamus";
                                            buildDevice = "delectus";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "quidem";
                                            buildDevice = "provident";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "Nelson Lesch";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "Tyler Kassulke";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "Dorothy Kovacek";
                                        }}),
                                    }};
                                }}),
                            }};
                            name = "Leroy Greenfelder";
                        }}),
                        add(new DeviceGroup() {{
                            deviceSelectors = new org.openapis.openapi.models.shared.DeviceSelector[]{{
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "eum";
                                        minBytes = "vero";
                                    }};
                                    excludedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "architecto";
                                            buildDevice = "magnam";
                                        }}),
                                    }};
                                    forbiddenSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "Derrick McLaughlin";
                                        }}),
                                    }};
                                    includedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "mollitia";
                                            buildDevice = "reiciendis";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "Natalie Ernser";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "Joyce Kertzmann";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "Jasmine Lind";
                                        }}),
                                    }};
                                }}),
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "architecto";
                                        minBytes = "architecto";
                                    }};
                                    excludedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "ullam";
                                            buildDevice = "expedita";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "nihil";
                                            buildDevice = "repellat";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "quibusdam";
                                            buildDevice = "sed";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "saepe";
                                            buildDevice = "pariatur";
                                        }}),
                                    }};
                                    forbiddenSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "Irma Morissette DDS";
                                        }}),
                                    }};
                                    includedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "pariatur";
                                            buildDevice = "maxime";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "ea";
                                            buildDevice = "excepturi";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "odit";
                                            buildDevice = "ea";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "accusantium";
                                            buildDevice = "ab";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "Clyde Kling";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "Meredith Hickle PhD";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "Jennifer Runolfsdottir";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "Robin D'Amore";
                                        }}),
                                    }};
                                }}),
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "dignissimos";
                                        minBytes = "eaque";
                                    }};
                                    excludedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "nesciunt";
                                            buildDevice = "eos";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "perferendis";
                                            buildDevice = "dolores";
                                        }}),
                                    }};
                                    forbiddenSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "Rosa Swift";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "Alejandro Purdy DDS";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "Ms. Vickie Mraz";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "Ollie Watsica";
                                        }}),
                                    }};
                                    includedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "deleniti";
                                            buildDevice = "pariatur";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "provident";
                                            buildDevice = "nobis";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "libero";
                                            buildDevice = "delectus";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "Gene Effertz";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "Tiffany Welch";
                                        }}),
                                    }};
                                }}),
                            }};
                            name = "Marian Wisozk";
                        }}),
                    }};
                    deviceTierSet = new DeviceTierSet() {{
                        deviceTiers = new org.openapis.openapi.models.shared.DeviceTier[]{{
                            add(new DeviceTier() {{
                                deviceGroupNames = new String[]{{
                                    add("ipsa"),
                                }};
                                level = 56418;
                            }}),
                            add(new DeviceTier() {{
                                deviceGroupNames = new String[]{{
                                    add("odio"),
                                    add("quaerat"),
                                }};
                                level = 881005;
                            }}),
                        }};
                    }};;
                    userCountrySets = new org.openapis.openapi.models.shared.UserCountrySet[]{{
                        add(new UserCountrySet() {{
                            countryCodes = new String[]{{
                                add("voluptas"),
                                add("natus"),
                                add("eos"),
                                add("atque"),
                            }};
                            name = "Ginger Bergstrom";
                        }}),
                        add(new UserCountrySet() {{
                            countryCodes = new String[]{{
                                add("voluptate"),
                                add("dolorum"),
                            }};
                            name = "Arturo Treutel";
                        }}),
                        add(new UserCountrySet() {{
                            countryCodes = new String[]{{
                                add("ipsum"),
                                add("voluptate"),
                            }};
                            name = "Elbert Gislason I";
                        }}),
                    }};
                }};;
                accessToken = "optio";
                allowUnknownDevices = false;
                alt = AltEnum.PROTO;
                callback = "ad";
                fields = "saepe";
                key = "suscipit";
                oauthToken = "deserunt";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "minima";
                uploadProtocol = "repellendus";
            }};            

            AndroidpublisherApplicationsDeviceTierConfigsCreateResponse res = sdk.applications.androidpublisherApplicationsDeviceTierConfigsCreate(req, new AndroidpublisherApplicationsDeviceTierConfigsCreateSecurity("totam", "similique") {{
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
<!-- End SDK Example Usage -->