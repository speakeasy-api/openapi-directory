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
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    userToken = new SchemeUserToken() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            AddressSearchRequest req = new AddressSearchRequest() {{
                security = new AddressSearchSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    userToken = new SchemeUserToken() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new AddressSearchQueryParams() {{
                    filter = "sit";
                    licensee = "voluptas";
                    limit = 6050128673802995827;
                    page = 501233450539197794;
                    postcodeOutward = "consequuntur";
                    query = "dolor";
                }};
            }};

            AddressSearchResponse res = sdk.addresses.addressSearch(req);

            if (res.addressSearchResponseSchema.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->