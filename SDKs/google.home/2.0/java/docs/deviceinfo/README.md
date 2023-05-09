# deviceInfo

## Overview

Endpoints in this folder give information about the device.

### Available Operations

* [appDeviceID](#appdeviceid) - App Device ID
* [checkReadyStatus](#checkreadystatus) - Check Ready Status
* [eurekaInfo](#eurekainfo) - Eureka Info
* [locales](#locales) - Locales
* [offer](#offer) - Offer
* [testInternetDownloadSpeed](#testinternetdownloadspeed) - Test Internet Download Speed
* [timezones](#timezones) - Timezones

## appDeviceID

This gives "app device id", "certificate" and "signed data".  
The `app_id` in the request is mandatory and refers to Chromecast backdrop/screensaver app. It has to be set to `E8C28D3C`.  

The certificate is valid and issued by `Chromecast ICA 6 (Audio Assist), Google Inc`.

Not sure what the other two are.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppDeviceIDResponse;
import org.openapis.openapi.models.shared.AppDeviceIDRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    castLocalAuthorizationToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.AppDeviceIDRequest req = new AppDeviceIDRequest("temporibus");            

            AppDeviceIDResponse res = sdk.deviceInfo.appDeviceID(req);

            if (res.example11 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## checkReadyStatus

**Update:** This seems to have changed now and is no longer possible. The error is also new.

Setting `play_ready_message` to true plays a welcome message on the device saying "Hi, I'm your Google Assistant. I'm here to help. To learn a few things you can do, continue in the Google Home app."

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CheckReadyStatusResponse;
import org.openapis.openapi.models.shared.CheckReadyStatusRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    castLocalAuthorizationToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CheckReadyStatusRequest req = new CheckReadyStatusRequest(false, "quis");            

            CheckReadyStatusResponse res = sdk.deviceInfo.checkReadyStatus(req);

            if (res.example13 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## eurekaInfo

This gives most of the device info. The GET parameter `param` is a comma separated list of json keys to fetch. Currently, these params are known: `version,audio,name,build_info,detail,device_info,net,wifi,setup,settings,opt_in,opencast,multizone,proxy,night_mode_params,user_eq,room_equalizer,sign,aogh,ultrasound,mesh`

Nested items can also be filtered using the dot notation. Example: `audio.digital`

The `options` GET parameter is always set to `detail` or `detail,sign`. `sign` signs the `nonce` and returns some value.

The `nonce` GET parameter is an integer value signed with needed (see `option` parameter above).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EurekaInfoRequest;
import org.openapis.openapi.models.operations.EurekaInfoResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    castLocalAuthorizationToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            EurekaInfoRequest req = new EurekaInfoRequest(1234512345, "detail,sign", "version,audio,name,build_info,detail,device_info,net,wifi,setup,settings,opt_in,opencast,multizone,proxy,night_mode_params,user_eq,room_equalizer,sign,aogh,ultrasound,mesh");            

            EurekaInfoResponse res = sdk.deviceInfo.eurekaInfo(req);

            if (res.example1 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## locales

Simply returns a list of all supported locales.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LocalesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    castLocalAuthorizationToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            LocalesResponse res = sdk.deviceInfo.locales();

            if (res.example15s != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## offer

This gives a token which is used by the Home app to get offers. The offers themselves are not stored on the device.  
A new token is generated for every request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OfferResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    castLocalAuthorizationToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            OfferResponse res = sdk.deviceInfo.offer();

            if (res.example12 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testInternetDownloadSpeed

**Update:** This seems to have been removed. Returns 404 Not Found.

This endpoint tests internet download speed. Any sample file URL can be provided.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestInternetDownloadSpeedResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TestInternetDownloadSpeedRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    castLocalAuthorizationToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.TestInternetDownloadSpeedRequest req = new TestInternetDownloadSpeedRequest("repellendus");            

            TestInternetDownloadSpeedResponse res = sdk.deviceInfo.testInternetDownloadSpeed(req);

            if (res.example16 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## timezones

Simply returns a list of all supported timezones.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TimezonesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    castLocalAuthorizationToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            TimezonesResponse res = sdk.deviceInfo.timezones();

            if (res.example14s != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
