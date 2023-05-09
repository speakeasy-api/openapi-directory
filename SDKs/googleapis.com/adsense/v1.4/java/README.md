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
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsGetAdCodeRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsGetAdCodeResponse;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsGetAdCodeSecurity;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsGetAdCodeSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsGetAdCodeSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsAdclientsGetAdCodeRequest req = new AdsenseAccountsAdclientsGetAdCodeRequest("corrupti", "provident") {{
                alt = AltEnum.JSON;
                fields = "quibusdam";
                key = "unde";
                oauthToken = "nulla";
                prettyPrint = false;
                quotaUser = "corrupti";
                tagPartner = "illum";
                userIp = "vel";
            }};            

            AdsenseAccountsAdclientsGetAdCodeResponse res = sdk.accounts.adsenseAccountsAdclientsGetAdCode(req, new AdsenseAccountsAdclientsGetAdCodeSecurity() {{
                option1 = new AdsenseAccountsAdclientsGetAdCodeSecurityOption1("error", "deserunt") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.adCode != null) {
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

* [adsenseAccountsAdclientsGetAdCode](docs/accounts/README.md#adsenseaccountsadclientsgetadcode) - Get Auto ad code for a given ad client.
* [adsenseAccountsAdclientsList](docs/accounts/README.md#adsenseaccountsadclientslist) - List all ad clients in the specified account.
* [adsenseAccountsAdunitsCustomchannelsList](docs/accounts/README.md#adsenseaccountsadunitscustomchannelslist) - List all custom channels which the specified ad unit belongs to.
* [adsenseAccountsAdunitsGet](docs/accounts/README.md#adsenseaccountsadunitsget) - Gets the specified ad unit in the specified ad client for the specified account.
* [adsenseAccountsAdunitsGetAdCode](docs/accounts/README.md#adsenseaccountsadunitsgetadcode) - Get ad code for the specified ad unit.
* [adsenseAccountsAdunitsList](docs/accounts/README.md#adsenseaccountsadunitslist) - List all ad units in the specified ad client for the specified account.
* [adsenseAccountsAlertsDelete](docs/accounts/README.md#adsenseaccountsalertsdelete) - Dismiss (delete) the specified alert from the specified publisher AdSense account.
* [adsenseAccountsAlertsList](docs/accounts/README.md#adsenseaccountsalertslist) - List the alerts for the specified AdSense account.
* [adsenseAccountsCustomchannelsAdunitsList](docs/accounts/README.md#adsenseaccountscustomchannelsadunitslist) - List all ad units in the specified custom channel.
* [adsenseAccountsCustomchannelsGet](docs/accounts/README.md#adsenseaccountscustomchannelsget) - Get the specified custom channel from the specified ad client for the specified account.
* [adsenseAccountsCustomchannelsList](docs/accounts/README.md#adsenseaccountscustomchannelslist) - List all custom channels in the specified ad client for the specified account.
* [adsenseAccountsGet](docs/accounts/README.md#adsenseaccountsget) - Get information about the selected AdSense account.
* [adsenseAccountsList](docs/accounts/README.md#adsenseaccountslist) - List all accounts available to this AdSense account.
* [adsenseAccountsPaymentsList](docs/accounts/README.md#adsenseaccountspaymentslist) - List the payments for the specified AdSense account.
* [adsenseAccountsReportsGenerate](docs/accounts/README.md#adsenseaccountsreportsgenerate) - Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
* [adsenseAccountsReportsSavedGenerate](docs/accounts/README.md#adsenseaccountsreportssavedgenerate) - Generate an AdSense report based on the saved report ID sent in the query parameters.
* [adsenseAccountsReportsSavedList](docs/accounts/README.md#adsenseaccountsreportssavedlist) - List all saved reports in the specified AdSense account.
* [adsenseAccountsSavedadstylesGet](docs/accounts/README.md#adsenseaccountssavedadstylesget) - List a specific saved ad style for the specified account.
* [adsenseAccountsSavedadstylesList](docs/accounts/README.md#adsenseaccountssavedadstyleslist) - List all saved ad styles in the specified account.
* [adsenseAccountsUrlchannelsList](docs/accounts/README.md#adsenseaccountsurlchannelslist) - List all URL channels in the specified ad client for the specified account.

### [adclients](docs/adclients/README.md)

* [adsenseAdclientsList](docs/adclients/README.md#adsenseadclientslist) - List all ad clients in this AdSense account.

### [adunits](docs/adunits/README.md)

* [adsenseAdunitsCustomchannelsList](docs/adunits/README.md#adsenseadunitscustomchannelslist) - List all custom channels which the specified ad unit belongs to.
* [adsenseAdunitsGet](docs/adunits/README.md#adsenseadunitsget) - Gets the specified ad unit in the specified ad client.
* [adsenseAdunitsGetAdCode](docs/adunits/README.md#adsenseadunitsgetadcode) - Get ad code for the specified ad unit.
* [adsenseAdunitsList](docs/adunits/README.md#adsenseadunitslist) - List all ad units in the specified ad client for this AdSense account.

### [alerts](docs/alerts/README.md)

* [adsenseAlertsDelete](docs/alerts/README.md#adsensealertsdelete) - Dismiss (delete) the specified alert from the publisher's AdSense account.
* [adsenseAlertsList](docs/alerts/README.md#adsensealertslist) - List the alerts for this AdSense account.

### [customchannels](docs/customchannels/README.md)

* [adsenseCustomchannelsAdunitsList](docs/customchannels/README.md#adsensecustomchannelsadunitslist) - List all ad units in the specified custom channel.
* [adsenseCustomchannelsGet](docs/customchannels/README.md#adsensecustomchannelsget) - Get the specified custom channel from the specified ad client.
* [adsenseCustomchannelsList](docs/customchannels/README.md#adsensecustomchannelslist) - List all custom channels in the specified ad client for this AdSense account.

### [metadata](docs/metadata/README.md)

* [adsenseMetadataDimensionsList](docs/metadata/README.md#adsensemetadatadimensionslist) - List the metadata for the dimensions available to this AdSense account.
* [adsenseMetadataMetricsList](docs/metadata/README.md#adsensemetadatametricslist) - List the metadata for the metrics available to this AdSense account.

### [payments](docs/payments/README.md)

* [adsensePaymentsList](docs/payments/README.md#adsensepaymentslist) - List the payments for this AdSense account.

### [reports](docs/reports/README.md)

* [adsenseReportsGenerate](docs/reports/README.md#adsensereportsgenerate) - Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
* [adsenseReportsSavedGenerate](docs/reports/README.md#adsensereportssavedgenerate) - Generate an AdSense report based on the saved report ID sent in the query parameters.
* [adsenseReportsSavedList](docs/reports/README.md#adsensereportssavedlist) - List all saved reports in this AdSense account.

### [savedadstyles](docs/savedadstyles/README.md)

* [adsenseSavedadstylesGet](docs/savedadstyles/README.md#adsensesavedadstylesget) - Get a specific saved ad style from the user's account.
* [adsenseSavedadstylesList](docs/savedadstyles/README.md#adsensesavedadstyleslist) - List all saved ad styles in the user's account.

### [urlchannels](docs/urlchannels/README.md)

* [adsenseUrlchannelsList](docs/urlchannels/README.md#adsenseurlchannelslist) - List all URL channels in the specified ad client for this AdSense account.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
