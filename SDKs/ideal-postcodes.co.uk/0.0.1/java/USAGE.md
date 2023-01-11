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
                    filter = "est";
                    licensee = "nisi";
                    limit = 7590719563135475994;
                    page = 4801037455282791428;
                    postcodeOutward = "cupiditate";
                    query = "doloremque";
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