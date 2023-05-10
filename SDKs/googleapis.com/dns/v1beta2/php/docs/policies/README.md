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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->policy = new Policy();
    $request->policy->alternativeNameServerConfig = new PolicyAlternativeNameServerConfig();
    $request->policy->alternativeNameServerConfig->kind = 'voluptate';
    $request->policy->alternativeNameServerConfig->targetNameServers = [
        new PolicyAlternativeNameServerConfigTargetNameServer(),
        new PolicyAlternativeNameServerConfigTargetNameServer(),
        new PolicyAlternativeNameServerConfigTargetNameServer(),
    ];
    $request->policy->description = 'saepe';
    $request->policy->enableInboundForwarding = false;
    $request->policy->enableLogging = false;
    $request->policy->id = 'eius';
    $request->policy->kind = 'aspernatur';
    $request->policy->name = 'Wendy Rosenbaum';
    $request->policy->networks = [
        new PolicyNetwork(),
        new PolicyNetwork(),
        new PolicyNetwork(),
        new PolicyNetwork(),
    ];
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'provident';
    $request->clientOperationId = 'minima';
    $request->fields = 'repellendus';
    $request->key = 'totam';
    $request->oauthToken = 'similique';
    $request->prettyPrint = false;
    $request->project = 'alias';
    $request->quotaUser = 'at';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'tempora';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quod';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'qui';
    $request->clientOperationId = 'dolorum';
    $request->fields = 'a';
    $request->key = 'esse';
    $request->oauthToken = 'harum';
    $request->policy = 'iusto';
    $request->prettyPrint = false;
    $request->project = 'ipsum';
    $request->quotaUser = 'quisquam';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'amet';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'enim';
    $request->clientOperationId = 'dolorem';
    $request->fields = 'sapiente';
    $request->key = 'totam';
    $request->oauthToken = 'nihil';
    $request->policy = 'sit';
    $request->prettyPrint = false;
    $request->project = 'expedita';
    $request->quotaUser = 'neque';
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'vel';

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
    $request->accessToken = 'voluptas';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quam';
    $request->fields = 'ipsum';
    $request->key = 'incidunt';
    $request->maxResults = 186458;
    $request->oauthToken = 'cupiditate';
    $request->pageToken = 'maxime';
    $request->prettyPrint = false;
    $request->project = 'pariatur';
    $request->quotaUser = 'soluta';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'laborum';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->policy1 = new Policy();
    $request->policy1->alternativeNameServerConfig = new PolicyAlternativeNameServerConfig();
    $request->policy1->alternativeNameServerConfig->kind = 'incidunt';
    $request->policy1->alternativeNameServerConfig->targetNameServers = [
        new PolicyAlternativeNameServerConfigTargetNameServer(),
    ];
    $request->policy1->description = 'dolores';
    $request->policy1->enableInboundForwarding = false;
    $request->policy1->enableLogging = false;
    $request->policy1->id = 'distinctio';
    $request->policy1->kind = 'facilis';
    $request->policy1->name = 'Constance Mann';
    $request->policy1->networks = [
        new PolicyNetwork(),
    ];
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'odio';
    $request->clientOperationId = 'sunt';
    $request->fields = 'ullam';
    $request->key = 'nam';
    $request->oauthToken = 'hic';
    $request->policyPathParameter = 'voluptatem';
    $request->prettyPrint = false;
    $request->project = 'cumque';
    $request->quotaUser = 'soluta';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'et';

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
    $request->policy1->alternativeNameServerConfig->kind = 'ipsum';
    $request->policy1->alternativeNameServerConfig->targetNameServers = [
        new PolicyAlternativeNameServerConfigTargetNameServer(),
    ];
    $request->policy1->description = 'nobis';
    $request->policy1->enableInboundForwarding = false;
    $request->policy1->enableLogging = false;
    $request->policy1->id = 'quos';
    $request->policy1->kind = 'tempore';
    $request->policy1->name = 'Kevin Willms';
    $request->policy1->networks = [
        new PolicyNetwork(),
        new PolicyNetwork(),
    ];
    $request->accessToken = 'adipisci';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'architecto';
    $request->clientOperationId = 'quae';
    $request->fields = 'aut';
    $request->key = 'quas';
    $request->oauthToken = 'itaque';
    $request->policyPathParameter = 'consequatur';
    $request->prettyPrint = false;
    $request->project = 'est';
    $request->quotaUser = 'repellendus';
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'doloribus';

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
