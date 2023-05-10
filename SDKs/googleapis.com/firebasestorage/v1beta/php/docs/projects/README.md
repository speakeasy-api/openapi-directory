# projects

### Available Operations

* [firebasestorageProjectsBucketsAddFirebase](#firebasestorageprojectsbucketsaddfirebase) - Links a Google Cloud Storage bucket to a Firebase project.
* [firebasestorageProjectsBucketsGet](#firebasestorageprojectsbucketsget) - Gets a single linked storage bucket.
* [firebasestorageProjectsBucketsList](#firebasestorageprojectsbucketslist) - Lists the linked storage buckets for a project.
* [firebasestorageProjectsBucketsRemoveFirebase](#firebasestorageprojectsbucketsremovefirebase) - Unlinks a linked Google Cloud Storage bucket from a Firebase project.

## firebasestorageProjectsBucketsAddFirebase

Links a Google Cloud Storage bucket to a Firebase project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebasestorageProjectsBucketsAddFirebaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebasestorageProjectsBucketsAddFirebaseSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebasestorageProjectsBucketsAddFirebaseSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebasestorageProjectsBucketsAddFirebaseSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasestorageProjectsBucketsAddFirebaseRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'minus' => 'placeat',
        'voluptatum' => 'iusto',
    ];
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::MEDIA;
    $request->bucket = 'recusandae';
    $request->callback = 'temporibus';
    $request->fields = 'ab';
    $request->key = 'quis';
    $request->oauthToken = 'veritatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'ipsam';

    $requestSecurity = new FirebasestorageProjectsBucketsAddFirebaseSecurity();
    $requestSecurity->option1 = new FirebasestorageProjectsBucketsAddFirebaseSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebasestorageProjectsBucketsAddFirebase($request, $requestSecurity);

    if ($response->bucket !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebasestorageProjectsBucketsGet

Gets a single linked storage bucket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebasestorageProjectsBucketsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebasestorageProjectsBucketsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebasestorageProjectsBucketsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebasestorageProjectsBucketsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasestorageProjectsBucketsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'odit';
    $request->fields = 'at';
    $request->key = 'at';
    $request->name = 'Javier Schmidt';
    $request->oauthToken = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'porro';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new FirebasestorageProjectsBucketsGetSecurity();
    $requestSecurity->option1 = new FirebasestorageProjectsBucketsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebasestorageProjectsBucketsGet($request, $requestSecurity);

    if ($response->bucket !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebasestorageProjectsBucketsList

Lists the linked storage buckets for a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebasestorageProjectsBucketsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebasestorageProjectsBucketsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebasestorageProjectsBucketsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebasestorageProjectsBucketsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasestorageProjectsBucketsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'officia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'fugit';
    $request->fields = 'deleniti';
    $request->key = 'hic';
    $request->oauthToken = 'optio';
    $request->pageSize = 521848;
    $request->pageToken = 'beatae';
    $request->parent = 'commodi';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'qui';

    $requestSecurity = new FirebasestorageProjectsBucketsListSecurity();
    $requestSecurity->option1 = new FirebasestorageProjectsBucketsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebasestorageProjectsBucketsList($request, $requestSecurity);

    if ($response->listBucketsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebasestorageProjectsBucketsRemoveFirebase

Unlinks a linked Google Cloud Storage bucket from a Firebase project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebasestorageProjectsBucketsRemoveFirebaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebasestorageProjectsBucketsRemoveFirebaseSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebasestorageProjectsBucketsRemoveFirebaseSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebasestorageProjectsBucketsRemoveFirebaseSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasestorageProjectsBucketsRemoveFirebaseRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'esse' => 'ipsum',
        'excepturi' => 'aspernatur',
        'perferendis' => 'ad',
    ];
    $request->accessToken = 'natus';
    $request->alt = AltEnum::JSON;
    $request->bucket = 'iste';
    $request->callback = 'dolor';
    $request->fields = 'natus';
    $request->key = 'laboriosam';
    $request->oauthToken = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'saepe';
    $request->uploadType = 'fuga';
    $request->uploadProtocol = 'in';

    $requestSecurity = new FirebasestorageProjectsBucketsRemoveFirebaseSecurity();
    $requestSecurity->option1 = new FirebasestorageProjectsBucketsRemoveFirebaseSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebasestorageProjectsBucketsRemoveFirebase($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
