# notes

### Available Operations

* [keepNotesCreate](#keepnotescreate) - Creates a new note.
* [keepNotesDelete](#keepnotesdelete) - Deletes a note. Caller must have the `OWNER` role on the note to delete. Deleting a note removes the resource immediately and cannot be undone. Any collaborators will lose access to the note.
* [keepNotesGet](#keepnotesget) - Gets a note.
* [keepNotesList](#keepnoteslist) - Lists notes. Every list call returns a page of results with `page_size` as the upper bound of returned items. A `page_size` of zero allows the server to choose the upper bound. The ListNotesResponse contains at most `page_size` entries. If there are more things left to list, it provides a `next_page_token` value. (Page tokens are opaque values.) To get the next page of results, copy the result's `next_page_token` into the next request's `page_token`. Repeat until the `next_page_token` returned with a page of results is empty. ListNotes return consistent results in the face of concurrent changes, or signals that it cannot with an ABORTED error.
* [keepNotesPermissionsBatchCreate](#keepnotespermissionsbatchcreate) - Creates one or more permissions on the note. Only permissions with the `WRITER` role may be created. If adding any permission fails, then the entire request fails and no changes are made.
* [keepNotesPermissionsBatchDelete](#keepnotespermissionsbatchdelete) - Deletes one or more permissions on the note. The specified entities will immediately lose access. A permission with the `OWNER` role can't be removed. If removing a permission fails, then the entire request fails and no changes are made. Returns a 400 bad request error if a specified permission does not exist on the note.

## keepNotesCreate

Creates a new note.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\KeepNotesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\NoteInput;
use \OpenAPI\OpenAPI\Models\Shared\Section;
use \OpenAPI\OpenAPI\Models\Shared\ListContent;
use \OpenAPI\OpenAPI\Models\Shared\ListItem;
use \OpenAPI\OpenAPI\Models\Shared\TextContent;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\KeepNotesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KeepNotesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->noteInput = new NoteInput();
    $request->noteInput->body = new Section();
    $request->noteInput->body->list = new ListContent();
    $request->noteInput->body->list->listItems = [
        new ListItem(),
        new ListItem(),
        new ListItem(),
        new ListItem(),
    ];
    $request->noteInput->body->text = new TextContent();
    $request->noteInput->body->text->text = 'ipsa';
    $request->noteInput->title = 'Dr.';
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->fields = 'minus';
    $request->key = 'placeat';
    $request->oauthToken = 'voluptatum';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'nisi';

    $requestSecurity = new KeepNotesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->notes->keepNotesCreate($request, $requestSecurity);

    if ($response->note !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## keepNotesDelete

Deletes a note. Caller must have the `OWNER` role on the note to delete. Deleting a note removes the resource immediately and cannot be undone. Any collaborators will lose access to the note.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\KeepNotesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\KeepNotesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KeepNotesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'veritatis';
    $request->key = 'deserunt';
    $request->name = 'Roberta Sipes';
    $request->oauthToken = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'at';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'maiores';

    $requestSecurity = new KeepNotesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->notes->keepNotesDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## keepNotesGet

Gets a note.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\KeepNotesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\KeepNotesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\KeepNotesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\KeepNotesGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KeepNotesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quod';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'esse';
    $request->fields = 'totam';
    $request->key = 'porro';
    $request->mimeType = 'dolorum';
    $request->name = 'Antoinette Nikolaus';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->uploadType = 'optio';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new KeepNotesGetSecurity();
    $requestSecurity->option1 = new KeepNotesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->notes->keepNotesGet($request, $requestSecurity);

    if ($response->note !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## keepNotesList

Lists notes. Every list call returns a page of results with `page_size` as the upper bound of returned items. A `page_size` of zero allows the server to choose the upper bound. The ListNotesResponse contains at most `page_size` entries. If there are more things left to list, it provides a `next_page_token` value. (Page tokens are opaque values.) To get the next page of results, copy the result's `next_page_token` into the next request's `page_token`. Repeat until the `next_page_token` returned with a page of results is empty. ListNotes return consistent results in the face of concurrent changes, or signals that it cannot with an ABORTED error.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\KeepNotesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\KeepNotesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\KeepNotesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\KeepNotesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KeepNotesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'modi';
    $request->fields = 'qui';
    $request->filter = 'impedit';
    $request->key = 'cum';
    $request->oauthToken = 'esse';
    $request->pageSize = 216550;
    $request->pageToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'aspernatur';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'ad';

    $requestSecurity = new KeepNotesListSecurity();
    $requestSecurity->option1 = new KeepNotesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->notes->keepNotesList($request, $requestSecurity);

    if ($response->listNotesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## keepNotesPermissionsBatchCreate

Creates one or more permissions on the note. Only permissions with the `WRITER` role may be created. If adding any permission fails, then the entire request fails and no changes are made.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\KeepNotesPermissionsBatchCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchCreatePermissionsRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\CreatePermissionRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\PermissionInput;
use \OpenAPI\OpenAPI\Models\Shared\Group;
use \OpenAPI\OpenAPI\Models\Shared\PermissionRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\User;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\KeepNotesPermissionsBatchCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KeepNotesPermissionsBatchCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->batchCreatePermissionsRequestInput = new BatchCreatePermissionsRequestInput();
    $request->batchCreatePermissionsRequestInput->requests = [
        new CreatePermissionRequestInput(),
    ];
    $request->accessToken = 'iste';
    $request->alt = AltEnum::JSON;
    $request->callback = 'natus';
    $request->fields = 'laboriosam';
    $request->key = 'hic';
    $request->oauthToken = 'saepe';
    $request->parent = 'fuga';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'iste';

    $requestSecurity = new KeepNotesPermissionsBatchCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->notes->keepNotesPermissionsBatchCreate($request, $requestSecurity);

    if ($response->batchCreatePermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## keepNotesPermissionsBatchDelete

Deletes one or more permissions on the note. The specified entities will immediately lose access. A permission with the `OWNER` role can't be removed. If removing a permission fails, then the entire request fails and no changes are made. Returns a 400 bad request error if a specified permission does not exist on the note.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\KeepNotesPermissionsBatchDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchDeletePermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\KeepNotesPermissionsBatchDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KeepNotesPermissionsBatchDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->batchDeletePermissionsRequest = new BatchDeletePermissionsRequest();
    $request->batchDeletePermissionsRequest->names = [
        'quidem',
        'architecto',
        'ipsa',
        'reiciendis',
    ];
    $request->accessToken = 'est';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laborum';
    $request->fields = 'dolores';
    $request->key = 'dolorem';
    $request->oauthToken = 'corporis';
    $request->parent = 'explicabo';
    $request->prettyPrint = false;
    $request->quotaUser = 'nobis';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new KeepNotesPermissionsBatchDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->notes->keepNotesPermissionsBatchDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
