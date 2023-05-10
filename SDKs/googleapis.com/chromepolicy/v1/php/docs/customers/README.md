# customers

### Available Operations

* [chromepolicyCustomersPoliciesGroupsBatchDelete](#chromepolicycustomerspoliciesgroupsbatchdelete) - Delete multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* [chromepolicyCustomersPoliciesGroupsBatchModify](#chromepolicycustomerspoliciesgroupsbatchmodify) - Modify multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* [chromepolicyCustomersPoliciesGroupsListGroupPriorityOrdering](#chromepolicycustomerspoliciesgroupslistgrouppriorityordering) - Retrieve a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.
* [chromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrdering](#chromepolicycustomerspoliciesgroupsupdategrouppriorityordering) - Update a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.
* [chromepolicyCustomersPoliciesNetworksDefineCertificate](#chromepolicycustomerspoliciesnetworksdefinecertificate) - Creates a certificate at a specified OU for a customer.
* [chromepolicyCustomersPoliciesNetworksDefineNetwork](#chromepolicycustomerspoliciesnetworksdefinenetwork) - Define a new network.
* [chromepolicyCustomersPoliciesNetworksRemoveCertificate](#chromepolicycustomerspoliciesnetworksremovecertificate) - Remove an existing certificate by guid.
* [chromepolicyCustomersPoliciesNetworksRemoveNetwork](#chromepolicycustomerspoliciesnetworksremovenetwork) - Remove an existing network by guid.
* [chromepolicyCustomersPoliciesOrgunitsBatchInherit](#chromepolicycustomerspoliciesorgunitsbatchinherit) - Modify multiple policy values that are applied to a specific org unit so that they now inherit the value from a parent (if applicable). All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* [chromepolicyCustomersPoliciesOrgunitsBatchModify](#chromepolicycustomerspoliciesorgunitsbatchmodify) - Modify multiple policy values that are applied to a specific org unit. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* [chromepolicyCustomersPoliciesResolve](#chromepolicycustomerspoliciesresolve) - Gets the resolved policy values for a list of policies that match a search query.
* [chromepolicyCustomersPolicySchemasGet](#chromepolicycustomerspolicyschemasget) - Get a specific policy schema for a customer by its resource name.
* [chromepolicyCustomersPolicySchemasList](#chromepolicycustomerspolicyschemaslist) - Gets a list of policy schemas that match a specified filter value for a given customer.

## chromepolicyCustomersPoliciesGroupsBatchDelete

Delete multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChromepolicyCustomersPoliciesGroupsBatchDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleChromePolicyVersionsV1PolicyTargetKey;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ChromepolicyCustomersPoliciesGroupsBatchDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChromepolicyCustomersPoliciesGroupsBatchDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest = new GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest();
    $request->googleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest->requests = [
        new GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest(),
        new GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest(),
    ];
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->customer = 'tempora';
    $request->fields = 'suscipit';
    $request->key = 'molestiae';
    $request->oauthToken = 'minus';
    $request->prettyPrint = false;
    $request->quotaUser = 'placeat';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'iusto';

    $requestSecurity = new ChromepolicyCustomersPoliciesGroupsBatchDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->chromepolicyCustomersPoliciesGroupsBatchDelete($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## chromepolicyCustomersPoliciesGroupsBatchModify

Modify multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChromepolicyCustomersPoliciesGroupsBatchModifyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleChromePolicyVersionsV1BatchModifyGroupPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleChromePolicyVersionsV1ModifyGroupPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleChromePolicyVersionsV1PolicyTargetKey;
use \OpenAPI\OpenAPI\Models\Shared\GoogleChromePolicyVersionsV1PolicyValue;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ChromepolicyCustomersPoliciesGroupsBatchModifySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChromepolicyCustomersPoliciesGroupsBatchModifyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleChromePolicyVersionsV1BatchModifyGroupPoliciesRequest = new GoogleChromePolicyVersionsV1BatchModifyGroupPoliciesRequest();
    $request->googleChromePolicyVersionsV1BatchModifyGroupPoliciesRequest->requests = [
        new GoogleChromePolicyVersionsV1ModifyGroupPolicyRequest(),
        new GoogleChromePolicyVersionsV1ModifyGroupPolicyRequest(),
    ];
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ab';
    $request->customer = 'quis';
    $request->fields = 'veritatis';
    $request->key = 'deserunt';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'sapiente';

    $requestSecurity = new ChromepolicyCustomersPoliciesGroupsBatchModifySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->chromepolicyCustomersPoliciesGroupsBatchModify($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## chromepolicyCustomersPoliciesGroupsListGroupPriorityOrdering

Retrieve a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleChromePolicyVersionsV1PolicyTargetKey;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleChromePolicyVersionsV1ListGroupPriorityOrderingRequest = new GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest();
    $request->googleChromePolicyVersionsV1ListGroupPriorityOrderingRequest->policyNamespace = 'odit';
    $request->googleChromePolicyVersionsV1ListGroupPriorityOrderingRequest->policySchema = 'at';
    $request->googleChromePolicyVersionsV1ListGroupPriorityOrderingRequest->policyTargetKey = new GoogleChromePolicyVersionsV1PolicyTargetKey();
    $request->googleChromePolicyVersionsV1ListGroupPriorityOrderingRequest->policyTargetKey->additionalTargetKeys = [
        'maiores' => 'molestiae',
        'quod' => 'quod',
        'esse' => 'totam',
        'porro' => 'dolorum',
    ];
    $request->googleChromePolicyVersionsV1ListGroupPriorityOrderingRequest->policyTargetKey->targetResource = 'dicta';
    $request->accessToken = 'nam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'occaecati';
    $request->customer = 'fugit';
    $request->fields = 'deleniti';
    $request->key = 'hic';
    $request->oauthToken = 'optio';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->uploadType = 'beatae';
    $request->uploadProtocol = 'commodi';

    $requestSecurity = new ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingSecurity();
    $requestSecurity->option1 = new ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->chromepolicyCustomersPoliciesGroupsListGroupPriorityOrdering($request, $requestSecurity);

    if ($response->googleChromePolicyVersionsV1ListGroupPriorityOrderingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## chromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrdering

Update a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrderingRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleChromePolicyVersionsV1PolicyTargetKey;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ChromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrderingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrderingRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest = new GoogleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest();
    $request->googleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest->groupIds = [
        'qui',
        'impedit',
    ];
    $request->googleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest->policyNamespace = 'cum';
    $request->googleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest->policySchema = 'esse';
    $request->googleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest->policyTargetKey = new GoogleChromePolicyVersionsV1PolicyTargetKey();
    $request->googleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest->policyTargetKey->additionalTargetKeys = [
        'excepturi' => 'aspernatur',
    ];
    $request->googleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest->policyTargetKey->targetResource = 'perferendis';
    $request->accessToken = 'ad';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sed';
    $request->customer = 'iste';
    $request->fields = 'dolor';
    $request->key = 'natus';
    $request->oauthToken = 'laboriosam';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'fuga';

    $requestSecurity = new ChromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrderingSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->chromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrdering($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## chromepolicyCustomersPoliciesNetworksDefineCertificate

Creates a certificate at a specified OU for a customer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChromepolicyCustomersPoliciesNetworksDefineCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleChromePolicyVersionsV1DefineCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleChromePolicyVersionsV1NetworkSetting;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ChromepolicyCustomersPoliciesNetworksDefineCertificateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChromepolicyCustomersPoliciesNetworksDefineCertificateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleChromePolicyVersionsV1DefineCertificateRequest = new GoogleChromePolicyVersionsV1DefineCertificateRequest();
    $request->googleChromePolicyVersionsV1DefineCertificateRequest->ceritificateName = 'corporis';
    $request->googleChromePolicyVersionsV1DefineCertificateRequest->certificate = 'iste';
    $request->googleChromePolicyVersionsV1DefineCertificateRequest->settings = [
        new GoogleChromePolicyVersionsV1NetworkSetting(),
        new GoogleChromePolicyVersionsV1NetworkSetting(),
    ];
    $request->googleChromePolicyVersionsV1DefineCertificateRequest->targetResource = 'saepe';
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsa';
    $request->customer = 'reiciendis';
    $request->fields = 'est';
    $request->key = 'mollitia';
    $request->oauthToken = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolores';
    $request->uploadType = 'dolorem';
    $request->uploadProtocol = 'corporis';

    $requestSecurity = new ChromepolicyCustomersPoliciesNetworksDefineCertificateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->chromepolicyCustomersPoliciesNetworksDefineCertificate($request, $requestSecurity);

    if ($response->googleChromePolicyVersionsV1DefineCertificateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## chromepolicyCustomersPoliciesNetworksDefineNetwork

Define a new network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChromepolicyCustomersPoliciesNetworksDefineNetworkRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleChromePolicyVersionsV1DefineNetworkRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleChromePolicyVersionsV1NetworkSetting;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ChromepolicyCustomersPoliciesNetworksDefineNetworkSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChromepolicyCustomersPoliciesNetworksDefineNetworkRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleChromePolicyVersionsV1DefineNetworkRequest = new GoogleChromePolicyVersionsV1DefineNetworkRequest();
    $request->googleChromePolicyVersionsV1DefineNetworkRequest->name = 'Ronnie Mohr';
    $request->googleChromePolicyVersionsV1DefineNetworkRequest->settings = [
        new GoogleChromePolicyVersionsV1NetworkSetting(),
        new GoogleChromePolicyVersionsV1NetworkSetting(),
        new GoogleChromePolicyVersionsV1NetworkSetting(),
    ];
    $request->googleChromePolicyVersionsV1DefineNetworkRequest->targetResource = 'accusantium';
    $request->accessToken = 'iure';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloribus';
    $request->customer = 'sapiente';
    $request->fields = 'architecto';
    $request->key = 'mollitia';
    $request->oauthToken = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'culpa';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'repellat';

    $requestSecurity = new ChromepolicyCustomersPoliciesNetworksDefineNetworkSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->chromepolicyCustomersPoliciesNetworksDefineNetwork($request, $requestSecurity);

    if ($response->googleChromePolicyVersionsV1DefineNetworkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## chromepolicyCustomersPoliciesNetworksRemoveCertificate

Remove an existing certificate by guid.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChromepolicyCustomersPoliciesNetworksRemoveCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleChromePolicyVersionsV1RemoveCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ChromepolicyCustomersPoliciesNetworksRemoveCertificateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChromepolicyCustomersPoliciesNetworksRemoveCertificateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleChromePolicyVersionsV1RemoveCertificateRequest = new GoogleChromePolicyVersionsV1RemoveCertificateRequest();
    $request->googleChromePolicyVersionsV1RemoveCertificateRequest->networkId = 'occaecati';
    $request->googleChromePolicyVersionsV1RemoveCertificateRequest->targetResource = 'numquam';
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->customer = 'velit';
    $request->fields = 'error';
    $request->key = 'quia';
    $request->oauthToken = 'quis';
    $request->prettyPrint = false;
    $request->quotaUser = 'vitae';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'animi';

    $requestSecurity = new ChromepolicyCustomersPoliciesNetworksRemoveCertificateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->chromepolicyCustomersPoliciesNetworksRemoveCertificate($request, $requestSecurity);

    if ($response->googleChromePolicyVersionsV1RemoveCertificateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## chromepolicyCustomersPoliciesNetworksRemoveNetwork

Remove an existing network by guid.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChromepolicyCustomersPoliciesNetworksRemoveNetworkRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleChromePolicyVersionsV1RemoveNetworkRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ChromepolicyCustomersPoliciesNetworksRemoveNetworkSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChromepolicyCustomersPoliciesNetworksRemoveNetworkRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleChromePolicyVersionsV1RemoveNetworkRequest = new GoogleChromePolicyVersionsV1RemoveNetworkRequest();
    $request->googleChromePolicyVersionsV1RemoveNetworkRequest->networkId = 'odit';
    $request->googleChromePolicyVersionsV1RemoveNetworkRequest->targetResource = 'quo';
    $request->accessToken = 'sequi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsam';
    $request->customer = 'id';
    $request->fields = 'possimus';
    $request->key = 'aut';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->uploadType = 'temporibus';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new ChromepolicyCustomersPoliciesNetworksRemoveNetworkSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->chromepolicyCustomersPoliciesNetworksRemoveNetwork($request, $requestSecurity);

    if ($response->googleChromePolicyVersionsV1RemoveNetworkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## chromepolicyCustomersPoliciesOrgunitsBatchInherit

Modify multiple policy values that are applied to a specific org unit so that they now inherit the value from a parent (if applicable). All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChromepolicyCustomersPoliciesOrgunitsBatchInheritRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleChromePolicyVersionsV1BatchInheritOrgUnitPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleChromePolicyVersionsV1PolicyTargetKey;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ChromepolicyCustomersPoliciesOrgunitsBatchInheritSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChromepolicyCustomersPoliciesOrgunitsBatchInheritRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleChromePolicyVersionsV1BatchInheritOrgUnitPoliciesRequest = new GoogleChromePolicyVersionsV1BatchInheritOrgUnitPoliciesRequest();
    $request->googleChromePolicyVersionsV1BatchInheritOrgUnitPoliciesRequest->requests = [
        new GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest(),
        new GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest(),
        new GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest(),
        new GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest(),
    ];
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nihil';
    $request->customer = 'praesentium';
    $request->fields = 'voluptatibus';
    $request->key = 'ipsa';
    $request->oauthToken = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new ChromepolicyCustomersPoliciesOrgunitsBatchInheritSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->chromepolicyCustomersPoliciesOrgunitsBatchInherit($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## chromepolicyCustomersPoliciesOrgunitsBatchModify

Modify multiple policy values that are applied to a specific org unit. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChromepolicyCustomersPoliciesOrgunitsBatchModifyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleChromePolicyVersionsV1PolicyTargetKey;
use \OpenAPI\OpenAPI\Models\Shared\GoogleChromePolicyVersionsV1PolicyValue;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ChromepolicyCustomersPoliciesOrgunitsBatchModifySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChromepolicyCustomersPoliciesOrgunitsBatchModifyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequest = new GoogleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequest();
    $request->googleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequest->requests = [
        new GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest(),
        new GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest(),
    ];
    $request->accessToken = 'ut';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->customer = 'corporis';
    $request->fields = 'dolore';
    $request->key = 'iusto';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'harum';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new ChromepolicyCustomersPoliciesOrgunitsBatchModifySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->chromepolicyCustomersPoliciesOrgunitsBatchModify($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## chromepolicyCustomersPoliciesResolve

Gets the resolved policy values for a list of policies that match a search query.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChromepolicyCustomersPoliciesResolveRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleChromePolicyVersionsV1ResolveRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleChromePolicyVersionsV1PolicyTargetKey;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ChromepolicyCustomersPoliciesResolveSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ChromepolicyCustomersPoliciesResolveSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ChromepolicyCustomersPoliciesResolveSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChromepolicyCustomersPoliciesResolveRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleChromePolicyVersionsV1ResolveRequest = new GoogleChromePolicyVersionsV1ResolveRequest();
    $request->googleChromePolicyVersionsV1ResolveRequest->pageSize = 918236;
    $request->googleChromePolicyVersionsV1ResolveRequest->pageToken = 'quae';
    $request->googleChromePolicyVersionsV1ResolveRequest->policySchemaFilter = 'ipsum';
    $request->googleChromePolicyVersionsV1ResolveRequest->policyTargetKey = new GoogleChromePolicyVersionsV1PolicyTargetKey();
    $request->googleChromePolicyVersionsV1ResolveRequest->policyTargetKey->additionalTargetKeys = [
        'molestias' => 'excepturi',
        'pariatur' => 'modi',
        'praesentium' => 'rem',
    ];
    $request->googleChromePolicyVersionsV1ResolveRequest->policyTargetKey->targetResource = 'voluptates';
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sint';
    $request->customer = 'veritatis';
    $request->fields = 'itaque';
    $request->key = 'incidunt';
    $request->oauthToken = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequatur';
    $request->uploadType = 'est';
    $request->uploadProtocol = 'quibusdam';

    $requestSecurity = new ChromepolicyCustomersPoliciesResolveSecurity();
    $requestSecurity->option1 = new ChromepolicyCustomersPoliciesResolveSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->chromepolicyCustomersPoliciesResolve($request, $requestSecurity);

    if ($response->googleChromePolicyVersionsV1ResolveResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## chromepolicyCustomersPolicySchemasGet

Get a specific policy schema for a customer by its resource name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChromepolicyCustomersPolicySchemasGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ChromepolicyCustomersPolicySchemasGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ChromepolicyCustomersPolicySchemasGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ChromepolicyCustomersPolicySchemasGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChromepolicyCustomersPolicySchemasGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'labore';
    $request->key = 'modi';
    $request->name = 'Beth McGlynn Sr.';
    $request->oauthToken = 'assumenda';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'alias';
    $request->uploadProtocol = 'fugit';

    $requestSecurity = new ChromepolicyCustomersPolicySchemasGetSecurity();
    $requestSecurity->option1 = new ChromepolicyCustomersPolicySchemasGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->chromepolicyCustomersPolicySchemasGet($request, $requestSecurity);

    if ($response->googleChromePolicyVersionsV1PolicySchema !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## chromepolicyCustomersPolicySchemasList

Gets a list of policy schemas that match a specified filter value for a given customer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChromepolicyCustomersPolicySchemasListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ChromepolicyCustomersPolicySchemasListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ChromepolicyCustomersPolicySchemasListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ChromepolicyCustomersPolicySchemasListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChromepolicyCustomersPolicySchemasListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'facilis';
    $request->fields = 'tempore';
    $request->filter = 'labore';
    $request->key = 'delectus';
    $request->oauthToken = 'eum';
    $request->pageSize = 248753;
    $request->pageToken = 'eligendi';
    $request->parent = 'sint';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'necessitatibus';

    $requestSecurity = new ChromepolicyCustomersPolicySchemasListSecurity();
    $requestSecurity->option1 = new ChromepolicyCustomersPolicySchemasListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->chromepolicyCustomersPolicySchemasList($request, $requestSecurity);

    if ($response->googleChromePolicyVersionsV1ListPolicySchemasResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
