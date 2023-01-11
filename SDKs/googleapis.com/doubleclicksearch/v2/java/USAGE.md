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
                    advertiserId = "sit";
                    agencyId = "voluptas";
                    engineAccountId = "culpa";
                }};
                queryParams = new DoubleclicksearchConversionGetQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "consequuntur";
                    adGroupId = "dolor";
                    adId = "expedita";
                    alt = "proto";
                    callback = "fugit";
                    campaignId = "et";
                    criterionId = "nihil";
                    customerId = "rerum";
                    endDate = 7837839688282259259;
                    fields = "debitis";
                    key = "voluptatum";
                    oauthToken = "et";
                    prettyPrint = false;
                    quotaUser = "dolorem";
                    rowCount = 7259475919510918339;
                    startDate = 7373105480197164748;
                    startRow = 3287288577352441706;
                    uploadType = "vitae";
                    uploadProtocol = "totam";
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