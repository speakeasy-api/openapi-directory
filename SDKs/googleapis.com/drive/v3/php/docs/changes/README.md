# changes

### Available Operations

* [driveChangesGetStartPageToken](#drivechangesgetstartpagetoken) - Gets the starting pageToken for listing future changes.
* [driveChangesList](#drivechangeslist) - Lists the changes for a user or shared drive.
* [driveChangesWatch](#drivechangeswatch) - Subscribes to changes for a user. To use this method, you must include the pageToken query parameter.

## driveChangesGetStartPageToken

Gets the starting pageToken for listing future changes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveChangesGetStartPageTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveChangesGetStartPageTokenSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveChangesGetStartPageTokenSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveChangesGetStartPageTokenSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DriveChangesGetStartPageTokenSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DriveChangesGetStartPageTokenSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\DriveChangesGetStartPageTokenSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\DriveChangesGetStartPageTokenSecurityOption6;
use \OpenAPI\OpenAPI\Models\Operations\DriveChangesGetStartPageTokenSecurityOption7;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveChangesGetStartPageTokenRequest();
    $request->alt = AltEnum::JSON;
    $request->driveId = 'deserunt';
    $request->fields = 'suscipit';
    $request->key = 'iure';
    $request->oauthToken = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->supportsAllDrives = false;
    $request->supportsTeamDrives = false;
    $request->teamDriveId = 'ipsa';
    $request->userIp = 'delectus';

    $requestSecurity = new DriveChangesGetStartPageTokenSecurity();
    $requestSecurity->option1 = new DriveChangesGetStartPageTokenSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->changes->driveChangesGetStartPageToken($request, $requestSecurity);

    if ($response->startPageToken !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveChangesList

Lists the changes for a user or shared drive.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveChangesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveChangesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveChangesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveChangesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DriveChangesListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DriveChangesListSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\DriveChangesListSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\DriveChangesListSecurityOption6;
use \OpenAPI\OpenAPI\Models\Operations\DriveChangesListSecurityOption7;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveChangesListRequest();
    $request->alt = AltEnum::JSON;
    $request->driveId = 'tempora';
    $request->fields = 'suscipit';
    $request->includeCorpusRemovals = false;
    $request->includeItemsFromAllDrives = false;
    $request->includeLabels = 'molestiae';
    $request->includePermissionsForView = 'minus';
    $request->includeRemoved = false;
    $request->includeTeamDriveItems = false;
    $request->key = 'placeat';
    $request->oauthToken = 'voluptatum';
    $request->pageSize = 479977;
    $request->pageToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->restrictToMyDrive = false;
    $request->spaces = 'recusandae';
    $request->supportsAllDrives = false;
    $request->supportsTeamDrives = false;
    $request->teamDriveId = 'temporibus';
    $request->userIp = 'ab';

    $requestSecurity = new DriveChangesListSecurity();
    $requestSecurity->option1 = new DriveChangesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->changes->driveChangesList($request, $requestSecurity);

    if ($response->changeList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveChangesWatch

Subscribes to changes for a user. To use this method, you must include the pageToken query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveChangesWatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\Channel;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveChangesWatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveChangesWatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveChangesWatchSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DriveChangesWatchSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DriveChangesWatchSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\DriveChangesWatchSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\DriveChangesWatchSecurityOption6;
use \OpenAPI\OpenAPI\Models\Operations\DriveChangesWatchSecurityOption7;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveChangesWatchRequest();
    $request->channel = new Channel();
    $request->channel->address = '0603 Will Shoals';
    $request->channel->expiration = 'odit';
    $request->channel->id = 'ddf7cc78-ca1b-4a92-8fc8-16742cb73920';
    $request->channel->kind = 'ad';
    $request->channel->params = [
        'sed' => 'iste',
        'dolor' => 'natus',
        'laboriosam' => 'hic',
    ];
    $request->channel->payload = false;
    $request->channel->resourceId = 'saepe';
    $request->channel->resourceUri = 'fuga';
    $request->channel->token = 'in';
    $request->channel->type = 'corporis';
    $request->alt = AltEnum::JSON;
    $request->driveId = 'iste';
    $request->fields = 'iure';
    $request->includeCorpusRemovals = false;
    $request->includeItemsFromAllDrives = false;
    $request->includeLabels = 'saepe';
    $request->includePermissionsForView = 'quidem';
    $request->includeRemoved = false;
    $request->includeTeamDriveItems = false;
    $request->key = 'architecto';
    $request->oauthToken = 'ipsa';
    $request->pageSize = 969810;
    $request->pageToken = 'est';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->restrictToMyDrive = false;
    $request->spaces = 'laborum';
    $request->supportsAllDrives = false;
    $request->supportsTeamDrives = false;
    $request->teamDriveId = 'dolores';
    $request->userIp = 'dolorem';

    $requestSecurity = new DriveChangesWatchSecurity();
    $requestSecurity->option1 = new DriveChangesWatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->changes->driveChangesWatch($request, $requestSecurity);

    if ($response->channel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
