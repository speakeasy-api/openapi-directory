# cases

### Available Operations

* [cloudsupportCasesAttachmentsList](#cloudsupportcasesattachmentslist) - Retrieve all attachments associated with a support case.
* [cloudsupportCasesClose](#cloudsupportcasesclose) - Close the specified case.
* [cloudsupportCasesCommentsCreate](#cloudsupportcasescommentscreate) - Add a new comment to the specified Case. The comment object must have the following fields set: body.
* [cloudsupportCasesCommentsList](#cloudsupportcasescommentslist) - Retrieve all Comments associated with the Case object.
* [cloudsupportCasesCreate](#cloudsupportcasescreate) - Create a new case and associate it with the given Google Cloud Resource. The case object must have the following fields set: `display_name`, `description`, `classification`, and `priority`.
* [cloudsupportCasesEscalate](#cloudsupportcasesescalate) - Escalate a case. Escalating a case will initiate the Google Cloud Support escalation management process. This operation is only available to certain Customer Care tiers. Go to https://cloud.google.com/support and look for 'Technical support escalations' in the feature list to find out which tiers are able to perform escalations.
* [cloudsupportCasesGet](#cloudsupportcasesget) - Retrieve the specified case.
* [cloudsupportCasesList](#cloudsupportcaseslist) - Retrieve all cases under the specified parent. Note: Listing cases under an Organization returns only the cases directly parented by that organization. To retrieve all cases under an organization, including cases parented by projects under that organization, use `cases.search`.
* [cloudsupportCasesPatch](#cloudsupportcasespatch) - Update the specified case. Only a subset of fields can be updated.
* [cloudsupportCasesSearch](#cloudsupportcasessearch) - Search cases using the specified query.

## cloudsupportCasesAttachmentsList

Retrieve all attachments associated with a support case.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsupportCasesAttachmentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsupportCasesAttachmentsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsupportCasesAttachmentsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'veritatis';
    $request->key = 'deserunt';
    $request->oauthToken = 'perferendis';
    $request->pageSize = 368241;
    $request->pageToken = 'repellendus';
    $request->parent = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'at';

    $requestSecurity = new CloudsupportCasesAttachmentsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->cases->cloudsupportCasesAttachmentsList($request, $requestSecurity);

    if ($response->listAttachmentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsupportCasesClose

Close the specified case.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsupportCasesCloseRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsupportCasesCloseSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsupportCasesCloseRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'molestiae' => 'quod',
        'quod' => 'esse',
        'totam' => 'porro',
        'dolorum' => 'dicta',
    ];
    $request->accessToken = 'nam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'occaecati';
    $request->fields = 'fugit';
    $request->key = 'deleniti';
    $request->name = 'Ms. Earnest Lebsack';
    $request->oauthToken = 'modi';
    $request->prettyPrint = false;
    $request->quotaUser = 'qui';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'cum';

    $requestSecurity = new CloudsupportCasesCloseSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->cases->cloudsupportCasesClose($request, $requestSecurity);

    if ($response->case !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsupportCasesCommentsCreate

Add a new comment to the specified Case. The comment object must have the following fields set: body.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsupportCasesCommentsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CommentInput;
use \OpenAPI\OpenAPI\Models\Shared\ActorInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsupportCasesCommentsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsupportCasesCommentsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->commentInput = new CommentInput();
    $request->commentInput->body = 'ipsum';
    $request->commentInput->creator = new ActorInput();
    $request->commentInput->creator->displayName = 'excepturi';
    $request->commentInput->creator->email = 'Aiden.Hane@gmail.com';
    $request->accessToken = 'iste';
    $request->alt = AltEnum::JSON;
    $request->callback = 'natus';
    $request->fields = 'laboriosam';
    $request->key = 'hic';
    $request->oauthToken = 'saepe';
    $request->parent = 'fuga';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'iste';

    $requestSecurity = new CloudsupportCasesCommentsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->cases->cloudsupportCasesCommentsCreate($request, $requestSecurity);

    if ($response->comment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsupportCasesCommentsList

Retrieve all Comments associated with the Case object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsupportCasesCommentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsupportCasesCommentsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsupportCasesCommentsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'architecto';
    $request->fields = 'ipsa';
    $request->key = 'reiciendis';
    $request->oauthToken = 'est';
    $request->pageSize = 653140;
    $request->pageToken = 'laborum';
    $request->parent = 'dolores';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'explicabo';

    $requestSecurity = new CloudsupportCasesCommentsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->cases->cloudsupportCasesCommentsList($request, $requestSecurity);

    if ($response->listCommentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsupportCasesCreate

Create a new case and associate it with the given Google Cloud Resource. The case object must have the following fields set: `display_name`, `description`, `classification`, and `priority`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsupportCasesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CaseInput;
use \OpenAPI\OpenAPI\Models\Shared\CaseClassification;
use \OpenAPI\OpenAPI\Models\Shared\ActorInput;
use \OpenAPI\OpenAPI\Models\Shared\CasePriorityEnum;
use \OpenAPI\OpenAPI\Models\Shared\CaseSeverityEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsupportCasesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsupportCasesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->caseInput = new CaseInput();
    $request->caseInput->classification = new CaseClassification();
    $request->caseInput->classification->displayName = 'enim';
    $request->caseInput->classification->id = '955907af-f1a3-4a2f-a946-7739251aa52c';
    $request->caseInput->contactEmail = 'sequi';
    $request->caseInput->creator = new ActorInput();
    $request->caseInput->creator->displayName = 'tenetur';
    $request->caseInput->creator->email = 'Makayla9@yahoo.com';
    $request->caseInput->description = 'error';
    $request->caseInput->displayName = 'temporibus';
    $request->caseInput->escalated = false;
    $request->caseInput->languageCode = 'laborum';
    $request->caseInput->name = 'Johanna Wolf';
    $request->caseInput->priority = CasePriorityEnum::P2;
    $request->caseInput->severity = CaseSeverityEnum::S4;
    $request->caseInput->subscriberEmailAddresses = [
        'omnis',
    ];
    $request->caseInput->testCase = false;
    $request->caseInput->timeZone = 'voluptate';
    $request->accessToken = 'cum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'doloremque';
    $request->fields = 'reprehenderit';
    $request->key = 'ut';
    $request->oauthToken = 'maiores';
    $request->parent = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'iusto';

    $requestSecurity = new CloudsupportCasesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->cases->cloudsupportCasesCreate($request, $requestSecurity);

    if ($response->case !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsupportCasesEscalate

Escalate a case. Escalating a case will initiate the Google Cloud Support escalation management process. This operation is only available to certain Customer Care tiers. Go to https://cloud.google.com/support and look for 'Technical support escalations' in the feature list to find out which tiers are able to perform escalations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsupportCasesEscalateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\EscalateCaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\Escalation;
use \OpenAPI\OpenAPI\Models\Shared\EscalationReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsupportCasesEscalateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsupportCasesEscalateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->escalateCaseRequest = new EscalateCaseRequest();
    $request->escalateCaseRequest->escalation = new Escalation();
    $request->escalateCaseRequest->escalation->justification = 'harum';
    $request->escalateCaseRequest->escalation->reason = EscalationReasonEnum::RESOLUTION_TIME;
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'repudiandae';
    $request->fields = 'quae';
    $request->key = 'ipsum';
    $request->name = 'Virgil Mante';
    $request->oauthToken = 'praesentium';
    $request->prettyPrint = false;
    $request->quotaUser = 'rem';
    $request->uploadType = 'voluptates';
    $request->uploadProtocol = 'quasi';

    $requestSecurity = new CloudsupportCasesEscalateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->cases->cloudsupportCasesEscalate($request, $requestSecurity);

    if ($response->case !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsupportCasesGet

Retrieve the specified case.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsupportCasesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsupportCasesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsupportCasesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sint';
    $request->alt = AltEnum::JSON;
    $request->callback = 'itaque';
    $request->fields = 'incidunt';
    $request->key = 'enim';
    $request->name = 'Monique Spinka';
    $request->oauthToken = 'distinctio';
    $request->prettyPrint = false;
    $request->quotaUser = 'quibusdam';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'modi';

    $requestSecurity = new CloudsupportCasesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->cases->cloudsupportCasesGet($request, $requestSecurity);

    if ($response->case !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsupportCasesList

Retrieve all cases under the specified parent. Note: Listing cases under an Organization returns only the cases directly parented by that organization. To retrieve all cases under an organization, including cases parented by projects under that organization, use `cases.search`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsupportCasesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsupportCasesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsupportCasesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quos';
    $request->fields = 'perferendis';
    $request->filter = 'magni';
    $request->key = 'assumenda';
    $request->oauthToken = 'ipsam';
    $request->pageSize = 4695;
    $request->pageToken = 'fugit';
    $request->parent = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'facilis';

    $requestSecurity = new CloudsupportCasesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->cases->cloudsupportCasesList($request, $requestSecurity);

    if ($response->listCasesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsupportCasesPatch

Update the specified case. Only a subset of fields can be updated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsupportCasesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CaseInput;
use \OpenAPI\OpenAPI\Models\Shared\CaseClassification;
use \OpenAPI\OpenAPI\Models\Shared\ActorInput;
use \OpenAPI\OpenAPI\Models\Shared\CasePriorityEnum;
use \OpenAPI\OpenAPI\Models\Shared\CaseSeverityEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsupportCasesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsupportCasesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->caseInput = new CaseInput();
    $request->caseInput->classification = new CaseClassification();
    $request->caseInput->classification->displayName = 'labore';
    $request->caseInput->classification->id = 'f63c969e-9a3e-4fa7-bdfb-14cd66ae395e';
    $request->caseInput->contactEmail = 'delectus';
    $request->caseInput->creator = new ActorInput();
    $request->caseInput->creator->displayName = 'quidem';
    $request->caseInput->creator->email = 'Mohammad_Olson@yahoo.com';
    $request->caseInput->description = 'sapiente';
    $request->caseInput->displayName = 'amet';
    $request->caseInput->escalated = false;
    $request->caseInput->languageCode = 'deserunt';
    $request->caseInput->name = 'Wilma Mosciski';
    $request->caseInput->priority = CasePriorityEnum::PRIORITY_UNSPECIFIED;
    $request->caseInput->severity = CaseSeverityEnum::S1;
    $request->caseInput->subscriberEmailAddresses = [
        'distinctio',
        'id',
    ];
    $request->caseInput->testCase = false;
    $request->caseInput->timeZone = 'labore';
    $request->accessToken = 'labore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'natus';
    $request->fields = 'nobis';
    $request->key = 'eum';
    $request->name = 'Brandon Brakus V';
    $request->oauthToken = 'ullam';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->updateMask = 'quos';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'accusantium';

    $requestSecurity = new CloudsupportCasesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->cases->cloudsupportCasesPatch($request, $requestSecurity);

    if ($response->case !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsupportCasesSearch

Search cases using the specified query.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsupportCasesSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsupportCasesSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsupportCasesSearchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ad';
    $request->fields = 'eum';
    $request->key = 'dolor';
    $request->oauthToken = 'necessitatibus';
    $request->pageSize = 141264;
    $request->pageToken = 'nemo';
    $request->prettyPrint = false;
    $request->query = 'quasi';
    $request->quotaUser = 'iure';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'debitis';

    $requestSecurity = new CloudsupportCasesSearchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->cases->cloudsupportCasesSearch($request, $requestSecurity);

    if ($response->searchCasesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
