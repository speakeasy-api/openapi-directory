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
    $request->accessToken = 'eveniet';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempore';
    $request->fields = 'quidem';
    $request->firewall = 'modi';
    $request->key = 'voluptates';
    $request->oauthToken = 'fugit';
    $request->prettyPrint = false;
    $request->project = 'eius';
    $request->quotaUser = 'sequi';
    $request->requestId = 'eligendi';
    $request->uploadType = 'asperiores';
    $request->uploadProtocol = 'esse';
    $request->userIp = 'blanditiis';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'repellat';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'animi';
    $request->fields = 'maiores';
    $request->firewall = 'itaque';
    $request->key = 'nulla';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->project = 'corporis';
    $request->quotaUser = 'velit';
    $request->uploadType = 'officiis';
    $request->uploadProtocol = 'enim';
    $request->userIp = 'officia';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->firewall = new Firewall();
    $request->firewall->allowed = [
        new FirewallAllowed(),
        new FirewallAllowed(),
    ];
    $request->firewall->creationTimestamp = 'repudiandae';
    $request->firewall->denied = [
        new FirewallDenied(),
    ];
    $request->firewall->description = 'officia';
    $request->firewall->destinationRanges = [
        'quasi',
        'blanditiis',
        'eius',
        'quisquam',
    ];
    $request->firewall->direction = FirewallDirectionEnum::EGRESS;
    $request->firewall->disabled = false;
    $request->firewall->enableLogging = false;
    $request->firewall->id = 'nobis';
    $request->firewall->kind = 'natus';
    $request->firewall->logConfig = new FirewallLogConfig();
    $request->firewall->logConfig->enable = false;
    $request->firewall->logConfig->metadata = FirewallLogConfigMetadataEnum::INCLUDE_ALL_METADATA;
    $request->firewall->name = 'Megan Kiehn';
    $request->firewall->network = 'corrupti';
    $request->firewall->priority = 227870;
    $request->firewall->selfLink = 'molestiae';
    $request->firewall->sourceRanges = [
        'laborum',
    ];
    $request->firewall->sourceServiceAccounts = [
        'perferendis',
        'necessitatibus',
    ];
    $request->firewall->sourceTags = [
        'molestias',
    ];
    $request->firewall->targetServiceAccounts = [
        'sunt',
        'maiores',
    ];
    $request->firewall->targetTags = [
        'odit',
    ];
    $request->accessToken = 'earum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsam';
    $request->fields = 'eaque';
    $request->key = 'exercitationem';
    $request->oauthToken = 'veniam';
    $request->prettyPrint = false;
    $request->project = 'nihil';
    $request->quotaUser = 'ad';
    $request->requestId = 'nisi';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'quis';
    $request->userIp = 'quibusdam';

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
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sit';
    $request->fields = 'quidem';
    $request->filter = 'repellendus';
    $request->key = 'perferendis';
    $request->maxResults = 660536;
    $request->oauthToken = 'sapiente';
    $request->orderBy = 'sed';
    $request->pageToken = 'possimus';
    $request->prettyPrint = false;
    $request->project = 'repellat';
    $request->quotaUser = 'repudiandae';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'adipisci';
    $request->userIp = 'pariatur';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->firewall1 = new Firewall();
    $request->firewall1->allowed = [
        new FirewallAllowed(),
        new FirewallAllowed(),
    ];
    $request->firewall1->creationTimestamp = 'voluptatibus';
    $request->firewall1->denied = [
        new FirewallDenied(),
        new FirewallDenied(),
    ];
    $request->firewall1->description = 'explicabo';
    $request->firewall1->destinationRanges = [
        'soluta',
        'dolorum',
        'velit',
        'earum',
    ];
    $request->firewall1->direction = FirewallDirectionEnum::INGRESS;
    $request->firewall1->disabled = false;
    $request->firewall1->enableLogging = false;
    $request->firewall1->id = 'error';
    $request->firewall1->kind = 'non';
    $request->firewall1->logConfig = new FirewallLogConfig();
    $request->firewall1->logConfig->enable = false;
    $request->firewall1->logConfig->metadata = FirewallLogConfigMetadataEnum::EXCLUDE_ALL_METADATA;
    $request->firewall1->name = 'Erick Pfeffer MD';
    $request->firewall1->network = 'corrupti';
    $request->firewall1->priority = 53733;
    $request->firewall1->selfLink = 'deserunt';
    $request->firewall1->sourceRanges = [
        'excepturi',
        'magni',
    ];
    $request->firewall1->sourceServiceAccounts = [
        'possimus',
        'dolor',
    ];
    $request->firewall1->sourceTags = [
        'sed',
        'accusamus',
        'optio',
    ];
    $request->firewall1->targetServiceAccounts = [
        'minus',
        'quo',
        'quos',
        'asperiores',
    ];
    $request->firewall1->targetTags = [
        'iste',
        'corporis',
        'accusantium',
    ];
    $request->accessToken = 'illo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'doloribus';
    $request->fields = 'nostrum';
    $request->firewallPathParameter = 'at';
    $request->key = 'possimus';
    $request->oauthToken = 'neque';
    $request->prettyPrint = false;
    $request->project = 'pariatur';
    $request->quotaUser = 'vel';
    $request->requestId = 'sapiente';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'quae';
    $request->userIp = 'quos';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'voluptates',
        'ad',
    ];
    $request->accessToken = 'aliquam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quas';
    $request->fields = 'consequuntur';
    $request->key = 'maiores';
    $request->oauthToken = 'inventore';
    $request->prettyPrint = false;
    $request->project = 'aliquid';
    $request->quotaUser = 'laudantium';
    $request->resource = 'est';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'aliquid';
    $request->userIp = 'consectetur';

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
        new FirewallAllowed(),
    ];
    $request->firewall1->creationTimestamp = 'voluptatum';
    $request->firewall1->denied = [
        new FirewallDenied(),
        new FirewallDenied(),
    ];
    $request->firewall1->description = 'adipisci';
    $request->firewall1->destinationRanges = [
        'tempora',
        'blanditiis',
        'numquam',
        'sequi',
    ];
    $request->firewall1->direction = FirewallDirectionEnum::INGRESS;
    $request->firewall1->disabled = false;
    $request->firewall1->enableLogging = false;
    $request->firewall1->id = 'sit';
    $request->firewall1->kind = 'rerum';
    $request->firewall1->logConfig = new FirewallLogConfig();
    $request->firewall1->logConfig->enable = false;
    $request->firewall1->logConfig->metadata = FirewallLogConfigMetadataEnum::EXCLUDE_ALL_METADATA;
    $request->firewall1->name = 'Milton Powlowski';
    $request->firewall1->network = 'deserunt';
    $request->firewall1->priority = 168926;
    $request->firewall1->selfLink = 'nihil';
    $request->firewall1->sourceRanges = [
        'animi',
        'commodi',
    ];
    $request->firewall1->sourceServiceAccounts = [
        'fuga',
    ];
    $request->firewall1->sourceTags = [
        'dolore',
    ];
    $request->firewall1->targetServiceAccounts = [
        'aliquam',
        'iste',
        'ullam',
        'eligendi',
    ];
    $request->firewall1->targetTags = [
        'voluptas',
        'occaecati',
        'unde',
        'illo',
    ];
    $request->accessToken = 'nihil';
    $request->alt = AltEnum::JSON;
    $request->callback = 'libero';
    $request->fields = 'ipsam';
    $request->firewallPathParameter = 'quasi';
    $request->key = 'cumque';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->project = 'harum';
    $request->quotaUser = 'facere';
    $request->requestId = 'facilis';
    $request->uploadType = 'beatae';
    $request->uploadProtocol = 'cumque';
    $request->userIp = 'delectus';

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
