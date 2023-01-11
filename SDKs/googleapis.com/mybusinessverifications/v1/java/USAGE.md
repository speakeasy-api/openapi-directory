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
                    location = "sit";
                }};
                queryParams = new MybusinessverificationsLocationsFetchVerificationOptionsQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
                request = new FetchVerificationOptionsRequest() {{
                    context = new ServiceBusinessContext() {{
                        address = new PostalAddress() {{
                            addressLines = new String[]() {{
                                add("debitis"),
                                add("voluptatum"),
                                add("et"),
                            }};
                            administrativeArea = "ut";
                            languageCode = "dolorem";
                            locality = "et";
                            organization = "voluptate";
                            postalCode = "iste";
                            recipients = new String[]() {{
                                add("totam"),
                            }};
                            regionCode = "dolores";
                            revision = 1929546706668609706;
                            sortingCode = "debitis";
                            sublocality = "vel";
                        }};
                    }};
                    languageCode = "odio";
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