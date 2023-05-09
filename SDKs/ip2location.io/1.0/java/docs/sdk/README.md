# SDK

## Overview

IP2Location.io IP Geolocation API provides RESTful API to obtain visitors’ geolocation information such as country, region, district, city, latitude & longitude, ZIP code, time zone, ASN, ISP, domain, net speed, IDD code, area code, weather station data, MNC, MCC, mobile brand, elevation, usage type, address type, advertisement category, ASN and proxy data with an IP address.

### Available Operations

* [get](#get) - Geolocate user's location information via IP address

## get

Geolocate user's location information via IP address

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFormatEnum;
import org.openapis.openapi.models.operations.GetLangEnum;
import org.openapis.openapi.models.operations.GetRequest;
import org.openapis.openapi.models.operations.GetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRequest req = new GetRequest("8.8.8.8", "quibusdam") {{
                format = GetFormatEnum.XML;
                lang = GetLangEnum.TR;
            }};            

            GetResponse res = sdk.sdk.get(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
