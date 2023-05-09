# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [fetchPhoneNumber](#fetchphonenumber)

## fetchPhoneNumber

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchPhoneNumberRequest;
import org.openapis.openapi.models.operations.FetchPhoneNumberResponse;
import org.openapis.openapi.models.operations.FetchPhoneNumberSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchPhoneNumberRequest req = new FetchPhoneNumberRequest("molestiae") {{
                addOns = new String[]{{
                    add("placeat"),
                    add("voluptatum"),
                    add("iusto"),
                    add("excepturi"),
                }};
                addOnsData = new java.util.HashMap<String, Object>() {{
                    put("recusandae", "temporibus");
                    put("ab", "quis");
                }};
                countryCode = "BG";
                type = new String[]{{
                    add("perferendis"),
                    add("ipsam"),
                    add("repellendus"),
                }};
            }};            

            FetchPhoneNumberResponse res = sdk.sdk.fetchPhoneNumber(req, new FetchPhoneNumberSecurity("sapiente", "quo") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.lookupsV1PhoneNumber != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
