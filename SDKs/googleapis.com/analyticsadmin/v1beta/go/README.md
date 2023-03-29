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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.AnalyticsadminAccountSummariesListRequest{
        Security: operations.AnalyticsadminAccountSummariesListSecurity{
            Option1: &operations.AnalyticsadminAccountSummariesListSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        QueryParams: operations.AnalyticsadminAccountSummariesListQueryParams{
            DollarXgafv: "2",
            AccessToken: "deserunt",
            Alt: "proto",
            Callback: "nulla",
            Fields: "id",
            Key: "vero",
            OauthToken: "perspiciatis",
            PageSize: 847252,
            PageToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            UploadType: "facilis",
            UploadProtocol: "eum",
        },
    }

    ctx := context.Background()
    res, err := s.AccountSummaries.AnalyticsadminAccountSummariesList(ctx, req)
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
## SDK Available Operations


### AccountSummaries

* `AnalyticsadminAccountSummariesList` - Returns summaries of all accounts accessible by the caller.

### Accounts

* `AnalyticsadminAccountsList` - Returns all accounts accessible by the caller. Note that these accounts might not currently have GA4 properties. Soft-deleted (ie: "trashed") accounts are excluded by default. Returns an empty list if no relevant accounts are found.
* `AnalyticsadminAccountsProvisionAccountTicket` - Requests a ticket for creating an account.
* `AnalyticsadminAccountsSearchChangeHistoryEvents` - Searches through all changes to an account or its children given the specified set of filters.

### Properties

* `AnalyticsadminPropertiesAcknowledgeUserDataCollection` - Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or through this API) before MeasurementProtocolSecret resources may be created.
* `AnalyticsadminPropertiesConversionEventsCreate` - Creates a conversion event with the specified attributes.
* `AnalyticsadminPropertiesConversionEventsList` - Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.
* `AnalyticsadminPropertiesCreate` - Creates an "GA4" property with the specified location and attributes.
* `AnalyticsadminPropertiesCustomDimensionsCreate` - Creates a CustomDimension.
* `AnalyticsadminPropertiesCustomDimensionsList` - Lists CustomDimensions on a property.
* `AnalyticsadminPropertiesCustomMetricsArchive` - Archives a CustomMetric on a property.
* `AnalyticsadminPropertiesCustomMetricsCreate` - Creates a CustomMetric.
* `AnalyticsadminPropertiesCustomMetricsList` - Lists CustomMetrics on a property.
* `AnalyticsadminPropertiesDataStreamsCreate` - Creates a DataStream.
* `AnalyticsadminPropertiesDataStreamsList` - Lists DataStreams on a property.
* `AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate` - Creates a measurement protocol secret.
* `AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGet` - Lookup for a single "GA4" MeasurementProtocolSecret.
* `AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList` - Returns child MeasurementProtocolSecrets under the specified parent Property.
* `AnalyticsadminPropertiesFirebaseLinksCreate` - Creates a FirebaseLink. Properties can have at most one FirebaseLink.
* `AnalyticsadminPropertiesFirebaseLinksList` - Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.
* `AnalyticsadminPropertiesGoogleAdsLinksCreate` - Creates a GoogleAdsLink.
* `AnalyticsadminPropertiesGoogleAdsLinksDelete` - Deletes a GoogleAdsLink on a property
* `AnalyticsadminPropertiesGoogleAdsLinksList` - Lists GoogleAdsLinks on a property.
* `AnalyticsadminPropertiesGoogleAdsLinksPatch` - Updates a GoogleAdsLink on a property
* `AnalyticsadminPropertiesList` - Returns child Properties under the specified parent Account. Only "GA4" properties will be returned. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
