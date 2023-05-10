<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryconnectionProjectsLocationsConnectionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionInput;
use \OpenAPI\OpenAPI\Models\Shared\CloudSqlPropertiesInput;
use \OpenAPI\OpenAPI\Models\Shared\CloudSqlCredential;
use \OpenAPI\OpenAPI\Models\Shared\CloudSqlPropertiesTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryconnectionProjectsLocationsConnectionsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryconnectionProjectsLocationsConnectionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->connectionInput = new ConnectionInput();
    $request->connectionInput->cloudSql = new CloudSqlPropertiesInput();
    $request->connectionInput->cloudSql->credential = new CloudSqlCredential();
    $request->connectionInput->cloudSql->credential->password = 'provident';
    $request->connectionInput->cloudSql->credential->username = 'Micheal_Sporer';
    $request->connectionInput->cloudSql->database = 'corrupti';
    $request->connectionInput->cloudSql->instanceId = 'illum';
    $request->connectionInput->cloudSql->type = CloudSqlPropertiesTypeEnum::POSTGRES;
    $request->connectionInput->description = 'error';
    $request->connectionInput->friendlyName = 'deserunt';
    $request->connectionInput->name = 'Willie Gulgowski DVM';
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->connectionId = 'minus';
    $request->fields = 'placeat';
    $request->key = 'voluptatum';
    $request->oauthToken = 'iusto';
    $request->parent = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'temporibus';

    $requestSecurity = new BigqueryconnectionProjectsLocationsConnectionsCreateSecurity();
    $requestSecurity->option1 = new BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigqueryconnectionProjectsLocationsConnectionsCreate($request, $requestSecurity);

    if ($response->connection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->