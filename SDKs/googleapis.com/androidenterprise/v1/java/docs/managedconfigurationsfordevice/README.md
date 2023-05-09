# managedconfigurationsfordevice

### Available Operations

* [androidenterpriseManagedconfigurationsfordeviceDelete](#androidenterprisemanagedconfigurationsfordevicedelete) - Removes a per-device managed configuration for an app for the specified device.
* [androidenterpriseManagedconfigurationsfordeviceGet](#androidenterprisemanagedconfigurationsfordeviceget) - Retrieves details of a per-device managed configuration.
* [androidenterpriseManagedconfigurationsfordeviceList](#androidenterprisemanagedconfigurationsfordevicelist) - Lists all the per-device managed configurations for the specified device. Only the ID is set.
* [androidenterpriseManagedconfigurationsfordeviceUpdate](#androidenterprisemanagedconfigurationsfordeviceupdate) - Adds or updates a per-device managed configuration for an app for the specified device.

## androidenterpriseManagedconfigurationsfordeviceDelete

Removes a per-device managed configuration for an app for the specified device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseManagedconfigurationsfordeviceDeleteRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseManagedconfigurationsfordeviceDeleteResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseManagedconfigurationsfordeviceDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseManagedconfigurationsfordeviceDeleteRequest req = new AndroidenterpriseManagedconfigurationsfordeviceDeleteRequest("assumenda", "nemo", "recusandae", "aliquid") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "cum";
                alt = AltEnum.JSON;
                callback = "in";
                fields = "exercitationem";
                key = "earum";
                oauthToken = "facere";
                prettyPrint = false;
                quotaUser = "numquam";
                uploadType = "doloribus";
                uploadProtocol = "suscipit";
            }};            

            AndroidenterpriseManagedconfigurationsfordeviceDeleteResponse res = sdk.managedconfigurationsfordevice.androidenterpriseManagedconfigurationsfordeviceDelete(req, new AndroidenterpriseManagedconfigurationsfordeviceDeleteSecurity("reiciendis", "quidem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseManagedconfigurationsfordeviceGet

Retrieves details of a per-device managed configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseManagedconfigurationsfordeviceGetRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseManagedconfigurationsfordeviceGetResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseManagedconfigurationsfordeviceGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseManagedconfigurationsfordeviceGetRequest req = new AndroidenterpriseManagedconfigurationsfordeviceGetRequest("saepe", "necessitatibus", "dolore", "sunt") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "adipisci";
                alt = AltEnum.JSON;
                callback = "amet";
                fields = "beatae";
                key = "dignissimos";
                oauthToken = "a";
                prettyPrint = false;
                quotaUser = "debitis";
                uploadType = "consectetur";
                uploadProtocol = "corporis";
            }};            

            AndroidenterpriseManagedconfigurationsfordeviceGetResponse res = sdk.managedconfigurationsfordevice.androidenterpriseManagedconfigurationsfordeviceGet(req, new AndroidenterpriseManagedconfigurationsfordeviceGetSecurity("harum", "laboriosam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.managedConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseManagedconfigurationsfordeviceList

Lists all the per-device managed configurations for the specified device. Only the ID is set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseManagedconfigurationsfordeviceListRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseManagedconfigurationsfordeviceListResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseManagedconfigurationsfordeviceListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseManagedconfigurationsfordeviceListRequest req = new AndroidenterpriseManagedconfigurationsfordeviceListRequest("ipsa", "voluptates", "libero") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "accusamus";
                alt = AltEnum.MEDIA;
                callback = "tempora";
                fields = "aspernatur";
                key = "voluptas";
                oauthToken = "voluptas";
                prettyPrint = false;
                quotaUser = "voluptas";
                uploadType = "minima";
                uploadProtocol = "nobis";
            }};            

            AndroidenterpriseManagedconfigurationsfordeviceListResponse res = sdk.managedconfigurationsfordevice.androidenterpriseManagedconfigurationsfordeviceList(req, new AndroidenterpriseManagedconfigurationsfordeviceListSecurity("dolorum", "adipisci") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.managedConfigurationsForDeviceListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseManagedconfigurationsfordeviceUpdate

Adds or updates a per-device managed configuration for an app for the specified device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseManagedconfigurationsfordeviceUpdateRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseManagedconfigurationsfordeviceUpdateResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseManagedconfigurationsfordeviceUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConfigurationVariables;
import org.openapis.openapi.models.shared.ManagedConfiguration;
import org.openapis.openapi.models.shared.ManagedProperty;
import org.openapis.openapi.models.shared.ManagedPropertyBundle;
import org.openapis.openapi.models.shared.VariableSet;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseManagedconfigurationsfordeviceUpdateRequest req = new AndroidenterpriseManagedconfigurationsfordeviceUpdateRequest("minus", "dolores", "blanditiis", "in") {{
                dollarXgafv = XgafvEnum.ONE;
                managedConfiguration = new ManagedConfiguration() {{
                    configurationVariables = new ConfigurationVariables() {{
                        mcmId = "aliquam";
                        variableSet = new org.openapis.openapi.models.shared.VariableSet[]{{
                            add(new VariableSet() {{
                                placeholder = "temporibus";
                                userValue = "ullam";
                            }}),
                            add(new VariableSet() {{
                                placeholder = "adipisci";
                                userValue = "cum";
                            }}),
                            add(new VariableSet() {{
                                placeholder = "blanditiis";
                                userValue = "quas";
                            }}),
                            add(new VariableSet() {{
                                placeholder = "hic";
                                userValue = "nesciunt";
                            }}),
                        }};
                    }};;
                    kind = "culpa";
                    managedProperty = new org.openapis.openapi.models.shared.ManagedProperty[]{{
                        add(new ManagedProperty() {{
                            key = "pariatur";
                            valueBool = false;
                            valueBundle = new ManagedPropertyBundle() {{
                                managedProperty = new org.openapis.openapi.models.shared.ManagedProperty[]{{
                                    add(new ManagedProperty() {{}}),
                                    add(new ManagedProperty() {{}}),
                                    add(new ManagedProperty() {{}}),
                                }};
                            }};
                            valueBundleArray = new org.openapis.openapi.models.shared.ManagedPropertyBundle[]{{
                                add(new ManagedPropertyBundle() {{
                                    managedProperty = new org.openapis.openapi.models.shared.ManagedProperty[]{{
                                        add(new ManagedProperty() {{}}),
                                        add(new ManagedProperty() {{}}),
                                    }};
                                }}),
                                add(new ManagedPropertyBundle() {{
                                    managedProperty = new org.openapis.openapi.models.shared.ManagedProperty[]{{
                                        add(new ManagedProperty() {{}}),
                                        add(new ManagedProperty() {{}}),
                                        add(new ManagedProperty() {{}}),
                                        add(new ManagedProperty() {{}}),
                                    }};
                                }}),
                                add(new ManagedPropertyBundle() {{
                                    managedProperty = new org.openapis.openapi.models.shared.ManagedProperty[]{{
                                        add(new ManagedProperty() {{}}),
                                    }};
                                }}),
                                add(new ManagedPropertyBundle() {{
                                    managedProperty = new org.openapis.openapi.models.shared.ManagedProperty[]{{
                                        add(new ManagedProperty() {{}}),
                                        add(new ManagedProperty() {{}}),
                                        add(new ManagedProperty() {{}}),
                                    }};
                                }}),
                            }};
                            valueInteger = 148829;
                            valueString = "reiciendis";
                            valueStringArray = new String[]{{
                                add("asperiores"),
                            }};
                        }}),
                        add(new ManagedProperty() {{
                            key = "facilis";
                            valueBool = false;
                            valueBundle = new ManagedPropertyBundle() {{
                                managedProperty = new org.openapis.openapi.models.shared.ManagedProperty[]{{
                                    add(new ManagedProperty() {{}}),
                                    add(new ManagedProperty() {{}}),
                                }};
                            }};
                            valueBundleArray = new org.openapis.openapi.models.shared.ManagedPropertyBundle[]{{
                                add(new ManagedPropertyBundle() {{
                                    managedProperty = new org.openapis.openapi.models.shared.ManagedProperty[]{{
                                        add(new ManagedProperty() {{}}),
                                    }};
                                }}),
                                add(new ManagedPropertyBundle() {{
                                    managedProperty = new org.openapis.openapi.models.shared.ManagedProperty[]{{
                                        add(new ManagedProperty() {{}}),
                                        add(new ManagedProperty() {{}}),
                                        add(new ManagedProperty() {{}}),
                                    }};
                                }}),
                                add(new ManagedPropertyBundle() {{
                                    managedProperty = new org.openapis.openapi.models.shared.ManagedProperty[]{{
                                        add(new ManagedProperty() {{}}),
                                        add(new ManagedProperty() {{}}),
                                    }};
                                }}),
                            }};
                            valueInteger = 671907;
                            valueString = "sed";
                            valueStringArray = new String[]{{
                                add("commodi"),
                                add("quidem"),
                            }};
                        }}),
                        add(new ManagedProperty() {{
                            key = "explicabo";
                            valueBool = false;
                            valueBundle = new ManagedPropertyBundle() {{
                                managedProperty = new org.openapis.openapi.models.shared.ManagedProperty[]{{
                                    add(new ManagedProperty() {{}}),
                                    add(new ManagedProperty() {{}}),
                                }};
                            }};
                            valueBundleArray = new org.openapis.openapi.models.shared.ManagedPropertyBundle[]{{
                                add(new ManagedPropertyBundle() {{
                                    managedProperty = new org.openapis.openapi.models.shared.ManagedProperty[]{{
                                        add(new ManagedProperty() {{}}),
                                    }};
                                }}),
                                add(new ManagedPropertyBundle() {{
                                    managedProperty = new org.openapis.openapi.models.shared.ManagedProperty[]{{
                                        add(new ManagedProperty() {{}}),
                                        add(new ManagedProperty() {{}}),
                                    }};
                                }}),
                                add(new ManagedPropertyBundle() {{
                                    managedProperty = new org.openapis.openapi.models.shared.ManagedProperty[]{{
                                        add(new ManagedProperty() {{}}),
                                        add(new ManagedProperty() {{}}),
                                        add(new ManagedProperty() {{}}),
                                        add(new ManagedProperty() {{}}),
                                    }};
                                }}),
                            }};
                            valueInteger = 895386;
                            valueString = "illo";
                            valueStringArray = new String[]{{
                                add("perferendis"),
                                add("corrupti"),
                                add("maiores"),
                                add("incidunt"),
                            }};
                        }}),
                    }};
                    productId = "sed";
                }};;
                accessToken = "provident";
                alt = AltEnum.JSON;
                callback = "necessitatibus";
                fields = "ipsum";
                key = "ea";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "quos";
                uploadType = "voluptatibus";
                uploadProtocol = "tempora";
            }};            

            AndroidenterpriseManagedconfigurationsfordeviceUpdateResponse res = sdk.managedconfigurationsfordevice.androidenterpriseManagedconfigurationsfordeviceUpdate(req, new AndroidenterpriseManagedconfigurationsfordeviceUpdateSecurity("tempora", "voluptate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.managedConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
