# responsePolicies

### Available Operations

* [dnsResponsePoliciesCreate](#dnsresponsepoliciescreate) - Creates a new Response Policy
* [dnsResponsePoliciesDelete](#dnsresponsepoliciesdelete) - Deletes a previously created Response Policy. Fails if the response policy is non-empty or still being referenced by a network.
* [dnsResponsePoliciesGet](#dnsresponsepoliciesget) - Fetches the representation of an existing Response Policy.
* [dnsResponsePoliciesList](#dnsresponsepolicieslist) - Enumerates all Response Policies associated with a project.
* [dnsResponsePoliciesPatch](#dnsresponsepoliciespatch) - Applies a partial update to an existing Response Policy.
* [dnsResponsePoliciesUpdate](#dnsresponsepoliciesupdate) - Updates an existing Response Policy.

## dnsResponsePoliciesCreate

Creates a new Response Policy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePoliciesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResponsePolicy;
use \OpenAPI\OpenAPI\Models\Shared\ResponsePolicyGKECluster;
use \OpenAPI\OpenAPI\Models\Shared\ResponsePolicyNetwork;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePoliciesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePoliciesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePoliciesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DnsResponsePoliciesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->responsePolicy = new ResponsePolicy();
    $request->responsePolicy->description = 'esse';
    $request->responsePolicy->gkeClusters = [
        new ResponsePolicyGKECluster(),
        new ResponsePolicyGKECluster(),
        new ResponsePolicyGKECluster(),
        new ResponsePolicyGKECluster(),
    ];
    $request->responsePolicy->id = 'aperiam';
    $request->responsePolicy->kind = 'distinctio';
    $request->responsePolicy->labels = [
        'dignissimos' => 'inventore',
        'nihil' => 'totam',
        'accusamus' => 'aliquam',
        'odio' => 'occaecati',
    ];
    $request->responsePolicy->networks = [
        new ResponsePolicyNetwork(),
        new ResponsePolicyNetwork(),
    ];
    $request->responsePolicy->responsePolicyName = 'sapiente';
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->clientOperationId = 'accusantium';
    $request->fields = 'porro';
    $request->key = 'eum';
    $request->oauthToken = 'quas';
    $request->prettyPrint = false;
    $request->project = 'praesentium';
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'fugit';

    $requestSecurity = new DnsResponsePoliciesCreateSecurity();
    $requestSecurity->option1 = new DnsResponsePoliciesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->responsePolicies->dnsResponsePoliciesCreate($request, $requestSecurity);

    if ($response->responsePolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dnsResponsePoliciesDelete

Deletes a previously created Response Policy. Fails if the response policy is non-empty or still being referenced by a network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePoliciesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePoliciesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePoliciesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePoliciesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DnsResponsePoliciesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::JSON;
    $request->callback = 'atque';
    $request->clientOperationId = 'explicabo';
    $request->fields = 'minima';
    $request->key = 'nisi';
    $request->oauthToken = 'fugit';
    $request->prettyPrint = false;
    $request->project = 'sapiente';
    $request->quotaUser = 'consequuntur';
    $request->responsePolicy = 'ratione';
    $request->uploadType = 'explicabo';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new DnsResponsePoliciesDeleteSecurity();
    $requestSecurity->option1 = new DnsResponsePoliciesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->responsePolicies->dnsResponsePoliciesDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dnsResponsePoliciesGet

Fetches the representation of an existing Response Policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePoliciesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePoliciesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePoliciesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePoliciesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePoliciesGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePoliciesGetSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DnsResponsePoliciesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'atque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'esse';
    $request->clientOperationId = 'eveniet';
    $request->fields = 'accusamus';
    $request->key = 'veritatis';
    $request->oauthToken = 'esse';
    $request->prettyPrint = false;
    $request->project = 'quod';
    $request->quotaUser = 'nam';
    $request->responsePolicy = 'vero';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'quasi';

    $requestSecurity = new DnsResponsePoliciesGetSecurity();
    $requestSecurity->option1 = new DnsResponsePoliciesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->responsePolicies->dnsResponsePoliciesGet($request, $requestSecurity);

    if ($response->responsePolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dnsResponsePoliciesList

Enumerates all Response Policies associated with a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePoliciesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePoliciesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePoliciesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePoliciesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePoliciesListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePoliciesListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DnsResponsePoliciesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'vel';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'molestiae';
    $request->fields = 'rerum';
    $request->key = 'occaecati';
    $request->maxResults = 327720;
    $request->oauthToken = 'distinctio';
    $request->pageToken = 'eligendi';
    $request->prettyPrint = false;
    $request->project = 'sit';
    $request->quotaUser = 'culpa';
    $request->uploadType = 'tempore';
    $request->uploadProtocol = 'adipisci';

    $requestSecurity = new DnsResponsePoliciesListSecurity();
    $requestSecurity->option1 = new DnsResponsePoliciesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->responsePolicies->dnsResponsePoliciesList($request, $requestSecurity);

    if ($response->responsePoliciesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dnsResponsePoliciesPatch

Applies a partial update to an existing Response Policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePoliciesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResponsePolicy;
use \OpenAPI\OpenAPI\Models\Shared\ResponsePolicyGKECluster;
use \OpenAPI\OpenAPI\Models\Shared\ResponsePolicyNetwork;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePoliciesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePoliciesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePoliciesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DnsResponsePoliciesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->responsePolicy1 = new ResponsePolicy();
    $request->responsePolicy1->description = 'consequuntur';
    $request->responsePolicy1->gkeClusters = [
        new ResponsePolicyGKECluster(),
    ];
    $request->responsePolicy1->id = 'minus';
    $request->responsePolicy1->kind = 'quaerat';
    $request->responsePolicy1->labels = [
        'consectetur' => 'esse',
        'blanditiis' => 'provident',
        'a' => 'nulla',
        'quas' => 'esse',
    ];
    $request->responsePolicy1->networks = [
        new ResponsePolicyNetwork(),
    ];
    $request->responsePolicy1->responsePolicyName = 'a';
    $request->accessToken = 'error';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'pariatur';
    $request->clientOperationId = 'possimus';
    $request->fields = 'quia';
    $request->key = 'eveniet';
    $request->oauthToken = 'asperiores';
    $request->prettyPrint = false;
    $request->project = 'facere';
    $request->quotaUser = 'veritatis';
    $request->responsePolicyPathParameter = 'consequuntur';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'similique';

    $requestSecurity = new DnsResponsePoliciesPatchSecurity();
    $requestSecurity->option1 = new DnsResponsePoliciesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->responsePolicies->dnsResponsePoliciesPatch($request, $requestSecurity);

    if ($response->responsePoliciesPatchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dnsResponsePoliciesUpdate

Updates an existing Response Policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePoliciesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResponsePolicy;
use \OpenAPI\OpenAPI\Models\Shared\ResponsePolicyGKECluster;
use \OpenAPI\OpenAPI\Models\Shared\ResponsePolicyNetwork;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePoliciesUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePoliciesUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePoliciesUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DnsResponsePoliciesUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->responsePolicy1 = new ResponsePolicy();
    $request->responsePolicy1->description = 'aliquid';
    $request->responsePolicy1->gkeClusters = [
        new ResponsePolicyGKECluster(),
        new ResponsePolicyGKECluster(),
        new ResponsePolicyGKECluster(),
        new ResponsePolicyGKECluster(),
    ];
    $request->responsePolicy1->id = 'quae';
    $request->responsePolicy1->kind = 'earum';
    $request->responsePolicy1->labels = [
        'in' => 'eius',
        'libero' => 'illum',
    ];
    $request->responsePolicy1->networks = [
        new ResponsePolicyNetwork(),
        new ResponsePolicyNetwork(),
        new ResponsePolicyNetwork(),
    ];
    $request->responsePolicy1->responsePolicyName = 'accusantium';
    $request->accessToken = 'aliquam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->clientOperationId = 'ullam';
    $request->fields = 'reprehenderit';
    $request->key = 'ullam';
    $request->oauthToken = 'nisi';
    $request->prettyPrint = false;
    $request->project = 'aut';
    $request->quotaUser = 'voluptatum';
    $request->responsePolicyPathParameter = 'qui';
    $request->uploadType = 'quibusdam';
    $request->uploadProtocol = 'ex';

    $requestSecurity = new DnsResponsePoliciesUpdateSecurity();
    $requestSecurity->option1 = new DnsResponsePoliciesUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->responsePolicies->dnsResponsePoliciesUpdate($request, $requestSecurity);

    if ($response->responsePoliciesUpdateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
