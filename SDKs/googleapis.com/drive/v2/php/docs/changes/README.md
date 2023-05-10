# changes

### Available Operations

* [driveChangesGet](#drivechangesget) - Deprecated - Use changes.getStartPageToken and changes.list to retrieve recent changes.
* [driveChangesGetStartPageToken](#drivechangesgetstartpagetoken) - Gets the starting pageToken for listing future changes.
* [driveChangesList](#drivechangeslist) - Lists the changes for a user or shared drive.
* [driveChangesWatch](#drivechangeswatch) - Subscribe to changes for a user.

## driveChangesGet

Deprecated - Use changes.getStartPageToken and changes.list to retrieve recent changes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveChangesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveChangesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveChangesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveChangesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DriveChangesGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DriveChangesGetSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\DriveChangesGetSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\DriveChangesGetSecurityOption6;
use \OpenAPI\OpenAPI\Models\Operations\DriveChangesGetSecurityOption7;
use \OpenAPI\OpenAPI\Models\Operations\DriveChangesGetSecurityOption8;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveChangesGetRequest();
    $request->alt = AltEnum::JSON;
    $request->changeId = 'ab';
    $request->driveId = 'quis';
    $request->fields = 'veritatis';
    $request->key = 'deserunt';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->supportsAllDrives = false;
    $request->supportsTeamDrives = false;
    $request->teamDriveId = 'repellendus';
    $request->userIp = 'sapiente';

    $requestSecurity = new DriveChangesGetSecurity();
    $requestSecurity->option1 = new DriveChangesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->changes->driveChangesGet($request, $requestSecurity);

    if ($response->change !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
use \OpenAPI\OpenAPI\Models\Operations\DriveChangesGetStartPageTokenSecurityOption8;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveChangesGetStartPageTokenRequest();
    $request->alt = AltEnum::JSON;
    $request->driveId = 'quo';
    $request->fields = 'odit';
    $request->key = 'at';
    $request->oauthToken = 'at';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->supportsAllDrives = false;
    $request->supportsTeamDrives = false;
    $request->teamDriveId = 'molestiae';
    $request->userIp = 'quod';

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
use \OpenAPI\OpenAPI\Models\Operations\DriveChangesListSecurityOption8;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveChangesListRequest();
    $request->alt = AltEnum::JSON;
    $request->driveId = 'quod';
    $request->fields = 'esse';
    $request->includeCorpusRemovals = false;
    $request->includeDeleted = false;
    $request->includeItemsFromAllDrives = false;
    $request->includeLabels = 'totam';
    $request->includePermissionsForView = 'porro';
    $request->includeSubscribed = false;
    $request->includeTeamDriveItems = false;
    $request->key = 'dolorum';
    $request->maxResults = 118274;
    $request->oauthToken = 'nam';
    $request->pageToken = 'officia';
    $request->prettyPrint = false;
    $request->quotaUser = 'occaecati';
    $request->spaces = 'fugit';
    $request->startChangeId = 'deleniti';
    $request->supportsAllDrives = false;
    $request->supportsTeamDrives = false;
    $request->teamDriveId = 'hic';
    $request->userIp = 'optio';

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

Subscribe to changes for a user.

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
use \OpenAPI\OpenAPI\Models\Operations\DriveChangesWatchSecurityOption8;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveChangesWatchRequest();
    $request->channel = new Channel();
    $request->channel->address = '1442 Ona River';
    $request->channel->expiration = 'esse';
    $request->channel->id = '39205929-396f-4ea7-996e-b10faaa2352c';
    $request->channel->kind = 'enim';
    $request->channel->params = [
        'nemo' => 'minima',
        'excepturi' => 'accusantium',
        'iure' => 'culpa',
    ];
    $request->channel->payload = false;
    $request->channel->resourceId = 'doloribus';
    $request->channel->resourceUri = 'sapiente';
    $request->channel->token = 'architecto';
    $request->channel->type = 'mollitia';
    $request->alt = AltEnum::JSON;
    $request->driveId = 'dolorem';
    $request->fields = 'culpa';
    $request->includeCorpusRemovals = false;
    $request->includeDeleted = false;
    $request->includeItemsFromAllDrives = false;
    $request->includeLabels = 'consequuntur';
    $request->includePermissionsForView = 'repellat';
    $request->includeSubscribed = false;
    $request->includeTeamDriveItems = false;
    $request->key = 'mollitia';
    $request->maxResults = 581850;
    $request->oauthToken = 'numquam';
    $request->pageToken = 'commodi';
    $request->prettyPrint = false;
    $request->quotaUser = 'quam';
    $request->spaces = 'molestiae';
    $request->startChangeId = 'velit';
    $request->supportsAllDrives = false;
    $request->supportsTeamDrives = false;
    $request->teamDriveId = 'error';
    $request->userIp = 'quia';

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
