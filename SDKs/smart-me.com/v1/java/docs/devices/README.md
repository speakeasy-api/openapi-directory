# devices

### Available Operations

* [devicesGet](#devicesget) - Gets all Devices
* [devicesPostForm](#devicespostform) - Creates or updates a Device or updates it's values.
* [devicesPostJson](#devicespostjson) - Creates or updates a Device or updates it's values.
* [devicesPostRaw](#devicespostraw) - Creates or updates a Device or updates it's values.
* [devicesPut](#devicesput) - Updates the On/Off Switch on a device. 
            For new implementations please use the "actions" command
* [getApiDevicesId](#getapidevicesid) - Gets a Device by it's ID

## devicesGet

Gets all Devices

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DevicesGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DevicesGetResponse res = sdk.devices.devicesGet();

            if (res.devices != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## devicesPostForm

Creates or updates a Device or updates it's values. 
            For a new device leave the ID empty. To create a device you have to set the DeviceEnergyType.
            To update values, add the ID of the device and the values you like to set.  (See the Data Type Model for more Information)

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DevicesPostFormResponse;
import org.openapis.openapi.models.shared.DeviceToPost;
import org.openapis.openapi.models.shared.DeviceToPostDeviceEnergyTypeEnum;
import org.openapis.openapi.models.shared.DeviceToPostMeterSubTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.DeviceToPost req = new DeviceToPost() {{
                activePower = 6228.46;
                counterReading = 8379.45;
                counterReadingExport = 6736.6;
                counterReadingExportT1 = 960.98;
                counterReadingExportT2 = 9719.45;
                counterReadingT1 = 9764.6;
                counterReadingT2 = 8781.94;
                current = 4686.51;
                currentL1 = 5096.24;
                currentL2 = 9767.62;
                currentL3 = 557.14;
                deviceEnergyType = DeviceToPostDeviceEnergyTypeEnum.METER_TYPE_RS485_GATEWAY;
                digitalInput1 = false;
                id = "7b0074f1-5471-4b5e-ae13-b99d488e1e91";
                meterSubType = DeviceToPostMeterSubTypeEnum.METER_SUB_TYPE_VIRTUAL_BATTERY;
                name = "Erin Altenwerth";
                powerFactor = 1317.97;
                powerFactorL1 = 6471.74;
                powerFactorL2 = 7163.27;
                powerFactorL3 = 8413.86;
                serial = 289406L;
                temperature = 2647.3;
                valueDate = OffsetDateTime.parse("2022-08-08T19:05:24.174Z");
                voltage = 5865.13;
                voltageL1 = 5528.22;
                voltageL2 = 201.07;
                voltageL3 = 1649.4;
            }};            

            DevicesPostFormResponse res = sdk.devices.devicesPostForm(req);

            if (res.deviceToPost != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## devicesPostJson

Creates or updates a Device or updates it's values. 
            For a new device leave the ID empty. To create a device you have to set the DeviceEnergyType.
            To update values, add the ID of the device and the values you like to set.  (See the Data Type Model for more Information)

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DevicesPostJsonResponse;
import org.openapis.openapi.models.shared.DeviceToPost;
import org.openapis.openapi.models.shared.DeviceToPostDeviceEnergyTypeEnum;
import org.openapis.openapi.models.shared.DeviceToPostMeterSubTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.DeviceToPost req = new DeviceToPost() {{
                activePower = 8289.4;
                counterReading = 3698.08;
                counterReadingExport = 46.95;
                counterReadingExportT1 = 1464.41;
                counterReadingExportT2 = 6778.17;
                counterReadingT1 = 5696.18;
                counterReadingT2 = 2700.08;
                current = 7037.37;
                currentL1 = 7351.94;
                currentL2 = 2884.76;
                currentL3 = 9621.89;
                deviceEnergyType = DeviceToPostDeviceEnergyTypeEnum.METER_TYPE_ALL_METERS;
                digitalInput1 = false;
                id = "3c969e9a-3efa-477d-bb14-cd66ae395efb";
                meterSubType = DeviceToPostMeterSubTypeEnum.METER_SUB_TYPE_WATER;
                name = "Lynn Kuvalis";
                powerFactor = 2305.33;
                powerFactorL1 = 6439.9;
                powerFactorL2 = 3948.69;
                powerFactorL3 = 4238.55;
                serial = 618809L;
                temperature = 6063.93;
                valueDate = OffsetDateTime.parse("2022-12-24T23:52:02.245Z");
                voltage = 4701.32;
                voltageL1 = 3015.75;
                voltageL2 = 7160.75;
                voltageL3 = 6601.74;
            }};            

            DevicesPostJsonResponse res = sdk.devices.devicesPostJson(req);

            if (res.deviceToPost != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## devicesPostRaw

Creates or updates a Device or updates it's values. 
            For a new device leave the ID empty. To create a device you have to set the DeviceEnergyType.
            To update values, add the ID of the device and the values you like to set.  (See the Data Type Model for more Information)

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DevicesPostRawResponse;
import org.openapis.openapi.models.shared.DeviceToPost;
import org.openapis.openapi.models.shared.DeviceToPostDeviceEnergyTypeEnum;
import org.openapis.openapi.models.shared.DeviceToPostMeterSubTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "labore".getBytes()            

            DevicesPostRawResponse res = sdk.devices.devicesPostRaw(req);

            if (res.deviceToPost != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## devicesPut

Updates the On/Off Switch on a device
            For new implementations please use the "actions" command

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DevicesPutRequest;
import org.openapis.openapi.models.operations.DevicesPutResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DevicesPutRequest req = new DevicesPutRequest("labore", false) {{
                switchNumber = 383462;
            }};            

            DevicesPutResponse res = sdk.devices.devicesPut(req);

            if (res.object != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiDevicesId

Gets a Device by it's ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiDevicesIdRequest;
import org.openapis.openapi.models.operations.GetApiDevicesIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiDevicesIdRequest req = new GetApiDevicesIdRequest("natus");            

            GetApiDevicesIdResponse res = sdk.devices.getApiDevicesId(req);

            if (res.device != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
