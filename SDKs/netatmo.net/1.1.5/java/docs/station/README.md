# station

## Overview

Weather station specific methods

### Available Operations

* [getmeasure](#getmeasure) - The method getmeasure returns the measurements of a device or a module.

* [getstationsdata](#getstationsdata) - The method getstationsdata Returns data from a user's Weather Stations (measures and device specific data).

## getmeasure

The method getmeasure returns the measurements of a device or a module.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetmeasureRequest;
import org.openapis.openapi.models.operations.GetmeasureResponse;
import org.openapis.openapi.models.operations.GetmeasureScaleEnum;
import org.openapis.openapi.models.operations.GetmeasureSecurity;
import org.openapis.openapi.models.operations.GetmeasureTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetmeasureRequest req = new GetmeasureRequest("perferendis", GetmeasureScaleEnum.ONEHOUR,                 new org.openapis.openapi.models.operations.GetmeasureTypeEnum[]{{
                                add(GetmeasureTypeEnum.SUM_BOILER_ON),
                                add(GetmeasureTypeEnum.MAX_NOISE),
                                add(GetmeasureTypeEnum.NOISE),
                                add(GetmeasureTypeEnum.DATE_MAX_CO2),
                            }}) {{
                dateBegin = 870088;
                dateEnd = "maiores";
                limit = 473608;
                moduleId = "quod";
                optimize = false;
                realTime = false;
            }};            

            GetmeasureResponse res = sdk.station.getmeasure(req, new GetmeasureSecurity() {{
                codeOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.naMeasureResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getstationsdata

The method getstationsdata Returns data from a user's Weather Stations (measures and device specific data).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetstationsdataRequest;
import org.openapis.openapi.models.operations.GetstationsdataResponse;
import org.openapis.openapi.models.operations.GetstationsdataSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetstationsdataRequest req = new GetstationsdataRequest() {{
                deviceId = "quod";
                getFavorites = false;
            }};            

            GetstationsdataResponse res = sdk.station.getstationsdata(req, new GetstationsdataSecurity() {{
                codeOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.naStationDataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
