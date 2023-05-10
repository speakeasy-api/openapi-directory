# policies

### Available Operations

* [dnsPoliciesCreate](#dnspoliciescreate) - Creates a new Policy.
* [dnsPoliciesDelete](#dnspoliciesdelete) - Deletes a previously created Policy. Fails if the policy is still being referenced by a network.
* [dnsPoliciesGet](#dnspoliciesget) - Fetches the representation of an existing Policy.
* [dnsPoliciesList](#dnspolicieslist) - Enumerates all Policies associated with a project.
* [dnsPoliciesPatch](#dnspoliciespatch) - Applies a partial update to an existing Policy.
* [dnsPoliciesUpdate](#dnspoliciesupdate) - Updates an existing Policy.

## dnsPoliciesCreate

Creates a new Policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DnsPoliciesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\PolicyAlternativeNameServerConfig;
use \OpenAPI\OpenAPI\Models\Shared\PolicyAlternativeNameServerConfigTargetNameServer;
use \OpenAPI\OpenAPI\Models\Shared\PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum;
use \OpenAPI\OpenAPI\Models\Shared\PolicyNetwork;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsPoliciesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DnsPoliciesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DnsPoliciesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DnsPoliciesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->policy = new Policy();
    $request->policy->alternativeNameServerConfig = new PolicyAlternativeNameServerConfig();
    $request->policy->alternativeNameServerConfig->kind = 'a';
    $request->policy->alternativeNameServerConfig->targetNameServers = [
        new PolicyAlternativeNameServerConfigTargetNameServer(),
        new PolicyAlternativeNameServerConfigTargetNameServer(),
    ];
    $request->policy->description = 'harum';
    $request->policy->enableInboundForwarding = false;
    $request->policy->enableLogging = false;
    $request->policy->id = 'iusto';
    $request->policy->kind = 'ipsum';
    $request->policy->name = 'Saul Fay';
    $request->policy->networks = [
        new PolicyNetwork(),
        new PolicyNetwork(),
    ];
    $request->accessToken = 'enim';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sapiente';
    $request->clientOperationId = 'totam';
    $request->fields = 'nihil';
    $request->key = 'sit';
    $request->location = 'expedita';
    $request->oauthToken = 'neque';
    $request->prettyPrint = false;
    $request->project = 'sed';
    $request->quotaUser = 'vel';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'voluptas';

    $requestSecurity = new DnsPoliciesCreateSecurity();
    $requestSecurity->option1 = new DnsPoliciesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->policies->dnsPoliciesCreate($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dnsPoliciesDelete

Deletes a previously created Policy. Fails if the policy is still being referenced by a network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DnsPoliciesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsPoliciesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DnsPoliciesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DnsPoliciesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DnsPoliciesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'incidunt';
    $request->clientOperationId = 'qui';
    $request->fields = 'cupiditate';
    $request->key = 'maxime';
    $request->location = 'pariatur';
    $request->oauthToken = 'soluta';
    $request->policy = 'dicta';
    $request->prettyPrint = false;
    $request->project = 'laborum';
    $request->quotaUser = 'totam';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'aspernatur';

    $requestSecurity = new DnsPoliciesDeleteSecurity();
    $requestSecurity->option1 = new DnsPoliciesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->policies->dnsPoliciesDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dnsPoliciesGet

Fetches the representation of an existing Policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DnsPoliciesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsPoliciesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DnsPoliciesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DnsPoliciesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DnsPoliciesGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DnsPoliciesGetSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DnsPoliciesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aliquid';
    $request->clientOperationId = 'quam';
    $request->fields = 'molestias';
    $request->key = 'temporibus';
    $request->location = 'qui';
    $request->oauthToken = 'neque';
    $request->policy = 'fugit';
    $request->prettyPrint = false;
    $request->project = 'magni';
    $request->quotaUser = 'odio';
    $request->uploadType = 'sunt';
    $request->uploadProtocol = 'ullam';

    $requestSecurity = new DnsPoliciesGetSecurity();
    $requestSecurity->option1 = new DnsPoliciesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->policies->dnsPoliciesGet($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dnsPoliciesList

Enumerates all Policies associated with a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DnsPoliciesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsPoliciesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DnsPoliciesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DnsPoliciesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DnsPoliciesListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DnsPoliciesListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DnsPoliciesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'hic';
    $request->alt = AltEnum::JSON;
    $request->callback = 'cumque';
    $request->fields = 'soluta';
    $request->key = 'nobis';
    $request->location = 'et';
    $request->maxResults = 903720;
    $request->oauthToken = 'ipsum';
    $request->pageToken = 'veritatis';
    $request->prettyPrint = false;
    $request->project = 'nobis';
    $request->quotaUser = 'quos';
    $request->uploadType = 'tempore';
    $request->uploadProtocol = 'cupiditate';

    $requestSecurity = new DnsPoliciesListSecurity();
    $requestSecurity->option1 = new DnsPoliciesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->policies->dnsPoliciesList($request, $requestSecurity);

    if ($response->policiesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dnsPoliciesPatch

Applies a partial update to an existing Policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DnsPoliciesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\PolicyAlternativeNameServerConfig;
use \OpenAPI\OpenAPI\Models\Shared\PolicyAlternativeNameServerConfigTargetNameServer;
use \OpenAPI\OpenAPI\Models\Shared\PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum;
use \OpenAPI\OpenAPI\Models\Shared\PolicyNetwork;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsPoliciesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DnsPoliciesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DnsPoliciesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DnsPoliciesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->policy1 = new Policy();
    $request->policy1->alternativeNameServerConfig = new PolicyAlternativeNameServerConfig();
    $request->policy1->alternativeNameServerConfig->kind = 'delectus';
    $request->policy1->alternativeNameServerConfig->targetNameServers = [
        new PolicyAlternativeNameServerConfigTargetNameServer(),
    ];
    $request->policy1->description = 'dolore';
    $request->policy1->enableInboundForwarding = false;
    $request->policy1->enableLogging = false;
    $request->policy1->id = 'labore';
    $request->policy1->kind = 'adipisci';
    $request->policy1->name = 'Ms. Joe Berge';
    $request->policy1->networks = [
        new PolicyNetwork(),
    ];
    $request->accessToken = 'est';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'porro';
    $request->clientOperationId = 'doloribus';
    $request->fields = 'ut';
    $request->key = 'facilis';
    $request->location = 'cupiditate';
    $request->oauthToken = 'qui';
    $request->policyPathParameter = 'quae';
    $request->prettyPrint = false;
    $request->project = 'laudantium';
    $request->quotaUser = 'odio';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new DnsPoliciesPatchSecurity();
    $requestSecurity->option1 = new DnsPoliciesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->policies->dnsPoliciesPatch($request, $requestSecurity);

    if ($response->policiesPatchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dnsPoliciesUpdate

Updates an existing Policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DnsPoliciesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\PolicyAlternativeNameServerConfig;
use \OpenAPI\OpenAPI\Models\Shared\PolicyAlternativeNameServerConfigTargetNameServer;
use \OpenAPI\OpenAPI\Models\Shared\PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum;
use \OpenAPI\OpenAPI\Models\Shared\PolicyNetwork;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsPoliciesUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DnsPoliciesUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DnsPoliciesUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DnsPoliciesUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->policy1 = new Policy();
    $request->policy1->alternativeNameServerConfig = new PolicyAlternativeNameServerConfig();
    $request->policy1->alternativeNameServerConfig->kind = 'vero';
    $request->policy1->alternativeNameServerConfig->targetNameServers = [
        new PolicyAlternativeNameServerConfigTargetNameServer(),
        new PolicyAlternativeNameServerConfigTargetNameServer(),
        new PolicyAlternativeNameServerConfigTargetNameServer(),
    ];
    $request->policy1->description = 'quis';
    $request->policy1->enableInboundForwarding = false;
    $request->policy1->enableLogging = false;
    $request->policy1->id = 'ipsum';
    $request->policy1->kind = 'delectus';
    $request->policy1->name = 'Victoria Thiel';
    $request->policy1->networks = [
        new PolicyNetwork(),
        new PolicyNetwork(),
        new PolicyNetwork(),
        new PolicyNetwork(),
    ];
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'odio';
    $request->clientOperationId = 'similique';
    $request->fields = 'facilis';
    $request->key = 'vero';
    $request->location = 'ducimus';
    $request->oauthToken = 'dolore';
    $request->policyPathParameter = 'quibusdam';
    $request->prettyPrint = false;
    $request->project = 'illum';
    $request->quotaUser = 'sequi';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'impedit';

    $requestSecurity = new DnsPoliciesUpdateSecurity();
    $requestSecurity->option1 = new DnsPoliciesUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->policies->dnsPoliciesUpdate($request, $requestSecurity);

    if ($response->policiesUpdateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
