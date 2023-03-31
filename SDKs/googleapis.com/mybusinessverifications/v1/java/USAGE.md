<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.MybusinessverificationsLocationsFetchVerificationOptionsPathParams;
import org.openapis.openapi.models.operations.MybusinessverificationsLocationsFetchVerificationOptionsQueryParams;
import org.openapis.openapi.models.operations.MybusinessverificationsLocationsFetchVerificationOptionsRequest;
import org.openapis.openapi.models.operations.MybusinessverificationsLocationsFetchVerificationOptionsResponse;
import org.openapis.openapi.models.shared.FetchVerificationOptionsRequest;
import org.openapis.openapi.models.shared.ServiceBusinessContext;
import org.openapis.openapi.models.shared.PostalAddress;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessverificationsLocationsFetchVerificationOptionsRequest req = new MybusinessverificationsLocationsFetchVerificationOptionsRequest() {{
                pathParams = new MybusinessverificationsLocationsFetchVerificationOptionsPathParams() {{
                    location = "corrupti";
                }};
                queryParams = new MybusinessverificationsLocationsFetchVerificationOptionsQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new FetchVerificationOptionsRequest() {{
                    context = new ServiceBusinessContext() {{
                        address = new PostalAddress() {{
                            addressLines = new String[]{{
                                add("iure"),
                                add("magnam"),
                            }};
                            administrativeArea = "debitis";
                            languageCode = "ipsa";
                            locality = "delectus";
                            organization = "tempora";
                            postalCode = "47854";
                            recipients = new String[]{{
                                add("nisi"),
                                add("recusandae"),
                                add("temporibus"),
                            }};
                            regionCode = "ab";
                            revision = 337396;
                            sortingCode = "veritatis";
                            sublocality = "deserunt";
                        }};
                    }};
                    languageCode = "perferendis";
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