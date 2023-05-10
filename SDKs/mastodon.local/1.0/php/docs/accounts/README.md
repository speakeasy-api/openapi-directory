# accounts

### Available Operations

* [getApiV1AccountsRelationships](#getapiv1accountsrelationships) - Sets a private note on a user.
* [getApiV1AccountsSearch](#getapiv1accountssearch) - Search for matching accounts by username or display name.
* [getApiV1AccountsVerifyCredentials](#getapiv1accountsverifycredentials) - Test to make sure that the user token works.
* [getApiV1AccountsId](#getapiv1accountsid)
* [getApiV1AccountsIdFeaturedTags](#getapiv1accountsidfeaturedtags) - Tags featured by this account.
* [getApiV1AccountsIdFollowers](#getapiv1accountsidfollowers) - Accounts which follow the given account, if network is not hidden by the account owner.
* [getApiV1AccountsIdFollowing](#getapiv1accountsidfollowing) - Accounts which the given account is following, if network is not hidden by the account owner.
* [getApiV1AccountsIdIdentityProofs](#getapiv1accountsididentityproofs) - Array of IdentityProof
* [getApiV1AccountsIdLists](#getapiv1accountsidlists) - User lists that you have added this account to.
* [getApiV1AccountsIdStatuses](#getapiv1accountsidstatuses) - Statuses posted to the given account.
* [patchApiV1AccountsUpdateCredentials](#patchapiv1accountsupdatecredentials) - Update the user's display and preferences.
* [postApiV1Accounts](#postapiv1accounts) - Creates a user and account records. Returns an account access token for the app that initiated the request. The app should save this token for later, and should wait for the user to confirm their account by clicking a link in their email inbox.
* [postApiV1AccountsIdBlock](#postapiv1accountsidblock) - Block the given account. Clients should filter statuses from this account if received (e.g. due to a boost in the Home timeline).
* [postApiV1AccountsIdFollow](#postapiv1accountsidfollow) - Follow the given account. Can also be used to update whether to show reblogs or enable notifications.
* [postApiV1AccountsIdMute](#postapiv1accountsidmute) - Mute the given account. Clients should filter statuses and notifications from this account, if received (e.g. due to a boost in the Home timeline).
* [postApiV1AccountsIdNote](#postapiv1accountsidnote) - Sets a private note on a user.
* [postApiV1AccountsIdPin](#postapiv1accountsidpin) - Add the given account to the user's featured profiles. (Featured profiles are currently shown on the user's own public profile.)
* [postApiV1AccountsIdUnblock](#postapiv1accountsidunblock) - Block the given account. Clients should filter statuses from this account if received (e.g. due to a boost in the Home timeline).
* [postApiV1AccountsIdUnfollow](#postapiv1accountsidunfollow) - Unfollow the given account.
* [postApiV1AccountsIdUnmute](#postapiv1accountsidunmute) - Unmute the given account.
* [postApiV1AccountsIdUnpin](#postapiv1accountsidunpin) - Remove the given account from the user's featured profiles.

## getApiV1AccountsRelationships

Sets a private note on a user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1AccountsRelationshipsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1AccountsRelationshipsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1AccountsRelationshipsRequest();
    $request->id = [
        'dolorem',
        'modi',
    ];

    $requestSecurity = new GetApiV1AccountsRelationshipsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->accounts->getApiV1AccountsRelationships($request, $requestSecurity);

    if ($response->relationships !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1AccountsSearch

Search for matching accounts by username or display name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1AccountsSearchRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1AccountsSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1AccountsSearchRequest();
    $request->following = false;
    $request->limit = 59383;
    $request->q = 'sint';
    $request->resolve = 'vero';

    $requestSecurity = new GetApiV1AccountsSearchSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->accounts->getApiV1AccountsSearch($request, $requestSecurity);

    if ($response->accounts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1AccountsVerifyCredentials

Test to make sure that the user token works.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1AccountsVerifyCredentialsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetApiV1AccountsVerifyCredentialsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->accounts->getApiV1AccountsVerifyCredentials($requestSecurity);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1AccountsId

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1AccountsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1AccountsIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1AccountsIdRequest();
    $request->id = '3eb1e5a2-b12e-4b07-b116-db99545fc95f';

    $requestSecurity = new GetApiV1AccountsIdSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->accounts->getApiV1AccountsId($request, $requestSecurity);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1AccountsIdFeaturedTags

Tags featured by this account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1AccountsIdFeaturedTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1AccountsIdFeaturedTagsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1AccountsIdFeaturedTagsRequest();
    $request->id = 'a88970e1-89db-4b30-bcb3-3ea055b197cd';

    $requestSecurity = new GetApiV1AccountsIdFeaturedTagsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->accounts->getApiV1AccountsIdFeaturedTags($request, $requestSecurity);

    if ($response->featuredTags !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1AccountsIdFollowers

Accounts which follow the given account, if network is not hidden by the account owner.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1AccountsIdFollowersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1AccountsIdFollowersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1AccountsIdFollowersRequest();
    $request->id = '44e2f52d-82d3-4513-bb6f-48b656bcdb35';
    $request->limit = 973819;
    $request->maxId = 'voluptatibus';
    $request->sinceId = 'consequuntur';

    $requestSecurity = new GetApiV1AccountsIdFollowersSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->accounts->getApiV1AccountsIdFollowers($request, $requestSecurity);

    if ($response->accounts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1AccountsIdFollowing

Accounts which the given account is following, if network is not hidden by the account owner.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1AccountsIdFollowingRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1AccountsIdFollowingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1AccountsIdFollowingRequest();
    $request->id = 'e4b27537-a8cd-49e7-b19c-177d525f77b1';
    $request->limit = 69182;
    $request->maxId = 'incidunt';
    $request->sinceId = 'accusamus';

    $requestSecurity = new GetApiV1AccountsIdFollowingSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->accounts->getApiV1AccountsIdFollowing($request, $requestSecurity);

    if ($response->accounts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1AccountsIdIdentityProofs

Array of IdentityProof

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1AccountsIdIdentityProofsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1AccountsIdIdentityProofsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1AccountsIdIdentityProofsRequest();
    $request->id = 'eb52ff78-5fc3-4781-8d4c-98e0c2bb89eb';

    $requestSecurity = new GetApiV1AccountsIdIdentityProofsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->accounts->getApiV1AccountsIdIdentityProofs($request, $requestSecurity);

    if ($response->identityProofs !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1AccountsIdLists

User lists that you have added this account to.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1AccountsIdListsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1AccountsIdListsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1AccountsIdListsRequest();
    $request->id = '75dad636-c600-4503-98bb-31180f739ae9';

    $requestSecurity = new GetApiV1AccountsIdListsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->accounts->getApiV1AccountsIdLists($request, $requestSecurity);

    if ($response->lists !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1AccountsIdStatuses

Statuses posted to the given account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1AccountsIdStatusesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1AccountsIdStatusesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1AccountsIdStatusesRequest();
    $request->id = 'e057eb80-9e28-4103-b1f3-981d4c700b60';

    $requestSecurity = new GetApiV1AccountsIdStatusesSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->accounts->getApiV1AccountsIdStatuses($request, $requestSecurity);

    if ($response->statuses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchApiV1AccountsUpdateCredentials

Update the user's display and preferences.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchApiV1AccountsUpdateCredentialsSecurity;

$sdk = SDK::builder()
    ->build();

try {
'dignissimos'

    $requestSecurity = new PatchApiV1AccountsUpdateCredentialsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->accounts->patchApiV1AccountsUpdateCredentials($request, $requestSecurity);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1Accounts

Creates a user and account records. Returns an account access token for the app that initiated the request. The app should save this token for later, and should wait for the user to confirm their account by clicking a link in their email inbox.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1AccountsSecurity;

$sdk = SDK::builder()
    ->build();

try {
'repellat'

    $requestSecurity = new PostApiV1AccountsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->accounts->postApiV1Accounts($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1AccountsIdBlock

Block the given account. Clients should filter statuses from this account if received (e.g. due to a boost in the Home timeline).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1AccountsIdBlockRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1AccountsIdBlockSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV1AccountsIdBlockRequest();
    $request->id = '3c93c73b-9da3-4f2c-ada7-e23f2257411f';

    $requestSecurity = new PostApiV1AccountsIdBlockSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->accounts->postApiV1AccountsIdBlock($request, $requestSecurity);

    if ($response->relationship !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1AccountsIdFollow

Follow the given account. Can also be used to update whether to show reblogs or enable notifications.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1AccountsIdFollowRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1AccountsIdFollowSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV1AccountsIdFollowRequest();
    $request->requestBody = 'deserunt';
    $request->id = 'f4b7544e-472e-4802-857a-5b40463a7d57';

    $requestSecurity = new PostApiV1AccountsIdFollowSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->accounts->postApiV1AccountsIdFollow($request, $requestSecurity);

    if ($response->relationship !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1AccountsIdMute

Mute the given account. Clients should filter statuses and notifications from this account, if received (e.g. due to a boost in the Home timeline).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1AccountsIdMuteRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1AccountsIdMuteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV1AccountsIdMuteRequest();
    $request->requestBody = 'veniam';
    $request->id = 'f1400e76-4ad7-4334-ac1b-781b36a08088';

    $requestSecurity = new PostApiV1AccountsIdMuteSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->accounts->postApiV1AccountsIdMute($request, $requestSecurity);

    if ($response->relationship !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1AccountsIdNote

Sets a private note on a user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1AccountsIdNoteRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1AccountsIdNoteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV1AccountsIdNoteRequest();
    $request->requestBody = 'repellendus';
    $request->id = '100efada-200e-4f04-a2eb-2164cf9ab836';

    $requestSecurity = new PostApiV1AccountsIdNoteSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->accounts->postApiV1AccountsIdNote($request, $requestSecurity);

    if ($response->relationship !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1AccountsIdPin

Add the given account to the user's featured profiles. (Featured profiles are currently shown on the user's own public profile.)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1AccountsIdPinRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1AccountsIdPinSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV1AccountsIdPinRequest();
    $request->id = '6c723ffd-a9e0-46be-a482-5c1fc0e115c8';

    $requestSecurity = new PostApiV1AccountsIdPinSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->accounts->postApiV1AccountsIdPin($request, $requestSecurity);

    if ($response->relationship !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1AccountsIdUnblock

Block the given account. Clients should filter statuses from this account if received (e.g. due to a boost in the Home timeline).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1AccountsIdUnblockRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1AccountsIdUnblockSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV1AccountsIdUnblockRequest();
    $request->id = '0bff9185-44ec-442d-afcc-e8f1977773e6';

    $requestSecurity = new PostApiV1AccountsIdUnblockSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->accounts->postApiV1AccountsIdUnblock($request, $requestSecurity);

    if ($response->relationship !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1AccountsIdUnfollow

Unfollow the given account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1AccountsIdUnfollowRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1AccountsIdUnfollowSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV1AccountsIdUnfollowRequest();
    $request->id = '3562a7b4-08f0-45e3-948f-daf313a1f5fd';

    $requestSecurity = new PostApiV1AccountsIdUnfollowSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->accounts->postApiV1AccountsIdUnfollow($request, $requestSecurity);

    if ($response->relationship !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1AccountsIdUnmute

Unmute the given account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1AccountsIdUnmuteRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1AccountsIdUnmuteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV1AccountsIdUnmuteRequest();
    $request->id = '94259c0b-36f2-45ea-944f-3b756c11f6c3';

    $requestSecurity = new PostApiV1AccountsIdUnmuteSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->accounts->postApiV1AccountsIdUnmute($request, $requestSecurity);

    if ($response->relationship !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1AccountsIdUnpin

Remove the given account from the user's featured profiles.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1AccountsIdUnpinRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1AccountsIdUnpinSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV1AccountsIdUnpinRequest();
    $request->id = '7a512624-3835-4bbc-85a2-3a45cefc5fde';

    $requestSecurity = new PostApiV1AccountsIdUnpinSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->accounts->postApiV1AccountsIdUnpin($request, $requestSecurity);

    if ($response->relationship !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
