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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->responsePolicyRule = new ResponsePolicyRule();
    $request->responsePolicyRule->behavior = ResponsePolicyRuleBehaviorEnum::BYPASS_RESPONSE_POLICY;
    $request->responsePolicyRule->dnsName = 'maxime';
    $request->responsePolicyRule->kind = 'dignissimos';
    $request->responsePolicyRule->localData = new ResponsePolicyRuleLocalData();
    $request->responsePolicyRule->localData->localDatas = [
        new ResourceRecordSet(),
        new ResourceRecordSet(),
        new ResourceRecordSet(),
    ];
    $request->responsePolicyRule->ruleName = 'asperiores';
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quaerat';
    $request->clientOperationId = 'porro';
    $request->fields = 'quod';
    $request->key = 'labore';
    $request->location = 'ab';
    $request->oauthToken = 'adipisci';
    $request->prettyPrint = false;
    $request->project = 'fuga';
    $request->quotaUser = 'id';
    $request->responsePolicy = 'suscipit';
    $request->uploadType = 'velit';
    $request->uploadProtocol = 'culpa';

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
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'fugiat';
    $request->clientOperationId = 'vel';
    $request->fields = 'ducimus';
    $request->key = 'quos';
    $request->location = 'vel';
    $request->oauthToken = 'labore';
    $request->prettyPrint = false;
    $request->project = 'possimus';
    $request->quotaUser = 'facilis';
    $request->responsePolicy = 'cum';
    $request->responsePolicyRule = 'commodi';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'corporis';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'assumenda';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'recusandae';
    $request->clientOperationId = 'aliquid';
    $request->fields = 'aperiam';
    $request->key = 'cum';
    $request->location = 'consectetur';
    $request->oauthToken = 'in';
    $request->prettyPrint = false;
    $request->project = 'exercitationem';
    $request->quotaUser = 'earum';
    $request->responsePolicy = 'facere';
    $request->responsePolicyRule = 'numquam';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'suscipit';

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
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'necessitatibus';
    $request->fields = 'dolore';
    $request->key = 'sunt';
    $request->location = 'asperiores';
    $request->maxResults = 241545;
    $request->oauthToken = 'non';
    $request->pageToken = 'amet';
    $request->prettyPrint = false;
    $request->project = 'beatae';
    $request->quotaUser = 'dignissimos';
    $request->responsePolicy = 'a';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'consectetur';

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
    $request->responsePolicyRule1->dnsName = 'laboriosam';
    $request->responsePolicyRule1->kind = 'ipsa';
    $request->responsePolicyRule1->localData = new ResponsePolicyRuleLocalData();
    $request->responsePolicyRule1->localData->localDatas = [
        new ResourceRecordSet(),
        new ResourceRecordSet(),
        new ResourceRecordSet(),
        new ResourceRecordSet(),
    ];
    $request->responsePolicyRule1->ruleName = 'libero';
    $request->accessToken = 'vitae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'similique';
    $request->clientOperationId = 'tempora';
    $request->fields = 'aspernatur';
    $request->key = 'voluptas';
    $request->location = 'voluptas';
    $request->oauthToken = 'voluptas';
    $request->prettyPrint = false;
    $request->project = 'minima';
    $request->quotaUser = 'nobis';
    $request->responsePolicy = 'dolorum';
    $request->responsePolicyRulePathParameter = 'adipisci';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'dolores';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->responsePolicyRule1 = new ResponsePolicyRule();
    $request->responsePolicyRule1->behavior = ResponsePolicyRuleBehaviorEnum::BEHAVIOR_UNSPECIFIED;
    $request->responsePolicyRule1->dnsName = 'dolore';
    $request->responsePolicyRule1->kind = 'aliquam';
    $request->responsePolicyRule1->localData = new ResponsePolicyRuleLocalData();
    $request->responsePolicyRule1->localData->localDatas = [
        new ResourceRecordSet(),
        new ResourceRecordSet(),
        new ResourceRecordSet(),
        new ResourceRecordSet(),
    ];
    $request->responsePolicyRule1->ruleName = 'temporibus';
    $request->accessToken = 'ullam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'cum';
    $request->clientOperationId = 'blanditiis';
    $request->fields = 'quas';
    $request->key = 'hic';
    $request->location = 'nesciunt';
    $request->oauthToken = 'culpa';
    $request->prettyPrint = false;
    $request->project = 'corrupti';
    $request->quotaUser = 'pariatur';
    $request->responsePolicy = 'totam';
    $request->responsePolicyRulePathParameter = 'hic';
    $request->uploadType = 'exercitationem';
    $request->uploadProtocol = 'nobis';

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
