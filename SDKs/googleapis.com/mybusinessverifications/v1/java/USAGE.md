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

            MybusinessverificationsLocationsFetchVerificationOptionsRequest req = new MybusinessverificationsLocationsFetchVerificationOptionsRequest() {{
                pathParams = new MybusinessverificationsLocationsFetchVerificationOptionsPathParams() {{
                    location = "et";
                }};
                queryParams = new MybusinessverificationsLocationsFetchVerificationOptionsQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "minima";
                    alt = "json";
                    callback = "qui";
                    fields = "et";
                    key = "quod";
                    oauthToken = "qui";
                    prettyPrint = false;
                    quotaUser = "autem";
                    uploadType = "ab";
                    uploadProtocol = "ab";
                }};
                request = new FetchVerificationOptionsRequest() {{
                    context = new ServiceBusinessContext() {{
                        address = new PostalAddress() {{
                            addressLines = new String[]() {{
                                add("omnis"),
                            }};
                            administrativeArea = "at";
                            languageCode = "facere";
                            locality = "non";
                            organization = "dolorem";
                            postalCode = "voluptas";
                            recipients = new String[]() {{
                                add("reiciendis"),
                            }};
                            regionCode = "corrupti";
                            revision = 5668328931256624736;
                            sortingCode = "atque";
                            sublocality = "totam";
                        }};
                    }};
                    languageCode = "animi";
                }};
            }};

            MybusinessverificationsLocationsFetchVerificationOptionsResponse res = sdk.locations.mybusinessverificationsLocationsFetchVerificationOptions(req);

            if (res.fetchVerificationOptionsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->