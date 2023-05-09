# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/analytics/v3/go
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
    res, err := s.Data.AnalyticsDataGaGet(ctx, operations.AnalyticsDataGaGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Dimensions: sdk.String("corrupti"),
        EndDate: "provident",
        Fields: sdk.String("distinctio"),
        Filters: sdk.String("quibusdam"),
        Ids: "unde",
        IncludeEmptyRows: sdk.Bool(false),
        Key: sdk.String("nulla"),
        MaxResults: sdk.Int64(544883),
        Metrics: "illum",
        OauthToken: sdk.String("vel"),
        Output: operations.AnalyticsDataGaGetOutputEnumJSON.ToPointer(),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        SamplingLevel: operations.AnalyticsDataGaGetSamplingLevelEnumFaster.ToPointer(),
        Segment: sdk.String("iure"),
        Sort: sdk.String("magnam"),
        StartDate: "debitis",
        StartIndex: sdk.Int64(56713),
        UserIP: sdk.String("delectus"),
    }, operations.AnalyticsDataGaGetSecurity{
        Option1: &operations.AnalyticsDataGaGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GaData != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Data](docs/data/README.md)

* [AnalyticsDataGaGet](docs/data/README.md#analyticsdatagaget) - Returns Analytics data for a view (profile).
* [AnalyticsDataMcfGet](docs/data/README.md#analyticsdatamcfget) - Returns Analytics Multi-Channel Funnels data for a view (profile).
* [AnalyticsDataRealtimeGet](docs/data/README.md#analyticsdatarealtimeget) - Returns real time data for a view (profile).

### [Management](docs/management/README.md)

* [AnalyticsManagementAccountSummariesList](docs/management/README.md#analyticsmanagementaccountsummarieslist) - Lists account summaries (lightweight tree comprised of accounts/properties/profiles) to which the user has access.
* [AnalyticsManagementAccountUserLinksDelete](docs/management/README.md#analyticsmanagementaccountuserlinksdelete) - Removes a user from the given account.
* [AnalyticsManagementAccountUserLinksInsert](docs/management/README.md#analyticsmanagementaccountuserlinksinsert) - Adds a new user to the given account.
* [AnalyticsManagementAccountUserLinksList](docs/management/README.md#analyticsmanagementaccountuserlinkslist) - Lists account-user links for a given account.
* [AnalyticsManagementAccountUserLinksUpdate](docs/management/README.md#analyticsmanagementaccountuserlinksupdate) - Updates permissions for an existing user on the given account.
* [AnalyticsManagementAccountsList](docs/management/README.md#analyticsmanagementaccountslist) - Lists all accounts to which the user has access.
* [AnalyticsManagementClientIDHashClientID](docs/management/README.md#analyticsmanagementclientidhashclientid) - Hashes the given Client ID.
* [AnalyticsManagementCustomDataSourcesList](docs/management/README.md#analyticsmanagementcustomdatasourceslist) - List custom data sources to which the user has access.
* [AnalyticsManagementCustomDimensionsGet](docs/management/README.md#analyticsmanagementcustomdimensionsget) - Get a custom dimension to which the user has access.
* [AnalyticsManagementCustomDimensionsInsert](docs/management/README.md#analyticsmanagementcustomdimensionsinsert) - Create a new custom dimension.
* [AnalyticsManagementCustomDimensionsList](docs/management/README.md#analyticsmanagementcustomdimensionslist) - Lists custom dimensions to which the user has access.
* [AnalyticsManagementCustomDimensionsPatch](docs/management/README.md#analyticsmanagementcustomdimensionspatch) - Updates an existing custom dimension. This method supports patch semantics.
* [AnalyticsManagementCustomDimensionsUpdate](docs/management/README.md#analyticsmanagementcustomdimensionsupdate) - Updates an existing custom dimension.
* [AnalyticsManagementCustomMetricsGet](docs/management/README.md#analyticsmanagementcustommetricsget) - Get a custom metric to which the user has access.
* [AnalyticsManagementCustomMetricsInsert](docs/management/README.md#analyticsmanagementcustommetricsinsert) - Create a new custom metric.
* [AnalyticsManagementCustomMetricsList](docs/management/README.md#analyticsmanagementcustommetricslist) - Lists custom metrics to which the user has access.
* [AnalyticsManagementCustomMetricsPatch](docs/management/README.md#analyticsmanagementcustommetricspatch) - Updates an existing custom metric. This method supports patch semantics.
* [AnalyticsManagementCustomMetricsUpdate](docs/management/README.md#analyticsmanagementcustommetricsupdate) - Updates an existing custom metric.
* [AnalyticsManagementExperimentsDelete](docs/management/README.md#analyticsmanagementexperimentsdelete) - Delete an experiment.
* [AnalyticsManagementExperimentsGet](docs/management/README.md#analyticsmanagementexperimentsget) - Returns an experiment to which the user has access.
* [AnalyticsManagementExperimentsInsert](docs/management/README.md#analyticsmanagementexperimentsinsert) - Create a new experiment.
* [AnalyticsManagementExperimentsList](docs/management/README.md#analyticsmanagementexperimentslist) - Lists experiments to which the user has access.
* [AnalyticsManagementExperimentsPatch](docs/management/README.md#analyticsmanagementexperimentspatch) - Update an existing experiment. This method supports patch semantics.
* [AnalyticsManagementExperimentsUpdate](docs/management/README.md#analyticsmanagementexperimentsupdate) - Update an existing experiment.
* [AnalyticsManagementFiltersDelete](docs/management/README.md#analyticsmanagementfiltersdelete) - Delete a filter.
* [AnalyticsManagementFiltersGet](docs/management/README.md#analyticsmanagementfiltersget) - Returns filters to which the user has access.
* [AnalyticsManagementFiltersInsert](docs/management/README.md#analyticsmanagementfiltersinsert) - Create a new filter.
* [AnalyticsManagementFiltersList](docs/management/README.md#analyticsmanagementfilterslist) - Lists all filters for an account
* [AnalyticsManagementFiltersPatch](docs/management/README.md#analyticsmanagementfilterspatch) - Updates an existing filter. This method supports patch semantics.
* [AnalyticsManagementFiltersUpdate](docs/management/README.md#analyticsmanagementfiltersupdate) - Updates an existing filter.
* [AnalyticsManagementGoalsGet](docs/management/README.md#analyticsmanagementgoalsget) - Gets a goal to which the user has access.
* [AnalyticsManagementGoalsInsert](docs/management/README.md#analyticsmanagementgoalsinsert) - Create a new goal.
* [AnalyticsManagementGoalsList](docs/management/README.md#analyticsmanagementgoalslist) - Lists goals to which the user has access.
* [AnalyticsManagementGoalsPatch](docs/management/README.md#analyticsmanagementgoalspatch) - Updates an existing goal. This method supports patch semantics.
* [AnalyticsManagementGoalsUpdate](docs/management/README.md#analyticsmanagementgoalsupdate) - Updates an existing goal.
* [AnalyticsManagementProfileFilterLinksDelete](docs/management/README.md#analyticsmanagementprofilefilterlinksdelete) - Delete a profile filter link.
* [AnalyticsManagementProfileFilterLinksGet](docs/management/README.md#analyticsmanagementprofilefilterlinksget) - Returns a single profile filter link.
* [AnalyticsManagementProfileFilterLinksInsert](docs/management/README.md#analyticsmanagementprofilefilterlinksinsert) - Create a new profile filter link.
* [AnalyticsManagementProfileFilterLinksList](docs/management/README.md#analyticsmanagementprofilefilterlinkslist) - Lists all profile filter links for a profile.
* [AnalyticsManagementProfileFilterLinksPatch](docs/management/README.md#analyticsmanagementprofilefilterlinkspatch) - Update an existing profile filter link. This method supports patch semantics.
* [AnalyticsManagementProfileFilterLinksUpdate](docs/management/README.md#analyticsmanagementprofilefilterlinksupdate) - Update an existing profile filter link.
* [AnalyticsManagementProfileUserLinksDelete](docs/management/README.md#analyticsmanagementprofileuserlinksdelete) - Removes a user from the given view (profile).
* [AnalyticsManagementProfileUserLinksInsert](docs/management/README.md#analyticsmanagementprofileuserlinksinsert) - Adds a new user to the given view (profile).
* [AnalyticsManagementProfileUserLinksList](docs/management/README.md#analyticsmanagementprofileuserlinkslist) - Lists profile-user links for a given view (profile).
* [AnalyticsManagementProfileUserLinksUpdate](docs/management/README.md#analyticsmanagementprofileuserlinksupdate) - Updates permissions for an existing user on the given view (profile).
* [AnalyticsManagementProfilesDelete](docs/management/README.md#analyticsmanagementprofilesdelete) - Deletes a view (profile).
* [AnalyticsManagementProfilesGet](docs/management/README.md#analyticsmanagementprofilesget) - Gets a view (profile) to which the user has access.
* [AnalyticsManagementProfilesInsert](docs/management/README.md#analyticsmanagementprofilesinsert) - Create a new view (profile).
* [AnalyticsManagementProfilesList](docs/management/README.md#analyticsmanagementprofileslist) - Lists views (profiles) to which the user has access.
* [AnalyticsManagementProfilesPatch](docs/management/README.md#analyticsmanagementprofilespatch) - Updates an existing view (profile). This method supports patch semantics.
* [AnalyticsManagementProfilesUpdate](docs/management/README.md#analyticsmanagementprofilesupdate) - Updates an existing view (profile).
* [AnalyticsManagementRemarketingAudienceDelete](docs/management/README.md#analyticsmanagementremarketingaudiencedelete) - Delete a remarketing audience.
* [AnalyticsManagementRemarketingAudienceGet](docs/management/README.md#analyticsmanagementremarketingaudienceget) - Gets a remarketing audience to which the user has access.
* [AnalyticsManagementRemarketingAudienceInsert](docs/management/README.md#analyticsmanagementremarketingaudienceinsert) - Creates a new remarketing audience.
* [AnalyticsManagementRemarketingAudienceList](docs/management/README.md#analyticsmanagementremarketingaudiencelist) - Lists remarketing audiences to which the user has access.
* [AnalyticsManagementRemarketingAudiencePatch](docs/management/README.md#analyticsmanagementremarketingaudiencepatch) - Updates an existing remarketing audience. This method supports patch semantics.
* [AnalyticsManagementRemarketingAudienceUpdate](docs/management/README.md#analyticsmanagementremarketingaudienceupdate) - Updates an existing remarketing audience.
* [AnalyticsManagementSegmentsList](docs/management/README.md#analyticsmanagementsegmentslist) - Lists segments to which the user has access.
* [AnalyticsManagementUnsampledReportsDelete](docs/management/README.md#analyticsmanagementunsampledreportsdelete) - Deletes an unsampled report.
* [AnalyticsManagementUnsampledReportsGet](docs/management/README.md#analyticsmanagementunsampledreportsget) - Returns a single unsampled report.
* [AnalyticsManagementUnsampledReportsInsert](docs/management/README.md#analyticsmanagementunsampledreportsinsert) - Create a new unsampled report.
* [AnalyticsManagementUnsampledReportsList](docs/management/README.md#analyticsmanagementunsampledreportslist) - Lists unsampled reports to which the user has access.
* [AnalyticsManagementUploadsDeleteUploadData](docs/management/README.md#analyticsmanagementuploadsdeleteuploaddata) - Delete data associated with a previous upload.
* [AnalyticsManagementUploadsGet](docs/management/README.md#analyticsmanagementuploadsget) - List uploads to which the user has access.
* [AnalyticsManagementUploadsList](docs/management/README.md#analyticsmanagementuploadslist) - List uploads to which the user has access.
* [AnalyticsManagementUploadsUploadData](docs/management/README.md#analyticsmanagementuploadsuploaddata) - Upload data for a custom data source.
* [AnalyticsManagementWebPropertyAdWordsLinksDelete](docs/management/README.md#analyticsmanagementwebpropertyadwordslinksdelete) - Deletes a web property-Google Ads link.
* [AnalyticsManagementWebPropertyAdWordsLinksGet](docs/management/README.md#analyticsmanagementwebpropertyadwordslinksget) - Returns a web property-Google Ads link to which the user has access.
* [AnalyticsManagementWebPropertyAdWordsLinksInsert](docs/management/README.md#analyticsmanagementwebpropertyadwordslinksinsert) - Creates a webProperty-Google Ads link.
* [AnalyticsManagementWebPropertyAdWordsLinksList](docs/management/README.md#analyticsmanagementwebpropertyadwordslinkslist) - Lists webProperty-Google Ads links for a given web property.
* [AnalyticsManagementWebPropertyAdWordsLinksPatch](docs/management/README.md#analyticsmanagementwebpropertyadwordslinkspatch) - Updates an existing webProperty-Google Ads link. This method supports patch semantics.
* [AnalyticsManagementWebPropertyAdWordsLinksUpdate](docs/management/README.md#analyticsmanagementwebpropertyadwordslinksupdate) - Updates an existing webProperty-Google Ads link.
* [AnalyticsManagementWebpropertiesGet](docs/management/README.md#analyticsmanagementwebpropertiesget) - Gets a web property to which the user has access.
* [AnalyticsManagementWebpropertiesInsert](docs/management/README.md#analyticsmanagementwebpropertiesinsert) - Create a new property if the account has fewer than 20 properties. Web properties are visible in the Google Analytics interface only if they have at least one profile.
* [AnalyticsManagementWebpropertiesList](docs/management/README.md#analyticsmanagementwebpropertieslist) - Lists web properties to which the user has access.
* [AnalyticsManagementWebpropertiesPatch](docs/management/README.md#analyticsmanagementwebpropertiespatch) - Updates an existing web property. This method supports patch semantics.
* [AnalyticsManagementWebpropertiesUpdate](docs/management/README.md#analyticsmanagementwebpropertiesupdate) - Updates an existing web property.
* [AnalyticsManagementWebpropertyUserLinksDelete](docs/management/README.md#analyticsmanagementwebpropertyuserlinksdelete) - Removes a user from the given web property.
* [AnalyticsManagementWebpropertyUserLinksInsert](docs/management/README.md#analyticsmanagementwebpropertyuserlinksinsert) - Adds a new user to the given web property.
* [AnalyticsManagementWebpropertyUserLinksList](docs/management/README.md#analyticsmanagementwebpropertyuserlinkslist) - Lists webProperty-user links for a given web property.
* [AnalyticsManagementWebpropertyUserLinksUpdate](docs/management/README.md#analyticsmanagementwebpropertyuserlinksupdate) - Updates permissions for an existing user on the given web property.

### [Metadata](docs/metadata/README.md)

* [AnalyticsMetadataColumnsList](docs/metadata/README.md#analyticsmetadatacolumnslist) - Lists all columns for a report type

### [Provisioning](docs/provisioning/README.md)

* [AnalyticsProvisioningCreateAccountTicket](docs/provisioning/README.md#analyticsprovisioningcreateaccountticket) - Creates an account ticket.
* [AnalyticsProvisioningCreateAccountTree](docs/provisioning/README.md#analyticsprovisioningcreateaccounttree) - Provision account.

### [UserDeletion](docs/userdeletion/README.md)

* [AnalyticsUserDeletionUserDeletionRequestUpsert](docs/userdeletion/README.md#analyticsuserdeletionuserdeletionrequestupsert) - Insert or update a user deletion requests.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
