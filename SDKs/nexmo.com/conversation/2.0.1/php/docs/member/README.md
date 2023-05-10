# member

## Overview

Memberships connect users with conversations. Each membership has one conversation and one user however a user can have many memberships to conversations just as conversations can have many members.

### Available Operations

* [createMember](#createmember) - Create a member
* [deleteMember](#deletemember) - Delete a member
* [getMember](#getmember) - Retrieve a member
* [~~getMembers~~](#getmembers) - List members :warning: **Deprecated**
* [updateMember](#updatemember) - Update a member

## createMember

Create a member

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateMemberRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateMemberRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\MemberActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Channel;
use \OpenAPI\OpenAPI\Models\Shared\ChannelLegIds;
use \OpenAPI\OpenAPI\Models\Shared\ChannelTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMemberRequest();
    $request->requestBody = new CreateMemberRequestBody();
    $request->requestBody->action = MemberActionEnum::JOIN;
    $request->requestBody->channel = new Channel();
    $request->requestBody->channel->from = new ChannelFrom3();
    $request->requestBody->channel->from->type = 'sip';
    $request->requestBody->channel->from->uri = 'sip:rebekka@sip.example.com';
    $request->requestBody->channel->legId = 'a595959595959595995';
    $request->requestBody->channel->legIds = [
        new ChannelLegIds(),
        new ChannelLegIds(),
        new ChannelLegIds(),
    ];
    $request->requestBody->channel->to = new ChannelTo2();
    $request->requestBody->channel->to->dtmfAnswer = 'p*123#';
    $request->requestBody->channel->to->number = '14155550100';
    $request->requestBody->channel->to->type = 'phone';
    $request->requestBody->channel->type = ChannelTypeEnum::PHONE;
    $request->requestBody->knockingId = 'a972836a-450f-35fa-156c-52a2ab5b7d25';
    $request->requestBody->media = [
        'temporibus' => 'ab',
        'quis' => 'veritatis',
        'deserunt' => 'perferendis',
        'ipsam' => 'repellendus',
    ];
    $request->requestBody->memberId = 'MEM-63f61863-4a51-4f6b-86e1-46edebio0391';
    $request->requestBody->memberIdInviting = 'MEM-63f61863-4a51-4f6b-86e1-46edebio0391';
    $request->requestBody->userId = 'USR-63f61863-4a51-4f6b-86e1-46edebio0391';
    $request->conversationId = 'sapiente';

    $response = $sdk->member->createMember($request);

    if ($response->createMember201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteMember

Delete a member

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMemberRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMemberRequest();
    $request->conversationId = 'quo';
    $request->memberId = 'odit';

    $response = $sdk->member->deleteMember($request);

    if ($response->deleteMember200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMember

Retrieve a member

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMemberRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMemberRequest();
    $request->conversationId = 'at';
    $request->memberId = 'at';

    $response = $sdk->member->getMember($request);

    if ($response->getMember200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getMembers~~

This endpoint is **DEPRECATED**. Please use [/v0.2/members](/api/conversation.v2#get-members).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMembersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMembersRequest();
    $request->conversationId = 'maiores';

    $response = $sdk->member->getMembers($request);

    if ($response->getMembers200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMember

Update a member

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMemberRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMemberRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\MemberActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Channel;
use \OpenAPI\OpenAPI\Models\Shared\ChannelLegIds;
use \OpenAPI\OpenAPI\Models\Shared\ChannelTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMemberRequest();
    $request->requestBody = new UpdateMemberRequestBody();
    $request->requestBody->action = MemberActionEnum::JOIN;
    $request->requestBody->channel = new Channel();
    $request->requestBody->channel->from = new ChannelFrom3();
    $request->requestBody->channel->from->type = 'sip';
    $request->requestBody->channel->from->uri = 'sip:rebekka@sip.example.com';
    $request->requestBody->channel->legId = 'a595959595959595995';
    $request->requestBody->channel->legIds = [
        new ChannelLegIds(),
        new ChannelLegIds(),
        new ChannelLegIds(),
        new ChannelLegIds(),
    ];
    $request->requestBody->channel->to = new Four();
    $request->requestBody->channel->to->extension = '1234';
    $request->requestBody->channel->to->type = 'vbc';
    $request->requestBody->channel->type = ChannelTypeEnum::PHONE;
    $request->conversationId = 'esse';
    $request->memberId = 'totam';

    $response = $sdk->member->updateMember($request);

    if ($response->updateMember200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
