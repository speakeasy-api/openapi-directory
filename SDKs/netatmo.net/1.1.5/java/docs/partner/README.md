# partner

## Overview

Partner API specific methods

### Available Operations

* [getmeasure](#getmeasure) - The method getmeasure returns the measurements of a device or a module.

* [partnerdevices](#partnerdevices) - The method partnerdevices returns the list of device_id to which your partner application has access to.

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

            GetmeasureRequest req = new GetmeasureRequest("illum", GetmeasureScaleEnum.ONEHOUR,                 new org.openapis.openapi.models.operations.GetmeasureTypeEnum[]{{
                                add(GetmeasureTypeEnum.DATE_MIN_PRESSURE),
                                add(GetmeasureTypeEnum.MIN_TEMP),
                                add(GetmeasureTypeEnum.MAX_TEMP),
                            }}) {{
                dateBegin = 297534;
                dateEnd = "debitis";
                limit = 56713;
                moduleId = "delectus";
                optimize = false;
                realTime = false;
            }};            

            GetmeasureResponse res = sdk.partner.getmeasure(req, new GetmeasureSecurity() {{
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

## partnerdevices

The method partnerdevices returns the list of device_id to which your partner application has access to.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PartnerdevicesResponse;
import org.openapis.openapi.models.operations.PartnerdevicesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PartnerdevicesResponse res = sdk.partner.partnerdevices(new PartnerdevicesSecurity() {{
                codeOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.naPartnerDevicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
