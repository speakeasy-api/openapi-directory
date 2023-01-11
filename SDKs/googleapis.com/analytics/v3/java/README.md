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

            AnalyticsDataGaGetRequest req = new AnalyticsDataGaGetRequest() {{
                security = new AnalyticsDataGaGetSecurity() {{
                    option1 = new AnalyticsDataGaGetSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                queryParams = new AnalyticsDataGaGetQueryParams() {{
                    alt = "json";
                    dimensions = "voluptas";
                    endDate = "culpa";
                    fields = "expedita";
                    filters = "consequuntur";
                    ids = "dolor";
                    includeEmptyRows = true;
                    key = "voluptas";
                    maxResults = 8274930044578894929;
                    metrics = "et";
                    oauthToken = "nihil";
                    output = "json";
                    prettyPrint = false;
                    quotaUser = "debitis";
                    samplingLevel = "DEFAULT";
                    segment = "et";
                    sort = "ut";
                    startDate = "dolorem";
                    startIndex = 7259475919510918339;
                    userIp = "voluptate";
                }};
            }};

            AnalyticsDataGaGetResponse res = sdk.data.analyticsDataGaGet(req);

            if (res.gaData.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### data

* `analyticsDataGaGet` - Returns Analytics data for a view (profile).
* `analyticsDataMcfGet` - Returns Analytics Multi-Channel Funnels data for a view (profile).
* `analyticsDataRealtimeGet` - Returns real time data for a view (profile).

### management

* `analyticsManagementAccountSummariesList` - Lists account summaries (lightweight tree comprised of accounts/properties/profiles) to which the user has access.
* `analyticsManagementAccountUserLinksDelete` - Removes a user from the given account.
* `analyticsManagementAccountUserLinksInsert` - Adds a new user to the given account.
* `analyticsManagementAccountUserLinksList` - Lists account-user links for a given account.
* `analyticsManagementAccountUserLinksUpdate` - Updates permissions for an existing user on the given account.
* `analyticsManagementAccountsList` - Lists all accounts to which the user has access.
* `analyticsManagementClientIdHashClientId` - Hashes the given Client ID.
* `analyticsManagementCustomDataSourcesList` - List custom data sources to which the user has access.
* `analyticsManagementCustomDimensionsGet` - Get a custom dimension to which the user has access.
* `analyticsManagementCustomDimensionsInsert` - Create a new custom dimension.
* `analyticsManagementCustomDimensionsList` - Lists custom dimensions to which the user has access.
* `analyticsManagementCustomDimensionsPatch` - Updates an existing custom dimension. This method supports patch semantics.
* `analyticsManagementCustomDimensionsUpdate` - Updates an existing custom dimension.
* `analyticsManagementCustomMetricsGet` - Get a custom metric to which the user has access.
* `analyticsManagementCustomMetricsInsert` - Create a new custom metric.
* `analyticsManagementCustomMetricsList` - Lists custom metrics to which the user has access.
* `analyticsManagementCustomMetricsPatch` - Updates an existing custom metric. This method supports patch semantics.
* `analyticsManagementCustomMetricsUpdate` - Updates an existing custom metric.
* `analyticsManagementExperimentsDelete` - Delete an experiment.
* `analyticsManagementExperimentsGet` - Returns an experiment to which the user has access.
* `analyticsManagementExperimentsInsert` - Create a new experiment.
* `analyticsManagementExperimentsList` - Lists experiments to which the user has access.
* `analyticsManagementExperimentsPatch` - Update an existing experiment. This method supports patch semantics.
* `analyticsManagementExperimentsUpdate` - Update an existing experiment.
* `analyticsManagementFiltersDelete` - Delete a filter.
* `analyticsManagementFiltersGet` - Returns filters to which the user has access.
* `analyticsManagementFiltersInsert` - Create a new filter.
* `analyticsManagementFiltersList` - Lists all filters for an account
* `analyticsManagementFiltersPatch` - Updates an existing filter. This method supports patch semantics.
* `analyticsManagementFiltersUpdate` - Updates an existing filter.
* `analyticsManagementGoalsGet` - Gets a goal to which the user has access.
* `analyticsManagementGoalsInsert` - Create a new goal.
* `analyticsManagementGoalsList` - Lists goals to which the user has access.
* `analyticsManagementGoalsPatch` - Updates an existing goal. This method supports patch semantics.
* `analyticsManagementGoalsUpdate` - Updates an existing goal.
* `analyticsManagementProfileFilterLinksDelete` - Delete a profile filter link.
* `analyticsManagementProfileFilterLinksGet` - Returns a single profile filter link.
* `analyticsManagementProfileFilterLinksInsert` - Create a new profile filter link.
* `analyticsManagementProfileFilterLinksList` - Lists all profile filter links for a profile.
* `analyticsManagementProfileFilterLinksPatch` - Update an existing profile filter link. This method supports patch semantics.
* `analyticsManagementProfileFilterLinksUpdate` - Update an existing profile filter link.
* `analyticsManagementProfileUserLinksDelete` - Removes a user from the given view (profile).
* `analyticsManagementProfileUserLinksInsert` - Adds a new user to the given view (profile).
* `analyticsManagementProfileUserLinksList` - Lists profile-user links for a given view (profile).
* `analyticsManagementProfileUserLinksUpdate` - Updates permissions for an existing user on the given view (profile).
* `analyticsManagementProfilesDelete` - Deletes a view (profile).
* `analyticsManagementProfilesGet` - Gets a view (profile) to which the user has access.
* `analyticsManagementProfilesInsert` - Create a new view (profile).
* `analyticsManagementProfilesList` - Lists views (profiles) to which the user has access.
* `analyticsManagementProfilesPatch` - Updates an existing view (profile). This method supports patch semantics.
* `analyticsManagementProfilesUpdate` - Updates an existing view (profile).
* `analyticsManagementRemarketingAudienceDelete` - Delete a remarketing audience.
* `analyticsManagementRemarketingAudienceGet` - Gets a remarketing audience to which the user has access.
* `analyticsManagementRemarketingAudienceInsert` - Creates a new remarketing audience.
* `analyticsManagementRemarketingAudienceList` - Lists remarketing audiences to which the user has access.
* `analyticsManagementRemarketingAudiencePatch` - Updates an existing remarketing audience. This method supports patch semantics.
* `analyticsManagementRemarketingAudienceUpdate` - Updates an existing remarketing audience.
* `analyticsManagementSegmentsList` - Lists segments to which the user has access.
* `analyticsManagementUnsampledReportsDelete` - Deletes an unsampled report.
* `analyticsManagementUnsampledReportsGet` - Returns a single unsampled report.
* `analyticsManagementUnsampledReportsInsert` - Create a new unsampled report.
* `analyticsManagementUnsampledReportsList` - Lists unsampled reports to which the user has access.
* `analyticsManagementUploadsDeleteUploadData` - Delete data associated with a previous upload.
* `analyticsManagementUploadsGet` - List uploads to which the user has access.
* `analyticsManagementUploadsList` - List uploads to which the user has access.
* `analyticsManagementUploadsUploadData` - Upload data for a custom data source.
* `analyticsManagementWebPropertyAdWordsLinksDelete` - Deletes a web property-Google Ads link.
* `analyticsManagementWebPropertyAdWordsLinksGet` - Returns a web property-Google Ads link to which the user has access.
* `analyticsManagementWebPropertyAdWordsLinksInsert` - Creates a webProperty-Google Ads link.
* `analyticsManagementWebPropertyAdWordsLinksList` - Lists webProperty-Google Ads links for a given web property.
* `analyticsManagementWebPropertyAdWordsLinksPatch` - Updates an existing webProperty-Google Ads link. This method supports patch semantics.
* `analyticsManagementWebPropertyAdWordsLinksUpdate` - Updates an existing webProperty-Google Ads link.
* `analyticsManagementWebpropertiesGet` - Gets a web property to which the user has access.
* `analyticsManagementWebpropertiesInsert` - Create a new property if the account has fewer than 20 properties. Web properties are visible in the Google Analytics interface only if they have at least one profile.
* `analyticsManagementWebpropertiesList` - Lists web properties to which the user has access.
* `analyticsManagementWebpropertiesPatch` - Updates an existing web property. This method supports patch semantics.
* `analyticsManagementWebpropertiesUpdate` - Updates an existing web property.
* `analyticsManagementWebpropertyUserLinksDelete` - Removes a user from the given web property.
* `analyticsManagementWebpropertyUserLinksInsert` - Adds a new user to the given web property.
* `analyticsManagementWebpropertyUserLinksList` - Lists webProperty-user links for a given web property.
* `analyticsManagementWebpropertyUserLinksUpdate` - Updates permissions for an existing user on the given web property.

### metadata

* `analyticsMetadataColumnsList` - Lists all columns for a report type

### provisioning

* `analyticsProvisioningCreateAccountTicket` - Creates an account ticket.
* `analyticsProvisioningCreateAccountTree` - Provision account.

### userDeletion

* `analyticsUserDeletionUserDeletionRequestUpsert` - Insert or update a user deletion requests.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
