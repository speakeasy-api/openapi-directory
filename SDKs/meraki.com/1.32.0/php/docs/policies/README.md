# policies

### Available Operations

* [createOrganizationAdaptivePolicyPolicy](#createorganizationadaptivepolicypolicy) - Add an Adaptive Policy
* [deleteOrganizationAdaptivePolicyPolicy](#deleteorganizationadaptivepolicypolicy) - Delete an Adaptive Policy
* [getNetworkPoliciesByClient](#getnetworkpoliciesbyclient) - Get policies for all clients with policies
* [getOrganizationAdaptivePolicyPolicies](#getorganizationadaptivepolicypolicies) - List adaptive policies in an organization
* [getOrganizationAdaptivePolicyPolicy](#getorganizationadaptivepolicypolicy) - Return an adaptive policy
* [updateOrganizationAdaptivePolicyPolicy](#updateorganizationadaptivepolicypolicy) - Update an Adaptive Policy

## createOrganizationAdaptivePolicyPolicy

Add an Adaptive Policy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdaptivePolicyPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdaptivePolicyPolicyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdaptivePolicyPolicyRequestBodyAcls;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdaptivePolicyPolicyRequestBodyDestinationGroup;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdaptivePolicyPolicyRequestBodyLastEntryRuleEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdaptivePolicyPolicyRequestBodySourceGroup;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationAdaptivePolicyPolicyRequest();
    $request->requestBody = new CreateOrganizationAdaptivePolicyPolicyRequestBody();
    $request->requestBody->acls = [
        new CreateOrganizationAdaptivePolicyPolicyRequestBodyAcls(),
        new CreateOrganizationAdaptivePolicyPolicyRequestBodyAcls(),
        new CreateOrganizationAdaptivePolicyPolicyRequestBodyAcls(),
        new CreateOrganizationAdaptivePolicyPolicyRequestBodyAcls(),
    ];
    $request->requestBody->destinationGroup = new CreateOrganizationAdaptivePolicyPolicyRequestBodyDestinationGroup();
    $request->requestBody->destinationGroup->id = 'b4ab441c-3a09-4e76-b995-d808bbe79445';
    $request->requestBody->destinationGroup->name = 'Kate Rohan';
    $request->requestBody->destinationGroup->sgt = 329047;
    $request->requestBody->lastEntryRule = CreateOrganizationAdaptivePolicyPolicyRequestBodyLastEntryRuleEnum::ALLOW;
    $request->requestBody->sourceGroup = new CreateOrganizationAdaptivePolicyPolicyRequestBodySourceGroup();
    $request->requestBody->sourceGroup->id = 'a1c426b5-9c83-466f-9cc1-35582c1b855e';
    $request->requestBody->sourceGroup->name = 'Dave McKenzie';
    $request->requestBody->sourceGroup->sgt = 889683;
    $request->organizationId = 'hic';

    $response = $sdk->policies->createOrganizationAdaptivePolicyPolicy($request);

    if ($response->createOrganizationAdaptivePolicyPolicy201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOrganizationAdaptivePolicyPolicy

Delete an Adaptive Policy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationAdaptivePolicyPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganizationAdaptivePolicyPolicyRequest();
    $request->id = '932e9000-a13a-4d81-a420-8efd23411898';
    $request->organizationId = 'recusandae';

    $response = $sdk->policies->deleteOrganizationAdaptivePolicyPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkPoliciesByClient

Get policies for all clients with policies

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkPoliciesByClientRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkPoliciesByClientRequest();
    $request->endingBefore = 'quam';
    $request->networkId = 'adipisci';
    $request->perPage = 507924;
    $request->startingAfter = 'nihil';
    $request->t0 = 'unde';
    $request->timespan = 9076.15;

    $response = $sdk->policies->getNetworkPoliciesByClient($request);

    if ($response->getNetworkPoliciesByClient200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationAdaptivePolicyPolicies

List adaptive policies in an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationAdaptivePolicyPoliciesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationAdaptivePolicyPoliciesRequest();
    $request->organizationId = 'tenetur';

    $response = $sdk->policies->getOrganizationAdaptivePolicyPolicies($request);

    if ($response->getOrganizationAdaptivePolicyPolicies200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationAdaptivePolicyPolicy

Return an adaptive policy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationAdaptivePolicyPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationAdaptivePolicyPolicyRequest();
    $request->id = 'be8baeba-bb79-4453-ae90-351bb9763172';
    $request->organizationId = 'voluptatem';

    $response = $sdk->policies->getOrganizationAdaptivePolicyPolicy($request);

    if ($response->getOrganizationAdaptivePolicyPolicy200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationAdaptivePolicyPolicy

Update an Adaptive Policy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicyPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicyPolicyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicyPolicyRequestBodyAcls;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicyPolicyRequestBodyDestinationGroup;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicyPolicyRequestBodyLastEntryRuleEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicyPolicyRequestBodySourceGroup;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationAdaptivePolicyPolicyRequest();
    $request->requestBody = new UpdateOrganizationAdaptivePolicyPolicyRequestBody();
    $request->requestBody->acls = [
        new UpdateOrganizationAdaptivePolicyPolicyRequestBodyAcls(),
        new UpdateOrganizationAdaptivePolicyPolicyRequestBodyAcls(),
        new UpdateOrganizationAdaptivePolicyPolicyRequestBodyAcls(),
    ];
    $request->requestBody->destinationGroup = new UpdateOrganizationAdaptivePolicyPolicyRequestBodyDestinationGroup();
    $request->requestBody->destinationGroup->id = '77a5a536-5a79-4f15-a71f-01c0d361fed8';
    $request->requestBody->destinationGroup->name = 'Roosevelt Hilll';
    $request->requestBody->destinationGroup->sgt = 955112;
    $request->requestBody->lastEntryRule = UpdateOrganizationAdaptivePolicyPolicyRequestBodyLastEntryRuleEnum::DENY;
    $request->requestBody->sourceGroup = new UpdateOrganizationAdaptivePolicyPolicyRequestBodySourceGroup();
    $request->requestBody->sourceGroup->id = '453e9089-e871-4fdb-8d69-7bdd9c985e43';
    $request->requestBody->sourceGroup->name = 'Josephine Funk';
    $request->requestBody->sourceGroup->sgt = 865792;
    $request->id = '72d9edd7-85be-45e7-afe5-5297ba6281f4';
    $request->organizationId = 'modi';

    $response = $sdk->policies->updateOrganizationAdaptivePolicyPolicy($request);

    if ($response->updateOrganizationAdaptivePolicyPolicy200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
