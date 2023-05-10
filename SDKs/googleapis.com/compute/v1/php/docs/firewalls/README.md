# firewalls

### Available Operations

* [computeFirewallsDelete](#computefirewallsdelete) - Deletes the specified firewall.
* [computeFirewallsGet](#computefirewallsget) - Returns the specified firewall.
* [computeFirewallsInsert](#computefirewallsinsert) - Creates a firewall rule in the specified project using the data included in the request.
* [computeFirewallsList](#computefirewallslist) - Retrieves the list of firewall rules available to the specified project.
* [computeFirewallsPatch](#computefirewallspatch) - Updates the specified firewall rule with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
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
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'consequuntur';
    $request->fields = 'veniam';
    $request->firewall = 'debitis';
    $request->key = 'officia';
    $request->oauthToken = 'sint';
    $request->prettyPrint = false;
    $request->project = 'ut';
    $request->quotaUser = 'numquam';
    $request->requestId = 'tenetur';
    $request->uploadType = 'adipisci';
    $request->uploadProtocol = 'libero';
    $request->userIp = 'in';

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
    $request->accessToken = 'ex';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ab';
    $request->fields = 'beatae';
    $request->firewall = 'hic';
    $request->key = 'nisi';
    $request->oauthToken = 'quisquam';
    $request->prettyPrint = false;
    $request->project = 'dolor';
    $request->quotaUser = 'ducimus';
    $request->uploadType = 'fuga';
    $request->uploadProtocol = 'minima';
    $request->userIp = 'architecto';

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
    ];
    $request->firewall->creationTimestamp = 'magni';
    $request->firewall->denied = [
        new FirewallDenied(),
        new FirewallDenied(),
    ];
    $request->firewall->description = 'adipisci';
    $request->firewall->destinationRanges = [
        'dolor',
        'exercitationem',
        'expedita',
    ];
    $request->firewall->direction = FirewallDirectionEnum::INGRESS;
    $request->firewall->disabled = false;
    $request->firewall->id = 'impedit';
    $request->firewall->kind = 'sit';
    $request->firewall->logConfig = new FirewallLogConfig();
    $request->firewall->logConfig->enable = false;
    $request->firewall->logConfig->metadata = FirewallLogConfigMetadataEnum::EXCLUDE_ALL_METADATA;
    $request->firewall->name = 'Eugene Feeney';
    $request->firewall->network = 'veniam';
    $request->firewall->priority = 800256;
    $request->firewall->selfLink = 'itaque';
    $request->firewall->sourceRanges = [
        'quisquam',
        'enim',
        'doloribus',
        'assumenda',
    ];
    $request->firewall->sourceServiceAccounts = [
        'architecto',
        'alias',
        'culpa',
        'ipsa',
    ];
    $request->firewall->sourceTags = [
        'necessitatibus',
        'quia',
        'dicta',
        'vel',
    ];
    $request->firewall->targetServiceAccounts = [
        'debitis',
        'ullam',
        'architecto',
    ];
    $request->firewall->targetTags = [
        'perferendis',
    ];
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'cumque';
    $request->fields = 'iure';
    $request->key = 'quibusdam';
    $request->oauthToken = 'quod';
    $request->prettyPrint = false;
    $request->project = 'nemo';
    $request->quotaUser = 'recusandae';
    $request->requestId = 'velit';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'dignissimos';
    $request->userIp = 'laboriosam';

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
    $request->accessToken = 'odio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'provident';
    $request->fields = 'cum';
    $request->filter = 'doloribus';
    $request->key = 'facilis';
    $request->maxResults = 697330;
    $request->oauthToken = 'itaque';
    $request->orderBy = 'laboriosam';
    $request->pageToken = 'unde';
    $request->prettyPrint = false;
    $request->project = 'modi';
    $request->quotaUser = 'perspiciatis';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'cum';
    $request->userIp = 'aspernatur';

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
        new FirewallAllowed(),
    ];
    $request->firewall1->creationTimestamp = 'incidunt';
    $request->firewall1->denied = [
        new FirewallDenied(),
        new FirewallDenied(),
        new FirewallDenied(),
        new FirewallDenied(),
    ];
    $request->firewall1->description = 'quod';
    $request->firewall1->destinationRanges = [
        'saepe',
        'autem',
        'quo',
    ];
    $request->firewall1->direction = FirewallDirectionEnum::EGRESS;
    $request->firewall1->disabled = false;
    $request->firewall1->id = 'illum';
    $request->firewall1->kind = 'nemo';
    $request->firewall1->logConfig = new FirewallLogConfig();
    $request->firewall1->logConfig->enable = false;
    $request->firewall1->logConfig->metadata = FirewallLogConfigMetadataEnum::INCLUDE_ALL_METADATA;
    $request->firewall1->name = 'Melvin O'Conner';
    $request->firewall1->network = 'distinctio';
    $request->firewall1->priority = 866861;
    $request->firewall1->selfLink = 'ad';
    $request->firewall1->sourceRanges = [
        'laborum',
        'eveniet',
        'laborum',
        'incidunt',
    ];
    $request->firewall1->sourceServiceAccounts = [
        'ipsam',
        'alias',
        'suscipit',
        'deserunt',
    ];
    $request->firewall1->sourceTags = [
        'laborum',
        'est',
        'occaecati',
    ];
    $request->firewall1->targetServiceAccounts = [
        'quo',
        'perferendis',
    ];
    $request->firewall1->targetTags = [
        'aliquid',
    ];
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eligendi';
    $request->fields = 'hic';
    $request->firewallPathParameter = 'nostrum';
    $request->key = 'officiis';
    $request->oauthToken = 'unde';
    $request->prettyPrint = false;
    $request->project = 'nulla';
    $request->quotaUser = 'error';
    $request->requestId = 'mollitia';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'nostrum';
    $request->userIp = 'esse';

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
    $request->firewall1->creationTimestamp = 'facere';
    $request->firewall1->denied = [
        new FirewallDenied(),
        new FirewallDenied(),
        new FirewallDenied(),
        new FirewallDenied(),
    ];
    $request->firewall1->description = 'quasi';
    $request->firewall1->destinationRanges = [
        'quod',
        'laboriosam',
        'doloremque',
    ];
    $request->firewall1->direction = FirewallDirectionEnum::EGRESS;
    $request->firewall1->disabled = false;
    $request->firewall1->id = 'facere';
    $request->firewall1->kind = 'necessitatibus';
    $request->firewall1->logConfig = new FirewallLogConfig();
    $request->firewall1->logConfig->enable = false;
    $request->firewall1->logConfig->metadata = FirewallLogConfigMetadataEnum::INCLUDE_ALL_METADATA;
    $request->firewall1->name = 'Jessica Brakus';
    $request->firewall1->network = 'blanditiis';
    $request->firewall1->priority = 60892;
    $request->firewall1->selfLink = 'magni';
    $request->firewall1->sourceRanges = [
        'sed',
        'necessitatibus',
        'impedit',
        'ipsa',
    ];
    $request->firewall1->sourceServiceAccounts = [
        'a',
        'maiores',
        'laudantium',
    ];
    $request->firewall1->sourceTags = [
        'alias',
        'asperiores',
        'rem',
        'dicta',
    ];
    $request->firewall1->targetServiceAccounts = [
        'earum',
        'doloribus',
    ];
    $request->firewall1->targetTags = [
        'eius',
    ];
    $request->accessToken = 'esse';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eligendi';
    $request->fields = 'quasi';
    $request->firewallPathParameter = 'neque';
    $request->key = 'vero';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->project = 'accusantium';
    $request->quotaUser = 'qui';
    $request->requestId = 'impedit';
    $request->uploadType = 'beatae';
    $request->uploadProtocol = 'incidunt';
    $request->userIp = 'dicta';

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
