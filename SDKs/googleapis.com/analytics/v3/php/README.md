# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDataGaGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDataGaGetOutputEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDataGaGetSamplingLevelEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDataGaGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDataGaGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDataGaGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsDataGaGetRequest();
    $request->alt = AltEnum::JSON;
    $request->dimensions = 'corrupti';
    $request->endDate = 'provident';
    $request->fields = 'distinctio';
    $request->filters = 'quibusdam';
    $request->ids = 'unde';
    $request->includeEmptyRows = false;
    $request->key = 'nulla';
    $request->maxResults = 544883;
    $request->metrics = 'illum';
    $request->oauthToken = 'vel';
    $request->output = AnalyticsDataGaGetOutputEnum::JSON;
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->samplingLevel = AnalyticsDataGaGetSamplingLevelEnum::FASTER;
    $request->segment = 'iure';
    $request->sort = 'magnam';
    $request->startDate = 'debitis';
    $request->startIndex = 56713;
    $request->userIp = 'delectus';

    $requestSecurity = new AnalyticsDataGaGetSecurity();
    $requestSecurity->option1 = new AnalyticsDataGaGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->data->analyticsDataGaGet($request, $requestSecurity);

    if ($response->gaData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [data](docs/data/README.md)

* [analyticsDataGaGet](docs/data/README.md#analyticsdatagaget) - Returns Analytics data for a view (profile).
* [analyticsDataMcfGet](docs/data/README.md#analyticsdatamcfget) - Returns Analytics Multi-Channel Funnels data for a view (profile).
* [analyticsDataRealtimeGet](docs/data/README.md#analyticsdatarealtimeget) - Returns real time data for a view (profile).

### [management](docs/management/README.md)

* [analyticsManagementAccountSummariesList](docs/management/README.md#analyticsmanagementaccountsummarieslist) - Lists account summaries (lightweight tree comprised of accounts/properties/profiles) to which the user has access.
* [analyticsManagementAccountUserLinksDelete](docs/management/README.md#analyticsmanagementaccountuserlinksdelete) - Removes a user from the given account.
* [analyticsManagementAccountUserLinksInsert](docs/management/README.md#analyticsmanagementaccountuserlinksinsert) - Adds a new user to the given account.
* [analyticsManagementAccountUserLinksList](docs/management/README.md#analyticsmanagementaccountuserlinkslist) - Lists account-user links for a given account.
* [analyticsManagementAccountUserLinksUpdate](docs/management/README.md#analyticsmanagementaccountuserlinksupdate) - Updates permissions for an existing user on the given account.
* [analyticsManagementAccountsList](docs/management/README.md#analyticsmanagementaccountslist) - Lists all accounts to which the user has access.
* [analyticsManagementClientIdHashClientId](docs/management/README.md#analyticsmanagementclientidhashclientid) - Hashes the given Client ID.
* [analyticsManagementCustomDataSourcesList](docs/management/README.md#analyticsmanagementcustomdatasourceslist) - List custom data sources to which the user has access.
* [analyticsManagementCustomDimensionsGet](docs/management/README.md#analyticsmanagementcustomdimensionsget) - Get a custom dimension to which the user has access.
* [analyticsManagementCustomDimensionsInsert](docs/management/README.md#analyticsmanagementcustomdimensionsinsert) - Create a new custom dimension.
* [analyticsManagementCustomDimensionsList](docs/management/README.md#analyticsmanagementcustomdimensionslist) - Lists custom dimensions to which the user has access.
* [analyticsManagementCustomDimensionsPatch](docs/management/README.md#analyticsmanagementcustomdimensionspatch) - Updates an existing custom dimension. This method supports patch semantics.
* [analyticsManagementCustomDimensionsUpdate](docs/management/README.md#analyticsmanagementcustomdimensionsupdate) - Updates an existing custom dimension.
* [analyticsManagementCustomMetricsGet](docs/management/README.md#analyticsmanagementcustommetricsget) - Get a custom metric to which the user has access.
* [analyticsManagementCustomMetricsInsert](docs/management/README.md#analyticsmanagementcustommetricsinsert) - Create a new custom metric.
* [analyticsManagementCustomMetricsList](docs/management/README.md#analyticsmanagementcustommetricslist) - Lists custom metrics to which the user has access.
* [analyticsManagementCustomMetricsPatch](docs/management/README.md#analyticsmanagementcustommetricspatch) - Updates an existing custom metric. This method supports patch semantics.
* [analyticsManagementCustomMetricsUpdate](docs/management/README.md#analyticsmanagementcustommetricsupdate) - Updates an existing custom metric.
* [analyticsManagementExperimentsDelete](docs/management/README.md#analyticsmanagementexperimentsdelete) - Delete an experiment.
* [analyticsManagementExperimentsGet](docs/management/README.md#analyticsmanagementexperimentsget) - Returns an experiment to which the user has access.
* [analyticsManagementExperimentsInsert](docs/management/README.md#analyticsmanagementexperimentsinsert) - Create a new experiment.
* [analyticsManagementExperimentsList](docs/management/README.md#analyticsmanagementexperimentslist) - Lists experiments to which the user has access.
* [analyticsManagementExperimentsPatch](docs/management/README.md#analyticsmanagementexperimentspatch) - Update an existing experiment. This method supports patch semantics.
* [analyticsManagementExperimentsUpdate](docs/management/README.md#analyticsmanagementexperimentsupdate) - Update an existing experiment.
* [analyticsManagementFiltersDelete](docs/management/README.md#analyticsmanagementfiltersdelete) - Delete a filter.
* [analyticsManagementFiltersGet](docs/management/README.md#analyticsmanagementfiltersget) - Returns filters to which the user has access.
* [analyticsManagementFiltersInsert](docs/management/README.md#analyticsmanagementfiltersinsert) - Create a new filter.
* [analyticsManagementFiltersList](docs/management/README.md#analyticsmanagementfilterslist) - Lists all filters for an account
* [analyticsManagementFiltersPatch](docs/management/README.md#analyticsmanagementfilterspatch) - Updates an existing filter. This method supports patch semantics.
* [analyticsManagementFiltersUpdate](docs/management/README.md#analyticsmanagementfiltersupdate) - Updates an existing filter.
* [analyticsManagementGoalsGet](docs/management/README.md#analyticsmanagementgoalsget) - Gets a goal to which the user has access.
* [analyticsManagementGoalsInsert](docs/management/README.md#analyticsmanagementgoalsinsert) - Create a new goal.
* [analyticsManagementGoalsList](docs/management/README.md#analyticsmanagementgoalslist) - Lists goals to which the user has access.
* [analyticsManagementGoalsPatch](docs/management/README.md#analyticsmanagementgoalspatch) - Updates an existing goal. This method supports patch semantics.
* [analyticsManagementGoalsUpdate](docs/management/README.md#analyticsmanagementgoalsupdate) - Updates an existing goal.
* [analyticsManagementProfileFilterLinksDelete](docs/management/README.md#analyticsmanagementprofilefilterlinksdelete) - Delete a profile filter link.
* [analyticsManagementProfileFilterLinksGet](docs/management/README.md#analyticsmanagementprofilefilterlinksget) - Returns a single profile filter link.
* [analyticsManagementProfileFilterLinksInsert](docs/management/README.md#analyticsmanagementprofilefilterlinksinsert) - Create a new profile filter link.
* [analyticsManagementProfileFilterLinksList](docs/management/README.md#analyticsmanagementprofilefilterlinkslist) - Lists all profile filter links for a profile.
* [analyticsManagementProfileFilterLinksPatch](docs/management/README.md#analyticsmanagementprofilefilterlinkspatch) - Update an existing profile filter link. This method supports patch semantics.
* [analyticsManagementProfileFilterLinksUpdate](docs/management/README.md#analyticsmanagementprofilefilterlinksupdate) - Update an existing profile filter link.
* [analyticsManagementProfileUserLinksDelete](docs/management/README.md#analyticsmanagementprofileuserlinksdelete) - Removes a user from the given view (profile).
* [analyticsManagementProfileUserLinksInsert](docs/management/README.md#analyticsmanagementprofileuserlinksinsert) - Adds a new user to the given view (profile).
* [analyticsManagementProfileUserLinksList](docs/management/README.md#analyticsmanagementprofileuserlinkslist) - Lists profile-user links for a given view (profile).
* [analyticsManagementProfileUserLinksUpdate](docs/management/README.md#analyticsmanagementprofileuserlinksupdate) - Updates permissions for an existing user on the given view (profile).
* [analyticsManagementProfilesDelete](docs/management/README.md#analyticsmanagementprofilesdelete) - Deletes a view (profile).
* [analyticsManagementProfilesGet](docs/management/README.md#analyticsmanagementprofilesget) - Gets a view (profile) to which the user has access.
* [analyticsManagementProfilesInsert](docs/management/README.md#analyticsmanagementprofilesinsert) - Create a new view (profile).
* [analyticsManagementProfilesList](docs/management/README.md#analyticsmanagementprofileslist) - Lists views (profiles) to which the user has access.
* [analyticsManagementProfilesPatch](docs/management/README.md#analyticsmanagementprofilespatch) - Updates an existing view (profile). This method supports patch semantics.
* [analyticsManagementProfilesUpdate](docs/management/README.md#analyticsmanagementprofilesupdate) - Updates an existing view (profile).
* [analyticsManagementRemarketingAudienceDelete](docs/management/README.md#analyticsmanagementremarketingaudiencedelete) - Delete a remarketing audience.
* [analyticsManagementRemarketingAudienceGet](docs/management/README.md#analyticsmanagementremarketingaudienceget) - Gets a remarketing audience to which the user has access.
* [analyticsManagementRemarketingAudienceInsert](docs/management/README.md#analyticsmanagementremarketingaudienceinsert) - Creates a new remarketing audience.
* [analyticsManagementRemarketingAudienceList](docs/management/README.md#analyticsmanagementremarketingaudiencelist) - Lists remarketing audiences to which the user has access.
* [analyticsManagementRemarketingAudiencePatch](docs/management/README.md#analyticsmanagementremarketingaudiencepatch) - Updates an existing remarketing audience. This method supports patch semantics.
* [analyticsManagementRemarketingAudienceUpdate](docs/management/README.md#analyticsmanagementremarketingaudienceupdate) - Updates an existing remarketing audience.
* [analyticsManagementSegmentsList](docs/management/README.md#analyticsmanagementsegmentslist) - Lists segments to which the user has access.
* [analyticsManagementUnsampledReportsDelete](docs/management/README.md#analyticsmanagementunsampledreportsdelete) - Deletes an unsampled report.
* [analyticsManagementUnsampledReportsGet](docs/management/README.md#analyticsmanagementunsampledreportsget) - Returns a single unsampled report.
* [analyticsManagementUnsampledReportsInsert](docs/management/README.md#analyticsmanagementunsampledreportsinsert) - Create a new unsampled report.
* [analyticsManagementUnsampledReportsList](docs/management/README.md#analyticsmanagementunsampledreportslist) - Lists unsampled reports to which the user has access.
* [analyticsManagementUploadsDeleteUploadData](docs/management/README.md#analyticsmanagementuploadsdeleteuploaddata) - Delete data associated with a previous upload.
* [analyticsManagementUploadsGet](docs/management/README.md#analyticsmanagementuploadsget) - List uploads to which the user has access.
* [analyticsManagementUploadsList](docs/management/README.md#analyticsmanagementuploadslist) - List uploads to which the user has access.
* [analyticsManagementUploadsUploadData](docs/management/README.md#analyticsmanagementuploadsuploaddata) - Upload data for a custom data source.
* [analyticsManagementWebPropertyAdWordsLinksDelete](docs/management/README.md#analyticsmanagementwebpropertyadwordslinksdelete) - Deletes a web property-Google Ads link.
* [analyticsManagementWebPropertyAdWordsLinksGet](docs/management/README.md#analyticsmanagementwebpropertyadwordslinksget) - Returns a web property-Google Ads link to which the user has access.
* [analyticsManagementWebPropertyAdWordsLinksInsert](docs/management/README.md#analyticsmanagementwebpropertyadwordslinksinsert) - Creates a webProperty-Google Ads link.
* [analyticsManagementWebPropertyAdWordsLinksList](docs/management/README.md#analyticsmanagementwebpropertyadwordslinkslist) - Lists webProperty-Google Ads links for a given web property.
* [analyticsManagementWebPropertyAdWordsLinksPatch](docs/management/README.md#analyticsmanagementwebpropertyadwordslinkspatch) - Updates an existing webProperty-Google Ads link. This method supports patch semantics.
* [analyticsManagementWebPropertyAdWordsLinksUpdate](docs/management/README.md#analyticsmanagementwebpropertyadwordslinksupdate) - Updates an existing webProperty-Google Ads link.
* [analyticsManagementWebpropertiesGet](docs/management/README.md#analyticsmanagementwebpropertiesget) - Gets a web property to which the user has access.
* [analyticsManagementWebpropertiesInsert](docs/management/README.md#analyticsmanagementwebpropertiesinsert) - Create a new property if the account has fewer than 20 properties. Web properties are visible in the Google Analytics interface only if they have at least one profile.
* [analyticsManagementWebpropertiesList](docs/management/README.md#analyticsmanagementwebpropertieslist) - Lists web properties to which the user has access.
* [analyticsManagementWebpropertiesPatch](docs/management/README.md#analyticsmanagementwebpropertiespatch) - Updates an existing web property. This method supports patch semantics.
* [analyticsManagementWebpropertiesUpdate](docs/management/README.md#analyticsmanagementwebpropertiesupdate) - Updates an existing web property.
* [analyticsManagementWebpropertyUserLinksDelete](docs/management/README.md#analyticsmanagementwebpropertyuserlinksdelete) - Removes a user from the given web property.
* [analyticsManagementWebpropertyUserLinksInsert](docs/management/README.md#analyticsmanagementwebpropertyuserlinksinsert) - Adds a new user to the given web property.
* [analyticsManagementWebpropertyUserLinksList](docs/management/README.md#analyticsmanagementwebpropertyuserlinkslist) - Lists webProperty-user links for a given web property.
* [analyticsManagementWebpropertyUserLinksUpdate](docs/management/README.md#analyticsmanagementwebpropertyuserlinksupdate) - Updates permissions for an existing user on the given web property.

### [metadata](docs/metadata/README.md)

* [analyticsMetadataColumnsList](docs/metadata/README.md#analyticsmetadatacolumnslist) - Lists all columns for a report type

### [provisioning](docs/provisioning/README.md)

* [analyticsProvisioningCreateAccountTicket](docs/provisioning/README.md#analyticsprovisioningcreateaccountticket) - Creates an account ticket.
* [analyticsProvisioningCreateAccountTree](docs/provisioning/README.md#analyticsprovisioningcreateaccounttree) - Provision account.

### [userDeletion](docs/userdeletion/README.md)

* [analyticsUserDeletionUserDeletionRequestUpsert](docs/userdeletion/README.md#analyticsuserdeletionuserdeletionrequestupsert) - Insert or update a user deletion requests.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
