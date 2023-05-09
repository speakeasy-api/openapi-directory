# smartMeDeviceConfiguration

### Available Operations

* [smartMeDeviceConfigurationGet](#smartmedeviceconfigurationget) - Gets the configuration of a smart-me device.
* [smartMeDeviceConfigurationPostForm](#smartmedeviceconfigurationpostform) - Sets the configuration of a smart-me device. The device needs to be online.
* [smartMeDeviceConfigurationPostJson](#smartmedeviceconfigurationpostjson) - Sets the configuration of a smart-me device. The device needs to be online.
* [smartMeDeviceConfigurationPostRaw](#smartmedeviceconfigurationpostraw) - Sets the configuration of a smart-me device. The device needs to be online.

## smartMeDeviceConfigurationGet

Gets the configuration of a smart-me device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SmartMeDeviceConfigurationGetRequest;
import org.openapis.openapi.models.operations.SmartMeDeviceConfigurationGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SmartMeDeviceConfigurationGetRequest req = new SmartMeDeviceConfigurationGetRequest("a");            

            SmartMeDeviceConfigurationGetResponse res = sdk.smartMeDeviceConfiguration.smartMeDeviceConfigurationGet(req);

            if (res.smartMeDeviceConfigurationContainer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## smartMeDeviceConfigurationPostForm

Sets the configuration of a smart-me device. The device needs to be online.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SmartMeDeviceConfigurationPostFormResponse;
import org.openapis.openapi.models.shared.InputConfigurationContainer;
import org.openapis.openapi.models.shared.InputConfigurationContainerTypeEnum;
import org.openapis.openapi.models.shared.OutputConfigurationContainer;
import org.openapis.openapi.models.shared.OutputConfigurationContainerDigitalOutputNoConnectionActionEnum;
import org.openapis.openapi.models.shared.OutputConfigurationContainerS0PulseValueEnum;
import org.openapis.openapi.models.shared.OutputConfigurationContainerTypeEnum;
import org.openapis.openapi.models.shared.SmartMeDeviceConfigurationContainer;
import org.openapis.openapi.models.shared.SmartMeDeviceConfigurationContainerDnsUpdateStateEnum;
import org.openapis.openapi.models.shared.SmartMeDeviceConfigurationContainerUploadIntervalEnum;
import org.openapis.openapi.models.shared.SwitchConfigurationContainer;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SmartMeDeviceConfigurationContainer req = new SmartMeDeviceConfigurationContainer() {{
                deviceEncryptionKey = "nulla";
                devicePinCode = "quas";
                dnsUpdateState = SmartMeDeviceConfigurationContainerDnsUpdateStateEnum.DNS_UPDATE_PUBLIC_IP;
                enableModbusTcp = false;
                id = "1f99dd2e-fd12-41aa-af1e-674bdb04f157";
                inputConfiguration = new org.openapis.openapi.models.shared.InputConfigurationContainer[]{{
                    add(new InputConfigurationContainer() {{
                        name = "Margaret Lemke";
                        number = 401259;
                        offText = "deleniti";
                        onText = "itaque";
                        type = InputConfigurationContainerTypeEnum.DIGITAL_INPUT;
                    }}),
                    add(new InputConfigurationContainer() {{
                        name = "Dr. Belinda West III";
                        number = 55965;
                        offText = "minima";
                        onText = "veritatis";
                        type = InputConfigurationContainerTypeEnum.TARIFF_INPUT;
                    }}),
                }};
                outputConfiguration = new org.openapis.openapi.models.shared.OutputConfigurationContainer[]{{
                    add(new OutputConfigurationContainer() {{
                        digitalOutputNoConnectionAction = OutputConfigurationContainerDigitalOutputNoConnectionActionEnum.TURN_ON;
                        name = "Ms. Kenneth Ledner";
                        number = 649832;
                        s0PulseValue = OutputConfigurationContainerS0PulseValueEnum.PULSE_VALUE1000_KWH;
                        type = OutputConfigurationContainerTypeEnum.IMPULSE_OUTPUT_REACTIVE_ENERGY;
                    }}),
                }};
                showReactiveEnergy = false;
                switchConfiguration = new org.openapis.openapi.models.shared.SwitchConfigurationContainer[]{{
                    add(new SwitchConfigurationContainer() {{
                        canSwitchOff = false;
                        number = 32465;
                    }}),
                    add(new SwitchConfigurationContainer() {{
                        canSwitchOff = false;
                        number = 221161;
                    }}),
                }};
                uploadInterval = SmartMeDeviceConfigurationContainerUploadIntervalEnum.UPLOAD_INTERVAL15MIN;
            }};            

            SmartMeDeviceConfigurationPostFormResponse res = sdk.smartMeDeviceConfiguration.smartMeDeviceConfigurationPostForm(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## smartMeDeviceConfigurationPostJson

Sets the configuration of a smart-me device. The device needs to be online.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SmartMeDeviceConfigurationPostJsonResponse;
import org.openapis.openapi.models.shared.InputConfigurationContainer;
import org.openapis.openapi.models.shared.InputConfigurationContainerTypeEnum;
import org.openapis.openapi.models.shared.OutputConfigurationContainer;
import org.openapis.openapi.models.shared.OutputConfigurationContainerDigitalOutputNoConnectionActionEnum;
import org.openapis.openapi.models.shared.OutputConfigurationContainerS0PulseValueEnum;
import org.openapis.openapi.models.shared.OutputConfigurationContainerTypeEnum;
import org.openapis.openapi.models.shared.SmartMeDeviceConfigurationContainer;
import org.openapis.openapi.models.shared.SmartMeDeviceConfigurationContainerDnsUpdateStateEnum;
import org.openapis.openapi.models.shared.SmartMeDeviceConfigurationContainerUploadIntervalEnum;
import org.openapis.openapi.models.shared.SwitchConfigurationContainer;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SmartMeDeviceConfigurationContainer req = new SmartMeDeviceConfigurationContainer() {{
                deviceEncryptionKey = "numquam";
                devicePinCode = "impedit";
                dnsUpdateState = SmartMeDeviceConfigurationContainerDnsUpdateStateEnum.NO_UPDATE;
                enableModbusTcp = false;
                id = "6071f93f-5f06-442d-ac7a-f515cc413aa6";
                inputConfiguration = new org.openapis.openapi.models.shared.InputConfigurationContainer[]{{
                    add(new InputConfigurationContainer() {{
                        name = "Rex Walter";
                        number = 424089;
                        offText = "ducimus";
                        onText = "quos";
                        type = InputConfigurationContainerTypeEnum.TARIFF_INPUT;
                    }}),
                }};
                outputConfiguration = new org.openapis.openapi.models.shared.OutputConfigurationContainer[]{{
                    add(new OutputConfigurationContainer() {{
                        digitalOutputNoConnectionAction = OutputConfigurationContainerDigitalOutputNoConnectionActionEnum.SET_PWM_VALUE;
                        name = "Felipe Johns";
                        number = 968904;
                        s0PulseValue = OutputConfigurationContainerS0PulseValueEnum.PULSE_VALUE10000_KWH;
                        type = OutputConfigurationContainerTypeEnum.IMPULSE_OUTPUT_ACTIVE_ENERGY_EXPORT;
                    }}),
                    add(new OutputConfigurationContainer() {{
                        digitalOutputNoConnectionAction = OutputConfigurationContainerDigitalOutputNoConnectionActionEnum.SET_PWM_VALUE;
                        name = "Kimberly Ritchie";
                        number = 348519;
                        s0PulseValue = OutputConfigurationContainerS0PulseValueEnum.PULSE_VALUE10000_KWH;
                        type = OutputConfigurationContainerTypeEnum.ANALOG_PWM_SIGNAL_OUTPUT;
                    }}),
                }};
                showReactiveEnergy = false;
                switchConfiguration = new org.openapis.openapi.models.shared.SwitchConfigurationContainer[]{{
                    add(new SwitchConfigurationContainer() {{
                        canSwitchOff = false;
                        number = 985492;
                    }}),
                    add(new SwitchConfigurationContainer() {{
                        canSwitchOff = false;
                        number = 381760;
                    }}),
                }};
                uploadInterval = SmartMeDeviceConfigurationContainerUploadIntervalEnum.UPLOAD_INTERVAL24H;
            }};            

            SmartMeDeviceConfigurationPostJsonResponse res = sdk.smartMeDeviceConfiguration.smartMeDeviceConfigurationPostJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## smartMeDeviceConfigurationPostRaw

Sets the configuration of a smart-me device. The device needs to be online.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SmartMeDeviceConfigurationPostRawResponse;
import org.openapis.openapi.models.shared.InputConfigurationContainer;
import org.openapis.openapi.models.shared.InputConfigurationContainerTypeEnum;
import org.openapis.openapi.models.shared.OutputConfigurationContainer;
import org.openapis.openapi.models.shared.OutputConfigurationContainerDigitalOutputNoConnectionActionEnum;
import org.openapis.openapi.models.shared.OutputConfigurationContainerS0PulseValueEnum;
import org.openapis.openapi.models.shared.OutputConfigurationContainerTypeEnum;
import org.openapis.openapi.models.shared.SmartMeDeviceConfigurationContainer;
import org.openapis.openapi.models.shared.SmartMeDeviceConfigurationContainerDnsUpdateStateEnum;
import org.openapis.openapi.models.shared.SmartMeDeviceConfigurationContainerUploadIntervalEnum;
import org.openapis.openapi.models.shared.SwitchConfigurationContainer;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "quidem".getBytes()            

            SmartMeDeviceConfigurationPostRawResponse res = sdk.smartMeDeviceConfiguration.smartMeDeviceConfigurationPostRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
