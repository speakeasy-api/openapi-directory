# members

### Available Operations

* [directoryMembersDelete](#directorymembersdelete) - Removes a member from a group.
* [directoryMembersGet](#directorymembersget) - Retrieves a group member's properties.
* [directoryMembersHasMember](#directorymembershasmember) - Checks whether the given user is a member of the group. Membership can be direct or nested, but if nested, the `memberKey` and `groupKey` must be entities in the same domain or an `Invalid input` error is returned. To check for nested memberships that include entities outside of the group's domain, use the [`checkTransitiveMembership()`](https://cloud.google.com/identity/docs/reference/rest/v1/groups.memberships/checkTransitiveMembership) method in the Cloud Identity Groups API.
* [directoryMembersInsert](#directorymembersinsert) - Adds a user to the specified group.
* [directoryMembersList](#directorymemberslist) - Retrieves a paginated list of all members in a group. This method times out after 60 minutes. For more information, see [Troubleshoot error codes](https://developers.google.com/admin-sdk/directory/v1/guides/troubleshoot-error-codes).
* [directoryMembersPatch](#directorymemberspatch) - Updates the membership properties of a user in the specified group. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
* [directoryMembersUpdate](#directorymembersupdate) - Updates the membership of a user in the specified group.

## directoryMembersDelete

Removes a member from a group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMembersDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMembersDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMembersDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMembersDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryMembersDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quae';
    $request->fields = 'molestiae';
    $request->groupKey = 'eveniet';
    $request->key = 'qui';
    $request->memberKey = 'cum';
    $request->oauthToken = 'iure';
    $request->prettyPrint = false;
    $request->quotaUser = 'necessitatibus';
    $request->uploadType = 'ratione';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new DirectoryMembersDeleteSecurity();
    $requestSecurity->option1 = new DirectoryMembersDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->members->directoryMembersDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryMembersGet

Retrieves a group member's properties.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMembersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMembersGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMembersGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMembersGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMembersGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMembersGetSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryMembersGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptatum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aliquam';
    $request->fields = 'ad';
    $request->groupKey = 'repellat';
    $request->key = 'alias';
    $request->memberKey = 'corporis';
    $request->oauthToken = 'perspiciatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'nihil';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'voluptas';

    $requestSecurity = new DirectoryMembersGetSecurity();
    $requestSecurity->option1 = new DirectoryMembersGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->members->directoryMembersGet($request, $requestSecurity);

    if ($response->member !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryMembersHasMember

Checks whether the given user is a member of the group. Membership can be direct or nested, but if nested, the `memberKey` and `groupKey` must be entities in the same domain or an `Invalid input` error is returned. To check for nested memberships that include entities outside of the group's domain, use the [`checkTransitiveMembership()`](https://cloud.google.com/identity/docs/reference/rest/v1/groups.memberships/checkTransitiveMembership) method in the Cloud Identity Groups API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMembersHasMemberRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMembersHasMemberSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMembersHasMemberSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMembersHasMemberSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMembersHasMemberSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMembersHasMemberSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryMembersHasMemberRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolores';
    $request->fields = 'id';
    $request->groupKey = 'minima';
    $request->key = 'dolore';
    $request->memberKey = 'dolorum';
    $request->oauthToken = 'nesciunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'quae';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new DirectoryMembersHasMemberSecurity();
    $requestSecurity->option1 = new DirectoryMembersHasMemberSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->members->directoryMembersHasMember($request, $requestSecurity);

    if ($response->membersHasMember !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryMembersInsert

Adds a user to the specified group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMembersInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Member;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMembersInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMembersInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMembersInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryMembersInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->member = new Member();
    $request->member->deliverySettings = 'molestiae';
    $request->member->email = 'Ed89@yahoo.com';
    $request->member->etag = 'laudantium';
    $request->member->id = '65e7956f-9251-4a5a-9da6-60ff57bfaad4';
    $request->member->kind = 'voluptatibus';
    $request->member->role = 'molestias';
    $request->member->status = 'officiis';
    $request->member->type = 'sapiente';
    $request->accessToken = 'cumque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'rerum';
    $request->fields = 'tempora';
    $request->groupKey = 'quis';
    $request->key = 'inventore';
    $request->oauthToken = 'fugit';
    $request->prettyPrint = false;
    $request->quotaUser = 'cumque';
    $request->uploadType = 'quae';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new DirectoryMembersInsertSecurity();
    $requestSecurity->option1 = new DirectoryMembersInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->members->directoryMembersInsert($request, $requestSecurity);

    if ($response->member !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryMembersList

Retrieves a paginated list of all members in a group. This method times out after 60 minutes. For more information, see [Troubleshoot error codes](https://developers.google.com/admin-sdk/directory/v1/guides/troubleshoot-error-codes).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMembersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMembersListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMembersListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMembersListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMembersListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMembersListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryMembersListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eius';
    $request->fields = 'rem';
    $request->groupKey = 'at';
    $request->includeDerivedMembership = false;
    $request->key = 'impedit';
    $request->maxResults = 179410;
    $request->oauthToken = 'sapiente';
    $request->pageToken = 'eum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->roles = 'minima';
    $request->uploadType = 'beatae';
    $request->uploadProtocol = 'cupiditate';

    $requestSecurity = new DirectoryMembersListSecurity();
    $requestSecurity->option1 = new DirectoryMembersListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->members->directoryMembersList($request, $requestSecurity);

    if ($response->members !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryMembersPatch

Updates the membership properties of a user in the specified group. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMembersPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Member;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMembersPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMembersPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMembersPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryMembersPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->member = new Member();
    $request->member->deliverySettings = 'earum';
    $request->member->email = 'Triston93@hotmail.com';
    $request->member->etag = 'perspiciatis';
    $request->member->id = 'fe6c632c-a3ae-4d01-9799-6312fde04771';
    $request->member->kind = 'iusto';
    $request->member->role = 'esse';
    $request->member->status = 'praesentium';
    $request->member->type = 'maiores';
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'architecto';
    $request->fields = 'fugiat';
    $request->groupKey = 'doloremque';
    $request->key = 'dicta';
    $request->memberKey = 'odio';
    $request->oauthToken = 'tempora';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->uploadType = 'ex';
    $request->uploadProtocol = 'consectetur';

    $requestSecurity = new DirectoryMembersPatchSecurity();
    $requestSecurity->option1 = new DirectoryMembersPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->members->directoryMembersPatch($request, $requestSecurity);

    if ($response->member !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryMembersUpdate

Updates the membership of a user in the specified group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMembersUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Member;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMembersUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMembersUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMembersUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryMembersUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->member = new Member();
    $request->member->deliverySettings = 'ipsa';
    $request->member->email = 'Bradford_Hegmann39@hotmail.com';
    $request->member->etag = 'officia';
    $request->member->id = '660659a1-adea-4ab5-851d-6c645b08b618';
    $request->member->kind = 'omnis';
    $request->member->role = 'veritatis';
    $request->member->status = 'rerum';
    $request->member->type = 'est';
    $request->accessToken = 'culpa';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sapiente';
    $request->fields = 'officiis';
    $request->groupKey = 'architecto';
    $request->key = 'fuga';
    $request->memberKey = 'pariatur';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatem';
    $request->uploadType = 'alias';
    $request->uploadProtocol = 'deleniti';

    $requestSecurity = new DirectoryMembersUpdateSecurity();
    $requestSecurity->option1 = new DirectoryMembersUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->members->directoryMembersUpdate($request, $requestSecurity);

    if ($response->member !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
