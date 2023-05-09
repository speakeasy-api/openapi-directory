<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessverificationsLocationsFetchVerificationOptionsRequest;
import org.openapis.openapi.models.operations.MybusinessverificationsLocationsFetchVerificationOptionsResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FetchVerificationOptionsRequest;
import org.openapis.openapi.models.shared.PostalAddress;
import org.openapis.openapi.models.shared.ServiceBusinessContext;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessverificationsLocationsFetchVerificationOptionsRequest req = new MybusinessverificationsLocationsFetchVerificationOptionsRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                fetchVerificationOptionsRequest = new FetchVerificationOptionsRequest() {{
                    context = new ServiceBusinessContext() {{
                        address = new PostalAddress() {{
                            addressLines = new String[]{{
                                add("quibusdam"),
                                add("unde"),
                                add("nulla"),
                            }};
                            administrativeArea = "corrupti";
                            languageCode = "illum";
                            locality = "vel";
                            organization = "error";
                            postalCode = "34280-9234";
                            recipients = new String[]{{
                                add("placeat"),
                                add("voluptatum"),
                                add("iusto"),
                                add("excepturi"),
                            }};
                            regionCode = "nisi";
                            revision = 925597;
                            sortingCode = "temporibus";
                            sublocality = "ab";
                        }};;
                    }};;
                    languageCode = "quis";
                }};;
                accessToken = "veritatis";
                alt = AltEnum.MEDIA;
                callback = "perferendis";
                fields = "ipsam";
                key = "repellendus";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "odit";
                uploadProtocol = "at";
            }};            

            MybusinessverificationsLocationsFetchVerificationOptionsResponse res = sdk.locations.mybusinessverificationsLocationsFetchVerificationOptions(req);

            if (res.fetchVerificationOptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->