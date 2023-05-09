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
import org.openapis.openapi.models.operations.AnalyticsadminAccountSummariesListRequest;
import org.openapis.openapi.models.operations.AnalyticsadminAccountSummariesListResponse;
import org.openapis.openapi.models.operations.AnalyticsadminAccountSummariesListSecurity;
import org.openapis.openapi.models.operations.AnalyticsadminAccountSummariesListSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsadminAccountSummariesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminAccountSummariesListRequest req = new AnalyticsadminAccountSummariesListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "unde";
                key = "nulla";
                oauthToken = "corrupti";
                pageSize = 847252L;
                pageToken = "vel";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "deserunt";
                uploadProtocol = "suscipit";
            }};            

            AnalyticsadminAccountSummariesListResponse res = sdk.accountSummaries.analyticsadminAccountSummariesList(req, new AnalyticsadminAccountSummariesListSecurity() {{
                option1 = new AnalyticsadminAccountSummariesListSecurityOption1("iure", "magnam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleAnalyticsAdminV1betaListAccountSummariesResponse != null) {
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


### [accountSummaries](docs/accountsummaries/README.md)

* [analyticsadminAccountSummariesList](docs/accountsummaries/README.md#analyticsadminaccountsummarieslist) - Returns summaries of all accounts accessible by the caller.

### [accounts](docs/accounts/README.md)

* [analyticsadminAccountsList](docs/accounts/README.md#analyticsadminaccountslist) - Returns all accounts accessible by the caller. Note that these accounts might not currently have GA4 properties. Soft-deleted (ie: "trashed") accounts are excluded by default. Returns an empty list if no relevant accounts are found.
* [analyticsadminAccountsProvisionAccountTicket](docs/accounts/README.md#analyticsadminaccountsprovisionaccountticket) - Requests a ticket for creating an account.
* [analyticsadminAccountsSearchChangeHistoryEvents](docs/accounts/README.md#analyticsadminaccountssearchchangehistoryevents) - Searches through all changes to an account or its children given the specified set of filters.

### [properties](docs/properties/README.md)

* [analyticsadminPropertiesAcknowledgeUserDataCollection](docs/properties/README.md#analyticsadminpropertiesacknowledgeuserdatacollection) - Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or through this API) before MeasurementProtocolSecret resources may be created.
* [analyticsadminPropertiesConversionEventsCreate](docs/properties/README.md#analyticsadminpropertiesconversioneventscreate) - Creates a conversion event with the specified attributes.
* [analyticsadminPropertiesConversionEventsList](docs/properties/README.md#analyticsadminpropertiesconversioneventslist) - Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.
* [analyticsadminPropertiesCreate](docs/properties/README.md#analyticsadminpropertiescreate) - Creates an "GA4" property with the specified location and attributes.
* [analyticsadminPropertiesCustomDimensionsCreate](docs/properties/README.md#analyticsadminpropertiescustomdimensionscreate) - Creates a CustomDimension.
* [analyticsadminPropertiesCustomDimensionsList](docs/properties/README.md#analyticsadminpropertiescustomdimensionslist) - Lists CustomDimensions on a property.
* [analyticsadminPropertiesCustomMetricsArchive](docs/properties/README.md#analyticsadminpropertiescustommetricsarchive) - Archives a CustomMetric on a property.
* [analyticsadminPropertiesCustomMetricsCreate](docs/properties/README.md#analyticsadminpropertiescustommetricscreate) - Creates a CustomMetric.
* [analyticsadminPropertiesCustomMetricsList](docs/properties/README.md#analyticsadminpropertiescustommetricslist) - Lists CustomMetrics on a property.
* [analyticsadminPropertiesDataStreamsCreate](docs/properties/README.md#analyticsadminpropertiesdatastreamscreate) - Creates a DataStream.
* [analyticsadminPropertiesDataStreamsList](docs/properties/README.md#analyticsadminpropertiesdatastreamslist) - Lists DataStreams on a property.
* [analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate](docs/properties/README.md#analyticsadminpropertiesdatastreamsmeasurementprotocolsecretscreate) - Creates a measurement protocol secret.
* [analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGet](docs/properties/README.md#analyticsadminpropertiesdatastreamsmeasurementprotocolsecretsget) - Lookup for a single "GA4" MeasurementProtocolSecret.
* [analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList](docs/properties/README.md#analyticsadminpropertiesdatastreamsmeasurementprotocolsecretslist) - Returns child MeasurementProtocolSecrets under the specified parent Property.
* [analyticsadminPropertiesFirebaseLinksCreate](docs/properties/README.md#analyticsadminpropertiesfirebaselinkscreate) - Creates a FirebaseLink. Properties can have at most one FirebaseLink.
* [analyticsadminPropertiesFirebaseLinksList](docs/properties/README.md#analyticsadminpropertiesfirebaselinkslist) - Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.
* [analyticsadminPropertiesGoogleAdsLinksCreate](docs/properties/README.md#analyticsadminpropertiesgoogleadslinkscreate) - Creates a GoogleAdsLink.
* [analyticsadminPropertiesGoogleAdsLinksDelete](docs/properties/README.md#analyticsadminpropertiesgoogleadslinksdelete) - Deletes a GoogleAdsLink on a property
* [analyticsadminPropertiesGoogleAdsLinksList](docs/properties/README.md#analyticsadminpropertiesgoogleadslinkslist) - Lists GoogleAdsLinks on a property.
* [analyticsadminPropertiesGoogleAdsLinksPatch](docs/properties/README.md#analyticsadminpropertiesgoogleadslinkspatch) - Updates a GoogleAdsLink on a property
* [analyticsadminPropertiesList](docs/properties/README.md#analyticsadminpropertieslist) - Returns child Properties under the specified parent Account. Only "GA4" properties will be returned. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.
* [analyticsadminPropertiesRunAccessReport](docs/properties/README.md#analyticsadminpropertiesrunaccessreport) - Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. The property must be in Google Analytics 360. This method is only available to Administrators. These data access records include GA4 UI Reporting, GA4 UI Explorations, GA4 Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see [searchChangeHistoryEvents](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/searchChangeHistoryEvents).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
