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

            DoubleclicksearchConversionGetRequest req = new DoubleclicksearchConversionGetRequest() {{
                security = new DoubleclicksearchConversionGetSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new DoubleclicksearchConversionGetPathParams() {{
                    advertiserId = "quod";
                    agencyId = "corporis";
                    engineAccountId = "delectus";
                }};
                queryParams = new DoubleclicksearchConversionGetQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "aut";
                    adGroupId = "aliquam";
                    adId = "eius";
                    alt = "media";
                    callback = "voluptatem";
                    campaignId = "harum";
                    criterionId = "cupiditate";
                    customerId = "possimus";
                    endDate = 6548149065261604132;
                    fields = "qui";
                    key = "laudantium";
                    oauthToken = "repellendus";
                    prettyPrint = false;
                    quotaUser = "pariatur";
                    rowCount = 3180567952665149867;
                    startDate = 7145877623761909277;
                    startRow = 6041380708886646747;
                    uploadType = "vel";
                    uploadProtocol = "sit";
                }};
            }};

            DoubleclicksearchConversionGetResponse res = sdk.conversion.doubleclicksearchConversionGet(req);

            if (res.conversionList.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->