# veteranConfirmationStatus

## Overview

Veteran Confirmation - Veteran Status

### Available Operations

* [~~getVeteranStatus~~](#getveteranstatus) - Get confirmation about an individual's Veteran status according to the VA :warning: **Deprecated**

## ~~getVeteranStatus~~

Get confirmation about an individual's Veteran status according to the VA

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVeteranStatusResponse;
import org.openapis.openapi.models.operations.GetVeteranStatusSecurity;
import org.openapis.openapi.models.shared.VeteranStatusRequest;
import org.openapis.openapi.models.shared.VeteranStatusRequestGenderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.VeteranStatusRequest req = new VeteranStatusRequest("1965-01-01", "John", "Doe", "555-55-5555") {{
                gender = VeteranStatusRequestGenderEnum.M;
                middleName = "Theodore";
            }};            

            GetVeteranStatusResponse res = sdk.veteranConfirmationStatus.getVeteranStatus(req, new GetVeteranStatusSecurity("provident") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.veteranStatusConfirmation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
