# timeline

### Available Operations

* [mirrorTimelineAttachmentsDelete](#mirrortimelineattachmentsdelete) - Deletes an attachment from a timeline item.
* [mirrorTimelineAttachmentsGet](#mirrortimelineattachmentsget) - Retrieves an attachment on a timeline item by item ID and attachment ID.
* [mirrorTimelineAttachmentsInsert](#mirrortimelineattachmentsinsert) - Adds a new attachment to a timeline item.
* [mirrorTimelineAttachmentsList](#mirrortimelineattachmentslist) - Returns a list of attachments for a timeline item.
* [mirrorTimelineDelete](#mirrortimelinedelete) - Deletes a timeline item.
* [mirrorTimelineGet](#mirrortimelineget) - Gets a single timeline item by ID.
* [mirrorTimelineInsert](#mirrortimelineinsert) - Inserts a new item into the timeline.
* [mirrorTimelineList](#mirrortimelinelist) - Retrieves a list of timeline items for the authenticated user.
* [mirrorTimelinePatch](#mirrortimelinepatch) - Updates a timeline item in place. This method supports patch semantics.
* [mirrorTimelineUpdate](#mirrortimelineupdate) - Updates a timeline item in place.

## mirrorTimelineAttachmentsDelete

Deletes an attachment from a timeline item.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MirrorTimelineAttachmentsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MirrorTimelineAttachmentsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MirrorTimelineAttachmentsDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->attachmentId = 'ex';
    $request->fields = 'laudantium';
    $request->itemId = 'dicta';
    $request->key = 'dolor';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->userIp = 'ex';

    $requestSecurity = new MirrorTimelineAttachmentsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->timeline->mirrorTimelineAttachmentsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mirrorTimelineAttachmentsGet

Retrieves an attachment on a timeline item by item ID and attachment ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MirrorTimelineAttachmentsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MirrorTimelineAttachmentsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MirrorTimelineAttachmentsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->attachmentId = 'nulla';
    $request->fields = 'excepturi';
    $request->itemId = 'voluptatibus';
    $request->key = 'nostrum';
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'quisquam';
    $request->userIp = 'saepe';

    $requestSecurity = new MirrorTimelineAttachmentsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->timeline->mirrorTimelineAttachmentsGet($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mirrorTimelineAttachmentsInsert

Adds a new attachment to a timeline item.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MirrorTimelineAttachmentsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MirrorTimelineAttachmentsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MirrorTimelineAttachmentsInsertRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'ea';
    $request->itemId = 'impedit';
    $request->key = 'corporis';
    $request->oauthToken = 'veniam';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->userIp = 'inventore';

    $requestSecurity = new MirrorTimelineAttachmentsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->timeline->mirrorTimelineAttachmentsInsert($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mirrorTimelineAttachmentsList

Returns a list of attachments for a timeline item.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MirrorTimelineAttachmentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MirrorTimelineAttachmentsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MirrorTimelineAttachmentsListRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'magnam';
    $request->itemId = 'ea';
    $request->key = 'quo';
    $request->oauthToken = 'consectetur';
    $request->prettyPrint = false;
    $request->quotaUser = 'recusandae';
    $request->userIp = 'aspernatur';

    $requestSecurity = new MirrorTimelineAttachmentsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->timeline->mirrorTimelineAttachmentsList($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mirrorTimelineDelete

Deletes a timeline item.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MirrorTimelineDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MirrorTimelineDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MirrorTimelineDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MirrorTimelineDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MirrorTimelineDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'minima';
    $request->id = '0fb008c4-2e14-41aa-8366-c8dd6b144290';
    $request->key = 'molestiae';
    $request->oauthToken = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'odio';
    $request->userIp = 'eius';

    $requestSecurity = new MirrorTimelineDeleteSecurity();
    $requestSecurity->option1 = new MirrorTimelineDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->timeline->mirrorTimelineDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mirrorTimelineGet

Gets a single timeline item by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MirrorTimelineGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MirrorTimelineGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MirrorTimelineGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MirrorTimelineGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MirrorTimelineGetRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'esse';
    $request->id = '78a7bd46-6d28-4c10-ab3c-dca4251904e5';
    $request->key = 'aspernatur';
    $request->oauthToken = 'sequi';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->userIp = 'esse';

    $requestSecurity = new MirrorTimelineGetSecurity();
    $requestSecurity->option1 = new MirrorTimelineGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->timeline->mirrorTimelineGet($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mirrorTimelineInsert

Inserts a new item into the timeline.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MirrorTimelineInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MirrorTimelineInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MirrorTimelineInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MirrorTimelineInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MirrorTimelineInsertRequest();
    $request->requestBody = 'recusandae';
    $request->alt = AltEnum::JSON;
    $request->fields = 'aperiam';
    $request->key = 'distinctio';
    $request->oauthToken = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'dignissimos';
    $request->userIp = 'inventore';

    $requestSecurity = new MirrorTimelineInsertSecurity();
    $requestSecurity->option1 = new MirrorTimelineInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->timeline->mirrorTimelineInsert($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mirrorTimelineList

Retrieves a list of timeline items for the authenticated user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MirrorTimelineListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MirrorTimelineListOrderByEnum;
use \OpenAPI\OpenAPI\Models\Operations\MirrorTimelineListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MirrorTimelineListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MirrorTimelineListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MirrorTimelineListRequest();
    $request->alt = AltEnum::JSON;
    $request->bundleId = 'nihil';
    $request->fields = 'totam';
    $request->includeDeleted = false;
    $request->key = 'accusamus';
    $request->maxResults = 306810;
    $request->oauthToken = 'odio';
    $request->orderBy = MirrorTimelineListOrderByEnum::WRITE_TIME;
    $request->pageToken = 'commodi';
    $request->pinnedOnly = false;
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->sourceItemId = 'dolores';
    $request->userIp = 'deserunt';

    $requestSecurity = new MirrorTimelineListSecurity();
    $requestSecurity->option1 = new MirrorTimelineListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->timeline->mirrorTimelineList($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mirrorTimelinePatch

Updates a timeline item in place. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MirrorTimelinePatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\TimelineItem;
use \OpenAPI\OpenAPI\Models\Shared\Attachment;
use \OpenAPI\OpenAPI\Models\Shared\Contact;
use \OpenAPI\OpenAPI\Models\Shared\Command;
use \OpenAPI\OpenAPI\Models\Shared\Location;
use \OpenAPI\OpenAPI\Models\Shared\MenuItem;
use \OpenAPI\OpenAPI\Models\Shared\MenuValue;
use \OpenAPI\OpenAPI\Models\Shared\NotificationConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MirrorTimelinePatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MirrorTimelinePatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MirrorTimelinePatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MirrorTimelinePatchRequest();
    $request->timelineItem = new TimelineItem();
    $request->timelineItem->attachments = [
        new Attachment(),
        new Attachment(),
    ];
    $request->timelineItem->bundleId = 'accusantium';
    $request->timelineItem->canonicalUrl = 'porro';
    $request->timelineItem->created = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-11T21:40:41.165Z');
    $request->timelineItem->creator = new Contact();
    $request->timelineItem->creator->acceptCommands = [
        new Command(),
        new Command(),
        new Command(),
    ];
    $request->timelineItem->creator->acceptTypes = [
        'deleniti',
    ];
    $request->timelineItem->creator->displayName = 'fugit';
    $request->timelineItem->creator->id = 'aa482562-f222-4e98-97ee-17cbe61e6b7b';
    $request->timelineItem->creator->imageUrls = [
        'minima',
        'distinctio',
        'eligendi',
    ];
    $request->timelineItem->creator->kind = 'sit';
    $request->timelineItem->creator->phoneNumber = 'culpa';
    $request->timelineItem->creator->priority = 731398;
    $request->timelineItem->creator->sharingFeatures = [
        'cumque',
    ];
    $request->timelineItem->creator->source = 'consequuntur';
    $request->timelineItem->creator->speakableName = 'consequatur';
    $request->timelineItem->creator->type = 'minus';
    $request->timelineItem->displayTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-15T21:42:01.969Z');
    $request->timelineItem->etag = 'consectetur';
    $request->timelineItem->html = 'esse';
    $request->timelineItem->id = '89fd871f-99dd-42ef-9121-aa6f1e674bdb';
    $request->timelineItem->inReplyTo = 'accusantium';
    $request->timelineItem->isBundleCover = false;
    $request->timelineItem->isDeleted = false;
    $request->timelineItem->isPinned = false;
    $request->timelineItem->kind = 'aliquam';
    $request->timelineItem->location = new Location();
    $request->timelineItem->location->accuracy = 9589.83;
    $request->timelineItem->location->address = '34330 Denesik Street';
    $request->timelineItem->location->displayName = 'ex';
    $request->timelineItem->location->id = '8ea19f1d-1705-4133-9d08-086a1840394c';
    $request->timelineItem->location->kind = 'explicabo';
    $request->timelineItem->location->latitude = 3762.26;
    $request->timelineItem->location->longitude = 120.36;
    $request->timelineItem->location->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-19T20:21:26.456Z');
    $request->timelineItem->menuItems = [
        new MenuItem(),
        new MenuItem(),
        new MenuItem(),
        new MenuItem(),
    ];
    $request->timelineItem->notification = new NotificationConfig();
    $request->timelineItem->notification->deliveryTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-06T09:42:25.585Z');
    $request->timelineItem->notification->level = 'voluptatibus';
    $request->timelineItem->pinScore = 374323;
    $request->timelineItem->recipients = [
        new Contact(),
        new Contact(),
        new Contact(),
        new Contact(),
    ];
    $request->timelineItem->selfLink = 'aperiam';
    $request->timelineItem->sourceItemId = 'ea';
    $request->timelineItem->speakableText = 'quaerat';
    $request->timelineItem->speakableType = 'consequuntur';
    $request->timelineItem->text = 'repellendus';
    $request->timelineItem->title = 'Miss';
    $request->timelineItem->updated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-13T02:46:31.605Z');
    $request->alt = AltEnum::JSON;
    $request->fields = 'officia';
    $request->id = 'f515cc41-3aa6-43aa-a8d6-7864dbb675fd';
    $request->key = 'nemo';
    $request->oauthToken = 'recusandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->userIp = 'aperiam';

    $requestSecurity = new MirrorTimelinePatchSecurity();
    $requestSecurity->option1 = new MirrorTimelinePatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->timeline->mirrorTimelinePatch($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mirrorTimelineUpdate

Updates a timeline item in place.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MirrorTimelineUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MirrorTimelineUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MirrorTimelineUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MirrorTimelineUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MirrorTimelineUpdateRequest();
    $request->requestBody = 'cum';
    $request->alt = AltEnum::JSON;
    $request->fields = 'consectetur';
    $request->id = '75ed4f6f-bee4-41f3-b317-fe35b60eb1ea';
    $request->key = 'tempora';
    $request->oauthToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptas';
    $request->userIp = 'voluptas';

    $requestSecurity = new MirrorTimelineUpdateSecurity();
    $requestSecurity->option1 = new MirrorTimelineUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->timeline->mirrorTimelineUpdate($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
