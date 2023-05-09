# devices

### Available Operations

* [androidenterpriseDevicesForceReportUpload](#androidenterprisedevicesforcereportupload) - Uploads a report containing any changes in app states on the device since the last report was generated. You can call this method up to 3 times every 24 hours for a given device. If you exceed the quota, then the Google Play EMM API returns HTTP 429 Too Many Requests.
* [androidenterpriseDevicesGet](#androidenterprisedevicesget) - Retrieves the details of a device.
* [androidenterpriseDevicesGetState](#androidenterprisedevicesgetstate) - Retrieves whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.
* [androidenterpriseDevicesList](#androidenterprisedeviceslist) - Retrieves the IDs of all of a user's devices.
* [androidenterpriseDevicesSetState](#androidenterprisedevicessetstate) - Sets whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.
* [androidenterpriseDevicesUpdate](#androidenterprisedevicesupdate) - Updates the device policy. To ensure the policy is properly enforced, you need to prevent unmanaged accounts from accessing Google Play by setting the allowed_accounts in the managed configuration for the Google Play package. See restrict accounts in Google Play. When provisioning a new device, you should set the device policy using this method before adding the managed Google Play Account to the device, otherwise the policy will not be applied for a short period of time after adding the account to the device.

## androidenterpriseDevicesForceReportUpload

Uploads a report containing any changes in app states on the device since the last report was generated. You can call this method up to 3 times every 24 hours for a given device. If you exceed the quota, then the Google Play EMM API returns HTTP 429 Too Many Requests.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseDevicesForceReportUploadRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseDevicesForceReportUploadResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseDevicesForceReportUploadSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseDevicesForceReportUploadRequest req = new AndroidenterpriseDevicesForceReportUploadRequest("ipsa", "delectus", "tempora") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "molestiae";
                alt = AltEnum.PROTO;
                callback = "placeat";
                fields = "voluptatum";
                key = "iusto";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "recusandae";
                uploadProtocol = "temporibus";
            }};            

            AndroidenterpriseDevicesForceReportUploadResponse res = sdk.devices.androidenterpriseDevicesForceReportUpload(req, new AndroidenterpriseDevicesForceReportUploadSecurity("ab", "quis") {{
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

## androidenterpriseDevicesGet

Retrieves the details of a device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseDevicesGetRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseDevicesGetResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseDevicesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseDevicesGetRequest req = new AndroidenterpriseDevicesGetRequest("veritatis", "deserunt", "perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repellendus";
                alt = AltEnum.PROTO;
                callback = "quo";
                fields = "odit";
                key = "at";
                oauthToken = "at";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "molestiae";
                uploadProtocol = "quod";
            }};            

            AndroidenterpriseDevicesGetResponse res = sdk.devices.androidenterpriseDevicesGet(req, new AndroidenterpriseDevicesGetSecurity("quod", "esse") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.device != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseDevicesGetState

Retrieves whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseDevicesGetStateRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseDevicesGetStateResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseDevicesGetStateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseDevicesGetStateRequest req = new AndroidenterpriseDevicesGetStateRequest("totam", "porro", "dolorum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nam";
                alt = AltEnum.MEDIA;
                callback = "occaecati";
                fields = "fugit";
                key = "deleniti";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "optio";
                uploadType = "totam";
                uploadProtocol = "beatae";
            }};            

            AndroidenterpriseDevicesGetStateResponse res = sdk.devices.androidenterpriseDevicesGetState(req, new AndroidenterpriseDevicesGetStateSecurity("commodi", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.deviceState != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseDevicesList

Retrieves the IDs of all of a user's devices.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseDevicesListRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseDevicesListResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseDevicesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseDevicesListRequest req = new AndroidenterpriseDevicesListRequest("modi", "qui") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "cum";
                alt = AltEnum.MEDIA;
                callback = "ipsum";
                fields = "excepturi";
                key = "aspernatur";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "ad";
                uploadType = "natus";
                uploadProtocol = "sed";
            }};            

            AndroidenterpriseDevicesListResponse res = sdk.devices.androidenterpriseDevicesList(req, new AndroidenterpriseDevicesListSecurity("iste", "dolor") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.devicesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseDevicesSetState

Sets whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseDevicesSetStateRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseDevicesSetStateResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseDevicesSetStateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DeviceState;
import org.openapis.openapi.models.shared.DeviceStateAccountStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseDevicesSetStateRequest req = new AndroidenterpriseDevicesSetStateRequest("natus", "laboriosam", "hic") {{
                dollarXgafv = XgafvEnum.TWO;
                deviceState = new DeviceState() {{
                    accountState = DeviceStateAccountStateEnum.DISABLED;
                }};;
                accessToken = "in";
                alt = AltEnum.MEDIA;
                callback = "iste";
                fields = "iure";
                key = "saepe";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "ipsa";
                uploadProtocol = "reiciendis";
            }};            

            AndroidenterpriseDevicesSetStateResponse res = sdk.devices.androidenterpriseDevicesSetState(req, new AndroidenterpriseDevicesSetStateSecurity("est", "mollitia") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.deviceState != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseDevicesUpdate

Updates the device policy. To ensure the policy is properly enforced, you need to prevent unmanaged accounts from accessing Google Play by setting the allowed_accounts in the managed configuration for the Google Play package. See restrict accounts in Google Play. When provisioning a new device, you should set the device policy using this method before adding the managed Google Play Account to the device, otherwise the policy will not be applied for a short period of time after adding the account to the device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseDevicesUpdateRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseDevicesUpdateResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseDevicesUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AppState;
import org.openapis.openapi.models.shared.AutoInstallConstraint;
import org.openapis.openapi.models.shared.AutoInstallConstraintChargingStateConstraintEnum;
import org.openapis.openapi.models.shared.AutoInstallConstraintDeviceIdleStateConstraintEnum;
import org.openapis.openapi.models.shared.AutoInstallConstraintNetworkTypeConstraintEnum;
import org.openapis.openapi.models.shared.AutoInstallPolicy;
import org.openapis.openapi.models.shared.AutoInstallPolicyAutoInstallModeEnum;
import org.openapis.openapi.models.shared.ConfigurationVariables;
import org.openapis.openapi.models.shared.Device;
import org.openapis.openapi.models.shared.DeviceManagementTypeEnum;
import org.openapis.openapi.models.shared.DeviceReport;
import org.openapis.openapi.models.shared.EnterpriseAuthenticationAppLinkConfig;
import org.openapis.openapi.models.shared.KeyedAppState;
import org.openapis.openapi.models.shared.KeyedAppStateSeverityEnum;
import org.openapis.openapi.models.shared.MaintenanceWindow;
import org.openapis.openapi.models.shared.ManagedConfiguration;
import org.openapis.openapi.models.shared.ManagedProperty;
import org.openapis.openapi.models.shared.ManagedPropertyBundle;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.PolicyAutoUpdatePolicyEnum;
import org.openapis.openapi.models.shared.PolicyDeviceReportPolicyEnum;
import org.openapis.openapi.models.shared.PolicyProductAvailabilityPolicyEnum;
import org.openapis.openapi.models.shared.ProductPolicy;
import org.openapis.openapi.models.shared.ProductPolicyAutoUpdateModeEnum;
import org.openapis.openapi.models.shared.ProductPolicyTracksEnum;
import org.openapis.openapi.models.shared.VariableSet;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseDevicesUpdateRequest req = new AndroidenterpriseDevicesUpdateRequest("laborum", "dolores", "dolorem") {{
                dollarXgafv = XgafvEnum.ONE;
                device = new Device() {{
                    androidId = "explicabo";
                    device = "nobis";
                    latestBuildFingerprint = "enim";
                    maker = "omnis";
                    managementType = DeviceManagementTypeEnum.MANAGED_PROFILE;
                    model = "minima";
                    policy = new Policy() {{
                        autoUpdatePolicy = PolicyAutoUpdatePolicyEnum.NEVER;
                        deviceReportPolicy = PolicyDeviceReportPolicyEnum.DEVICE_REPORT_POLICY_UNSPECIFIED;
                        maintenanceWindow = new MaintenanceWindow() {{
                            durationMs = "iure";
                            startTimeAfterMidnightMs = "culpa";
                        }};;
                        productAvailabilityPolicy = PolicyProductAvailabilityPolicyEnum.ALL;
                        productPolicy = new org.openapis.openapi.models.shared.ProductPolicy[]{{
                            add(new ProductPolicy() {{
                                autoInstallPolicy = new AutoInstallPolicy() {{
                                    autoInstallConstraint = new org.openapis.openapi.models.shared.AutoInstallConstraint[]{{
                                        add(new AutoInstallConstraint() {{
                                            chargingStateConstraint = AutoInstallConstraintChargingStateConstraintEnum.CHARGING_NOT_REQUIRED;
                                            deviceIdleStateConstraint = AutoInstallConstraintDeviceIdleStateConstraintEnum.DEVICE_IDLE_STATE_CONSTRAINT_UNSPECIFIED;
                                            networkTypeConstraint = AutoInstallConstraintNetworkTypeConstraintEnum.ANY_NETWORK;
                                        }}),
                                    }};
                                    autoInstallMode = AutoInstallPolicyAutoInstallModeEnum.AUTO_INSTALL_MODE_UNSPECIFIED;
                                    autoInstallPriority = 995300;
                                    minimumVersionCode = 653108;
                                }};
                                autoUpdateMode = ProductPolicyAutoUpdateModeEnum.AUTO_UPDATE_POSTPONED;
                                enterpriseAuthenticationAppLinkConfigs = new org.openapis.openapi.models.shared.EnterpriseAuthenticationAppLinkConfig[]{{
                                    add(new EnterpriseAuthenticationAppLinkConfig() {{
                                        uri = "http://kind-ironclad.biz";
                                    }}),
                                    add(new EnterpriseAuthenticationAppLinkConfig() {{
                                        uri = "https://cultivated-feather.com";
                                    }}),
                                }};
                                managedConfiguration = new ManagedConfiguration() {{
                                    configurationVariables = new ConfigurationVariables() {{
                                        mcmId = "laborum";
                                        variableSet = new org.openapis.openapi.models.shared.VariableSet[]{{
                                            add(new VariableSet() {{
                                                placeholder = "enim";
                                                userValue = "odit";
                                            }}),
                                            add(new VariableSet() {{
                                                placeholder = "quo";
                                                userValue = "sequi";
                                            }}),
                                            add(new VariableSet() {{
                                                placeholder = "tenetur";
                                                userValue = "ipsam";
                                            }}),
                                        }};
                                    }};
                                    kind = "id";
                                    managedProperty = new org.openapis.openapi.models.shared.ManagedProperty[]{{
                                        add(new ManagedProperty() {{
                                            key = "aut";
                                            valueBool = false;
                                            valueBundle = new ManagedPropertyBundle() {{
                                                managedProperty = new org.openapis.openapi.models.shared.ManagedProperty[]{{
                                                    add(new ManagedProperty() {{}}),
                                                }};
                                            }};
                                            valueBundleArray = new org.openapis.openapi.models.shared.ManagedPropertyBundle[]{{
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
                                                        add(new ManagedProperty() {{}}),
                                                        add(new ManagedProperty() {{}}),
                                                    }};
                                                }}),
                                                add(new ManagedPropertyBundle() {{
                                                    managedProperty = new org.openapis.openapi.models.shared.ManagedProperty[]{{
                                                        add(new ManagedProperty() {{}}),
                                                    }};
                                                }}),
                                            }};
                                            valueInteger = 971945;
                                            valueString = "voluptatibus";
                                            valueStringArray = new String[]{{
                                                add("nihil"),
                                                add("praesentium"),
                                                add("voluptatibus"),
                                                add("ipsa"),
                                            }};
                                        }}),
                                        add(new ManagedProperty() {{
                                            key = "omnis";
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
                                                    }};
                                                }}),
                                                add(new ManagedPropertyBundle() {{
                                                    managedProperty = new org.openapis.openapi.models.shared.ManagedProperty[]{{
                                                        add(new ManagedProperty() {{}}),
                                                        add(new ManagedProperty() {{}}),
                                                    }};
                                                }}),
                                            }};
                                            valueInteger = 282807;
                                            valueString = "maiores";
                                            valueStringArray = new String[]{{
                                                add("corporis"),
                                            }};
                                        }}),
                                        add(new ManagedProperty() {{
                                            key = "dolore";
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
                                                        add(new ManagedProperty() {{}}),
                                                        add(new ManagedProperty() {{}}),
                                                    }};
                                                }}),
                                            }};
                                            valueInteger = 317983;
                                            valueString = "accusamus";
                                            valueStringArray = new String[]{{
                                                add("repudiandae"),
                                                add("quae"),
                                            }};
                                        }}),
                                        add(new ManagedProperty() {{
                                            key = "ipsum";
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
                                                        add(new ManagedProperty() {{}}),
                                                    }};
                                                }}),
                                            }};
                                            valueInteger = 508969;
                                            valueString = "rem";
                                            valueStringArray = new String[]{{
                                                add("quasi"),
                                                add("repudiandae"),
                                                add("sint"),
                                                add("veritatis"),
                                            }};
                                        }}),
                                    }};
                                    productId = "itaque";
                                }};
                                productId = "incidunt";
                                trackIds = new String[]{{
                                    add("consequatur"),
                                    add("est"),
                                }};
                                tracks = new org.openapis.openapi.models.shared.ProductPolicyTracksEnum[]{{
                                    add(ProductPolicyTracksEnum.APP_TRACK_UNSPECIFIED),
                                    add(ProductPolicyTracksEnum.BETA),
                                    add(ProductPolicyTracksEnum.BETA),
                                    add(ProductPolicyTracksEnum.ALPHA),
                                }};
                            }}),
                            add(new ProductPolicy() {{
                                autoInstallPolicy = new AutoInstallPolicy() {{
                                    autoInstallConstraint = new org.openapis.openapi.models.shared.AutoInstallConstraint[]{{
                                        add(new AutoInstallConstraint() {{
                                            chargingStateConstraint = AutoInstallConstraintChargingStateConstraintEnum.CHARGING_STATE_CONSTRAINT_UNSPECIFIED;
                                            deviceIdleStateConstraint = AutoInstallConstraintDeviceIdleStateConstraintEnum.DEVICE_IDLE_STATE_CONSTRAINT_UNSPECIFIED;
                                            networkTypeConstraint = AutoInstallConstraintNetworkTypeConstraintEnum.ANY_NETWORK;
                                        }}),
                                        add(new AutoInstallConstraint() {{
                                            chargingStateConstraint = AutoInstallConstraintChargingStateConstraintEnum.CHARGING_NOT_REQUIRED;
                                            deviceIdleStateConstraint = AutoInstallConstraintDeviceIdleStateConstraintEnum.DEVICE_IDLE_NOT_REQUIRED;
                                            networkTypeConstraint = AutoInstallConstraintNetworkTypeConstraintEnum.NETWORK_TYPE_CONSTRAINT_UNSPECIFIED;
                                        }}),
                                    }};
                                    autoInstallMode = AutoInstallPolicyAutoInstallModeEnum.AUTO_INSTALL_MODE_UNSPECIFIED;
                                    autoInstallPriority = 828940;
                                    minimumVersionCode = 369808;
                                }};
                                autoUpdateMode = ProductPolicyAutoUpdateModeEnum.AUTO_UPDATE_MODE_UNSPECIFIED;
                                enterpriseAuthenticationAppLinkConfigs = new org.openapis.openapi.models.shared.EnterpriseAuthenticationAppLinkConfig[]{{
                                    add(new EnterpriseAuthenticationAppLinkConfig() {{
                                        uri = "https://nimble-displacement.net";
                                    }}),
                                }};
                                managedConfiguration = new ManagedConfiguration() {{
                                    configurationVariables = new ConfigurationVariables() {{
                                        mcmId = "tempore";
                                        variableSet = new org.openapis.openapi.models.shared.VariableSet[]{{
                                            add(new VariableSet() {{
                                                placeholder = "delectus";
                                                userValue = "eum";
                                            }}),
                                            add(new VariableSet() {{
                                                placeholder = "non";
                                                userValue = "eligendi";
                                            }}),
                                        }};
                                    }};
                                    kind = "sint";
                                    managedProperty = new org.openapis.openapi.models.shared.ManagedProperty[]{{
                                        add(new ManagedProperty() {{
                                            key = "provident";
                                            valueBool = false;
                                            valueBundle = new ManagedPropertyBundle() {{
                                                managedProperty = new org.openapis.openapi.models.shared.ManagedProperty[]{{
                                                    add(new ManagedProperty() {{}}),
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
                                                        add(new ManagedProperty() {{}}),
                                                    }};
                                                }}),
                                            }};
                                            valueInteger = 952749;
                                            valueString = "dolorum";
                                            valueStringArray = new String[]{{
                                                add("in"),
                                                add("illum"),
                                            }};
                                        }}),
                                        add(new ManagedProperty() {{
                                            key = "maiores";
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
                                            }};
                                            valueInteger = 767024;
                                            valueString = "facere";
                                            valueStringArray = new String[]{{
                                                add("aliquid"),
                                                add("laborum"),
                                            }};
                                        }}),
                                    }};
                                    productId = "accusamus";
                                }};
                                productId = "non";
                                trackIds = new String[]{{
                                    add("enim"),
                                    add("accusamus"),
                                    add("delectus"),
                                }};
                                tracks = new org.openapis.openapi.models.shared.ProductPolicyTracksEnum[]{{
                                    add(ProductPolicyTracksEnum.BETA),
                                    add(ProductPolicyTracksEnum.BETA),
                                    add(ProductPolicyTracksEnum.BETA),
                                }};
                            }}),
                            add(new ProductPolicy() {{
                                autoInstallPolicy = new AutoInstallPolicy() {{
                                    autoInstallConstraint = new org.openapis.openapi.models.shared.AutoInstallConstraint[]{{
                                        add(new AutoInstallConstraint() {{
                                            chargingStateConstraint = AutoInstallConstraintChargingStateConstraintEnum.CHARGING_NOT_REQUIRED;
                                            deviceIdleStateConstraint = AutoInstallConstraintDeviceIdleStateConstraintEnum.DEVICE_IDLE_REQUIRED;
                                            networkTypeConstraint = AutoInstallConstraintNetworkTypeConstraintEnum.NETWORK_TYPE_CONSTRAINT_UNSPECIFIED;
                                        }}),
                                        add(new AutoInstallConstraint() {{
                                            chargingStateConstraint = AutoInstallConstraintChargingStateConstraintEnum.CHARGING_NOT_REQUIRED;
                                            deviceIdleStateConstraint = AutoInstallConstraintDeviceIdleStateConstraintEnum.DEVICE_IDLE_NOT_REQUIRED;
                                            networkTypeConstraint = AutoInstallConstraintNetworkTypeConstraintEnum.ANY_NETWORK;
                                        }}),
                                        add(new AutoInstallConstraint() {{
                                            chargingStateConstraint = AutoInstallConstraintChargingStateConstraintEnum.CHARGING_NOT_REQUIRED;
                                            deviceIdleStateConstraint = AutoInstallConstraintDeviceIdleStateConstraintEnum.DEVICE_IDLE_NOT_REQUIRED;
                                            networkTypeConstraint = AutoInstallConstraintNetworkTypeConstraintEnum.ANY_NETWORK;
                                        }}),
                                    }};
                                    autoInstallMode = AutoInstallPolicyAutoInstallModeEnum.AUTO_INSTALL_MODE_UNSPECIFIED;
                                    autoInstallPriority = 470132;
                                    minimumVersionCode = 301575;
                                }};
                                autoUpdateMode = ProductPolicyAutoUpdateModeEnum.AUTO_UPDATE_POSTPONED;
                                enterpriseAuthenticationAppLinkConfigs = new org.openapis.openapi.models.shared.EnterpriseAuthenticationAppLinkConfig[]{{
                                    add(new EnterpriseAuthenticationAppLinkConfig() {{
                                        uri = "http://flawed-gherkin.name";
                                    }}),
                                    add(new EnterpriseAuthenticationAppLinkConfig() {{
                                        uri = "https://inconsequential-swimming.com";
                                    }}),
                                    add(new EnterpriseAuthenticationAppLinkConfig() {{
                                        uri = "http://foolhardy-bolero.name";
                                    }}),
                                }};
                                managedConfiguration = new ManagedConfiguration() {{
                                    configurationVariables = new ConfigurationVariables() {{
                                        mcmId = "ullam";
                                        variableSet = new org.openapis.openapi.models.shared.VariableSet[]{{
                                            add(new VariableSet() {{
                                                placeholder = "quos";
                                                userValue = "sint";
                                            }}),
                                            add(new VariableSet() {{
                                                placeholder = "accusantium";
                                                userValue = "mollitia";
                                            }}),
                                            add(new VariableSet() {{
                                                placeholder = "reiciendis";
                                                userValue = "mollitia";
                                            }}),
                                        }};
                                    }};
                                    kind = "ad";
                                    managedProperty = new org.openapis.openapi.models.shared.ManagedProperty[]{{
                                        add(new ManagedProperty() {{
                                            key = "dolor";
                                            valueBool = false;
                                            valueBundle = new ManagedPropertyBundle() {{
                                                managedProperty = new org.openapis.openapi.models.shared.ManagedProperty[]{{
                                                    add(new ManagedProperty() {{}}),
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
                                            }};
                                            valueInteger = 97260;
                                            valueString = "iure";
                                            valueStringArray = new String[]{{
                                                add("debitis"),
                                                add("eius"),
                                                add("maxime"),
                                                add("deleniti"),
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
                                            }};
                                            valueInteger = 919483;
                                            valueString = "ullam";
                                            valueStringArray = new String[]{{
                                                add("nihil"),
                                                add("repellat"),
                                                add("quibusdam"),
                                            }};
                                        }}),
                                    }};
                                    productId = "sed";
                                }};
                                productId = "saepe";
                                trackIds = new String[]{{
                                    add("accusantium"),
                                    add("consequuntur"),
                                    add("praesentium"),
                                    add("natus"),
                                }};
                                tracks = new org.openapis.openapi.models.shared.ProductPolicyTracksEnum[]{{
                                    add(ProductPolicyTracksEnum.APP_TRACK_UNSPECIFIED),
                                }};
                            }}),
                            add(new ProductPolicy() {{
                                autoInstallPolicy = new AutoInstallPolicy() {{
                                    autoInstallConstraint = new org.openapis.openapi.models.shared.AutoInstallConstraint[]{{
                                        add(new AutoInstallConstraint() {{
                                            chargingStateConstraint = AutoInstallConstraintChargingStateConstraintEnum.CHARGING_REQUIRED;
                                            deviceIdleStateConstraint = AutoInstallConstraintDeviceIdleStateConstraintEnum.DEVICE_IDLE_REQUIRED;
                                            networkTypeConstraint = AutoInstallConstraintNetworkTypeConstraintEnum.UNMETERED_NETWORK;
                                        }}),
                                        add(new AutoInstallConstraint() {{
                                            chargingStateConstraint = AutoInstallConstraintChargingStateConstraintEnum.CHARGING_NOT_REQUIRED;
                                            deviceIdleStateConstraint = AutoInstallConstraintDeviceIdleStateConstraintEnum.DEVICE_IDLE_NOT_REQUIRED;
                                            networkTypeConstraint = AutoInstallConstraintNetworkTypeConstraintEnum.NETWORK_TYPE_CONSTRAINT_UNSPECIFIED;
                                        }}),
                                        add(new AutoInstallConstraint() {{
                                            chargingStateConstraint = AutoInstallConstraintChargingStateConstraintEnum.CHARGING_NOT_REQUIRED;
                                            deviceIdleStateConstraint = AutoInstallConstraintDeviceIdleStateConstraintEnum.DEVICE_IDLE_STATE_CONSTRAINT_UNSPECIFIED;
                                            networkTypeConstraint = AutoInstallConstraintNetworkTypeConstraintEnum.NETWORK_TYPE_CONSTRAINT_UNSPECIFIED;
                                        }}),
                                        add(new AutoInstallConstraint() {{
                                            chargingStateConstraint = AutoInstallConstraintChargingStateConstraintEnum.CHARGING_REQUIRED;
                                            deviceIdleStateConstraint = AutoInstallConstraintDeviceIdleStateConstraintEnum.DEVICE_IDLE_REQUIRED;
                                            networkTypeConstraint = AutoInstallConstraintNetworkTypeConstraintEnum.ANY_NETWORK;
                                        }}),
                                    }};
                                    autoInstallMode = AutoInstallPolicyAutoInstallModeEnum.DO_NOT_AUTO_INSTALL;
                                    autoInstallPriority = 420075;
                                    minimumVersionCode = 722056;
                                }};
                                autoUpdateMode = ProductPolicyAutoUpdateModeEnum.AUTO_UPDATE_MODE_UNSPECIFIED;
                                enterpriseAuthenticationAppLinkConfigs = new org.openapis.openapi.models.shared.EnterpriseAuthenticationAppLinkConfig[]{{
                                    add(new EnterpriseAuthenticationAppLinkConfig() {{
                                        uri = "http://wise-airbag.org";
                                    }}),
                                    add(new EnterpriseAuthenticationAppLinkConfig() {{
                                        uri = "http://adept-sailing.info";
                                    }}),
                                    add(new EnterpriseAuthenticationAppLinkConfig() {{
                                        uri = "https://secret-rhinoceros.biz";
                                    }}),
                                    add(new EnterpriseAuthenticationAppLinkConfig() {{
                                        uri = "http://mealy-kilometer.com";
                                    }}),
                                }};
                                managedConfiguration = new ManagedConfiguration() {{
                                    configurationVariables = new ConfigurationVariables() {{
                                        mcmId = "quis";
                                        variableSet = new org.openapis.openapi.models.shared.VariableSet[]{{
                                            add(new VariableSet() {{
                                                placeholder = "eos";
                                                userValue = "perferendis";
                                            }}),
                                        }};
                                    }};
                                    kind = "dolores";
                                    managedProperty = new org.openapis.openapi.models.shared.ManagedProperty[]{{
                                        add(new ManagedProperty() {{
                                            key = "quam";
                                            valueBool = false;
                                            valueBundle = new ManagedPropertyBundle() {{
                                                managedProperty = new org.openapis.openapi.models.shared.ManagedProperty[]{{
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
                                                        add(new ManagedProperty() {{}}),
                                                        add(new ManagedProperty() {{}}),
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
                                            valueInteger = 704415;
                                            valueString = "perspiciatis";
                                            valueStringArray = new String[]{{
                                                add("porro"),
                                            }};
                                        }}),
                                        add(new ManagedProperty() {{
                                            key = "consequuntur";
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
                                                        add(new ManagedProperty() {{}}),
                                                    }};
                                                }}),
                                            }};
                                            valueInteger = 237893;
                                            valueString = "asperiores";
                                            valueStringArray = new String[]{{
                                                add("modi"),
                                                add("iste"),
                                                add("dolorum"),
                                                add("deleniti"),
                                            }};
                                        }}),
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
                                            valueInteger = 398221;
                                            valueString = "dolorem";
                                            valueStringArray = new String[]{{
                                                add("dolor"),
                                            }};
                                        }}),
                                        add(new ManagedProperty() {{
                                            key = "qui";
                                            valueBool = false;
                                            valueBundle = new ManagedPropertyBundle() {{
                                                managedProperty = new org.openapis.openapi.models.shared.ManagedProperty[]{{
                                                    add(new ManagedProperty() {{}}),
                                                }};
                                            }};
                                            valueBundleArray = new org.openapis.openapi.models.shared.ManagedPropertyBundle[]{{
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
                                                    }};
                                                }}),
                                            }};
                                            valueInteger = 970237;
                                            valueString = "amet";
                                            valueStringArray = new String[]{{
                                                add("numquam"),
                                                add("veritatis"),
                                                add("ipsa"),
                                            }};
                                        }}),
                                    }};
                                    productId = "ipsa";
                                }};
                                productId = "iure";
                                trackIds = new String[]{{
                                    add("quaerat"),
                                    add("accusamus"),
                                }};
                                tracks = new org.openapis.openapi.models.shared.ProductPolicyTracksEnum[]{{
                                    add(ProductPolicyTracksEnum.ALPHA),
                                    add(ProductPolicyTracksEnum.PRODUCTION),
                                    add(ProductPolicyTracksEnum.BETA),
                                }};
                            }}),
                        }};
                    }};;
                    product = "eos";
                    report = new DeviceReport() {{
                        appState = new org.openapis.openapi.models.shared.AppState[]{{
                            add(new AppState() {{
                                keyedAppState = new org.openapis.openapi.models.shared.KeyedAppState[]{{
                                    add(new KeyedAppState() {{
                                        data = "fugiat";
                                        key = "ab";
                                        message = "soluta";
                                        severity = KeyedAppStateSeverityEnum.SEVERITY_ERROR;
                                        stateTimestampMillis = "iusto";
                                    }}),
                                }};
                                packageName = "voluptate";
                            }}),
                            add(new AppState() {{
                                keyedAppState = new org.openapis.openapi.models.shared.KeyedAppState[]{{
                                    add(new KeyedAppState() {{
                                        data = "deleniti";
                                        key = "omnis";
                                        message = "necessitatibus";
                                        severity = KeyedAppStateSeverityEnum.SEVERITY_ERROR;
                                        stateTimestampMillis = "asperiores";
                                    }}),
                                    add(new KeyedAppState() {{
                                        data = "nihil";
                                        key = "ipsum";
                                        message = "voluptate";
                                        severity = KeyedAppStateSeverityEnum.SEVERITY_INFO;
                                        stateTimestampMillis = "saepe";
                                    }}),
                                    add(new KeyedAppState() {{
                                        data = "eius";
                                        key = "aspernatur";
                                        message = "perferendis";
                                        severity = KeyedAppStateSeverityEnum.SEVERITY_UNKNOWN;
                                        stateTimestampMillis = "optio";
                                    }}),
                                }};
                                packageName = "accusamus";
                            }}),
                            add(new AppState() {{
                                keyedAppState = new org.openapis.openapi.models.shared.KeyedAppState[]{{
                                    add(new KeyedAppState() {{
                                        data = "saepe";
                                        key = "suscipit";
                                        message = "deserunt";
                                        severity = KeyedAppStateSeverityEnum.SEVERITY_INFO;
                                        stateTimestampMillis = "minima";
                                    }}),
                                    add(new KeyedAppState() {{
                                        data = "repellendus";
                                        key = "totam";
                                        message = "similique";
                                        severity = KeyedAppStateSeverityEnum.SEVERITY_UNKNOWN;
                                        stateTimestampMillis = "at";
                                    }}),
                                }};
                                packageName = "quaerat";
                            }}),
                        }};
                        lastUpdatedTimestampMillis = "tempora";
                    }};;
                    retailBrand = "vel";
                    sdkVersion = 798047;
                }};;
                accessToken = "officiis";
                alt = AltEnum.JSON;
                callback = "dolorum";
                fields = "a";
                key = "esse";
                oauthToken = "harum";
                prettyPrint = false;
                quotaUser = "iusto";
                updateMask = "ipsum";
                uploadType = "quisquam";
                uploadProtocol = "tenetur";
            }};            

            AndroidenterpriseDevicesUpdateResponse res = sdk.devices.androidenterpriseDevicesUpdate(req, new AndroidenterpriseDevicesUpdateSecurity("amet", "tempore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.device != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
