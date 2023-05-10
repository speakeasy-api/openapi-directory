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