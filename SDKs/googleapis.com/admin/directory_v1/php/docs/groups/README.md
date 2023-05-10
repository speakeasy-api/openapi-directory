# groups

### Available Operations

* [directoryGroupsAliasesDelete](#directorygroupsaliasesdelete) - Removes an alias.
* [directoryGroupsAliasesInsert](#directorygroupsaliasesinsert) - Adds an alias for the group.
* [directoryGroupsAliasesList](#directorygroupsaliaseslist) - Lists all aliases for a group.
* [directoryGroupsDelete](#directorygroupsdelete) - Deletes a group.
* [directoryGroupsGet](#directorygroupsget) - Retrieves a group's properties.
* [directoryGroupsInsert](#directorygroupsinsert) - Creates a group.
* [directoryGroupsList](#directorygroupslist) - Retrieves all groups of a domain or of a user given a userKey (paginated).
* [directoryGroupsPatch](#directorygroupspatch) - Updates a group's properties. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
* [directoryGroupsUpdate](#directorygroupsupdate) - Updates a group's properties.

## directoryGroupsAliasesDelete

Removes an alias.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryGroupsAliasesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryGroupsAliasesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryGroupsAliasesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'cum';
    $request->alias = 'commodi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'corporis';
    $request->fields = 'reiciendis';
    $request->groupKey = 'assumenda';
    $request->key = 'nemo';
    $request->oauthToken = 'recusandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->uploadType = 'aperiam';
    $request->uploadProtocol = 'cum';

    $requestSecurity = new DirectoryGroupsAliasesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groups->directoryGroupsAliasesDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryGroupsAliasesInsert

Adds an alias for the group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryGroupsAliasesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Alias;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryGroupsAliasesInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryGroupsAliasesInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->alias = new Alias();
    $request->alias->alias = 'in';
    $request->alias->etag = 'exercitationem';
    $request->alias->id = 'ed4f6fbe-e41f-4333-97fe-35b60eb1ea42';
    $request->alias->kind = 'voluptas';
    $request->alias->primaryEmail = 'voluptas';
    $request->accessToken = 'voluptas';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nobis';
    $request->fields = 'dolorum';
    $request->groupKey = 'adipisci';
    $request->key = 'minus';
    $request->oauthToken = 'dolores';
    $request->prettyPrint = false;
    $request->quotaUser = 'blanditiis';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'dolore';

    $requestSecurity = new DirectoryGroupsAliasesInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groups->directoryGroupsAliasesInsert($request, $requestSecurity);

    if ($response->alias !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryGroupsAliasesList

Lists all aliases for a group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryGroupsAliasesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryGroupsAliasesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryGroupsAliasesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryGroupsAliasesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryGroupsAliasesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'officiis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ullam';
    $request->fields = 'adipisci';
    $request->groupKey = 'cum';
    $request->key = 'blanditiis';
    $request->oauthToken = 'quas';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->uploadType = 'nesciunt';
    $request->uploadProtocol = 'culpa';

    $requestSecurity = new DirectoryGroupsAliasesListSecurity();
    $requestSecurity->option1 = new DirectoryGroupsAliasesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groups->directoryGroupsAliasesList($request, $requestSecurity);

    if ($response->aliases !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryGroupsDelete

Deletes a group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryGroupsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryGroupsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryGroupsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'hic';
    $request->fields = 'exercitationem';
    $request->groupKey = 'nobis';
    $request->key = 'sit';
    $request->oauthToken = 'rerum';
    $request->prettyPrint = false;
    $request->quotaUser = 'sed';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'explicabo';

    $requestSecurity = new DirectoryGroupsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groups->directoryGroupsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryGroupsGet

Retrieves a group's properties.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryGroupsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryGroupsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryGroupsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryGroupsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryGroupsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'facilis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'expedita';
    $request->fields = 'ab';
    $request->groupKey = 'iste';
    $request->key = 'dolore';
    $request->oauthToken = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'sed';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'commodi';

    $requestSecurity = new DirectoryGroupsGetSecurity();
    $requestSecurity->option1 = new DirectoryGroupsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groups->directoryGroupsGet($request, $requestSecurity);

    if ($response->group !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryGroupsInsert

Creates a group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryGroupsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Group;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryGroupsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryGroupsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->group = new Group();
    $request->group->adminCreated = false;
    $request->group->aliases = [
        'voluptas',
    ];
    $request->group->description = 'unde';
    $request->group->directMembersCount = 'architecto';
    $request->group->email = 'Vickie96@yahoo.com';
    $request->group->etag = 'perferendis';
    $request->group->id = '8f4294e3-698f-4447-b603-e8b445e80ca5';
    $request->group->kind = 'minima';
    $request->group->name = 'Van Stoltenberg PhD';
    $request->group->nonEditableAliases = [
        'veniam',
        'in',
    ];
    $request->accessToken = 'officiis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'laudantium';
    $request->fields = 'exercitationem';
    $request->key = 'praesentium';
    $request->oauthToken = 'cum';
    $request->prettyPrint = false;
    $request->quotaUser = 'laboriosam';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'voluptatum';

    $requestSecurity = new DirectoryGroupsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groups->directoryGroupsInsert($request, $requestSecurity);

    if ($response->group !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryGroupsList

Retrieves all groups of a domain or of a user given a userKey (paginated).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryGroupsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryGroupsListOrderByEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryGroupsListSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryGroupsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryGroupsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryGroupsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryGroupsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'hic';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'debitis';
    $request->customer = 'neque';
    $request->domain = 'dolorum';
    $request->fields = 'nostrum';
    $request->key = 'officia';
    $request->maxResults = 676243;
    $request->oauthToken = 'corrupti';
    $request->orderBy = DirectoryGroupsListOrderByEnum::EMAIL;
    $request->pageToken = 'accusamus';
    $request->prettyPrint = false;
    $request->query = 'tempora';
    $request->quotaUser = 'atque';
    $request->sortOrder = DirectoryGroupsListSortOrderEnum::ASCENDING;
    $request->uploadType = 'ut';
    $request->uploadProtocol = 'fugiat';
    $request->userKey = 'voluptatem';

    $requestSecurity = new DirectoryGroupsListSecurity();
    $requestSecurity->option1 = new DirectoryGroupsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groups->directoryGroupsList($request, $requestSecurity);

    if ($response->groups !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryGroupsPatch

Updates a group's properties. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryGroupsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Group;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryGroupsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryGroupsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->group = new Group();
    $request->group->adminCreated = false;
    $request->group->aliases = [
        'magnam',
        'consequatur',
        'esse',
    ];
    $request->group->description = 'ipsam';
    $request->group->directMembersCount = 'sit';
    $request->group->email = 'Keara.Walker@yahoo.com';
    $request->group->etag = 'blanditiis';
    $request->group->id = '62065e90-4f3b-4119-8b8a-bf603a79f9df';
    $request->group->kind = 'voluptates';
    $request->group->name = 'Monique Predovic';
    $request->group->nonEditableAliases = [
        'praesentium',
        'mollitia',
        'veniam',
    ];
    $request->accessToken = 'voluptatem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'repudiandae';
    $request->fields = 'quasi';
    $request->groupKey = 'atque';
    $request->key = 'reprehenderit';
    $request->oauthToken = 'asperiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new DirectoryGroupsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groups->directoryGroupsPatch($request, $requestSecurity);

    if ($response->group !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryGroupsUpdate

Updates a group's properties.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryGroupsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Group;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryGroupsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryGroupsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->group = new Group();
    $request->group->adminCreated = false;
    $request->group->aliases = [
        'esse',
    ];
    $request->group->description = 'amet';
    $request->group->directMembersCount = 'assumenda';
    $request->group->email = 'Kameron_Mueller88@yahoo.com';
    $request->group->etag = 'natus';
    $request->group->id = '526f8d98-6e88-41ea-94f0-e1012563f94e';
    $request->group->kind = 'consequuntur';
    $request->group->name = 'Frankie Metz';
    $request->group->nonEditableAliases = [
        'occaecati',
        'consequuntur',
        'fugit',
        'id',
    ];
    $request->accessToken = 'quis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'error';
    $request->fields = 'illo';
    $request->groupKey = 'corporis';
    $request->key = 'quidem';
    $request->oauthToken = 'eveniet';
    $request->prettyPrint = false;
    $request->quotaUser = 'non';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'doloremque';

    $requestSecurity = new DirectoryGroupsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groups->directoryGroupsUpdate($request, $requestSecurity);

    if ($response->group !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
