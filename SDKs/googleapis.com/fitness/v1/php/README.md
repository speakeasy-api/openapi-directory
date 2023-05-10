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
use \OpenAPI\OpenAPI\Models\Operations\FitnessUsersDataSourcesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataSource;
use \OpenAPI\OpenAPI\Models\Shared\Application;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceDataQualityStandardEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataType;
use \OpenAPI\OpenAPI\Models\Shared\DataTypeField;
use \OpenAPI\OpenAPI\Models\Shared\DataTypeFieldFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\Device;
use \OpenAPI\OpenAPI\Models\Shared\DeviceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FitnessUsersDataSourcesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FitnessUsersDataSourcesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FitnessUsersDataSourcesCreateSecurityOption10;
use \OpenAPI\OpenAPI\Models\Operations\FitnessUsersDataSourcesCreateSecurityOption11;
use \OpenAPI\OpenAPI\Models\Operations\FitnessUsersDataSourcesCreateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\FitnessUsersDataSourcesCreateSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\FitnessUsersDataSourcesCreateSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\FitnessUsersDataSourcesCreateSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\FitnessUsersDataSourcesCreateSecurityOption6;
use \OpenAPI\OpenAPI\Models\Operations\FitnessUsersDataSourcesCreateSecurityOption7;
use \OpenAPI\OpenAPI\Models\Operations\FitnessUsersDataSourcesCreateSecurityOption8;
use \OpenAPI\OpenAPI\Models\Operations\FitnessUsersDataSourcesCreateSecurityOption9;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FitnessUsersDataSourcesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->dataSource = new DataSource();
    $request->dataSource->application = new Application();
    $request->dataSource->application->detailsUrl = 'provident';
    $request->dataSource->application->name = 'Ellis Mitchell';
    $request->dataSource->application->packageName = 'illum';
    $request->dataSource->application->version = 'vel';
    $request->dataSource->dataQualityStandard = [
        DataSourceDataQualityStandardEnum::DATA_QUALITY_BLOOD_PRESSURE_BHS_BA,
        DataSourceDataQualityStandardEnum::DATA_QUALITY_BLOOD_PRESSURE_AAMI,
        DataSourceDataQualityStandardEnum::DATA_QUALITY_BLOOD_PRESSURE_BHS_AA,
    ];
    $request->dataSource->dataStreamId = 'magnam';
    $request->dataSource->dataStreamName = 'debitis';
    $request->dataSource->dataType = new DataType();
    $request->dataSource->dataType->field = [
        new DataTypeField(),
    ];
    $request->dataSource->dataType->name = 'Ricky Hoppe';
    $request->dataSource->device = new Device();
    $request->dataSource->device->manufacturer = 'placeat';
    $request->dataSource->device->model = 'voluptatum';
    $request->dataSource->device->type = DeviceTypeEnum::WATCH;
    $request->dataSource->device->uid = 'excepturi';
    $request->dataSource->device->version = 'nisi';
    $request->dataSource->name = 'Jake Bernier MD';
    $request->dataSource->type = DataSourceTypeEnum::RAW;
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sapiente';
    $request->fields = 'quo';
    $request->key = 'odit';
    $request->oauthToken = 'at';
    $request->prettyPrint = false;
    $request->quotaUser = 'at';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'molestiae';
    $request->userId = 'quod';

    $requestSecurity = new FitnessUsersDataSourcesCreateSecurity();
    $requestSecurity->option1 = new FitnessUsersDataSourcesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->fitnessUsersDataSourcesCreate($request, $requestSecurity);

    if ($response->dataSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [users](docs/users/README.md)

* [fitnessUsersDataSourcesCreate](docs/users/README.md#fitnessusersdatasourcescreate) - Creates a new data source that is unique across all data sources belonging to this user. A data source is a unique source of sensor data. Data sources can expose raw data coming from hardware sensors on local or companion devices. They can also expose derived data, created by transforming or merging other data sources. Multiple data sources can exist for the same data type. Every data point in every dataset inserted into or read from the Fitness API has an associated data source. Each data source produces a unique stream of dataset updates, with a unique data source identifier. Not all changes to data source affect the data stream ID, so that data collected by updated versions of the same application/device can still be considered to belong to the same data source. Data sources are identified using a string generated by the server, based on the contents of the source being created. The dataStreamId field should not be set when invoking this method. It will be automatically generated by the server with the correct format. If a dataStreamId is set, it must match the format that the server would generate. This format is a combination of some fields from the data source, and has a specific order. If it doesn't match, the request will fail with an error. Specifying a DataType which is not a known type (beginning with "com.google.") will create a DataSource with a *custom data type*. Custom data types are only readable by the application that created them. Custom data types are *deprecated*; use standard data types instead. In addition to the data source fields included in the data source ID, the developer project number that is authenticated when creating the data source is included. This developer project number is obfuscated when read by any other developer reading public data types.
* [fitnessUsersDataSourcesDataPointChangesList](docs/users/README.md#fitnessusersdatasourcesdatapointchangeslist) - Queries for user's data point changes for a particular data source.
* [fitnessUsersDataSourcesDatasetsDelete](docs/users/README.md#fitnessusersdatasourcesdatasetsdelete) - Performs an inclusive delete of all data points whose start and end times have any overlap with the time range specified by the dataset ID. For most data types, the entire data point will be deleted. For data types where the time span represents a consistent value (such as com.google.activity.segment), and a data point straddles either end point of the dataset, only the overlapping portion of the data point will be deleted.
* [fitnessUsersDataSourcesDatasetsGet](docs/users/README.md#fitnessusersdatasourcesdatasetsget) - Returns a dataset containing all data points whose start and end times overlap with the specified range of the dataset minimum start time and maximum end time. Specifically, any data point whose start time is less than or equal to the dataset end time and whose end time is greater than or equal to the dataset start time.
* [fitnessUsersDataSourcesDatasetsPatch](docs/users/README.md#fitnessusersdatasourcesdatasetspatch) - Adds data points to a dataset. The dataset need not be previously created. All points within the given dataset will be returned with subsquent calls to retrieve this dataset. Data points can belong to more than one dataset. This method does not use patch semantics: the data points provided are merely inserted, with no existing data replaced.
* [fitnessUsersDataSourcesDelete](docs/users/README.md#fitnessusersdatasourcesdelete) - Deletes the specified data source. The request will fail if the data source contains any data points.
* [fitnessUsersDataSourcesGet](docs/users/README.md#fitnessusersdatasourcesget) - Returns the specified data source.
* [fitnessUsersDataSourcesList](docs/users/README.md#fitnessusersdatasourceslist) - Lists all data sources that are visible to the developer, using the OAuth scopes provided. The list is not exhaustive; the user may have private data sources that are only visible to other developers, or calls using other scopes.
* [fitnessUsersDataSourcesUpdate](docs/users/README.md#fitnessusersdatasourcesupdate) - Updates the specified data source. The dataStreamId, dataType, type, dataStreamName, and device properties with the exception of version, cannot be modified. Data sources are identified by their dataStreamId.
* [fitnessUsersDatasetAggregate](docs/users/README.md#fitnessusersdatasetaggregate) - Aggregates data of a certain type or stream into buckets divided by a given type of boundary. Multiple data sets of multiple types and from multiple sources can be aggregated into exactly one bucket type per request.
* [fitnessUsersSessionsDelete](docs/users/README.md#fitnessuserssessionsdelete) - Deletes a session specified by the given session ID.
* [fitnessUsersSessionsList](docs/users/README.md#fitnessuserssessionslist) - Lists sessions previously created.
* [fitnessUsersSessionsUpdate](docs/users/README.md#fitnessuserssessionsupdate) - Updates or insert a given session.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
