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

import org.openapis.openapi.models.operations.AdmobAccountsAdSourcesListPathParams;
import org.openapis.openapi.models.operations.AdmobAccountsAdSourcesListQueryParams;
import org.openapis.openapi.models.operations.AdmobAccountsAdSourcesListRequest;
import org.openapis.openapi.models.operations.AdmobAccountsAdSourcesListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdmobAccountsAdSourcesListRequest req = new AdmobAccountsAdSourcesListRequest() {{
                pathParams = new AdmobAccountsAdSourcesListPathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new AdmobAccountsAdSourcesListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    pageSize = 423655;
                    pageToken = "error";
                    prettyPrint = false;
                    quotaUser = "deserunt";
                    uploadType = "suscipit";
                    uploadProtocol = "iure";
                }};
            }};            

            AdmobAccountsAdSourcesListResponse res = sdk.accounts.admobAccountsAdSourcesList(req);

            if (res.listAdSourcesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### accounts

* `admobAccountsAdSourcesList` - List the ad sources.
* `admobAccountsAdUnitsList` - List the ad units under the specified AdMob account.
* `admobAccountsAppsList` - List the apps under the specified AdMob account.
* `admobAccountsGet` - Gets information about the specified AdMob publisher account.
* `admobAccountsList` - Lists the AdMob publisher account that was most recently signed in to from the AdMob UI. For more information, see https://support.google.com/admob/answer/10243672.
* `admobAccountsMediationReportGenerate` - Generates an AdMob mediation report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.
* `admobAccountsNetworkReportGenerate` - Generates an AdMob Network report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
