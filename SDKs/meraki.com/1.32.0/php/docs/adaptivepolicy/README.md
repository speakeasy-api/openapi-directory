# adaptivePolicy

### Available Operations

* [createOrganizationAdaptivePolicyAcl](#createorganizationadaptivepolicyacl) - Creates new adaptive policy ACL
* [createOrganizationAdaptivePolicyGroup](#createorganizationadaptivepolicygroup) - Creates a new adaptive policy group
* [createOrganizationAdaptivePolicyPolicy](#createorganizationadaptivepolicypolicy) - Add an Adaptive Policy
* [deleteOrganizationAdaptivePolicyAcl](#deleteorganizationadaptivepolicyacl) - Deletes the specified adaptive policy ACL
* [deleteOrganizationAdaptivePolicyGroup](#deleteorganizationadaptivepolicygroup) - Deletes the specified adaptive policy group and any associated policies and references
* [deleteOrganizationAdaptivePolicyPolicy](#deleteorganizationadaptivepolicypolicy) - Delete an Adaptive Policy
* [getOrganizationAdaptivePolicyAcl](#getorganizationadaptivepolicyacl) - Returns the adaptive policy ACL information
* [getOrganizationAdaptivePolicyAcls](#getorganizationadaptivepolicyacls) - List adaptive policy ACLs in a organization
* [getOrganizationAdaptivePolicyGroup](#getorganizationadaptivepolicygroup) - Returns an adaptive policy group
* [getOrganizationAdaptivePolicyGroups](#getorganizationadaptivepolicygroups) - List adaptive policy groups in a organization
* [getOrganizationAdaptivePolicyOverview](#getorganizationadaptivepolicyoverview) - Returns adaptive policy aggregate statistics for an organization
* [getOrganizationAdaptivePolicyPolicies](#getorganizationadaptivepolicypolicies) - List adaptive policies in an organization
* [getOrganizationAdaptivePolicyPolicy](#getorganizationadaptivepolicypolicy) - Return an adaptive policy
* [getOrganizationAdaptivePolicySettings](#getorganizationadaptivepolicysettings) - Returns global adaptive policy settings in an organization
* [updateOrganizationAdaptivePolicyAcl](#updateorganizationadaptivepolicyacl) - Updates an adaptive policy ACL
* [updateOrganizationAdaptivePolicyGroup](#updateorganizationadaptivepolicygroup) - Updates an adaptive policy group
* [updateOrganizationAdaptivePolicyPolicy](#updateorganizationadaptivepolicypolicy) - Update an Adaptive Policy
* [updateOrganizationAdaptivePolicySettings](#updateorganizationadaptivepolicysettings) - Update global adaptive policy settings

## createOrganizationAdaptivePolicyAcl

Creates new adaptive policy ACL

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdaptivePolicyAclRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdaptivePolicyAclRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdaptivePolicyAclRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationAdaptivePolicyAclRequest();
    $request->requestBody = new CreateOrganizationAdaptivePolicyAclRequestBody();
    $request->requestBody->description = 'reiciendis';
    $request->requestBody->ipVersion = CreateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum::IPV6;
    $request->requestBody->name = 'Cameron Dach';
    $request->requestBody->rules = [
        new CreateOrganizationAdaptivePolicyAclRequestBodyRules(),
    ];
    $request->organizationId = 'nobis';

    $response = $sdk->adaptivePolicy->createOrganizationAdaptivePolicyAcl($request);

    if ($response->createOrganizationAdaptivePolicyAcl200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOrganizationAdaptivePolicyGroup

Creates a new adaptive policy group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdaptivePolicyGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdaptivePolicyGroupRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationAdaptivePolicyGroupRequest();
    $request->requestBody = new CreateOrganizationAdaptivePolicyGroupRequestBody();
    $request->requestBody->description = 'enim';
    $request->requestBody->name = 'Corey Hane III';
    $request->requestBody->policyObjects = [
        new CreateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects(),
        new CreateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects(),
        new CreateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects(),
    ];
    $request->requestBody->sgt = 988374;
    $request->organizationId = 'sapiente';

    $response = $sdk->adaptivePolicy->createOrganizationAdaptivePolicyGroup($request);

    if ($response->createOrganizationAdaptivePolicyGroup201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    ];
    $request->requestBody->destinationGroup = new CreateOrganizationAdaptivePolicyPolicyRequestBodyDestinationGroup();
    $request->requestBody->destinationGroup->id = 'a3a2fa94-6773-4925-9aa5-2c3f5ad019da';
    $request->requestBody->destinationGroup->name = 'Johanna Wolf';
    $request->requestBody->destinationGroup->sgt = 509624;
    $request->requestBody->lastEntryRule = CreateOrganizationAdaptivePolicyPolicyRequestBodyLastEntryRuleEnum::DENY;
    $request->requestBody->sourceGroup = new CreateOrganizationAdaptivePolicyPolicyRequestBodySourceGroup();
    $request->requestBody->sourceGroup->id = '097b0074-f154-471b-9e6e-13b99d488e1e';
    $request->requestBody->sourceGroup->name = 'Patrick Ward';
    $request->requestBody->sourceGroup->sgt = 9356;
    $request->organizationId = 'est';

    $response = $sdk->adaptivePolicy->createOrganizationAdaptivePolicyPolicy($request);

    if ($response->createOrganizationAdaptivePolicyPolicy201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOrganizationAdaptivePolicyAcl

Deletes the specified adaptive policy ACL. Note this adaptive policy ACL will also be removed from policies using it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationAdaptivePolicyAclRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganizationAdaptivePolicyAclRequest();
    $request->aclId = 'quibusdam';
    $request->organizationId = 'explicabo';

    $response = $sdk->adaptivePolicy->deleteOrganizationAdaptivePolicyAcl($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOrganizationAdaptivePolicyGroup

Deletes the specified adaptive policy group and any associated policies and references

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationAdaptivePolicyGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganizationAdaptivePolicyGroupRequest();
    $request->id = 'abd44269-802d-4502-a94b-b4f63c969e9a';
    $request->organizationId = 'dolor';

    $response = $sdk->adaptivePolicy->deleteOrganizationAdaptivePolicyGroup($request);

    if ($response->statusCode === 200) {
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
    $request->id = 'efa77dfb-14cd-466a-a395-efb9ba88f3a6';
    $request->organizationId = 'vel';

    $response = $sdk->adaptivePolicy->deleteOrganizationAdaptivePolicyPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationAdaptivePolicyAcl

Returns the adaptive policy ACL information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationAdaptivePolicyAclRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationAdaptivePolicyAclRequest();
    $request->aclId = 'natus';
    $request->organizationId = 'omnis';

    $response = $sdk->adaptivePolicy->getOrganizationAdaptivePolicyAcl($request);

    if ($response->getOrganizationAdaptivePolicyAcl200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationAdaptivePolicyAcls

List adaptive policy ACLs in a organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationAdaptivePolicyAclsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationAdaptivePolicyAclsRequest();
    $request->organizationId = 'molestiae';

    $response = $sdk->adaptivePolicy->getOrganizationAdaptivePolicyAcls($request);

    if ($response->getOrganizationAdaptivePolicyAcls200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationAdaptivePolicyGroup

Returns an adaptive policy group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationAdaptivePolicyGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationAdaptivePolicyGroupRequest();
    $request->id = '074ba446-9b6e-4214-9959-890afa563e25';
    $request->organizationId = 'quasi';

    $response = $sdk->adaptivePolicy->getOrganizationAdaptivePolicyGroup($request);

    if ($response->getOrganizationAdaptivePolicyGroup200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationAdaptivePolicyGroups

List adaptive policy groups in a organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationAdaptivePolicyGroupsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationAdaptivePolicyGroupsRequest();
    $request->organizationId = 'iure';

    $response = $sdk->adaptivePolicy->getOrganizationAdaptivePolicyGroups($request);

    if ($response->getOrganizationAdaptivePolicyGroups200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationAdaptivePolicyOverview

Returns adaptive policy aggregate statistics for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationAdaptivePolicyOverviewRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationAdaptivePolicyOverviewRequest();
    $request->organizationId = 'doloribus';

    $response = $sdk->adaptivePolicy->getOrganizationAdaptivePolicyOverview($request);

    if ($response->getOrganizationAdaptivePolicyOverview200ApplicationJSONObject !== null) {
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
    $request->organizationId = 'debitis';

    $response = $sdk->adaptivePolicy->getOrganizationAdaptivePolicyPolicies($request);

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
    $request->id = '4c8b711e-5b7f-4d2e-9028-921cddc69260';
    $request->organizationId = 'ab';

    $response = $sdk->adaptivePolicy->getOrganizationAdaptivePolicyPolicy($request);

    if ($response->getOrganizationAdaptivePolicyPolicy200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationAdaptivePolicySettings

Returns global adaptive policy settings in an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationAdaptivePolicySettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationAdaptivePolicySettingsRequest();
    $request->organizationId = 'maiores';

    $response = $sdk->adaptivePolicy->getOrganizationAdaptivePolicySettings($request);

    if ($response->getOrganizationAdaptivePolicySettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationAdaptivePolicyAcl

Updates an adaptive policy ACL

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicyAclRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicyAclRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicyAclRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationAdaptivePolicyAclRequest();
    $request->requestBody = new UpdateOrganizationAdaptivePolicyAclRequestBody();
    $request->requestBody->description = 'quidem';
    $request->requestBody->ipVersion = UpdateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum::IPV4;
    $request->requestBody->name = 'Dr. Stacey Reichert';
    $request->requestBody->rules = [
        new UpdateOrganizationAdaptivePolicyAclRequestBodyRules(),
        new UpdateOrganizationAdaptivePolicyAclRequestBodyRules(),
        new UpdateOrganizationAdaptivePolicyAclRequestBodyRules(),
        new UpdateOrganizationAdaptivePolicyAclRequestBodyRules(),
    ];
    $request->aclId = 'perferendis';
    $request->organizationId = 'fugiat';

    $response = $sdk->adaptivePolicy->updateOrganizationAdaptivePolicyAcl($request);

    if ($response->updateOrganizationAdaptivePolicyAcl200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationAdaptivePolicyGroup

Updates an adaptive policy group. If updating "Infrastructure", only the SGT is allowed. Cannot update "Unknown".

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicyGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicyGroupRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationAdaptivePolicyGroupRequest();
    $request->requestBody = new UpdateOrganizationAdaptivePolicyGroupRequestBody();
    $request->requestBody->description = 'amet';
    $request->requestBody->name = 'Erma Hessel';
    $request->requestBody->policyObjects = [
        new UpdateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects(),
        new UpdateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects(),
        new UpdateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects(),
    ];
    $request->requestBody->sgt = 171629;
    $request->id = '58705320-2c73-4d5f-a9b9-0c28909b3fe4';
    $request->organizationId = 'iste';

    $response = $sdk->adaptivePolicy->updateOrganizationAdaptivePolicyGroup($request);

    if ($response->updateOrganizationAdaptivePolicyGroup200ApplicationJSONObject !== null) {
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
    $request->requestBody->destinationGroup->id = '8d9cbf48-6333-423f-9b77-f3a4100674eb';
    $request->requestBody->destinationGroup->name = 'Hector Mosciski';
    $request->requestBody->destinationGroup->sgt = 24678;
    $request->requestBody->lastEntryRule = UpdateOrganizationAdaptivePolicyPolicyRequestBodyLastEntryRuleEnum::DENY;
    $request->requestBody->sourceGroup = new UpdateOrganizationAdaptivePolicyPolicyRequestBodySourceGroup();
    $request->requestBody->sourceGroup->id = '1ba77a89-ebf7-437a-a420-3ce5e6a95d8a';
    $request->requestBody->sourceGroup->name = 'Cristina Hahn';
    $request->requestBody->sourceGroup->sgt = 798047;
    $request->id = 'e2af7a73-cf3b-4e45-bf87-0b326b5a7342';
    $request->organizationId = 'cupiditate';

    $response = $sdk->adaptivePolicy->updateOrganizationAdaptivePolicyPolicy($request);

    if ($response->updateOrganizationAdaptivePolicyPolicy200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationAdaptivePolicySettings

Update global adaptive policy settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicySettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicySettingsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationAdaptivePolicySettingsRequest();
    $request->requestBody = new UpdateOrganizationAdaptivePolicySettingsRequestBody();
    $request->requestBody->enabledNetworks = [
        'pariatur',
        'soluta',
        'dicta',
        'laborum',
    ];
    $request->organizationId = 'totam';

    $response = $sdk->adaptivePolicy->updateOrganizationAdaptivePolicySettings($request);

    if ($response->updateOrganizationAdaptivePolicySettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
