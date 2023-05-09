# public_

## Overview

Public stations specific methods

### Available Operations

* [getmeasure](#getmeasure) - The method getmeasure returns the measurements of a device or a module.

* [getpublicdata](#getpublicdata) - Retrieves publicly shared weather data from Outdoor Modules within a predefined area.

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

            GetmeasureRequest req = new GetmeasureRequest("tempora", GetmeasureScaleEnum.ONEHOUR,                 new org.openapis.openapi.models.operations.GetmeasureTypeEnum[]{{
                                add(GetmeasureTypeEnum.MAX_NOISE),
                                add(GetmeasureTypeEnum.DATE_MAX_NOISE),
                            }}) {{
                dateBegin = 528895;
                dateEnd = "iusto";
                limit = 568045;
                moduleId = "nisi";
                optimize = false;
                realTime = false;
            }};            

            GetmeasureResponse res = sdk.public_.getmeasure(req, new GetmeasureSecurity() {{
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

## getpublicdata

Retrieves publicly shared weather data from Outdoor Modules within a predefined area.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetpublicdataRequest;
import org.openapis.openapi.models.operations.GetpublicdataRequiredDataEnum;
import org.openapis.openapi.models.operations.GetpublicdataResponse;
import org.openapis.openapi.models.operations.GetpublicdataSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetpublicdataRequest req = new GetpublicdataRequest(925597, 836079, 71036, 337396) {{
                filter = false;
                requiredData = new org.openapis.openapi.models.operations.GetpublicdataRequiredDataEnum[]{{
                    add(GetpublicdataRequiredDataEnum.WIND),
                }};
            }};            

            GetpublicdataResponse res = sdk.public_.getpublicdata(req, new GetpublicdataSecurity() {{
                codeOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.naPublicDataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
