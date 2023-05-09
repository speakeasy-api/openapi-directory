# customDevice

### Available Operations

* [customDeviceGet](#customdeviceget) - Gets all Custom Devices
* [customDevicePostForm](#customdevicepostform) - Creates or updates a Custom Device or updates it's values.
* [customDevicePostJson](#customdevicepostjson) - Creates or updates a Custom Device or updates it's values.
* [customDevicePostRaw](#customdevicepostraw) - Creates or updates a Custom Device or updates it's values.
* [getApiCustomDeviceId](#getapicustomdeviceid) - Gets a Custom Device by it's ID

## customDeviceGet

Gets all Devices

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomDeviceGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomDeviceGetResponse res = sdk.customDevice.customDeviceGet();

            if (res.customDeviceToPosts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customDevicePostForm

Creates or updates a Custom Device or updates it's values.
            A Custom Device can be any device that like to add some measurement values to the smart-me Cloud.
            Only use a custom device for all non meters.
            For a new device leave the ID empty. To create a device you have to set the DeviceEnergyType.
            To update values, add the ID of the device and the values you like to set.  (See the Data Type Model for more Information)

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomDevicePostFormResponse;
import org.openapis.openapi.models.shared.CustomDeviceToPost;
import org.openapis.openapi.models.shared.CustomDeviceValues;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CustomDeviceToPost req = new CustomDeviceToPost() {{
                id = "ed151a05-dfc2-4ddf-bcc7-8ca1ba928fc8";
                name = "Lucy Krajcik";
                serial = 774234L;
                valueDate = OffsetDateTime.parse("2022-02-02T00:14:45.467Z");
                values = new org.openapis.openapi.models.shared.CustomDeviceValues[]{{
                    add(new CustomDeviceValues() {{
                        name = "Brandon Auer";
                        value = 1496.75;
                    }}),
                }};
            }};            

            CustomDevicePostFormResponse res = sdk.customDevice.customDevicePostForm(req);

            if (res.customDeviceToPost != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customDevicePostJson

Creates or updates a Custom Device or updates it's values.
            A Custom Device can be any device that like to add some measurement values to the smart-me Cloud.
            Only use a custom device for all non meters.
            For a new device leave the ID empty. To create a device you have to set the DeviceEnergyType.
            To update values, add the ID of the device and the values you like to set.  (See the Data Type Model for more Information)

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomDevicePostJsonResponse;
import org.openapis.openapi.models.shared.CustomDeviceToPost;
import org.openapis.openapi.models.shared.CustomDeviceValues;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CustomDeviceToPost req = new CustomDeviceToPost() {{
                id = "9396fea7-596e-4b10-baaa-2352c5955907";
                name = "Miss Aubrey Williamson";
                serial = 635059L;
                valueDate = OffsetDateTime.parse("2022-01-02T17:10:32.894Z");
                values = new org.openapis.openapi.models.shared.CustomDeviceValues[]{{
                    add(new CustomDeviceValues() {{
                        name = "Francis Jerde";
                        value = 2444.25;
                    }}),
                    add(new CustomDeviceValues() {{
                        name = "Miss Eugene Hauck";
                        value = 3172.02;
                    }}),
                    add(new CustomDeviceValues() {{
                        name = "Angelica Dietrich";
                        value = 6625.27;
                    }}),
                }};
            }};            

            CustomDevicePostJsonResponse res = sdk.customDevice.customDevicePostJson(req);

            if (res.customDeviceToPost != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customDevicePostRaw

Creates or updates a Custom Device or updates it's values.
            A Custom Device can be any device that like to add some measurement values to the smart-me Cloud.
            Only use a custom device for all non meters.
            For a new device leave the ID empty. To create a device you have to set the DeviceEnergyType.
            To update values, add the ID of the device and the values you like to set.  (See the Data Type Model for more Information)

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomDevicePostRawResponse;
import org.openapis.openapi.models.shared.CustomDeviceToPost;
import org.openapis.openapi.models.shared.CustomDeviceValues;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "possimus".getBytes()            

            CustomDevicePostRawResponse res = sdk.customDevice.customDevicePostRaw(req);

            if (res.customDeviceToPost != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiCustomDeviceId

Gets a Device by it's ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiCustomDeviceIdRequest;
import org.openapis.openapi.models.operations.GetApiCustomDeviceIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiCustomDeviceIdRequest req = new GetApiCustomDeviceIdRequest("aut");            

            GetApiCustomDeviceIdResponse res = sdk.customDevice.getApiCustomDeviceId(req);

            if (res.customDeviceToPost != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
