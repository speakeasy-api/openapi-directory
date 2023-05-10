<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAbuseReportsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AbuseReport;
use \OpenAPI\OpenAPI\Models\Shared\AbuseType;
use \OpenAPI\OpenAPI\Models\Shared\RelatedEntity;
use \OpenAPI\OpenAPI\Models\Shared\Entity;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAbuseReportsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAbuseReportsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAbuseReportsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeAbuseReportsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->abuseReport = new AbuseReport();
    $request->abuseReport->abuseTypes = [
        new AbuseType(),
        new AbuseType(),
        new AbuseType(),
    ];
    $request->abuseReport->description = 'distinctio';
    $request->abuseReport->relatedEntities = [
        new RelatedEntity(),
        new RelatedEntity(),
        new RelatedEntity(),
        new RelatedEntity(),
    ];
    $request->abuseReport->subject = new Entity();
    $request->abuseReport->subject->id = '9d8d69a6-74e0-4f46-bcc8-796ed151a05d';
    $request->abuseReport->subject->typeId = 'sapiente';
    $request->abuseReport->subject->url = 'quo';
    $request->accessToken = 'odit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'at';
    $request->fields = 'maiores';
    $request->key = 'molestiae';
    $request->oauthToken = 'quod';
    $request->part = [
        'esse',
        'totam',
        'porro',
        'dolorum',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'officia';

    $requestSecurity = new YoutubeAbuseReportsInsertSecurity();
    $requestSecurity->option1 = new YoutubeAbuseReportsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->abuseReports->youtubeAbuseReportsInsert($request, $requestSecurity);

    if ($response->abuseReport !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->