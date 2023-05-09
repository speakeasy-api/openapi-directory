# tracking

## Overview

[Track packages](https://www.shipengine.com/docs/tracking/) across any of our 20+ supported carrier accounts and create tracking events to keep your customers up-to-date. Easily integrate real-time tracking information for shipments into your app, email, or SMS.


Learn how to use ShipEngine to track any package with a carrier and a tracking number
<https://www.shipengine.com/docs/tracking/>
### Available Operations

* [getTrackingLog](#gettrackinglog) - Get Tracking Information
* [startTracking](#starttracking) - Start Tracking a Package
* [stopTracking](#stoptracking) - Stop Tracking a Package

## getTrackingLog

Retrieve package tracking information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTrackingLogRequest;
import org.openapis.openapi.models.operations.GetTrackingLogResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTrackingLogRequest req = new GetTrackingLogRequest() {{
                carrierCode = "asperiores";
                trackingNumber = "facilis";
            }};            

            GetTrackingLogResponse res = sdk.tracking.getTrackingLog(req);

            if (res.getTrackingLogResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startTracking

Allows you to subscribe to tracking updates for a package. You specify the carrier_code and tracking_number of the package,
and receive notifications via webhooks whenever the shipping status changes.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartTrackingRequest;
import org.openapis.openapi.models.operations.StartTrackingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartTrackingRequest req = new StartTrackingRequest() {{
                carrierCode = "expedita";
                trackingNumber = "ab";
            }};            

            StartTrackingResponse res = sdk.tracking.startTracking(req);

            if (res.emptyResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopTracking

Unsubscribe from tracking updates for a package.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopTrackingRequest;
import org.openapis.openapi.models.operations.StopTrackingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopTrackingRequest req = new StopTrackingRequest() {{
                carrierCode = "dolore";
                trackingNumber = "laborum";
            }};            

            StopTrackingResponse res = sdk.tracking.stopTracking(req);

            if (res.emptyResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
