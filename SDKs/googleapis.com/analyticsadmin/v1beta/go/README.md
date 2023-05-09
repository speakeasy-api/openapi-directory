# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/analyticsadmin/v1beta/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AccountSummaries.AnalyticsadminAccountSummariesList(ctx, operations.AnalyticsadminAccountSummariesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Key: sdk.String("nulla"),
        OauthToken: sdk.String("corrupti"),
        PageSize: sdk.Int64(847252),
        PageToken: sdk.String("vel"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("suscipit"),
    }, operations.AnalyticsadminAccountSummariesListSecurity{
        Option1: &operations.AnalyticsadminAccountSummariesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1betaListAccountSummariesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [AccountSummaries](docs/accountsummaries/README.md)

* [AnalyticsadminAccountSummariesList](docs/accountsummaries/README.md#analyticsadminaccountsummarieslist) - Returns summaries of all accounts accessible by the caller.

### [Accounts](docs/accounts/README.md)

* [AnalyticsadminAccountsList](docs/accounts/README.md#analyticsadminaccountslist) - Returns all accounts accessible by the caller. Note that these accounts might not currently have GA4 properties. Soft-deleted (ie: "trashed") accounts are excluded by default. Returns an empty list if no relevant accounts are found.
* [AnalyticsadminAccountsProvisionAccountTicket](docs/accounts/README.md#analyticsadminaccountsprovisionaccountticket) - Requests a ticket for creating an account.
* [AnalyticsadminAccountsSearchChangeHistoryEvents](docs/accounts/README.md#analyticsadminaccountssearchchangehistoryevents) - Searches through all changes to an account or its children given the specified set of filters.

### [Properties](docs/properties/README.md)

* [AnalyticsadminPropertiesAcknowledgeUserDataCollection](docs/properties/README.md#analyticsadminpropertiesacknowledgeuserdatacollection) - Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or through this API) before MeasurementProtocolSecret resources may be created.
* [AnalyticsadminPropertiesConversionEventsCreate](docs/properties/README.md#analyticsadminpropertiesconversioneventscreate) - Creates a conversion event with the specified attributes.
* [AnalyticsadminPropertiesConversionEventsList](docs/properties/README.md#analyticsadminpropertiesconversioneventslist) - Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.
* [AnalyticsadminPropertiesCreate](docs/properties/README.md#analyticsadminpropertiescreate) - Creates an "GA4" property with the specified location and attributes.
* [AnalyticsadminPropertiesCustomDimensionsCreate](docs/properties/README.md#analyticsadminpropertiescustomdimensionscreate) - Creates a CustomDimension.
* [AnalyticsadminPropertiesCustomDimensionsList](docs/properties/README.md#analyticsadminpropertiescustomdimensionslist) - Lists CustomDimensions on a property.
* [AnalyticsadminPropertiesCustomMetricsArchive](docs/properties/README.md#analyticsadminpropertiescustommetricsarchive) - Archives a CustomMetric on a property.
* [AnalyticsadminPropertiesCustomMetricsCreate](docs/properties/README.md#analyticsadminpropertiescustommetricscreate) - Creates a CustomMetric.
* [AnalyticsadminPropertiesCustomMetricsList](docs/properties/README.md#analyticsadminpropertiescustommetricslist) - Lists CustomMetrics on a property.
* [AnalyticsadminPropertiesDataStreamsCreate](docs/properties/README.md#analyticsadminpropertiesdatastreamscreate) - Creates a DataStream.
* [AnalyticsadminPropertiesDataStreamsList](docs/properties/README.md#analyticsadminpropertiesdatastreamslist) - Lists DataStreams on a property.
* [AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate](docs/properties/README.md#analyticsadminpropertiesdatastreamsmeasurementprotocolsecretscreate) - Creates a measurement protocol secret.
* [AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGet](docs/properties/README.md#analyticsadminpropertiesdatastreamsmeasurementprotocolsecretsget) - Lookup for a single "GA4" MeasurementProtocolSecret.
* [AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList](docs/properties/README.md#analyticsadminpropertiesdatastreamsmeasurementprotocolsecretslist) - Returns child MeasurementProtocolSecrets under the specified parent Property.
* [AnalyticsadminPropertiesFirebaseLinksCreate](docs/properties/README.md#analyticsadminpropertiesfirebaselinkscreate) - Creates a FirebaseLink. Properties can have at most one FirebaseLink.
* [AnalyticsadminPropertiesFirebaseLinksList](docs/properties/README.md#analyticsadminpropertiesfirebaselinkslist) - Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.
* [AnalyticsadminPropertiesGoogleAdsLinksCreate](docs/properties/README.md#analyticsadminpropertiesgoogleadslinkscreate) - Creates a GoogleAdsLink.
* [AnalyticsadminPropertiesGoogleAdsLinksDelete](docs/properties/README.md#analyticsadminpropertiesgoogleadslinksdelete) - Deletes a GoogleAdsLink on a property
* [AnalyticsadminPropertiesGoogleAdsLinksList](docs/properties/README.md#analyticsadminpropertiesgoogleadslinkslist) - Lists GoogleAdsLinks on a property.
* [AnalyticsadminPropertiesGoogleAdsLinksPatch](docs/properties/README.md#analyticsadminpropertiesgoogleadslinkspatch) - Updates a GoogleAdsLink on a property
* [AnalyticsadminPropertiesList](docs/properties/README.md#analyticsadminpropertieslist) - Returns child Properties under the specified parent Account. Only "GA4" properties will be returned. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.
* [AnalyticsadminPropertiesRunAccessReport](docs/properties/README.md#analyticsadminpropertiesrunaccessreport) - Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. The property must be in Google Analytics 360. This method is only available to Administrators. These data access records include GA4 UI Reporting, GA4 UI Explorations, GA4 Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see [searchChangeHistoryEvents](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/searchChangeHistoryEvents).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
