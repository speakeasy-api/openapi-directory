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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->responsePolicy = new ResponsePolicy();
    $request->responsePolicy->description = 'occaecati';
    $request->responsePolicy->gkeClusters = [
        new ResponsePolicyGKECluster(),
        new ResponsePolicyGKECluster(),
    ];
    $request->responsePolicy->id = 'sapiente';
    $request->responsePolicy->kind = 'dolores';
    $request->responsePolicy->labels = [
        'molestiae' => 'accusantium',
        'porro' => 'eum',
        'quas' => 'praesentium',
    ];
    $request->responsePolicy->networks = [
        new ResponsePolicyNetwork(),
    ];
    $request->responsePolicy->responsePolicyName = 'deleniti';
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'mollitia';
    $request->clientOperationId = 'incidunt';
    $request->fields = 'atque';
    $request->key = 'explicabo';
    $request->oauthToken = 'minima';
    $request->prettyPrint = false;
    $request->project = 'nisi';
    $request->quotaUser = 'fugit';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'consequuntur';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'explicabo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'occaecati';
    $request->clientOperationId = 'atque';
    $request->fields = 'et';
    $request->key = 'esse';
    $request->oauthToken = 'eveniet';
    $request->prettyPrint = false;
    $request->project = 'accusamus';
    $request->quotaUser = 'veritatis';
    $request->responsePolicy = 'esse';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'nam';

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
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::JSON;
    $request->callback = 'saepe';
    $request->clientOperationId = 'vel';
    $request->fields = 'harum';
    $request->key = 'molestiae';
    $request->oauthToken = 'rerum';
    $request->prettyPrint = false;
    $request->project = 'occaecati';
    $request->quotaUser = 'minima';
    $request->responsePolicy = 'distinctio';
    $request->uploadType = 'eligendi';
    $request->uploadProtocol = 'sit';

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
    $request->accessToken = 'tempore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'cumque';
    $request->fields = 'consequuntur';
    $request->key = 'consequatur';
    $request->maxResults = 796392;
    $request->oauthToken = 'quaerat';
    $request->pageToken = 'sapiente';
    $request->prettyPrint = false;
    $request->project = 'consectetur';
    $request->quotaUser = 'esse';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'provident';

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
    $request->responsePolicy1->description = 'nulla';
    $request->responsePolicy1->gkeClusters = [
        new ResponsePolicyGKECluster(),
        new ResponsePolicyGKECluster(),
        new ResponsePolicyGKECluster(),
    ];
    $request->responsePolicy1->id = 'esse';
    $request->responsePolicy1->kind = 'quasi';
    $request->responsePolicy1->labels = [
        'error' => 'sint',
        'pariatur' => 'possimus',
        'quia' => 'eveniet',
        'asperiores' => 'facere',
    ];
    $request->responsePolicy1->networks = [
        new ResponsePolicyNetwork(),
    ];
    $request->responsePolicy1->responsePolicyName = 'consequuntur';
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'culpa';
    $request->clientOperationId = 'aliquid';
    $request->fields = 'tenetur';
    $request->key = 'quae';
    $request->oauthToken = 'earum';
    $request->prettyPrint = false;
    $request->project = 'vel';
    $request->quotaUser = 'in';
    $request->responsePolicyPathParameter = 'eius';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'illum';

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
    $request->responsePolicy1->description = 'accusantium';
    $request->responsePolicy1->gkeClusters = [
        new ResponsePolicyGKECluster(),
        new ResponsePolicyGKECluster(),
    ];
    $request->responsePolicy1->id = 'sapiente';
    $request->responsePolicy1->kind = 'dicta';
    $request->responsePolicy1->labels = [
        'reprehenderit' => 'ullam',
        'nisi' => 'aut',
    ];
    $request->responsePolicy1->networks = [
        new ResponsePolicyNetwork(),
        new ResponsePolicyNetwork(),
        new ResponsePolicyNetwork(),
    ];
    $request->responsePolicy1->responsePolicyName = 'qui';
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'deleniti';
    $request->clientOperationId = 'itaque';
    $request->fields = 'dolorum';
    $request->key = 'architecto';
    $request->oauthToken = 'omnis';
    $request->prettyPrint = false;
    $request->project = 'tenetur';
    $request->quotaUser = 'quasi';
    $request->responsePolicyPathParameter = 'at';
    $request->uploadType = 'et';
    $request->uploadProtocol = 'voluptate';

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
