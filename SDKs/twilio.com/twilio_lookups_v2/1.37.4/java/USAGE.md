<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            FetchPhoneNumberRequest req = new FetchPhoneNumberRequest() {{
                security = new FetchPhoneNumberSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new FetchPhoneNumberPathParams() {{
                    phoneNumber = "nesciunt";
                }};
                queryParams = new FetchPhoneNumberQueryParams() {{
                    addressCountryCode = "et";
                    addressLine1 = "qui";
                    addressLine2 = "quis";
                    city = "eligendi";
                    countryCode = "velit";
                    dateOfBirth = "fuga";
                    fields = "aliquid";
                    firstName = "vero";
                    lastName = "aut";
                    nationalId = "et";
                    postalCode = "voluptatem";
                    state = "sunt";
                }};
            }};

            FetchPhoneNumberResponse res = sdk.fetchPhoneNumber(req);

            if (res.lookupsV2PhoneNumber.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->