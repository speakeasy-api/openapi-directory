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

            FetchPhoneNumberRequest req = new FetchPhoneNumberRequest("voluptatum") {{
                addressCountryCode = "iusto";
                addressLine1 = "excepturi";
                addressLine2 = "nisi";
                city = "South Jordan";
                countryCode = "BB";
                dateOfBirth = "quis";
                fields = "veritatis";
                firstName = "Lydia";
                lastName = "Aufderhar";
                nationalId = "ipsam";
                postalCode = "97188-9478";
                state = "esse";
            }};            

            FetchPhoneNumberResponse res = sdk.sdk.fetchPhoneNumber(req, new FetchPhoneNumberSecurity("totam", "porro") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.lookupsV2PhoneNumber != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
