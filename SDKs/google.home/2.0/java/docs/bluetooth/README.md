# bluetooth

## Overview

This folder contains Bluetooth related endpoints.

### Available Operations

* [changeDiscoverability](#changediscoverability) - Change Discoverability
* [forgetpaireddevice](#forgetpaireddevice) - Forget paired device
* [getPairedDevices](#getpaireddevices) - Get Paired Devices
* [getScanResults](#getscanresults) - Get Scan Results
* [pairwithSpeaker](#pairwithspeaker) - Pair with Speaker
* [scanfordevices](#scanfordevices) - Scan for devices
* [status](#status) - Status

## changeDiscoverability

*See note for Bluetooth under `/setup/bluetooth/status`*

**For Part 1 only**

This enables/disables Home's bluetooth discovery and other devices can pair with Home (where Home acts as a speaker).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChangeDiscoverabilityResponse;
import org.openapis.openapi.models.shared.ChangeDiscoverabilityRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    castLocalAuthorizationToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ChangeDiscoverabilityRequest req = new ChangeDiscoverabilityRequest(false);            

            ChangeDiscoverabilityResponse res = sdk.bluetooth.changeDiscoverability(req);

            if (res.changeDiscoverability200TextPlainObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## forgetpaireddevice

*See note for Bluetooth under `/setup/bluetooth/status`*

**For both parts**

This is to forget paired devices by mac address. Works for both kinds of devices (Part 1 and Part 2).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ForgetpaireddeviceResponse;
import org.openapis.openapi.models.shared.ForgetpaireddeviceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    castLocalAuthorizationToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ForgetpaireddeviceRequest req = new ForgetpaireddeviceRequest(false, "tempora");            

            ForgetpaireddeviceResponse res = sdk.bluetooth.forgetpaireddevice(req);

            if (res.forgetpaireddevice200TextPlainObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPairedDevices

*See note for Bluetooth under `/setup/bluetooth/status`*

**For both parts**

This gives a list of all paired or 'bonded' devices. The response field names are self-descriptive.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPairedDevicesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    castLocalAuthorizationToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPairedDevicesResponse res = sdk.bluetooth.getPairedDevices();

            if (res.example111s != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getScanResults

*See note for Bluetooth under `/setup/bluetooth/status`*

**For Part 2 only**

This returns a list of all nearby bluetooth devices. While the Home app only shows speakers, this list contains all devices including TVs, mobiles, etc.

`rssi` is signal strength, `name` is name, `mac_address` is mac address.  
`device_class` and `device_type` are bluetooth codes.  

The Home app only lists those devices with `expected_profiles` > 0. Basically, the device should function as a speaker.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetScanResultsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    castLocalAuthorizationToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetScanResultsResponse res = sdk.bluetooth.getScanResults();

            if (res.example112s != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pairwithSpeaker

*See note for Bluetooth under `/setup/bluetooth/status`*

**For Part 2 only**

This pairs with other bluetooth speakers by mac address.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PairwithSpeakerResponse;
import org.openapis.openapi.models.shared.PairwithSpeakerRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    castLocalAuthorizationToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.PairwithSpeakerRequest req = new PairwithSpeakerRequest(false, "placeat", 528895);            

            PairwithSpeakerResponse res = sdk.bluetooth.pairwithSpeaker(req);

            if (res.pairwithSpeaker200TextPlainObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## scanfordevices

*See note for Bluetooth under `/setup/bluetooth/status`*

**For Part 2 only**

This initiates scan for other bluetooth speakers/devices. Scan results will be updated continuously for `timeout` seconds.  
To get the scan results, see /setup/bluetooth/scan_results.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ScanfordevicesResponse;
import org.openapis.openapi.models.shared.ScanfordevicesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    castLocalAuthorizationToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ScanfordevicesRequest req = new ScanfordevicesRequest(false, false, 568045);            

            ScanfordevicesResponse res = sdk.bluetooth.scanfordevices(req);

            if (res.scanfordevices200TextPlainObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## status

> **There are 2 parts of Bluetooth.**
>
> *Part 1*: Devices like phones connect to Home and play audio through Home.  
> For this, /setup/bluetooth/discovery is used to make Home discoverable. Then devices can connect to it as if Home is just another bluetooth speaker.
>
> *Part 2*: Bluetooth speakers connect to Home and Home plays audio through the speakers.
> For this, /setup/bluetooth/scan and /setup/bluetooth/scan_results are used to connect to other speakers.
>
> The other endpoints are common for both parts.


**For both parts**

This gives the status of all bluetooth things.
- Not sure what `audio_mode` is.
- `discovery_enabled` states whether Home is discoverable. (**Part 1**)
- `connecting_devices` is a list of all media sources (like phones) connected to Home. (**Part 1**)
- `scanning_enabled` states whether Home scanning for other bluetooth speakers/devices. (**Part 2**)
- `connected_devices` is a list of all speakers connected to Home. (**Part 2**)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi") {{
                    castLocalAuthorizationToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            StatusResponse res = sdk.bluetooth.status();

            if (res.example110 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
