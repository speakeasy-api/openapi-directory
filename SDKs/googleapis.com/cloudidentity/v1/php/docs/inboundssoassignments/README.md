# inboundSsoAssignments

### Available Operations

* [cloudidentityInboundSsoAssignmentsCreate](#cloudidentityinboundssoassignmentscreate) - Creates an InboundSsoAssignment for users and devices in a `Customer` under a given `Group` or `OrgUnit`.
* [cloudidentityInboundSsoAssignmentsDelete](#cloudidentityinboundssoassignmentsdelete) - Deletes an InboundSsoAssignment. To disable SSO, Create (or Update) an assignment that has `sso_mode` == `SSO_OFF`.
* [cloudidentityInboundSsoAssignmentsGet](#cloudidentityinboundssoassignmentsget) - Gets an InboundSsoAssignment.
* [cloudidentityInboundSsoAssignmentsList](#cloudidentityinboundssoassignmentslist) - Lists the InboundSsoAssignments for a `Customer`.
* [cloudidentityInboundSsoAssignmentsPatch](#cloudidentityinboundssoassignmentspatch) - Updates an InboundSsoAssignment. The body of this request is the `inbound_sso_assignment` field and the `update_mask` is relative to that. For example: a PATCH to `/v1/inboundSsoAssignments/0abcdefg1234567&update_mask=rank` with a body of `{ "rank": 1 }` moves that (presumably group-targeted) SSO assignment to the highest priority and shifts any other group-targeted assignments down in priority.

## cloudidentityInboundSsoAssignmentsCreate

Creates an InboundSsoAssignment for users and devices in a `Customer` under a given `Group` or `OrgUnit`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityInboundSsoAssignmentsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InboundSsoAssignmentInput;
use \OpenAPI\OpenAPI\Models\Shared\SamlSsoInfo;
use \OpenAPI\OpenAPI\Models\Shared\SignInBehavior;
use \OpenAPI\OpenAPI\Models\Shared\SignInBehaviorRedirectConditionEnum;
use \OpenAPI\OpenAPI\Models\Shared\InboundSsoAssignmentSsoModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityInboundSsoAssignmentsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudidentityInboundSsoAssignmentsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->inboundSsoAssignmentInput = new InboundSsoAssignmentInput();
    $request->inboundSsoAssignmentInput->customer = 'voluptate';
    $request->inboundSsoAssignmentInput->rank = 231701;
    $request->inboundSsoAssignmentInput->samlSsoInfo = new SamlSsoInfo();
    $request->inboundSsoAssignmentInput->samlSsoInfo->inboundSamlSsoProfile = 'vero';
    $request->inboundSsoAssignmentInput->signInBehavior = new SignInBehavior();
    $request->inboundSsoAssignmentInput->signInBehavior->redirectCondition = SignInBehaviorRedirectConditionEnum::NEVER;
    $request->inboundSsoAssignmentInput->ssoMode = InboundSsoAssignmentSsoModeEnum::SSO_OFF;
    $request->inboundSsoAssignmentInput->targetGroup = 'hic';
    $request->inboundSsoAssignmentInput->targetOrgUnit = 'distinctio';
    $request->accessToken = 'quod';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'similique';
    $request->fields = 'facilis';
    $request->key = 'vero';
    $request->oauthToken = 'ducimus';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolore';
    $request->uploadType = 'quibusdam';
    $request->uploadProtocol = 'illum';

    $requestSecurity = new CloudidentityInboundSsoAssignmentsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inboundSsoAssignments->cloudidentityInboundSsoAssignmentsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudidentityInboundSsoAssignmentsDelete

Deletes an InboundSsoAssignment. To disable SSO, Create (or Update) an assignment that has `sso_mode` == `SSO_OFF`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityInboundSsoAssignmentsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityInboundSsoAssignmentsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityInboundSsoAssignmentsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityInboundSsoAssignmentsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudidentityInboundSsoAssignmentsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'natus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aut';
    $request->customer = 'voluptatibus';
    $request->fields = 'exercitationem';
    $request->key = 'nulla';
    $request->name = 'Johnnie Wunsch';
    $request->oauthToken = 'eligendi';
    $request->prettyPrint = false;
    $request->quotaUser = 'ducimus';
    $request->uploadType = 'alias';
    $request->uploadProtocol = 'officia';

    $requestSecurity = new CloudidentityInboundSsoAssignmentsDeleteSecurity();
    $requestSecurity->option1 = new CloudidentityInboundSsoAssignmentsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inboundSsoAssignments->cloudidentityInboundSsoAssignmentsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudidentityInboundSsoAssignmentsGet

Gets an InboundSsoAssignment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityInboundSsoAssignmentsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityInboundSsoAssignmentsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityInboundSsoAssignmentsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityInboundSsoAssignmentsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityInboundSsoAssignmentsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudidentityInboundSsoAssignmentsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aspernatur';
    $request->fields = 'vel';
    $request->key = 'possimus';
    $request->name = 'Paula Jacobs I';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->readMask = 'ex';
    $request->uploadType = 'nulla';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new CloudidentityInboundSsoAssignmentsGetSecurity();
    $requestSecurity->option1 = new CloudidentityInboundSsoAssignmentsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inboundSsoAssignments->cloudidentityInboundSsoAssignmentsGet($request, $requestSecurity);

    if ($response->inboundSsoAssignment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudidentityInboundSsoAssignmentsList

Lists the InboundSsoAssignments for a `Customer`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityInboundSsoAssignmentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityInboundSsoAssignmentsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudidentityInboundSsoAssignmentsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nostrum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quisquam';
    $request->fields = 'saepe';
    $request->filter = 'ea';
    $request->key = 'impedit';
    $request->oauthToken = 'corporis';
    $request->pageSize = 333145;
    $request->pageToken = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'inventore';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new CloudidentityInboundSsoAssignmentsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inboundSsoAssignments->cloudidentityInboundSsoAssignmentsList($request, $requestSecurity);

    if ($response->listInboundSsoAssignmentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudidentityInboundSsoAssignmentsPatch

Updates an InboundSsoAssignment. The body of this request is the `inbound_sso_assignment` field and the `update_mask` is relative to that. For example: a PATCH to `/v1/inboundSsoAssignments/0abcdefg1234567&update_mask=rank` with a body of `{ "rank": 1 }` moves that (presumably group-targeted) SSO assignment to the highest priority and shifts any other group-targeted assignments down in priority.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityInboundSsoAssignmentsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InboundSsoAssignmentInput;
use \OpenAPI\OpenAPI\Models\Shared\SamlSsoInfo;
use \OpenAPI\OpenAPI\Models\Shared\SignInBehavior;
use \OpenAPI\OpenAPI\Models\Shared\SignInBehaviorRedirectConditionEnum;
use \OpenAPI\OpenAPI\Models\Shared\InboundSsoAssignmentSsoModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityInboundSsoAssignmentsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityInboundSsoAssignmentsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityInboundSsoAssignmentsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudidentityInboundSsoAssignmentsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->inboundSsoAssignmentInput = new InboundSsoAssignmentInput();
    $request->inboundSsoAssignmentInput->customer = 'consectetur';
    $request->inboundSsoAssignmentInput->rank = 926213;
    $request->inboundSsoAssignmentInput->samlSsoInfo = new SamlSsoInfo();
    $request->inboundSsoAssignmentInput->samlSsoInfo->inboundSamlSsoProfile = 'aspernatur';
    $request->inboundSsoAssignmentInput->signInBehavior = new SignInBehavior();
    $request->inboundSsoAssignmentInput->signInBehavior->redirectCondition = SignInBehaviorRedirectConditionEnum::REDIRECT_CONDITION_UNSPECIFIED;
    $request->inboundSsoAssignmentInput->ssoMode = InboundSsoAssignmentSsoModeEnum::SSO_MODE_UNSPECIFIED;
    $request->inboundSsoAssignmentInput->targetGroup = 'a';
    $request->inboundSsoAssignmentInput->targetOrgUnit = 'libero';
    $request->accessToken = 'aut';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deleniti';
    $request->fields = 'impedit';
    $request->key = 'aliquam';
    $request->name = 'Eloise Block MD';
    $request->oauthToken = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'placeat';
    $request->updateMask = 'velit';
    $request->uploadType = 'eum';
    $request->uploadProtocol = 'autem';

    $requestSecurity = new CloudidentityInboundSsoAssignmentsPatchSecurity();
    $requestSecurity->option1 = new CloudidentityInboundSsoAssignmentsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inboundSsoAssignments->cloudidentityInboundSsoAssignmentsPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
