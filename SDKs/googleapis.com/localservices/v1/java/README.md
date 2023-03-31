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

import org.openapis.openapi.models.operations.LocalservicesAccountReportsSearchSecurity;
import org.openapis.openapi.models.operations.LocalservicesAccountReportsSearchQueryParams;
import org.openapis.openapi.models.operations.LocalservicesAccountReportsSearchRequest;
import org.openapis.openapi.models.operations.LocalservicesAccountReportsSearchResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LocalservicesAccountReportsSearchRequest req = new LocalservicesAccountReportsSearchRequest() {{
                security = new LocalservicesAccountReportsSearchSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new LocalservicesAccountReportsSearchQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    endDateDay = 602763;
                    endDateMonth = 857946;
                    endDateYear = 544883;
                    fields = "illum";
                    key = "vel";
                    oauthToken = "error";
                    pageSize = 645894;
                    pageToken = "suscipit";
                    prettyPrint = false;
                    query = "iure";
                    quotaUser = "magnam";
                    startDateDay = 891773;
                    startDateMonth = 56713;
                    startDateYear = 963663;
                    uploadType = "tempora";
                    uploadProtocol = "suscipit";
                }};
            }};            

            LocalservicesAccountReportsSearchResponse res = sdk.accountReports.localservicesAccountReportsSearch(req);

            if (res.googleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### accountReports

* `localservicesAccountReportsSearch` - Get account reports containing aggregate account data of all linked GLS accounts. Caller needs to provide their manager customer id and the associated auth credential that allows them read permissions on their linked accounts.

### detailedLeadReports

* `localservicesDetailedLeadReportsSearch` - Get detailed lead reports containing leads that have been received by all linked GLS accounts. Caller needs to provide their manager customer id and the associated auth credential that allows them read permissions on their linked accounts.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
