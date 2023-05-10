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
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'distinctio' => 'quibusdam',
        'unde' => 'nulla',
        'corrupti' => 'illum',
    ];
    $request->accessToken = 'vel';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'deserunt';
    $request->fields = 'suscipit';
    $request->key = 'iure';
    $request->name = 'Raquel Bednar';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'placeat';

    $requestSecurity = new BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurity();
    $requestSecurity->option1 = new BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigquerydatatransferProjectsLocationsDataSourcesCheckValidCreds($request, $requestSecurity);

    if ($response->checkValidCredsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [bigquerydatatransferProjectsLocationsDataSourcesCheckValidCreds](docs/projects/README.md#bigquerydatatransferprojectslocationsdatasourcescheckvalidcreds) - Returns true if valid credentials exist for the given data source and requesting user.
* [bigquerydatatransferProjectsLocationsDataSourcesList](docs/projects/README.md#bigquerydatatransferprojectslocationsdatasourceslist) - Lists supported data sources and returns their settings.
* [bigquerydatatransferProjectsLocationsEnrollDataSources](docs/projects/README.md#bigquerydatatransferprojectslocationsenrolldatasources) - Enroll data sources in a user project. This allows users to create transfer configurations for these data sources. They will also appear in the ListDataSources RPC and as such, will appear in the [BigQuery UI](https://console.cloud.google.com/bigquery), and the documents can be found in the public guide for [BigQuery Web UI](https://cloud.google.com/bigquery/bigquery-web-ui) and [Data Transfer Service](https://cloud.google.com/bigquery/docs/working-with-transfers).
* [bigquerydatatransferProjectsLocationsList](docs/projects/README.md#bigquerydatatransferprojectslocationslist) - Lists information about the supported locations for this service.
* [bigquerydatatransferProjectsTransferConfigsCreate](docs/projects/README.md#bigquerydatatransferprojectstransferconfigscreate) - Creates a new data transfer configuration.
* [bigquerydatatransferProjectsTransferConfigsList](docs/projects/README.md#bigquerydatatransferprojectstransferconfigslist) - Returns information about all transfer configs owned by a project in the specified location.
* [bigquerydatatransferProjectsTransferConfigsPatch](docs/projects/README.md#bigquerydatatransferprojectstransferconfigspatch) - Updates a data transfer configuration. All fields must be set, even if they are not updated.
* [bigquerydatatransferProjectsTransferConfigsRunsDelete](docs/projects/README.md#bigquerydatatransferprojectstransferconfigsrunsdelete) - Deletes the specified transfer run.
* [bigquerydatatransferProjectsTransferConfigsRunsGet](docs/projects/README.md#bigquerydatatransferprojectstransferconfigsrunsget) - Returns information about the particular transfer run.
* [bigquerydatatransferProjectsTransferConfigsRunsList](docs/projects/README.md#bigquerydatatransferprojectstransferconfigsrunslist) - Returns information about running and completed transfer runs.
* [bigquerydatatransferProjectsTransferConfigsRunsTransferLogsList](docs/projects/README.md#bigquerydatatransferprojectstransferconfigsrunstransferlogslist) - Returns log messages for the transfer run.
* [bigquerydatatransferProjectsTransferConfigsScheduleRuns](docs/projects/README.md#bigquerydatatransferprojectstransferconfigsscheduleruns) - Creates transfer runs for a time range [start_time, end_time]. For each date - or whatever granularity the data source supports - in the range, one transfer run is created. Note that runs are created per UTC time in the time range. DEPRECATED: use StartManualTransferRuns instead.
* [bigquerydatatransferProjectsTransferConfigsStartManualRuns](docs/projects/README.md#bigquerydatatransferprojectstransferconfigsstartmanualruns) - Start manual transfer runs to be executed now with schedule_time equal to current time. The transfer runs can be created for a time range where the run_time is between start_time (inclusive) and end_time (exclusive), or for a specific run_time.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
