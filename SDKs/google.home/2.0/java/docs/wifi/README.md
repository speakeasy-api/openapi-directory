# wifi

## Overview

This folder contains Wi-Fi related endpoints.

### Available Operations

* [connecttoWiFiNetwork](#connecttowifinetwork) - Connect to Wi-Fi Network
* [forgetWiFiNetwork](#forgetwifinetwork) - Forget Wi-Fi Network
* [getSavedNetworks](#getsavednetworks) - Get Saved Networks
* [getWiFiScanResults](#getwifiscanresults) - Get Wi-Fi Scan Results
* [scanforNetworks](#scanfornetworks) - Scan for Networks

## connecttoWiFiNetwork

**Note:** Not sure how the password is encrypted. Might be using the public certificate from /setup/eureka_info. So this cannot be used as of now. If someone figures it out, please [create a new issue here](https://github.com/rithvikvibhu/GHLocalApi/issues/new).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnecttoWiFiNetworkResponse;
import org.openapis.openapi.models.shared.ConnecttoWiFiNetworkRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    castLocalAuthorizationToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ConnecttoWiFiNetworkRequest req = new ConnecttoWiFiNetworkRequest("corporis", "explicabo", 750686, "enim", 607831, 363711);            

            ConnecttoWiFiNetworkResponse res = sdk.wifi.connecttoWiFiNetwork(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## forgetWiFiNetwork

This is to forget a saved network by `wpa_id`. Get the `wpa_id` from /setup/configured_networks

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ForgetWiFiNetworkResponse;
import org.openapis.openapi.models.shared.ForgetWiFiNetworkRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    castLocalAuthorizationToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ForgetWiFiNetworkRequest req = new ForgetWiFiNetworkRequest(570197);            

            ForgetWiFiNetworkResponse res = sdk.wifi.forgetWiFiNetwork(req);

            if (res.forgetWiFiNetwork200TextPlainObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSavedNetworks

This gets a list of all saved Wi-Fi networks.

Each network has `ssid`, `wpa_auth`, `wpa_cipher` and `wpa_id`.  
`wpa_id` is an incrementing number used to identify a saved network.  
#TODO: Add values for `wpa_auth` and `wpa_cipher`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSavedNetworksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    castLocalAuthorizationToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSavedNetworksResponse res = sdk.wifi.getSavedNetworks();

            if (res.example113s != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWiFiScanResults

This gets a list of all nearby Wi-Fi access points.

The list only has the connected AP by default. Once a scan is triggered by `/setup/scan_wifi`, the whole list is cached for ~3 minutes. Then it will revert to returning only the connected AP again.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWiFiScanResultsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    castLocalAuthorizationToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetWiFiScanResultsResponse res = sdk.wifi.getWiFiScanResults();

            if (res.example114s != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## scanforNetworks

This initiates scanning for Wi-Fi networks.

The results can be obtained with `/setup/scan_results` after triggering the scan with this request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ScanforNetworksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    castLocalAuthorizationToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ScanforNetworksResponse res = sdk.wifi.scanforNetworks();

            if (res.scanforNetworks200TextPlainObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
