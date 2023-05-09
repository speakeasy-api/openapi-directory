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
import org.openapis.openapi.models.operations.AdsensehostAccountsAdclientsGetRequest;
import org.openapis.openapi.models.operations.AdsensehostAccountsAdclientsGetResponse;
import org.openapis.openapi.models.operations.AdsensehostAccountsAdclientsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsensehostAccountsAdclientsGetRequest req = new AdsensehostAccountsAdclientsGetRequest("corrupti", "provident") {{
                alt = AltEnum.JSON;
                fields = "quibusdam";
                key = "unde";
                oauthToken = "nulla";
                prettyPrint = false;
                quotaUser = "corrupti";
                userIp = "illum";
            }};            

            AdsensehostAccountsAdclientsGetResponse res = sdk.accounts.adsensehostAccountsAdclientsGet(req, new AdsensehostAccountsAdclientsGetSecurity("vel", "error") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.adClient != null) {
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

* [adsensehostAccountsAdclientsGet](docs/accounts/README.md#adsensehostaccountsadclientsget) - Get information about one of the ad clients in the specified publisher's AdSense account.
* [adsensehostAccountsAdclientsList](docs/accounts/README.md#adsensehostaccountsadclientslist) - List all hosted ad clients in the specified hosted account.
* [adsensehostAccountsAdunitsDelete](docs/accounts/README.md#adsensehostaccountsadunitsdelete) - Delete the specified ad unit from the specified publisher AdSense account.
* [adsensehostAccountsAdunitsGet](docs/accounts/README.md#adsensehostaccountsadunitsget) - Get the specified host ad unit in this AdSense account.
* [adsensehostAccountsAdunitsGetAdCode](docs/accounts/README.md#adsensehostaccountsadunitsgetadcode) - Get ad code for the specified ad unit, attaching the specified host custom channels.
* [adsensehostAccountsAdunitsInsert](docs/accounts/README.md#adsensehostaccountsadunitsinsert) - Insert the supplied ad unit into the specified publisher AdSense account.
* [adsensehostAccountsAdunitsList](docs/accounts/README.md#adsensehostaccountsadunitslist) - List all ad units in the specified publisher's AdSense account.
* [adsensehostAccountsAdunitsPatch](docs/accounts/README.md#adsensehostaccountsadunitspatch) - Update the supplied ad unit in the specified publisher AdSense account. This method supports patch semantics.
* [adsensehostAccountsAdunitsUpdate](docs/accounts/README.md#adsensehostaccountsadunitsupdate) - Update the supplied ad unit in the specified publisher AdSense account.
* [adsensehostAccountsGet](docs/accounts/README.md#adsensehostaccountsget) - Get information about the selected associated AdSense account.
* [adsensehostAccountsList](docs/accounts/README.md#adsensehostaccountslist) - List hosted accounts associated with this AdSense account by ad client id.
* [adsensehostAccountsReportsGenerate](docs/accounts/README.md#adsensehostaccountsreportsgenerate) - Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.

### [adclients](docs/adclients/README.md)

* [adsensehostAdclientsGet](docs/adclients/README.md#adsensehostadclientsget) - Get information about one of the ad clients in the Host AdSense account.
* [adsensehostAdclientsList](docs/adclients/README.md#adsensehostadclientslist) - List all host ad clients in this AdSense account.

### [associationsessions](docs/associationsessions/README.md)

* [adsensehostAssociationsessionsStart](docs/associationsessions/README.md#adsensehostassociationsessionsstart) - Create an association session for initiating an association with an AdSense user.
* [adsensehostAssociationsessionsVerify](docs/associationsessions/README.md#adsensehostassociationsessionsverify) - Verify an association session after the association callback returns from AdSense signup.

### [customchannels](docs/customchannels/README.md)

* [adsensehostCustomchannelsDelete](docs/customchannels/README.md#adsensehostcustomchannelsdelete) - Delete a specific custom channel from the host AdSense account.
* [adsensehostCustomchannelsGet](docs/customchannels/README.md#adsensehostcustomchannelsget) - Get a specific custom channel from the host AdSense account.
* [adsensehostCustomchannelsInsert](docs/customchannels/README.md#adsensehostcustomchannelsinsert) - Add a new custom channel to the host AdSense account.
* [adsensehostCustomchannelsList](docs/customchannels/README.md#adsensehostcustomchannelslist) - List all host custom channels in this AdSense account.
* [adsensehostCustomchannelsPatch](docs/customchannels/README.md#adsensehostcustomchannelspatch) - Update a custom channel in the host AdSense account. This method supports patch semantics.
* [adsensehostCustomchannelsUpdate](docs/customchannels/README.md#adsensehostcustomchannelsupdate) - Update a custom channel in the host AdSense account.

### [reports](docs/reports/README.md)

* [adsensehostReportsGenerate](docs/reports/README.md#adsensehostreportsgenerate) - Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.

### [urlchannels](docs/urlchannels/README.md)

* [adsensehostUrlchannelsDelete](docs/urlchannels/README.md#adsensehosturlchannelsdelete) - Delete a URL channel from the host AdSense account.
* [adsensehostUrlchannelsInsert](docs/urlchannels/README.md#adsensehosturlchannelsinsert) - Add a new URL channel to the host AdSense account.
* [adsensehostUrlchannelsList](docs/urlchannels/README.md#adsensehosturlchannelslist) - List all host URL channels in the host AdSense account.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
