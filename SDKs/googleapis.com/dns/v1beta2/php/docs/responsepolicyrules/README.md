# responsePolicyRules

### Available Operations

* [dnsResponsePolicyRulesCreate](#dnsresponsepolicyrulescreate) - Creates a new Response Policy Rule.
* [dnsResponsePolicyRulesDelete](#dnsresponsepolicyrulesdelete) - Deletes a previously created Response Policy Rule.
* [dnsResponsePolicyRulesGet](#dnsresponsepolicyrulesget) - Fetches the representation of an existing Response Policy Rule.
* [dnsResponsePolicyRulesList](#dnsresponsepolicyruleslist) - Enumerates all Response Policy Rules associated with a project.
* [dnsResponsePolicyRulesPatch](#dnsresponsepolicyrulespatch) - Applies a partial update to an existing Response Policy Rule.
* [dnsResponsePolicyRulesUpdate](#dnsresponsepolicyrulesupdate) - Updates an existing Response Policy Rule.

## dnsResponsePolicyRulesCreate

Creates a new Response Policy Rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePolicyRulesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResponsePolicyRule;
use \OpenAPI\OpenAPI\Models\Shared\ResponsePolicyRuleBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResponsePolicyRuleLocalData;
use \OpenAPI\OpenAPI\Models\Shared\ResourceRecordSet;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyGeoPolicy;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyGeoPolicyGeoPolicyItem;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyHealthCheckTargets;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyLoadBalancerTarget;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyPrimaryBackupPolicy;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyWrrPolicy;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyWrrPolicyWrrPolicyItem;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePolicyRulesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePolicyRulesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePolicyRulesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DnsResponsePolicyRulesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->responsePolicyRule = new ResponsePolicyRule();
    $request->responsePolicyRule->behavior = ResponsePolicyRuleBehaviorEnum::BEHAVIOR_UNSPECIFIED;
    $request->responsePolicyRule->dnsName = 'veritatis';
    $request->responsePolicyRule->kind = 'consectetur';
    $request->responsePolicyRule->localData = new ResponsePolicyRuleLocalData();
    $request->responsePolicyRule->localData->localDatas = [
        new ResourceRecordSet(),
    ];
    $request->responsePolicyRule->ruleName = 'iste';
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'rem';
    $request->clientOperationId = 'aut';
    $request->fields = 'laudantium';
    $request->key = 'eum';
    $request->oauthToken = 'mollitia';
    $request->prettyPrint = false;
    $request->project = 'ab';
    $request->quotaUser = 'corrupti';
    $request->responsePolicy = 'non';
    $request->uploadType = 'voluptatem';
    $request->uploadProtocol = 'dolor';

    $requestSecurity = new DnsResponsePolicyRulesCreateSecurity();
    $requestSecurity->option1 = new DnsResponsePolicyRulesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->responsePolicyRules->dnsResponsePolicyRulesCreate($request, $requestSecurity);

    if ($response->responsePolicyRule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dnsResponsePolicyRulesDelete

Deletes a previously created Response Policy Rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePolicyRulesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePolicyRulesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePolicyRulesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePolicyRulesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DnsResponsePolicyRulesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'numquam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'explicabo';
    $request->clientOperationId = 'voluptas';
    $request->fields = 'aut';
    $request->key = 'dignissimos';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->project = 'maiores';
    $request->quotaUser = 'natus';
    $request->responsePolicy = 'velit';
    $request->responsePolicyRule = 'voluptatibus';
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'asperiores';

    $requestSecurity = new DnsResponsePolicyRulesDeleteSecurity();
    $requestSecurity->option1 = new DnsResponsePolicyRulesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->responsePolicyRules->dnsResponsePolicyRulesDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dnsResponsePolicyRulesGet

Fetches the representation of an existing Response Policy Rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePolicyRulesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePolicyRulesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePolicyRulesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePolicyRulesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePolicyRulesGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePolicyRulesGetSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DnsResponsePolicyRulesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ea';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consequuntur';
    $request->clientOperationId = 'repellendus';
    $request->fields = 'officia';
    $request->key = 'maxime';
    $request->oauthToken = 'dignissimos';
    $request->prettyPrint = false;
    $request->project = 'officia';
    $request->quotaUser = 'asperiores';
    $request->responsePolicy = 'nemo';
    $request->responsePolicyRule = 'quae';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'porro';

    $requestSecurity = new DnsResponsePolicyRulesGetSecurity();
    $requestSecurity->option1 = new DnsResponsePolicyRulesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->responsePolicyRules->dnsResponsePolicyRulesGet($request, $requestSecurity);

    if ($response->responsePolicyRule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dnsResponsePolicyRulesList

Enumerates all Response Policy Rules associated with a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePolicyRulesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePolicyRulesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePolicyRulesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePolicyRulesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePolicyRulesListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePolicyRulesListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DnsResponsePolicyRulesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'labore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'adipisci';
    $request->fields = 'fuga';
    $request->key = 'id';
    $request->maxResults = 380729;
    $request->oauthToken = 'velit';
    $request->pageToken = 'culpa';
    $request->prettyPrint = false;
    $request->project = 'est';
    $request->quotaUser = 'recusandae';
    $request->responsePolicy = 'totam';
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'vel';

    $requestSecurity = new DnsResponsePolicyRulesListSecurity();
    $requestSecurity->option1 = new DnsResponsePolicyRulesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->responsePolicyRules->dnsResponsePolicyRulesList($request, $requestSecurity);

    if ($response->responsePolicyRulesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dnsResponsePolicyRulesPatch

Applies a partial update to an existing Response Policy Rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePolicyRulesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResponsePolicyRule;
use \OpenAPI\OpenAPI\Models\Shared\ResponsePolicyRuleBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResponsePolicyRuleLocalData;
use \OpenAPI\OpenAPI\Models\Shared\ResourceRecordSet;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyGeoPolicy;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyGeoPolicyGeoPolicyItem;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyHealthCheckTargets;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyLoadBalancerTarget;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyPrimaryBackupPolicy;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyWrrPolicy;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyWrrPolicyWrrPolicyItem;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePolicyRulesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePolicyRulesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePolicyRulesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DnsResponsePolicyRulesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->responsePolicyRule1 = new ResponsePolicyRule();
    $request->responsePolicyRule1->behavior = ResponsePolicyRuleBehaviorEnum::BYPASS_RESPONSE_POLICY;
    $request->responsePolicyRule1->dnsName = 'vel';
    $request->responsePolicyRule1->kind = 'labore';
    $request->responsePolicyRule1->localData = new ResponsePolicyRuleLocalData();
    $request->responsePolicyRule1->localData->localDatas = [
        new ResourceRecordSet(),
        new ResourceRecordSet(),
        new ResourceRecordSet(),
        new ResourceRecordSet(),
    ];
    $request->responsePolicyRule1->ruleName = 'facilis';
    $request->accessToken = 'cum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'in';
    $request->clientOperationId = 'corporis';
    $request->fields = 'reiciendis';
    $request->key = 'assumenda';
    $request->oauthToken = 'nemo';
    $request->prettyPrint = false;
    $request->project = 'recusandae';
    $request->quotaUser = 'aliquid';
    $request->responsePolicy = 'aperiam';
    $request->responsePolicyRulePathParameter = 'cum';
    $request->uploadType = 'consectetur';
    $request->uploadProtocol = 'in';

    $requestSecurity = new DnsResponsePolicyRulesPatchSecurity();
    $requestSecurity->option1 = new DnsResponsePolicyRulesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->responsePolicyRules->dnsResponsePolicyRulesPatch($request, $requestSecurity);

    if ($response->responsePolicyRulesPatchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dnsResponsePolicyRulesUpdate

Updates an existing Response Policy Rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePolicyRulesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResponsePolicyRule;
use \OpenAPI\OpenAPI\Models\Shared\ResponsePolicyRuleBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResponsePolicyRuleLocalData;
use \OpenAPI\OpenAPI\Models\Shared\ResourceRecordSet;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyGeoPolicy;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyGeoPolicyGeoPolicyItem;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyHealthCheckTargets;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyLoadBalancerTarget;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyPrimaryBackupPolicy;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyWrrPolicy;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyWrrPolicyWrrPolicyItem;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePolicyRulesUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePolicyRulesUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DnsResponsePolicyRulesUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DnsResponsePolicyRulesUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->responsePolicyRule1 = new ResponsePolicyRule();
    $request->responsePolicyRule1->behavior = ResponsePolicyRuleBehaviorEnum::BYPASS_RESPONSE_POLICY;
    $request->responsePolicyRule1->dnsName = 'facere';
    $request->responsePolicyRule1->kind = 'numquam';
    $request->responsePolicyRule1->localData = new ResponsePolicyRuleLocalData();
    $request->responsePolicyRule1->localData->localDatas = [
        new ResourceRecordSet(),
        new ResourceRecordSet(),
        new ResourceRecordSet(),
        new ResourceRecordSet(),
    ];
    $request->responsePolicyRule1->ruleName = 'suscipit';
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'saepe';
    $request->clientOperationId = 'necessitatibus';
    $request->fields = 'dolore';
    $request->key = 'sunt';
    $request->oauthToken = 'asperiores';
    $request->prettyPrint = false;
    $request->project = 'adipisci';
    $request->quotaUser = 'non';
    $request->responsePolicy = 'amet';
    $request->responsePolicyRulePathParameter = 'beatae';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'a';

    $requestSecurity = new DnsResponsePolicyRulesUpdateSecurity();
    $requestSecurity->option1 = new DnsResponsePolicyRulesUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->responsePolicyRules->dnsResponsePolicyRulesUpdate($request, $requestSecurity);

    if ($response->responsePolicyRulesUpdateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
