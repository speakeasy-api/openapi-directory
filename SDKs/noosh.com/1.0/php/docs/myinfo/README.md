# myInfo

### Available Operations

* [getAutomaticInvitationList](#getautomaticinvitationlist) - List current user's automatic invitations info 
* [getTeamTemplateDetail](#getteamtemplatedetail) - Get current user's team template detal info 
* [getTeamTemplateList](#getteamtemplatelist) - List current user's team templates info 
* [uploadProfileImage](#uploadprofileimage) - Upload Profile Image.  A multipart/form-data request with a name "file"

## getAutomaticInvitationList

List current user's automatic invitations info 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAutomaticInvitationListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAutomaticInvitationListRequest();
    $request->workgroupId = 'esse';

    $response = $sdk->myInfo->getAutomaticInvitationList($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamTemplateDetail

Get current user's team template detal info 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamTemplateDetailRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamTemplateDetailRequest();
    $request->teamTemplateId = 'totam';
    $request->workgroupId = 'porro';

    $response = $sdk->myInfo->getTeamTemplateDetail($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamTemplateList

List current user's team templates info 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamTemplateListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamTemplateListRequest();
    $request->workgroupId = 'dolorum';

    $response = $sdk->myInfo->getTeamTemplateList($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## uploadProfileImage

Upload Profile Image.  A multipart/form-data request with a name "file"

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UploadProfileImageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UploadProfileImageRequest();
    $request->requestBody = 'dicta';
    $request->workgroupId = 'nam';

    $response = $sdk->myInfo->uploadProfileImage($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
