<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.FetchPhoneNumberSecurity;
import org.openapis.openapi.models.operations.FetchPhoneNumberPathParams;
import org.openapis.openapi.models.operations.FetchPhoneNumberQueryParams;
import org.openapis.openapi.models.operations.FetchPhoneNumberRequest;
import org.openapis.openapi.models.operations.FetchPhoneNumberResponse;
import org.openapis.openapi.models.shared.SchemeAccountSidAuthToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchPhoneNumberRequest req = new FetchPhoneNumberRequest() {{
                security = new FetchPhoneNumberSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new FetchPhoneNumberPathParams() {{
                    phoneNumber = "corrupti";
                }};
                queryParams = new FetchPhoneNumberQueryParams() {{
                    addOns = new String[]{{
                        add("distinctio"),
                        add("quibusdam"),
                        add("unde"),
                    }};
                    addOnsData = new java.util.HashMap<String, Object>() {{
                        put("corrupti", "illum");
                        put("vel", "error");
                        put("deserunt", "suscipit");
                        put("iure", "magnam");
                    }};
                    countryCode = "debitis";
                    type = new String[]{{
                        add("delectus"),
                    }};
                }};
            }};            

            FetchPhoneNumberResponse res = sdk.fetchPhoneNumber(req);

            if (res.lookupsV1PhoneNumber.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->