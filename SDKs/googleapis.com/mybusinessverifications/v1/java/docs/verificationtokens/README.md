# verificationTokens

### Available Operations

* [mybusinessverificationsVerificationTokensGenerate](#mybusinessverificationsverificationtokensgenerate) - Generates a token for the provided location data as a vetted [partner](https://support.google.com/business/answer/7674102). Throws PERMISSION_DENIED if the caller is not a vetted partner account. Throws FAILED_PRECONDITION if the caller's VettedStatus is INVALID.

## mybusinessverificationsVerificationTokensGenerate

Generates a token for the provided location data as a vetted [partner](https://support.google.com/business/answer/7674102). Throws PERMISSION_DENIED if the caller is not a vetted partner account. Throws FAILED_PRECONDITION if the caller's VettedStatus is INVALID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessverificationsVerificationTokensGenerateRequest;
import org.openapis.openapi.models.operations.MybusinessverificationsVerificationTokensGenerateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GenerateVerificationTokenRequest;
import org.openapis.openapi.models.shared.Location;
import org.openapis.openapi.models.shared.PostalAddress;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessverificationsVerificationTokensGenerateRequest req = new MybusinessverificationsVerificationTokensGenerateRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                generateVerificationTokenRequest = new GenerateVerificationTokenRequest() {{
                    location = new Location() {{
                        address = new PostalAddress() {{
                            addressLines = new String[]{{
                                add("perferendis"),
                                add("doloremque"),
                                add("reprehenderit"),
                            }};
                            administrativeArea = "ut";
                            languageCode = "maiores";
                            locality = "dicta";
                            organization = "corporis";
                            postalCode = "41638";
                            recipients = new String[]{{
                                add("repudiandae"),
                                add("quae"),
                            }};
                            regionCode = "ipsum";
                            revision = 692472;
                            sortingCode = "molestias";
                            sublocality = "excepturi";
                        }};;
                        name = "Joel Lang";
                        primaryCategoryId = "quasi";
                        primaryPhone = "repudiandae";
                        websiteUri = "sint";
                    }};;
                }};;
                accessToken = "veritatis";
                alt = AltEnum.PROTO;
                callback = "incidunt";
                fields = "enim";
                key = "consequatur";
                oauthToken = "est";
                prettyPrint = false;
                quotaUser = "quibusdam";
                uploadType = "explicabo";
                uploadProtocol = "deserunt";
            }};            

            MybusinessverificationsVerificationTokensGenerateResponse res = sdk.verificationTokens.mybusinessverificationsVerificationTokensGenerate(req);

            if (res.generateVerificationTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
