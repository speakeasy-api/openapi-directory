# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [locations](docs/locations/README.md)

* [mybusinessverificationsLocationsFetchVerificationOptions](docs/locations/README.md#mybusinessverificationslocationsfetchverificationoptions) - Reports all eligible verification options for a location in a specific language.
* [mybusinessverificationsLocationsGetVoiceOfMerchantState](docs/locations/README.md#mybusinessverificationslocationsgetvoiceofmerchantstate) - Gets the VoiceOfMerchant state.
* [mybusinessverificationsLocationsVerificationsComplete](docs/locations/README.md#mybusinessverificationslocationsverificationscomplete) - Completes a `PENDING` verification. It is only necessary for non `AUTO` verification methods. `AUTO` verification request is instantly `VERIFIED` upon creation.
* [mybusinessverificationsLocationsVerificationsList](docs/locations/README.md#mybusinessverificationslocationsverificationslist) - List verifications of a location, ordered by create time.
* [mybusinessverificationsLocationsVerify](docs/locations/README.md#mybusinessverificationslocationsverify) - Starts the verification process for a location.

### [verificationTokens](docs/verificationtokens/README.md)

* [mybusinessverificationsVerificationTokensGenerate](docs/verificationtokens/README.md#mybusinessverificationsverificationtokensgenerate) - Generates a token for the provided location data as a vetted [partner](https://support.google.com/business/answer/7674102). Throws PERMISSION_DENIED if the caller is not a vetted partner account. Throws FAILED_PRECONDITION if the caller's VettedStatus is INVALID.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
