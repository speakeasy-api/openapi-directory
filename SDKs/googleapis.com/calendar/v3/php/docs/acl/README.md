# acl

### Available Operations

* [calendarAclDelete](#calendaracldelete) - Deletes an access control rule.
* [calendarAclGet](#calendaraclget) - Returns an access control rule.
* [calendarAclInsert](#calendaraclinsert) - Creates an access control rule.
* [calendarAclList](#calendaracllist) - Returns the rules in the access control list for the calendar.
* [calendarAclPatch](#calendaraclpatch) - Updates an access control rule. This method supports patch semantics.
* [calendarAclUpdate](#calendaraclupdate) - Updates an access control rule.
* [calendarAclWatch](#calendaraclwatch) - Watch for changes to ACL resources.

## calendarAclDelete

Deletes an access control rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CalendarAclDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarAclDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalendarAclDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->calendarId = 'illum';
    $request->fields = 'vel';
    $request->key = 'error';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'suscipit';
    $request->ruleId = 'iure';
    $request->userIp = 'magnam';

    $requestSecurity = new CalendarAclDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->acl->calendarAclDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## calendarAclGet

Returns an access control rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CalendarAclGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarAclGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CalendarAclGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CalendarAclGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalendarAclGetRequest();
    $request->alt = AltEnum::JSON;
    $request->calendarId = 'debitis';
    $request->fields = 'ipsa';
    $request->key = 'delectus';
    $request->oauthToken = 'tempora';
    $request->prettyPrint = false;
    $request->quotaUser = 'suscipit';
    $request->ruleId = 'molestiae';
    $request->userIp = 'minus';

    $requestSecurity = new CalendarAclGetSecurity();
    $requestSecurity->option1 = new CalendarAclGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->acl->calendarAclGet($request, $requestSecurity);

    if ($response->aclRule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## calendarAclInsert

Creates an access control rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CalendarAclInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\AclRule;
use \OpenAPI\OpenAPI\Models\Shared\AclRuleScope;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarAclInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalendarAclInsertRequest();
    $request->aclRule = new AclRule();
    $request->aclRule->etag = 'placeat';
    $request->aclRule->id = '8796ed15-1a05-4dfc-addf-7cc78ca1ba92';
    $request->aclRule->kind = 'deleniti';
    $request->aclRule->role = 'hic';
    $request->aclRule->scope = new AclRuleScope();
    $request->aclRule->scope->type = 'optio';
    $request->aclRule->scope->value = 'totam';
    $request->alt = AltEnum::JSON;
    $request->calendarId = 'beatae';
    $request->fields = 'commodi';
    $request->key = 'molestiae';
    $request->oauthToken = 'modi';
    $request->prettyPrint = false;
    $request->quotaUser = 'qui';
    $request->sendNotifications = false;
    $request->userIp = 'impedit';

    $requestSecurity = new CalendarAclInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->acl->calendarAclInsert($request, $requestSecurity);

    if ($response->aclRule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## calendarAclList

Returns the rules in the access control list for the calendar.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CalendarAclListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarAclListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalendarAclListRequest();
    $request->alt = AltEnum::JSON;
    $request->calendarId = 'cum';
    $request->fields = 'esse';
    $request->key = 'ipsum';
    $request->maxResults = 568434;
    $request->oauthToken = 'aspernatur';
    $request->pageToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ad';
    $request->showDeleted = false;
    $request->syncToken = 'natus';
    $request->userIp = 'sed';

    $requestSecurity = new CalendarAclListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->acl->calendarAclList($request, $requestSecurity);

    if ($response->acl !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## calendarAclPatch

Updates an access control rule. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CalendarAclPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\AclRule;
use \OpenAPI\OpenAPI\Models\Shared\AclRuleScope;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarAclPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalendarAclPatchRequest();
    $request->aclRule = new AclRule();
    $request->aclRule->etag = 'iste';
    $request->aclRule->id = '396fea75-96eb-410f-aaa2-352c5955907a';
    $request->aclRule->kind = 'doloribus';
    $request->aclRule->role = 'sapiente';
    $request->aclRule->scope = new AclRuleScope();
    $request->aclRule->scope->type = 'architecto';
    $request->aclRule->scope->value = 'mollitia';
    $request->alt = AltEnum::JSON;
    $request->calendarId = 'dolorem';
    $request->fields = 'culpa';
    $request->key = 'consequuntur';
    $request->oauthToken = 'repellat';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->ruleId = 'occaecati';
    $request->sendNotifications = false;
    $request->userIp = 'numquam';

    $requestSecurity = new CalendarAclPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->acl->calendarAclPatch($request, $requestSecurity);

    if ($response->aclRule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## calendarAclUpdate

Updates an access control rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CalendarAclUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\AclRule;
use \OpenAPI\OpenAPI\Models\Shared\AclRuleScope;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarAclUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalendarAclUpdateRequest();
    $request->aclRule = new AclRule();
    $request->aclRule->etag = 'commodi';
    $request->aclRule->id = '7739251a-a52c-43f5-ad01-9da1ffe78f09';
    $request->aclRule->kind = 'voluptate';
    $request->aclRule->role = 'cum';
    $request->aclRule->scope = new AclRuleScope();
    $request->aclRule->scope->type = 'perferendis';
    $request->aclRule->scope->value = 'doloremque';
    $request->alt = AltEnum::JSON;
    $request->calendarId = 'reprehenderit';
    $request->fields = 'ut';
    $request->key = 'maiores';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->ruleId = 'dolore';
    $request->sendNotifications = false;
    $request->userIp = 'iusto';

    $requestSecurity = new CalendarAclUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->acl->calendarAclUpdate($request, $requestSecurity);

    if ($response->aclRule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## calendarAclWatch

Watch for changes to ACL resources.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CalendarAclWatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\Channel;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarAclWatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalendarAclWatchRequest();
    $request->channel = new Channel();
    $request->channel->address = '63849 Curt Radial';
    $request->channel->expiration = 'molestias';
    $request->channel->id = '9d488e1e-91e4-450a-92ab-d44269802d50';
    $request->channel->kind = 'fugit';
    $request->channel->params = [
        'excepturi' => 'tempora',
        'facilis' => 'tempore',
        'labore' => 'delectus',
    ];
    $request->channel->payload = false;
    $request->channel->resourceId = 'eum';
    $request->channel->resourceUri = 'non';
    $request->channel->token = 'eligendi';
    $request->channel->type = 'sint';
    $request->alt = AltEnum::JSON;
    $request->calendarId = 'aliquid';
    $request->fields = 'provident';
    $request->key = 'necessitatibus';
    $request->maxResults = 572252;
    $request->oauthToken = 'officia';
    $request->pageToken = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->showDeleted = false;
    $request->syncToken = 'a';
    $request->userIp = 'dolorum';

    $requestSecurity = new CalendarAclWatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->acl->calendarAclWatch($request, $requestSecurity);

    if ($response->channel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
