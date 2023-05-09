# callerIDs

## Overview

Caller ID Information

### Available Operations

* [getV2PhoneNumbersCallerIdsJson](#getv2phonenumberscalleridsjson) - List caller ids

## getV2PhoneNumbersCallerIdsJson

Each entry is a possible caller ID match for the number. Multiple
entries may be returned if the phone number is present on more than one
person in the system.  Phone number should be in E.164 format.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2PhoneNumbersCallerIdsJsonRequest;
import org.openapis.openapi.models.operations.GetV2PhoneNumbersCallerIdsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2PhoneNumbersCallerIdsJsonRequest req = new GetV2PhoneNumbersCallerIdsJsonRequest("possimus");            

            GetV2PhoneNumbersCallerIdsJsonResponse res = sdk.callerIDs.getV2PhoneNumbersCallerIdsJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
