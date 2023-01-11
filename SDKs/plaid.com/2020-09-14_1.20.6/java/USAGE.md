<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    plaidVersion = new SchemePlaidVersion() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    secret = new SchemeSecret() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            AccountsBalanceGetRequest req = new AccountsBalanceGetRequest() {{
                request = new AccountsBalanceGetRequest() {{
                    accessToken = "provident";
                    clientId = "eum";
                    options = new AccountsBalanceGetRequestOptions() {{
                        accountIds = new String[]() {{
                            add("dolore"),
                        }};
                        minLastUpdatedDatetime = "1988-11-19T07:30:18Z";
                    }};
                    secret = "ea";
                }};
            }};

            AccountsBalanceGetResponse res = sdk.plaid.accountsBalanceGet(req);

            if (res.accountsGetResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->