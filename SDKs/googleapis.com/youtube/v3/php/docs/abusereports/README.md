# abuseReports

### Available Operations

* [youtubeAbuseReportsInsert](#youtubeabusereportsinsert) - Inserts a new resource into this collection.

## youtubeAbuseReportsInsert

Inserts a new resource into this collection.

### Example Usage

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
    ];
    $request->abuseReport->description = 'deleniti';
    $request->abuseReport->relatedEntities = [
        new RelatedEntity(),
        new RelatedEntity(),
        new RelatedEntity(),
        new RelatedEntity(),
    ];
    $request->abuseReport->subject = new Entity();
    $request->abuseReport->subject->id = 'c816742c-b739-4205-9293-96fea7596eb1';
    $request->abuseReport->subject->typeId = 'ipsa';
    $request->abuseReport->subject->url = 'reiciendis';
    $request->accessToken = 'est';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laborum';
    $request->fields = 'dolores';
    $request->key = 'dolorem';
    $request->oauthToken = 'corporis';
    $request->part = [
        'nobis',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'nemo';

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
