# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

            AdsensehostAccountsAdclientsGetRequest req = new AdsensehostAccountsAdclientsGetRequest() {{
                security = new AdsensehostAccountsAdclientsGetSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new AdsensehostAccountsAdclientsGetPathParams() {{
                    accountId = "est";
                    adClientId = "eum";
                }};
                queryParams = new AdsensehostAccountsAdclientsGetQueryParams() {{
                    alt = "json";
                    fields = "ut";
                    key = "similique";
                    oauthToken = "porro";
                    prettyPrint = false;
                    quotaUser = "ipsa";
                    userIp = "ipsa";
                }};
            }};

            AdsensehostAccountsAdclientsGetResponse res = sdk.accounts.adsensehostAccountsAdclientsGet(req);

            if (res.adClient.isPresent()) {
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

* `adsensehostAccountsAdclientsGet` - Get information about one of the ad clients in the specified publisher's AdSense account.
* `adsensehostAccountsAdclientsList` - List all hosted ad clients in the specified hosted account.
* `adsensehostAccountsAdunitsDelete` - Delete the specified ad unit from the specified publisher AdSense account.
* `adsensehostAccountsAdunitsGet` - Get the specified host ad unit in this AdSense account.
* `adsensehostAccountsAdunitsGetAdCode` - Get ad code for the specified ad unit, attaching the specified host custom channels.
* `adsensehostAccountsAdunitsInsert` - Insert the supplied ad unit into the specified publisher AdSense account.
* `adsensehostAccountsAdunitsList` - List all ad units in the specified publisher's AdSense account.
* `adsensehostAccountsAdunitsPatch` - Update the supplied ad unit in the specified publisher AdSense account. This method supports patch semantics.
* `adsensehostAccountsAdunitsUpdate` - Update the supplied ad unit in the specified publisher AdSense account.
* `adsensehostAccountsGet` - Get information about the selected associated AdSense account.
* `adsensehostAccountsList` - List hosted accounts associated with this AdSense account by ad client id.
* `adsensehostAccountsReportsGenerate` - Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.

### adclients

* `adsensehostAdclientsGet` - Get information about one of the ad clients in the Host AdSense account.
* `adsensehostAdclientsList` - List all host ad clients in this AdSense account.

### associationsessions

* `adsensehostAssociationsessionsStart` - Create an association session for initiating an association with an AdSense user.
* `adsensehostAssociationsessionsVerify` - Verify an association session after the association callback returns from AdSense signup.

### customchannels

* `adsensehostCustomchannelsDelete` - Delete a specific custom channel from the host AdSense account.
* `adsensehostCustomchannelsGet` - Get a specific custom channel from the host AdSense account.
* `adsensehostCustomchannelsInsert` - Add a new custom channel to the host AdSense account.
* `adsensehostCustomchannelsList` - List all host custom channels in this AdSense account.
* `adsensehostCustomchannelsPatch` - Update a custom channel in the host AdSense account. This method supports patch semantics.
* `adsensehostCustomchannelsUpdate` - Update a custom channel in the host AdSense account.

### reports

* `adsensehostReportsGenerate` - Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.

### urlchannels

* `adsensehostUrlchannelsDelete` - Delete a URL channel from the host AdSense account.
* `adsensehostUrlchannelsInsert` - Add a new URL channel to the host AdSense account.
* `adsensehostUrlchannelsList` - List all host URL channels in the host AdSense account.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
