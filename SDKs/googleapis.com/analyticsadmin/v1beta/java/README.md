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

            AnalyticsadminAccountSummariesListRequest req = new AnalyticsadminAccountSummariesListRequest() {{
                security = new AnalyticsadminAccountSummariesListSecurity() {{
                    option1 = new AnalyticsadminAccountSummariesListSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                queryParams = new AnalyticsadminAccountSummariesListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "rerum";
                    alt = "media";
                    callback = "aut";
                    fields = "quia";
                    key = "debitis";
                    oauthToken = "harum";
                    pageSize = 3959252866103534258;
                    pageToken = "quo";
                    prettyPrint = false;
                    quotaUser = "a";
                    uploadType = "mollitia";
                    uploadProtocol = "dolorum";
                }};
            }};

            AnalyticsadminAccountSummariesListResponse res = sdk.accountSummaries.analyticsadminAccountSummariesList(req);

            if (res.googleAnalyticsAdminV1betaListAccountSummariesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### accountSummaries

* `analyticsadminAccountSummariesList` - Returns summaries of all accounts accessible by the caller.

### accounts

* `analyticsadminAccountsList` - Returns all accounts accessible by the caller. Note that these accounts might not currently have GA4 properties. Soft-deleted (ie: "trashed") accounts are excluded by default. Returns an empty list if no relevant accounts are found.
* `analyticsadminAccountsProvisionAccountTicket` - Requests a ticket for creating an account.
* `analyticsadminAccountsSearchChangeHistoryEvents` - Searches through all changes to an account or its children given the specified set of filters.

### properties

* `analyticsadminPropertiesAcknowledgeUserDataCollection` - Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or via this API) before MeasurementProtocolSecret resources may be created.
* `analyticsadminPropertiesConversionEventsCreate` - Creates a conversion event with the specified attributes.
* `analyticsadminPropertiesConversionEventsList` - Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.
* `analyticsadminPropertiesCreate` - Creates an "GA4" property with the specified location and attributes.
* `analyticsadminPropertiesCustomDimensionsCreate` - Creates a CustomDimension.
* `analyticsadminPropertiesCustomDimensionsList` - Lists CustomDimensions on a property.
* `analyticsadminPropertiesCustomMetricsArchive` - Archives a CustomMetric on a property.
* `analyticsadminPropertiesCustomMetricsCreate` - Creates a CustomMetric.
* `analyticsadminPropertiesCustomMetricsList` - Lists CustomMetrics on a property.
* `analyticsadminPropertiesDataStreamsCreate` - Creates a DataStream.
* `analyticsadminPropertiesDataStreamsList` - Lists DataStreams on a property.
* `analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate` - Creates a measurement protocol secret.
* `analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGet` - Lookup for a single "GA4" MeasurementProtocolSecret.
* `analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList` - Returns child MeasurementProtocolSecrets under the specified parent Property.
* `analyticsadminPropertiesFirebaseLinksCreate` - Creates a FirebaseLink. Properties can have at most one FirebaseLink.
* `analyticsadminPropertiesFirebaseLinksList` - Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.
* `analyticsadminPropertiesGoogleAdsLinksCreate` - Creates a GoogleAdsLink.
* `analyticsadminPropertiesGoogleAdsLinksDelete` - Deletes a GoogleAdsLink on a property
* `analyticsadminPropertiesGoogleAdsLinksList` - Lists GoogleAdsLinks on a property.
* `analyticsadminPropertiesGoogleAdsLinksPatch` - Updates a GoogleAdsLink on a property
* `analyticsadminPropertiesList` - Returns child Properties under the specified parent Account. Only "GA4" properties will be returned. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
