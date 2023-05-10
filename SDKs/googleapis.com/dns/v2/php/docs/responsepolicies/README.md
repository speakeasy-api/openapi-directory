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
    $request->responsePolicy->description = 'esse';
    $request->responsePolicy->gkeClusters = [
        new ResponsePolicyGKECluster(),
        new ResponsePolicyGKECluster(),
        new ResponsePolicyGKECluster(),
        new ResponsePolicyGKECluster(),
    ];
    $request->responsePolicy->id = 'nam';
    $request->responsePolicy->kind = 'vero';
    $request->responsePolicy->labels = [
        'quasi' => 'saepe',
        'vel' => 'harum',
    ];
    $request->responsePolicy->networks = [
        new ResponsePolicyNetwork(),
        new ResponsePolicyNetwork(),
    ];
    $request->responsePolicy->responsePolicyName = 'rerum';
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::JSON;
    $request->callback = 'distinctio';
    $request->clientOperationId = 'eligendi';
    $request->fields = 'sit';
    $request->key = 'culpa';
    $request->location = 'tempore';
    $request->oauthToken = 'adipisci';
    $request->prettyPrint = false;
    $request->project = 'cumque';
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'consequatur';
    $request->uploadProtocol = 'minus';

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
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::JSON;
    $request->callback = 'esse';
    $request->clientOperationId = 'blanditiis';
    $request->fields = 'provident';
    $request->key = 'a';
    $request->location = 'nulla';
    $request->oauthToken = 'quas';
    $request->prettyPrint = false;
    $request->project = 'esse';
    $request->quotaUser = 'quasi';
    $request->responsePolicy = 'a';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'sint';

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
    $request->accessToken = 'possimus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eveniet';
    $request->clientOperationId = 'asperiores';
    $request->fields = 'facere';
    $request->key = 'veritatis';
    $request->location = 'consequuntur';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->project = 'similique';
    $request->quotaUser = 'culpa';
    $request->responsePolicy = 'aliquid';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'quae';

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
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eius';
    $request->fields = 'libero';
    $request->key = 'illum';
    $request->location = 'soluta';
    $request->maxResults = 33304;
    $request->oauthToken = 'aliquam';
    $request->pageToken = 'sapiente';
    $request->prettyPrint = false;
    $request->project = 'dicta';
    $request->quotaUser = 'ullam';
    $request->uploadType = 'reprehenderit';
    $request->uploadProtocol = 'ullam';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->responsePolicy1 = new ResponsePolicy();
    $request->responsePolicy1->description = 'aut';
    $request->responsePolicy1->gkeClusters = [
        new ResponsePolicyGKECluster(),
        new ResponsePolicyGKECluster(),
        new ResponsePolicyGKECluster(),
    ];
    $request->responsePolicy1->id = 'qui';
    $request->responsePolicy1->kind = 'quibusdam';
    $request->responsePolicy1->labels = [
        'deleniti' => 'itaque',
        'dolorum' => 'architecto',
    ];
    $request->responsePolicy1->networks = [
        new ResponsePolicyNetwork(),
        new ResponsePolicyNetwork(),
        new ResponsePolicyNetwork(),
    ];
    $request->responsePolicy1->responsePolicyName = 'tenetur';
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'et';
    $request->clientOperationId = 'voluptate';
    $request->fields = 'ipsa';
    $request->key = 'minima';
    $request->location = 'veritatis';
    $request->oauthToken = 'consectetur';
    $request->prettyPrint = false;
    $request->project = 'adipisci';
    $request->quotaUser = 'iste';
    $request->responsePolicyPathParameter = 'temporibus';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'rem';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->responsePolicy1 = new ResponsePolicy();
    $request->responsePolicy1->description = 'laudantium';
    $request->responsePolicy1->gkeClusters = [
        new ResponsePolicyGKECluster(),
        new ResponsePolicyGKECluster(),
    ];
    $request->responsePolicy1->id = 'mollitia';
    $request->responsePolicy1->kind = 'ab';
    $request->responsePolicy1->labels = [
        'non' => 'voluptatem',
        'dolor' => 'occaecati',
        'numquam' => 'impedit',
    ];
    $request->responsePolicy1->networks = [
        new ResponsePolicyNetwork(),
    ];
    $request->responsePolicy1->responsePolicyName = 'voluptas';
    $request->accessToken = 'aut';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dicta';
    $request->clientOperationId = 'maiores';
    $request->fields = 'natus';
    $request->key = 'velit';
    $request->location = 'voluptatibus';
    $request->oauthToken = 'voluptas';
    $request->prettyPrint = false;
    $request->project = 'asperiores';
    $request->quotaUser = 'aperiam';
    $request->responsePolicyPathParameter = 'ea';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'consequuntur';

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
