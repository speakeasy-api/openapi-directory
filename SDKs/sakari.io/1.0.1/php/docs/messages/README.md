# messages

## Overview

Send or track messages to one contact, a group of contacts or your entire address book

### Available Operations

* [messagesFetch](#messagesfetch) - Fetch message by id
* [messagesFetchAll](#messagesfetchall) - Fetch messages
* [messagesSend](#messagessend) - Send Messages

## messagesFetch

Returns a single messag

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MessagesFetchRequest;
use \OpenAPI\OpenAPI\Models\Operations\MessagesFetchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MessagesFetchRequest();
    $request->accountId = 'architecto';
    $request->messageId = 'mollitia';

    $requestSecurity = new MessagesFetchSecurity();
    $requestSecurity->sakariAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->messages->messagesFetch($request, $requestSecurity);

    if ($response->messageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## messagesFetchAll

Fetch messages

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MessagesFetchAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\MessagesFetchAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MessagesFetchAllRequest();
    $request->accountId = 'dolorem';
    $request->contactId = 'culpa';
    $request->conversationId = 'consequuntur';
    $request->limit = 995300;
    $request->offset = 653108;

    $requestSecurity = new MessagesFetchAllSecurity();
    $requestSecurity->sakariAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->messages->messagesFetchAll($request, $requestSecurity);

    if ($response->messagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## messagesSend

Send Messages

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MessagesSendRequest;
use \OpenAPI\OpenAPI\Models\Shared\SendMessagesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContactRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContactRequestMobile;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\SendMessagesRequestFilters;
use \OpenAPI\OpenAPI\Models\Shared\SendMessagesRequestMedia;
use \OpenAPI\OpenAPI\Models\Shared\SendMessagesRequestPhoneNumberFilter;
use \OpenAPI\OpenAPI\Models\Shared\SendMessagesRequestPhoneNumberFilterGroup;
use \OpenAPI\OpenAPI\Models\Shared\SendMessagesRequestTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\MessagesSendSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MessagesSendRequest();
    $request->sendMessagesRequest = new SendMessagesRequest();
    $request->sendMessagesRequest->contacts = [
        new ContactRequest(),
        new ContactRequest(),
        new ContactRequest(),
    ];
    $request->sendMessagesRequest->conversationStrategy = 'numquam';
    $request->sendMessagesRequest->conversations = [
        'quam',
        'molestiae',
    ];
    $request->sendMessagesRequest->filters = new SendMessagesRequestFilters();
    $request->sendMessagesRequest->filters->attributes = [
        [
            'quia' => 'quis',
            'vitae' => 'laborum',
            'animi' => 'enim',
        ],
    ];
    $request->sendMessagesRequest->filters->tags = [
        'quo',
    ];
    $request->sendMessagesRequest->media = [
        new SendMessagesRequestMedia(),
    ];
    $request->sendMessagesRequest->phoneNumberFilter = new SendMessagesRequestPhoneNumberFilter();
    $request->sendMessagesRequest->phoneNumberFilter->group = new SendMessagesRequestPhoneNumberFilterGroup();
    $request->sendMessagesRequest->phoneNumberFilter->group->id = 'f5ad019d-a1ff-4e78-b097-b0074f15471b';
    $request->sendMessagesRequest->template = 'enim';
    $request->sendMessagesRequest->type = SendMessagesRequestTypeEnum::MMS;
    $request->accountId = 'commodi';

    $requestSecurity = new MessagesSendSecurity();
    $requestSecurity->sakariAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->messages->messagesSend($request, $requestSecurity);

    if ($response->sendMessagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
