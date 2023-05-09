# customers

### Available Operations

* [androiddeviceprovisioningCustomersConfigurationsCreate](#androiddeviceprovisioningcustomersconfigurationscreate) - Creates a new configuration. Once created, a customer can apply the configuration to devices.
* [androiddeviceprovisioningCustomersConfigurationsDelete](#androiddeviceprovisioningcustomersconfigurationsdelete) - Deletes an unused configuration. The API call fails if the customer has devices with the configuration applied.
* [androiddeviceprovisioningCustomersConfigurationsList](#androiddeviceprovisioningcustomersconfigurationslist) - Lists a customer's configurations.
* [androiddeviceprovisioningCustomersConfigurationsPatch](#androiddeviceprovisioningcustomersconfigurationspatch) - Updates a configuration's field values.
* [androiddeviceprovisioningCustomersDevicesApplyConfiguration](#androiddeviceprovisioningcustomersdevicesapplyconfiguration) - Applies a Configuration to the device to register the device for zero-touch enrollment. After applying a configuration to a device, the device automatically provisions itself on first boot, or next factory reset.
* [androiddeviceprovisioningCustomersDevicesList](#androiddeviceprovisioningcustomersdeviceslist) - Lists a customer's devices.
* [androiddeviceprovisioningCustomersDevicesRemoveConfiguration](#androiddeviceprovisioningcustomersdevicesremoveconfiguration) - Removes a configuration from device.
* [androiddeviceprovisioningCustomersDevicesUnclaim](#androiddeviceprovisioningcustomersdevicesunclaim) - Unclaims a device from a customer and removes it from zero-touch enrollment. After removing a device, a customer must contact their reseller to register the device into zero-touch enrollment again.
* [androiddeviceprovisioningCustomersDpcsList](#androiddeviceprovisioningcustomersdpcslist) - Lists the DPCs (device policy controllers) that support zero-touch enrollment.
* [androiddeviceprovisioningCustomersList](#androiddeviceprovisioningcustomerslist) - Lists the user's customer accounts.

## androiddeviceprovisioningCustomersConfigurationsCreate

Creates a new configuration. Once created, a customer can apply the configuration to devices.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningCustomersConfigurationsCreateRequest;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningCustomersConfigurationsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConfigurationInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroiddeviceprovisioningCustomersConfigurationsCreateRequest req = new AndroiddeviceprovisioningCustomersConfigurationsCreateRequest("suscipit") {{
                dollarXgafv = XgafvEnum.ONE;
                configurationInput = new ConfigurationInput() {{
                    companyName = "minus";
                    configurationName = "placeat";
                    contactEmail = "voluptatum";
                    contactPhone = "iusto";
                    customMessage = "excepturi";
                    dpcExtras = "nisi";
                    dpcResourcePath = "recusandae";
                    isDefault = false;
                }};;
                accessToken = "temporibus";
                alt = AltEnum.JSON;
                callback = "quis";
                fields = "veritatis";
                key = "deserunt";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "ipsam";
                uploadType = "repellendus";
                uploadProtocol = "sapiente";
            }};            

            AndroiddeviceprovisioningCustomersConfigurationsCreateResponse res = sdk.customers.androiddeviceprovisioningCustomersConfigurationsCreate(req);

            if (res.configuration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androiddeviceprovisioningCustomersConfigurationsDelete

Deletes an unused configuration. The API call fails if the customer has devices with the configuration applied.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningCustomersConfigurationsDeleteRequest;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningCustomersConfigurationsDeleteResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroiddeviceprovisioningCustomersConfigurationsDeleteRequest req = new AndroiddeviceprovisioningCustomersConfigurationsDeleteRequest("quo") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "at";
                alt = AltEnum.PROTO;
                callback = "maiores";
                fields = "molestiae";
                key = "quod";
                oauthToken = "quod";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "totam";
                uploadProtocol = "porro";
            }};            

            AndroiddeviceprovisioningCustomersConfigurationsDeleteResponse res = sdk.customers.androiddeviceprovisioningCustomersConfigurationsDelete(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androiddeviceprovisioningCustomersConfigurationsList

Lists a customer's configurations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningCustomersConfigurationsListRequest;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningCustomersConfigurationsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroiddeviceprovisioningCustomersConfigurationsListRequest req = new AndroiddeviceprovisioningCustomersConfigurationsListRequest("dolorum") {{
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

            AndroiddeviceprovisioningCustomersConfigurationsListResponse res = sdk.customers.androiddeviceprovisioningCustomersConfigurationsList(req);

            if (res.customerListConfigurationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androiddeviceprovisioningCustomersConfigurationsPatch

Updates a configuration's field values.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningCustomersConfigurationsPatchRequest;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningCustomersConfigurationsPatchResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConfigurationInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroiddeviceprovisioningCustomersConfigurationsPatchRequest req = new AndroiddeviceprovisioningCustomersConfigurationsPatchRequest("commodi") {{
                dollarXgafv = XgafvEnum.ONE;
                configurationInput = new ConfigurationInput() {{
                    companyName = "modi";
                    configurationName = "qui";
                    contactEmail = "impedit";
                    contactPhone = "cum";
                    customMessage = "esse";
                    dpcExtras = "ipsum";
                    dpcResourcePath = "excepturi";
                    isDefault = false;
                }};;
                accessToken = "aspernatur";
                alt = AltEnum.JSON;
                callback = "ad";
                fields = "natus";
                key = "sed";
                oauthToken = "iste";
                prettyPrint = false;
                quotaUser = "dolor";
                updateMask = "natus";
                uploadType = "laboriosam";
                uploadProtocol = "hic";
            }};            

            AndroiddeviceprovisioningCustomersConfigurationsPatchResponse res = sdk.customers.androiddeviceprovisioningCustomersConfigurationsPatch(req);

            if (res.configuration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androiddeviceprovisioningCustomersDevicesApplyConfiguration

Applies a Configuration to the device to register the device for zero-touch enrollment. After applying a configuration to a device, the device automatically provisions itself on first boot, or next factory reset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningCustomersDevicesApplyConfigurationRequest;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningCustomersDevicesApplyConfigurationResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CustomerApplyConfigurationRequest;
import org.openapis.openapi.models.shared.DeviceIdentifier;
import org.openapis.openapi.models.shared.DeviceIdentifierDeviceTypeEnum;
import org.openapis.openapi.models.shared.DeviceReference;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroiddeviceprovisioningCustomersDevicesApplyConfigurationRequest req = new AndroiddeviceprovisioningCustomersDevicesApplyConfigurationRequest("saepe") {{
                dollarXgafv = XgafvEnum.TWO;
                customerApplyConfigurationRequest = new CustomerApplyConfigurationRequest() {{
                    configuration = "in";
                    device = new DeviceReference() {{
                        deviceId = "corporis";
                        deviceIdentifier = new DeviceIdentifier() {{
                            chromeOsAttestedDeviceId = "iste";
                            deviceType = DeviceIdentifierDeviceTypeEnum.DEVICE_TYPE_ANDROID;
                            imei = "saepe";
                            manufacturer = "quidem";
                            meid = "architecto";
                            model = "ipsa";
                            serialNumber = "reiciendis";
                        }};;
                    }};;
                }};;
                accessToken = "est";
                alt = AltEnum.MEDIA;
                callback = "laborum";
                fields = "dolores";
                key = "dolorem";
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "explicabo";
                uploadType = "nobis";
                uploadProtocol = "enim";
            }};            

            AndroiddeviceprovisioningCustomersDevicesApplyConfigurationResponse res = sdk.customers.androiddeviceprovisioningCustomersDevicesApplyConfiguration(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androiddeviceprovisioningCustomersDevicesList

Lists a customer's devices.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningCustomersDevicesListRequest;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningCustomersDevicesListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroiddeviceprovisioningCustomersDevicesListRequest req = new AndroiddeviceprovisioningCustomersDevicesListRequest("omnis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "minima";
                alt = AltEnum.MEDIA;
                callback = "accusantium";
                fields = "iure";
                key = "culpa";
                oauthToken = "doloribus";
                pageSize = "sapiente";
                pageToken = "architecto";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "dolorem";
                uploadProtocol = "culpa";
            }};            

            AndroiddeviceprovisioningCustomersDevicesListResponse res = sdk.customers.androiddeviceprovisioningCustomersDevicesList(req);

            if (res.customerListDevicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androiddeviceprovisioningCustomersDevicesRemoveConfiguration

Removes a configuration from device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningCustomersDevicesRemoveConfigurationRequest;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningCustomersDevicesRemoveConfigurationResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CustomerRemoveConfigurationRequest;
import org.openapis.openapi.models.shared.DeviceIdentifier;
import org.openapis.openapi.models.shared.DeviceIdentifierDeviceTypeEnum;
import org.openapis.openapi.models.shared.DeviceReference;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroiddeviceprovisioningCustomersDevicesRemoveConfigurationRequest req = new AndroiddeviceprovisioningCustomersDevicesRemoveConfigurationRequest("consequuntur") {{
                dollarXgafv = XgafvEnum.TWO;
                customerRemoveConfigurationRequest = new CustomerRemoveConfigurationRequest() {{
                    device = new DeviceReference() {{
                        deviceId = "mollitia";
                        deviceIdentifier = new DeviceIdentifier() {{
                            chromeOsAttestedDeviceId = "occaecati";
                            deviceType = DeviceIdentifierDeviceTypeEnum.DEVICE_TYPE_UNSPECIFIED;
                            imei = "commodi";
                            manufacturer = "quam";
                            meid = "molestiae";
                            model = "velit";
                            serialNumber = "error";
                        }};;
                    }};;
                }};;
                accessToken = "quia";
                alt = AltEnum.MEDIA;
                callback = "vitae";
                fields = "laborum";
                key = "animi";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "quo";
                uploadProtocol = "sequi";
            }};            

            AndroiddeviceprovisioningCustomersDevicesRemoveConfigurationResponse res = sdk.customers.androiddeviceprovisioningCustomersDevicesRemoveConfiguration(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androiddeviceprovisioningCustomersDevicesUnclaim

Unclaims a device from a customer and removes it from zero-touch enrollment. After removing a device, a customer must contact their reseller to register the device into zero-touch enrollment again.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningCustomersDevicesUnclaimRequest;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningCustomersDevicesUnclaimResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CustomerUnclaimDeviceRequest;
import org.openapis.openapi.models.shared.DeviceIdentifier;
import org.openapis.openapi.models.shared.DeviceIdentifierDeviceTypeEnum;
import org.openapis.openapi.models.shared.DeviceReference;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroiddeviceprovisioningCustomersDevicesUnclaimRequest req = new AndroiddeviceprovisioningCustomersDevicesUnclaimRequest("tenetur") {{
                dollarXgafv = XgafvEnum.ONE;
                customerUnclaimDeviceRequest = new CustomerUnclaimDeviceRequest() {{
                    device = new DeviceReference() {{
                        deviceId = "id";
                        deviceIdentifier = new DeviceIdentifier() {{
                            chromeOsAttestedDeviceId = "possimus";
                            deviceType = DeviceIdentifierDeviceTypeEnum.DEVICE_TYPE_UNSPECIFIED;
                            imei = "quasi";
                            manufacturer = "error";
                            meid = "temporibus";
                            model = "laborum";
                            serialNumber = "quasi";
                        }};;
                    }};;
                }};;
                accessToken = "reiciendis";
                alt = AltEnum.PROTO;
                callback = "vero";
                fields = "nihil";
                key = "praesentium";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "omnis";
                uploadProtocol = "voluptate";
            }};            

            AndroiddeviceprovisioningCustomersDevicesUnclaimResponse res = sdk.customers.androiddeviceprovisioningCustomersDevicesUnclaim(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androiddeviceprovisioningCustomersDpcsList

Lists the DPCs (device policy controllers) that support zero-touch enrollment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningCustomersDpcsListRequest;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningCustomersDpcsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroiddeviceprovisioningCustomersDpcsListRequest req = new AndroiddeviceprovisioningCustomersDpcsListRequest("cum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "doloremque";
                alt = AltEnum.MEDIA;
                callback = "ut";
                fields = "maiores";
                key = "dicta";
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "dolore";
                uploadType = "iusto";
                uploadProtocol = "dicta";
            }};            

            AndroiddeviceprovisioningCustomersDpcsListResponse res = sdk.customers.androiddeviceprovisioningCustomersDpcsList(req);

            if (res.customerListDpcsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androiddeviceprovisioningCustomersList

Lists the user's customer accounts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningCustomersListRequest;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningCustomersListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroiddeviceprovisioningCustomersListRequest req = new AndroiddeviceprovisioningCustomersListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "enim";
                alt = AltEnum.PROTO;
                callback = "commodi";
                fields = "repudiandae";
                key = "quae";
                oauthToken = "ipsum";
                pageSize = 692472L;
                pageToken = "molestias";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "pariatur";
                uploadProtocol = "modi";
            }};            

            AndroiddeviceprovisioningCustomersListResponse res = sdk.customers.androiddeviceprovisioningCustomersList(req);

            if (res.customerListCustomersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
