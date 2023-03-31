<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DoubleclicksearchConversionGetSecurity;
import org.openapis.openapi.models.operations.DoubleclicksearchConversionGetPathParams;
import org.openapis.openapi.models.operations.DoubleclicksearchConversionGetQueryParams;
import org.openapis.openapi.models.operations.DoubleclicksearchConversionGetRequest;
import org.openapis.openapi.models.operations.DoubleclicksearchConversionGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    advertiserId = "corrupti";
                    agencyId = "provident";
                    engineAccountId = "distinctio";
                }};
                queryParams = new DoubleclicksearchConversionGetQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "unde";
                    adGroupId = "nulla";
                    adId = "corrupti";
                    alt = "proto";
                    callback = "vel";
                    campaignId = "error";
                    criterionId = "deserunt";
                    customerId = "suscipit";
                    endDate = 437587;
                    fields = "magnam";
                    key = "debitis";
                    oauthToken = "ipsa";
                    prettyPrint = false;
                    quotaUser = "delectus";
                    rowCount = 272656;
                    startDate = 383441;
                    startRow = 477665;
                    uploadType = "minus";
                    uploadProtocol = "placeat";
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