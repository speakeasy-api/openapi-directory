# projects

### Available Operations

* [firebaserulesProjectsReleasesCreate](#firebaserulesprojectsreleasescreate) - Create a `Release`. Release names should reflect the developer's deployment practices. For example, the release name may include the environment name, application name, application version, or any other name meaningful to the developer. Once a `Release` refers to a `Ruleset`, the rules can be enforced by Firebase Rules-enabled services. More than one `Release` may be 'live' concurrently. Consider the following three `Release` names for `projects/foo` and the `Ruleset` to which they refer. Release Name -> Ruleset Name * projects/foo/releases/prod -> projects/foo/rulesets/uuid123 * projects/foo/releases/prod/beta -> projects/foo/rulesets/uuid123 * projects/foo/releases/prod/v23 -> projects/foo/rulesets/uuid456 The relationships reflect a `Ruleset` rollout in progress. The `prod` and `prod/beta` releases refer to the same `Ruleset`. However, `prod/v23` refers to a new `Ruleset`. The `Ruleset` reference for a `Release` may be updated using the UpdateRelease method.
* [firebaserulesProjectsReleasesGetExecutable](#firebaserulesprojectsreleasesgetexecutable) - Get the `Release` executable to use when enforcing rules.
* [firebaserulesProjectsReleasesList](#firebaserulesprojectsreleaseslist) - List the `Release` values for a project. This list may optionally be filtered by `Release` name, `Ruleset` name, `TestSuite` name, or any combination thereof.
* [firebaserulesProjectsReleasesPatch](#firebaserulesprojectsreleasespatch) - Update a `Release` via PATCH. Only updates to `ruleset_name` will be honored. `Release` rename is not supported. To create a `Release` use the CreateRelease method.
* [firebaserulesProjectsRulesetsCreate](#firebaserulesprojectsrulesetscreate) - Create a `Ruleset` from `Source`. The `Ruleset` is given a unique generated name which is returned to the caller. `Source` containing syntactic or semantics errors will result in an error response indicating the first error encountered. For a detailed view of `Source` issues, use TestRuleset.
* [firebaserulesProjectsRulesetsDelete](#firebaserulesprojectsrulesetsdelete) - Delete a `Ruleset` by resource name. If the `Ruleset` is referenced by a `Release` the operation will fail.
* [firebaserulesProjectsRulesetsGet](#firebaserulesprojectsrulesetsget) - Get a `Ruleset` by name including the full `Source` contents.
* [firebaserulesProjectsRulesetsList](#firebaserulesprojectsrulesetslist) - List `Ruleset` metadata only and optionally filter the results by `Ruleset` name. The full `Source` contents of a `Ruleset` may be retrieved with GetRuleset.
* [firebaserulesProjectsTest](#firebaserulesprojectstest) - Test `Source` for syntactic and semantic correctness. Issues present, if any, will be returned to the caller with a description, severity, and source location. The test method may be executed with `Source` or a `Ruleset` name. Passing `Source` is useful for unit testing new rules. Passing a `Ruleset` name is useful for regression testing an existing rule. The following is an example of `Source` that permits users to upload images to a bucket bearing their user id and matching the correct metadata: _*Example*_ // Users are allowed to subscribe and unsubscribe to the blog. service firebase.storage { match /users/{userId}/images/{imageName} { allow write: if userId == request.auth.uid && (imageName.matches('*.png$') || imageName.matches('*.jpg$')) && resource.mimeType.matches('^image/') } }

## firebaserulesProjectsReleasesCreate

Create a `Release`. Release names should reflect the developer's deployment practices. For example, the release name may include the environment name, application name, application version, or any other name meaningful to the developer. Once a `Release` refers to a `Ruleset`, the rules can be enforced by Firebase Rules-enabled services. More than one `Release` may be 'live' concurrently. Consider the following three `Release` names for `projects/foo` and the `Ruleset` to which they refer. Release Name -> Ruleset Name * projects/foo/releases/prod -> projects/foo/rulesets/uuid123 * projects/foo/releases/prod/beta -> projects/foo/rulesets/uuid123 * projects/foo/releases/prod/v23 -> projects/foo/rulesets/uuid456 The relationships reflect a `Ruleset` rollout in progress. The `prod` and `prod/beta` releases refer to the same `Ruleset`. However, `prod/v23` refers to a new `Ruleset`. The `Ruleset` reference for a `Release` may be updated using the UpdateRelease method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsReleasesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReleaseInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsReleasesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsReleasesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsReleasesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaserulesProjectsReleasesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->releaseInput = new ReleaseInput();
    $request->releaseInput->name = 'Miriam Huel';
    $request->releaseInput->rulesetName = 'ab';
    $request->accessToken = 'quis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deserunt';
    $request->fields = 'perferendis';
    $request->key = 'ipsam';
    $request->name = 'Timmy Satterfield';
    $request->oauthToken = 'at';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'quod';

    $requestSecurity = new FirebaserulesProjectsReleasesCreateSecurity();
    $requestSecurity->option1 = new FirebaserulesProjectsReleasesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaserulesProjectsReleasesCreate($request, $requestSecurity);

    if ($response->release !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaserulesProjectsReleasesGetExecutable

Get the `Release` executable to use when enforcing rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsReleasesGetExecutableRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsReleasesGetExecutableExecutableVersionEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsReleasesGetExecutableSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsReleasesGetExecutableSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsReleasesGetExecutableSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsReleasesGetExecutableSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaserulesProjectsReleasesGetExecutableRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'esse';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'porro';
    $request->executableVersion = FirebaserulesProjectsReleasesGetExecutableExecutableVersionEnum::FIREBASE_RULES_EXECUTABLE_V2;
    $request->fields = 'dicta';
    $request->key = 'nam';
    $request->name = 'Seth Conroy';
    $request->oauthToken = 'optio';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->uploadType = 'beatae';
    $request->uploadProtocol = 'commodi';

    $requestSecurity = new FirebaserulesProjectsReleasesGetExecutableSecurity();
    $requestSecurity->option1 = new FirebaserulesProjectsReleasesGetExecutableSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaserulesProjectsReleasesGetExecutable($request, $requestSecurity);

    if ($response->getReleaseExecutableResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaserulesProjectsReleasesList

List the `Release` values for a project. This list may optionally be filtered by `Release` name, `Ruleset` name, `TestSuite` name, or any combination thereof.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsReleasesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsReleasesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsReleasesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsReleasesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsReleasesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaserulesProjectsReleasesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'modi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'impedit';
    $request->fields = 'cum';
    $request->filter = 'esse';
    $request->key = 'ipsum';
    $request->name = 'Brandon Auer';
    $request->oauthToken = 'sed';
    $request->pageSize = 612096;
    $request->pageToken = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->uploadType = 'laboriosam';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new FirebaserulesProjectsReleasesListSecurity();
    $requestSecurity->option1 = new FirebaserulesProjectsReleasesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaserulesProjectsReleasesList($request, $requestSecurity);

    if ($response->listReleasesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaserulesProjectsReleasesPatch

Update a `Release` via PATCH. Only updates to `ruleset_name` will be honored. `Release` rename is not supported. To create a `Release` use the CreateRelease method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsReleasesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateReleaseRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\ReleaseInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsReleasesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsReleasesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsReleasesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaserulesProjectsReleasesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->updateReleaseRequestInput = new UpdateReleaseRequestInput();
    $request->updateReleaseRequestInput->release = new ReleaseInput();
    $request->updateReleaseRequestInput->release->name = 'Harvey Hessel';
    $request->updateReleaseRequestInput->release->rulesetName = 'saepe';
    $request->updateReleaseRequestInput->updateMask = 'quidem';
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'reiciendis';
    $request->fields = 'est';
    $request->key = 'mollitia';
    $request->name = 'Ernest Ebert';
    $request->oauthToken = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'nemo';

    $requestSecurity = new FirebaserulesProjectsReleasesPatchSecurity();
    $requestSecurity->option1 = new FirebaserulesProjectsReleasesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaserulesProjectsReleasesPatch($request, $requestSecurity);

    if ($response->release !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaserulesProjectsRulesetsCreate

Create a `Ruleset` from `Source`. The `Ruleset` is given a unique generated name which is returned to the caller. `Source` containing syntactic or semantics errors will result in an error response indicating the first error encountered. For a detailed view of `Source` issues, use TestRuleset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsRulesetsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RulesetInput;
use \OpenAPI\OpenAPI\Models\Shared\Metadata;
use \OpenAPI\OpenAPI\Models\Shared\Source;
use \OpenAPI\OpenAPI\Models\Shared\File;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsRulesetsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsRulesetsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsRulesetsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaserulesProjectsRulesetsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->rulesetInput = new RulesetInput();
    $request->rulesetInput->metadata = new Metadata();
    $request->rulesetInput->metadata->services = [
        'accusantium',
        'iure',
        'culpa',
    ];
    $request->rulesetInput->source = new Source();
    $request->rulesetInput->source->files = [
        new File(),
        new File(),
        new File(),
        new File(),
    ];
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::JSON;
    $request->callback = 'mollitia';
    $request->fields = 'dolorem';
    $request->key = 'culpa';
    $request->name = 'Jaime O'Hara';
    $request->oauthToken = 'commodi';
    $request->prettyPrint = false;
    $request->quotaUser = 'quam';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'velit';

    $requestSecurity = new FirebaserulesProjectsRulesetsCreateSecurity();
    $requestSecurity->option1 = new FirebaserulesProjectsRulesetsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaserulesProjectsRulesetsCreate($request, $requestSecurity);

    if ($response->ruleset !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaserulesProjectsRulesetsDelete

Delete a `Ruleset` by resource name. If the `Ruleset` is referenced by a `Release` the operation will fail.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsRulesetsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsRulesetsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsRulesetsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsRulesetsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaserulesProjectsRulesetsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vitae';
    $request->fields = 'laborum';
    $request->key = 'animi';
    $request->name = 'Christina Satterfield';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'id';
    $request->uploadType = 'possimus';
    $request->uploadProtocol = 'aut';

    $requestSecurity = new FirebaserulesProjectsRulesetsDeleteSecurity();
    $requestSecurity->option1 = new FirebaserulesProjectsRulesetsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaserulesProjectsRulesetsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaserulesProjectsRulesetsGet

Get a `Ruleset` by name including the full `Source` contents.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsRulesetsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsRulesetsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsRulesetsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsRulesetsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsRulesetsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaserulesProjectsRulesetsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'error';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'laborum';
    $request->fields = 'quasi';
    $request->key = 'reiciendis';
    $request->name = 'Caleb Koss';
    $request->oauthToken = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'cum';

    $requestSecurity = new FirebaserulesProjectsRulesetsGetSecurity();
    $requestSecurity->option1 = new FirebaserulesProjectsRulesetsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaserulesProjectsRulesetsGet($request, $requestSecurity);

    if ($response->ruleset !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaserulesProjectsRulesetsList

List `Ruleset` metadata only and optionally filter the results by `Ruleset` name. The full `Source` contents of a `Ruleset` may be retrieved with GetRuleset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsRulesetsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsRulesetsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsRulesetsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsRulesetsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsRulesetsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaserulesProjectsRulesetsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'doloremque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ut';
    $request->fields = 'maiores';
    $request->filter = 'dicta';
    $request->key = 'corporis';
    $request->name = 'Heidi Carter';
    $request->oauthToken = 'accusamus';
    $request->pageSize = 414263;
    $request->pageToken = 'repudiandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'quae';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new FirebaserulesProjectsRulesetsListSecurity();
    $requestSecurity->option1 = new FirebaserulesProjectsRulesetsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaserulesProjectsRulesetsList($request, $requestSecurity);

    if ($response->listRulesetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaserulesProjectsTest

Test `Source` for syntactic and semantic correctness. Issues present, if any, will be returned to the caller with a description, severity, and source location. The test method may be executed with `Source` or a `Ruleset` name. Passing `Source` is useful for unit testing new rules. Passing a `Ruleset` name is useful for regression testing an existing rule. The following is an example of `Source` that permits users to upload images to a bucket bearing their user id and matching the correct metadata: _*Example*_ // Users are allowed to subscribe and unsubscribe to the blog. service firebase.storage { match /users/{userId}/images/{imageName} { allow write: if userId == request.auth.uid && (imageName.matches('*.png$') || imageName.matches('*.jpg$')) && resource.mimeType.matches('^image/') } }

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsTestRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestRulesetRequest;
use \OpenAPI\OpenAPI\Models\Shared\Source;
use \OpenAPI\OpenAPI\Models\Shared\File;
use \OpenAPI\OpenAPI\Models\Shared\TestSuite;
use \OpenAPI\OpenAPI\Models\Shared\TestCase;
use \OpenAPI\OpenAPI\Models\Shared\TestCaseExpectationEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestCaseExpressionReportLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\FunctionMock;
use \OpenAPI\OpenAPI\Models\Shared\Arg;
use \OpenAPI\OpenAPI\Models\Shared\Result;
use \OpenAPI\OpenAPI\Models\Shared\TestCasePathEncodingEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsTestSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsTestSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsTestSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsTestSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaserulesProjectsTestRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testRulesetRequest = new TestRulesetRequest();
    $request->testRulesetRequest->source = new Source();
    $request->testRulesetRequest->source->files = [
        new File(),
        new File(),
        new File(),
    ];
    $request->testRulesetRequest->testSuite = new TestSuite();
    $request->testRulesetRequest->testSuite->testCases = [
        new TestCase(),
        new TestCase(),
        new TestCase(),
        new TestCase(),
    ];
    $request->accessToken = 'modi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'rem';
    $request->fields = 'voluptates';
    $request->key = 'quasi';
    $request->name = 'Kirk Boehm';
    $request->oauthToken = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequatur';
    $request->uploadType = 'est';
    $request->uploadProtocol = 'quibusdam';

    $requestSecurity = new FirebaserulesProjectsTestSecurity();
    $requestSecurity->option1 = new FirebaserulesProjectsTestSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaserulesProjectsTest($request, $requestSecurity);

    if ($response->testRulesetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
