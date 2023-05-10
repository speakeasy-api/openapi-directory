# notes

### Available Operations

* [getWorkspaceSlugMembersMemberSlugNotes](#getworkspaceslugmembersmemberslugnotes) - Get the member's notes
* [postWorkspaceSlugMembersMemberSlugNotes](#postworkspaceslugmembersmemberslugnotes) - Create a note
* [putWorkspaceSlugMembersMemberSlugNotesId](#putworkspaceslugmembersmemberslugnotesid) - Update a note

## getWorkspaceSlugMembersMemberSlugNotes

Get the member's notes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugMembersMemberSlugNotesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugMembersMemberSlugNotesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkspaceSlugMembersMemberSlugNotesRequest();
    $request->memberSlug = 'atque';
    $request->page = 'sit';
    $request->workspaceSlug = 'fugiat';

    $requestSecurity = new GetWorkspaceSlugMembersMemberSlugNotesSecurity();
    $requestSecurity->bearer = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->notes->getWorkspaceSlugMembersMemberSlugNotes($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postWorkspaceSlugMembersMemberSlugNotes

Create a note

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostWorkspaceSlugMembersMemberSlugNotesRequest;
use \OpenAPI\OpenAPI\Models\Shared\Note;
use \OpenAPI\OpenAPI\Models\Operations\PostWorkspaceSlugMembersMemberSlugNotesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostWorkspaceSlugMembersMemberSlugNotesRequest();
    $request->memberSlug = 'ab';
    $request->note = new Note();
    $request->note->body = 'soluta';
    $request->workspaceSlug = 'dolorum';

    $requestSecurity = new PostWorkspaceSlugMembersMemberSlugNotesSecurity();
    $requestSecurity->bearer = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->notes->postWorkspaceSlugMembersMemberSlugNotes($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putWorkspaceSlugMembersMemberSlugNotesId

Update a note

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutWorkspaceSlugMembersMemberSlugNotesIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\Note;
use \OpenAPI\OpenAPI\Models\Operations\PutWorkspaceSlugMembersMemberSlugNotesIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutWorkspaceSlugMembersMemberSlugNotesIdRequest();
    $request->id = '77a89ebf-737a-4e42-83ce-5e6a95d8a0d4';
    $request->memberSlug = 'tempora';
    $request->note = new Note();
    $request->note->body = 'vel';
    $request->workspaceSlug = 'quod';

    $requestSecurity = new PutWorkspaceSlugMembersMemberSlugNotesIdSecurity();
    $requestSecurity->bearer = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->notes->putWorkspaceSlugMembersMemberSlugNotesId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
