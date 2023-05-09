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
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsAdunitsCreateRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsAdunitsCreateResponse;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsAdunitsCreateSecurity;
import org.openapis.openapi.models.shared.AdUnitInput;
import org.openapis.openapi.models.shared.AdUnitStateEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ContentAdsSettings;
import org.openapis.openapi.models.shared.ContentAdsSettingsTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsAdclientsAdunitsCreateRequest req = new AdsenseAccountsAdclientsAdunitsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                adUnitInput = new AdUnitInput() {{
                    contentAdsSettings = new ContentAdsSettings() {{
                        size = "distinctio";
                        type = ContentAdsSettingsTypeEnum.LINK;
                    }};;
                    displayName = "unde";
                    state = AdUnitStateEnum.ARCHIVED;
                }};;
                accessToken = "corrupti";
                alt = AltEnum.PROTO;
                callback = "vel";
                fields = "error";
                key = "deserunt";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "magnam";
                uploadProtocol = "debitis";
            }};            

            AdsenseAccountsAdclientsAdunitsCreateResponse res = sdk.accounts.adsenseAccountsAdclientsAdunitsCreate(req, new AdsenseAccountsAdclientsAdunitsCreateSecurity("ipsa", "delectus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.adUnit != null) {
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


### [accounts](docs/accounts/README.md)

* [adsenseAccountsAdclientsAdunitsCreate](docs/accounts/README.md#adsenseaccountsadclientsadunitscreate) - Creates an ad unit. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product. Note that ad units can only be created for ad clients with an "AFC" product code. For more info see the [AdClient resource](/adsense/management/reference/rest/v2/accounts.adclients). For now, this method can only be used to create `DISPLAY` ad units. See: https://support.google.com/adsense/answer/9183566
* [adsenseAccountsAdclientsAdunitsGetAdcode](docs/accounts/README.md#adsenseaccountsadclientsadunitsgetadcode) - Gets the ad unit code for a given ad unit. For more information, see [About the AdSense code](https://support.google.com/adsense/answer/9274634) and [Where to place the ad code in your HTML](https://support.google.com/adsense/answer/9190028).
* [adsenseAccountsAdclientsAdunitsList](docs/accounts/README.md#adsenseaccountsadclientsadunitslist) - Lists all ad units under a specified account and ad client.
* [adsenseAccountsAdclientsAdunitsListLinkedCustomChannels](docs/accounts/README.md#adsenseaccountsadclientsadunitslistlinkedcustomchannels) - Lists all the custom channels available for an ad unit.
* [adsenseAccountsAdclientsCustomchannelsCreate](docs/accounts/README.md#adsenseaccountsadclientscustomchannelscreate) - Creates a custom channel. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product.
* [adsenseAccountsAdclientsCustomchannelsDelete](docs/accounts/README.md#adsenseaccountsadclientscustomchannelsdelete) - Deletes a custom channel. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product.
* [adsenseAccountsAdclientsCustomchannelsList](docs/accounts/README.md#adsenseaccountsadclientscustomchannelslist) - Lists all the custom channels available in an ad client.
* [adsenseAccountsAdclientsCustomchannelsListLinkedAdUnits](docs/accounts/README.md#adsenseaccountsadclientscustomchannelslistlinkedadunits) - Lists all the ad units available for a custom channel.
* [adsenseAccountsAdclientsCustomchannelsPatch](docs/accounts/README.md#adsenseaccountsadclientscustomchannelspatch) - Updates a custom channel. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product.
* [adsenseAccountsAdclientsList](docs/accounts/README.md#adsenseaccountsadclientslist) - Lists all the ad clients available in an account.
* [adsenseAccountsAdclientsUrlchannelsList](docs/accounts/README.md#adsenseaccountsadclientsurlchannelslist) - Lists active url channels.
* [adsenseAccountsAlertsList](docs/accounts/README.md#adsenseaccountsalertslist) - Lists all the alerts available in an account.
* [adsenseAccountsGetAdBlockingRecoveryTag](docs/accounts/README.md#adsenseaccountsgetadblockingrecoverytag) - Gets the ad blocking recovery tag of an account.
* [adsenseAccountsList](docs/accounts/README.md#adsenseaccountslist) - Lists all accounts available to this user.
* [adsenseAccountsListChildAccounts](docs/accounts/README.md#adsenseaccountslistchildaccounts) - Lists all accounts directly managed by the given AdSense account.
* [adsenseAccountsPaymentsList](docs/accounts/README.md#adsenseaccountspaymentslist) - Lists all the payments available for an account.
* [adsenseAccountsReportsGenerate](docs/accounts/README.md#adsenseaccountsreportsgenerate) - Generates an ad hoc report.
* [adsenseAccountsReportsGenerateCsv](docs/accounts/README.md#adsenseaccountsreportsgeneratecsv) - Generates a csv formatted ad hoc report.
* [adsenseAccountsReportsGetSaved](docs/accounts/README.md#adsenseaccountsreportsgetsaved) - Gets the saved report from the given resource name.
* [adsenseAccountsReportsSavedGenerate](docs/accounts/README.md#adsenseaccountsreportssavedgenerate) - Generates a saved report.
* [adsenseAccountsReportsSavedGenerateCsv](docs/accounts/README.md#adsenseaccountsreportssavedgeneratecsv) - Generates a csv formatted saved report.
* [adsenseAccountsReportsSavedList](docs/accounts/README.md#adsenseaccountsreportssavedlist) - Lists saved reports.
* [adsenseAccountsSitesGet](docs/accounts/README.md#adsenseaccountssitesget) - Gets information about the selected site.
* [adsenseAccountsSitesList](docs/accounts/README.md#adsenseaccountssiteslist) - Lists all the sites available in an account.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
