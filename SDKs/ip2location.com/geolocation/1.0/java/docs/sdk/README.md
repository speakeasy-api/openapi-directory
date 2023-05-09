# SDK

## Overview

IP2Location web service providing a service to do a reverse lookup of an IP address to an ISO3166 country code, region or state, city, latitude and longitude, ZIP/Postal code, time zone, Internet Service Provider (ISP) or company name, domain name, net speed, area code, weather station code, weather station name, mobile country code (MCC), mobile network code (MNC) and carrier brand, elevation, usage type, address type and IAB category. There are also 7 categories of additional add-on response fields supported such as metro, olson time zone, translations and more. Refer to https://www.ip2location.com/web-service/ip2location for further information.

### Available Operations

* [get](#get) - Get geolocation information via IP address

## get

Get geolocation information via IP address

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAddonEnum;
import org.openapis.openapi.models.operations.GetFormatEnum;
import org.openapis.openapi.models.operations.GetLangEnum;
import org.openapis.openapi.models.operations.GetPackageEnum;
import org.openapis.openapi.models.operations.GetRequest;
import org.openapis.openapi.models.operations.GetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRequest req = new GetRequest("8.8.8.8", "vel") {{
                addon = new org.openapis.openapi.models.operations.GetAddonEnum[]{{
                    add(GetAddonEnum.GEOTARGETING),
                    add(GetAddonEnum.REGION),
                    add(GetAddonEnum.CITY),
                }};
                format = GetFormatEnum.JSON;
                lang = GetLangEnum.VI;
                package_ = GetPackageEnum.WS2;
            }};            

            GetResponse res = sdk.sdk.get(req);

            if (res.get200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
