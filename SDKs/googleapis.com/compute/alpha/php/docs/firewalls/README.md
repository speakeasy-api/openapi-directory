# firewalls

### Available Operations

* [computeFirewallsDelete](#computefirewallsdelete) - Deletes the specified firewall.
* [computeFirewallsGet](#computefirewallsget) - Returns the specified firewall.
* [computeFirewallsInsert](#computefirewallsinsert) - Creates a firewall rule in the specified project using the data included in the request.
* [computeFirewallsList](#computefirewallslist) - Retrieves the list of firewall rules available to the specified project.
* [computeFirewallsPatch](#computefirewallspatch) - Updates the specified firewall rule with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeFirewallsTestIamPermissions](#computefirewallstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeFirewallsUpdate](#computefirewallsupdate) - Updates the specified firewall rule with the data included in the request. Note that all fields will be updated if using PUT, even fields that are not specified. To update individual fields, please use PATCH instead.

## computeFirewallsDelete

Deletes the specified firewall.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeFirewallsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'voluptatum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nihil';
    $request->fields = 'atque';
    $request->firewall = 'rerum';
    $request->key = 'deserunt';
    $request->oauthToken = 'atque';
    $request->prettyPrint = false;
    $request->project = 'nostrum';
    $request->quotaUser = 'atque';
    $request->requestId = 'architecto';
    $request->uploadType = 'est';
    $request->uploadProtocol = 'enim';
    $request->userIp = 'rem';

    $requestSecurity = new ComputeFirewallsDeleteSecurity();
    $requestSecurity->option1 = new ComputeFirewallsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->firewalls->computeFirewallsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeFirewallsGet

Returns the specified firewall.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeFirewallsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'placeat';
    $request->fields = 'enim';
    $request->firewall = 'labore';
    $request->key = 'sapiente';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->project = 'delectus';
    $request->quotaUser = 'officia';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'cumque';
    $request->userIp = 'natus';

    $requestSecurity = new ComputeFirewallsGetSecurity();
    $requestSecurity->option1 = new ComputeFirewallsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->firewalls->computeFirewallsGet($request, $requestSecurity);

    if ($response->firewall !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeFirewallsInsert

Creates a firewall rule in the specified project using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Firewall;
use \OpenAPI\OpenAPI\Models\Shared\FirewallAllowed;
use \OpenAPI\OpenAPI\Models\Shared\FirewallDenied;
use \OpenAPI\OpenAPI\Models\Shared\FirewallDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\FirewallLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\FirewallLogConfigMetadataEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeFirewallsInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->firewall = new Firewall();
    $request->firewall->allowed = [
        new FirewallAllowed(),
        new FirewallAllowed(),
        new FirewallAllowed(),
        new FirewallAllowed(),
    ];
    $request->firewall->creationTimestamp = 'quia';
    $request->firewall->denied = [
        new FirewallDenied(),
        new FirewallDenied(),
        new FirewallDenied(),
        new FirewallDenied(),
    ];
    $request->firewall->description = 'mollitia';
    $request->firewall->destinationRanges = [
        'quis',
        'enim',
        'eum',
        'nemo',
    ];
    $request->firewall->direction = FirewallDirectionEnum::INGRESS;
    $request->firewall->disabled = false;
    $request->firewall->enableLogging = false;
    $request->firewall->id = 'nesciunt';
    $request->firewall->kind = 'sit';
    $request->firewall->logConfig = new FirewallLogConfig();
    $request->firewall->logConfig->enable = false;
    $request->firewall->logConfig->metadata = FirewallLogConfigMetadataEnum::EXCLUDE_ALL_METADATA;
    $request->firewall->name = 'Emmett Walsh';
    $request->firewall->network = 'dicta';
    $request->firewall->priority = 144179;
    $request->firewall->selfLink = 'sit';
    $request->firewall->selfLinkWithId = 'aliquid';
    $request->firewall->sourceRanges = [
        'sed',
        'deleniti',
        'sunt',
        'nesciunt',
    ];
    $request->firewall->sourceServiceAccounts = [
        'laborum',
        'aliquam',
        'deserunt',
        'modi',
    ];
    $request->firewall->sourceTags = [
        'impedit',
    ];
    $request->firewall->targetServiceAccounts = [
        'voluptatum',
        'ipsa',
    ];
    $request->firewall->targetTags = [
        'dolorem',
        'repellat',
        'aspernatur',
        'inventore',
    ];
    $request->accessToken = 'sequi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fuga';
    $request->fields = 'hic';
    $request->key = 'eaque';
    $request->oauthToken = 'dolorem';
    $request->prettyPrint = false;
    $request->project = 'architecto';
    $request->quotaUser = 'aperiam';
    $request->requestId = 'aspernatur';
    $request->uploadType = 'nulla';
    $request->uploadProtocol = 'enim';
    $request->userIp = 'illo';

    $requestSecurity = new ComputeFirewallsInsertSecurity();
    $requestSecurity->option1 = new ComputeFirewallsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->firewalls->computeFirewallsInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeFirewallsList

Retrieves the list of firewall rules available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeFirewallsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'optio';
    $request->fields = 'nobis';
    $request->filter = 'ex';
    $request->key = 'repellat';
    $request->maxResults = 65118;
    $request->oauthToken = 'deleniti';
    $request->orderBy = 'expedita';
    $request->pageToken = 'hic';
    $request->prettyPrint = false;
    $request->project = 'excepturi';
    $request->quotaUser = 'aliquid';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'beatae';
    $request->userIp = 'similique';

    $requestSecurity = new ComputeFirewallsListSecurity();
    $requestSecurity->option1 = new ComputeFirewallsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->firewalls->computeFirewallsList($request, $requestSecurity);

    if ($response->firewallList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeFirewallsPatch

Updates the specified firewall rule with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Firewall;
use \OpenAPI\OpenAPI\Models\Shared\FirewallAllowed;
use \OpenAPI\OpenAPI\Models\Shared\FirewallDenied;
use \OpenAPI\OpenAPI\Models\Shared\FirewallDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\FirewallLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\FirewallLogConfigMetadataEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeFirewallsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->firewall1 = new Firewall();
    $request->firewall1->allowed = [
        new FirewallAllowed(),
        new FirewallAllowed(),
        new FirewallAllowed(),
    ];
    $request->firewall1->creationTimestamp = 'dolore';
    $request->firewall1->denied = [
        new FirewallDenied(),
        new FirewallDenied(),
        new FirewallDenied(),
        new FirewallDenied(),
    ];
    $request->firewall1->description = 'dignissimos';
    $request->firewall1->destinationRanges = [
        'animi',
        'laudantium',
    ];
    $request->firewall1->direction = FirewallDirectionEnum::EGRESS;
    $request->firewall1->disabled = false;
    $request->firewall1->enableLogging = false;
    $request->firewall1->id = 'eveniet';
    $request->firewall1->kind = 'earum';
    $request->firewall1->logConfig = new FirewallLogConfig();
    $request->firewall1->logConfig->enable = false;
    $request->firewall1->logConfig->metadata = FirewallLogConfigMetadataEnum::EXCLUDE_ALL_METADATA;
    $request->firewall1->name = 'Ray Prosacco';
    $request->firewall1->network = 'ipsam';
    $request->firewall1->priority = 131687;
    $request->firewall1->selfLink = 'impedit';
    $request->firewall1->selfLinkWithId = 'aliquid';
    $request->firewall1->sourceRanges = [
        'facilis',
        'ipsum',
    ];
    $request->firewall1->sourceServiceAccounts = [
        'quaerat',
        'architecto',
    ];
    $request->firewall1->sourceTags = [
        'eveniet',
        'dolor',
        'expedita',
    ];
    $request->firewall1->targetServiceAccounts = [
        'iste',
        'illo',
        'minus',
    ];
    $request->firewall1->targetTags = [
        'temporibus',
        'sint',
        'iusto',
    ];
    $request->accessToken = 'enim';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aperiam';
    $request->fields = 'voluptates';
    $request->firewallPathParameter = 'laudantium';
    $request->key = 'tempora';
    $request->oauthToken = 'quae';
    $request->prettyPrint = false;
    $request->project = 'omnis';
    $request->quotaUser = 'illum';
    $request->requestId = 'rem';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'deleniti';
    $request->userIp = 'modi';

    $requestSecurity = new ComputeFirewallsPatchSecurity();
    $requestSecurity->option1 = new ComputeFirewallsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->firewalls->computeFirewallsPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeFirewallsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallsTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallsTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallsTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallsTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeFirewallsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'aliquam',
    ];
    $request->accessToken = 'labore';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sequi';
    $request->fields = 'saepe';
    $request->key = 'consequatur';
    $request->oauthToken = 'esse';
    $request->prettyPrint = false;
    $request->project = 'debitis';
    $request->quotaUser = 'facere';
    $request->resource = 'quisquam';
    $request->uploadType = 'cumque';
    $request->uploadProtocol = 'aliquam';
    $request->userIp = 'dolorum';

    $requestSecurity = new ComputeFirewallsTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeFirewallsTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->firewalls->computeFirewallsTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeFirewallsUpdate

Updates the specified firewall rule with the data included in the request. Note that all fields will be updated if using PUT, even fields that are not specified. To update individual fields, please use PATCH instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Firewall;
use \OpenAPI\OpenAPI\Models\Shared\FirewallAllowed;
use \OpenAPI\OpenAPI\Models\Shared\FirewallDenied;
use \OpenAPI\OpenAPI\Models\Shared\FirewallDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\FirewallLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\FirewallLogConfigMetadataEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallsUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallsUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallsUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeFirewallsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->firewall1 = new Firewall();
    $request->firewall1->allowed = [
        new FirewallAllowed(),
        new FirewallAllowed(),
    ];
    $request->firewall1->creationTimestamp = 'reiciendis';
    $request->firewall1->denied = [
        new FirewallDenied(),
    ];
    $request->firewall1->description = 'porro';
    $request->firewall1->destinationRanges = [
        'nobis',
        'quibusdam',
        'omnis',
    ];
    $request->firewall1->direction = FirewallDirectionEnum::EGRESS;
    $request->firewall1->disabled = false;
    $request->firewall1->enableLogging = false;
    $request->firewall1->id = 'ipsam';
    $request->firewall1->kind = 'officia';
    $request->firewall1->logConfig = new FirewallLogConfig();
    $request->firewall1->logConfig->enable = false;
    $request->firewall1->logConfig->metadata = FirewallLogConfigMetadataEnum::INCLUDE_ALL_METADATA;
    $request->firewall1->name = 'Mrs. Rachel Treutel';
    $request->firewall1->network = 'molestiae';
    $request->firewall1->priority = 154130;
    $request->firewall1->selfLink = 'laudantium';
    $request->firewall1->selfLinkWithId = 'sed';
    $request->firewall1->sourceRanges = [
        'iusto',
    ];
    $request->firewall1->sourceServiceAccounts = [
        'eos',
        'repellendus',
        'nesciunt',
    ];
    $request->firewall1->sourceTags = [
        'sint',
    ];
    $request->firewall1->targetServiceAccounts = [
        'esse',
        'accusantium',
    ];
    $request->firewall1->targetTags = [
        'sapiente',
        'quam',
        'est',
    ];
    $request->accessToken = 'aliquam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'culpa';
    $request->fields = 'voluptatum';
    $request->firewallPathParameter = 'iusto';
    $request->key = 'quod';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->project = 'voluptas';
    $request->quotaUser = 'non';
    $request->requestId = 'ullam';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'voluptas';
    $request->userIp = 'doloribus';

    $requestSecurity = new ComputeFirewallsUpdateSecurity();
    $requestSecurity->option1 = new ComputeFirewallsUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->firewalls->computeFirewallsUpdate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
