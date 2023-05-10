# forms

### Available Operations

* [formsFormsBatchUpdate](#formsformsbatchupdate) - Change the form with a batch of updates.
* [formsFormsCreate](#formsformscreate) - Create a new form using the title given in the provided form message in the request. *Important:* Only the form.info.title and form.info.document_title fields are copied to the new form. All other fields including the form description, items and settings are disallowed. To create a new form and add items, you must first call forms.create to create an empty form with a title and (optional) document title, and then call forms.update to add the items.
* [formsFormsGet](#formsformsget) - Get a form.
* [formsFormsResponsesGet](#formsformsresponsesget) - Get one response from the form.
* [formsFormsResponsesList](#formsformsresponseslist) - List a form's responses.
* [formsFormsWatchesCreate](#formsformswatchescreate) - Create a new watch. If a watch ID is provided, it must be unused. For each invoking project, the per form limit is one watch per Watch.EventType. A watch expires seven days after it is created (see Watch.expire_time).
* [formsFormsWatchesDelete](#formsformswatchesdelete) - Delete a watch.
* [formsFormsWatchesList](#formsformswatcheslist) - Return a list of the watches owned by the invoking project. The maximum number of watches is two: For each invoker, the limit is one for each event type per form.
* [formsFormsWatchesRenew](#formsformswatchesrenew) - Renew an existing watch for seven days. The state of the watch after renewal is `ACTIVE`, and the `expire_time` is seven days from the renewal. Renewing a watch in an error state (e.g. `SUSPENDED`) succeeds if the error is no longer present, but fail otherwise. After a watch has expired, RenewWatch returns `NOT_FOUND`.

## formsFormsBatchUpdate

Change the form with a batch of updates.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsBatchUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchUpdateFormRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\RequestInput;
use \OpenAPI\OpenAPI\Models\Shared\CreateItemRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\ItemInput;
use \OpenAPI\OpenAPI\Models\Shared\ImageItemInput;
use \OpenAPI\OpenAPI\Models\Shared\ImageInput;
use \OpenAPI\OpenAPI\Models\Shared\MediaProperties;
use \OpenAPI\OpenAPI\Models\Shared\MediaPropertiesAlignmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\QuestionGroupItemInput;
use \OpenAPI\OpenAPI\Models\Shared\GridInput;
use \OpenAPI\OpenAPI\Models\Shared\ChoiceQuestionInput;
use \OpenAPI\OpenAPI\Models\Shared\OptionInput;
use \OpenAPI\OpenAPI\Models\Shared\OptionGoToActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChoiceQuestionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\QuestionInput;
use \OpenAPI\OpenAPI\Models\Shared\DateQuestion;
use \OpenAPI\OpenAPI\Models\Shared\FileUploadQuestion;
use \OpenAPI\OpenAPI\Models\Shared\FileUploadQuestionTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\Grading;
use \OpenAPI\OpenAPI\Models\Shared\CorrectAnswers;
use \OpenAPI\OpenAPI\Models\Shared\CorrectAnswer;
use \OpenAPI\OpenAPI\Models\Shared\Feedback;
use \OpenAPI\OpenAPI\Models\Shared\ExtraMaterial;
use \OpenAPI\OpenAPI\Models\Shared\TextLink;
use \OpenAPI\OpenAPI\Models\Shared\VideoLink;
use \OpenAPI\OpenAPI\Models\Shared\RowQuestion;
use \OpenAPI\OpenAPI\Models\Shared\ScaleQuestion;
use \OpenAPI\OpenAPI\Models\Shared\TextQuestion;
use \OpenAPI\OpenAPI\Models\Shared\TimeQuestion;
use \OpenAPI\OpenAPI\Models\Shared\QuestionItemInput;
use \OpenAPI\OpenAPI\Models\Shared\VideoItem;
use \OpenAPI\OpenAPI\Models\Shared\Video;
use \OpenAPI\OpenAPI\Models\Shared\Location;
use \OpenAPI\OpenAPI\Models\Shared\DeleteItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\MoveItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateFormInfoRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\InfoInput;
use \OpenAPI\OpenAPI\Models\Shared\UpdateItemRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\UpdateSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\FormSettings;
use \OpenAPI\OpenAPI\Models\Shared\QuizSettings;
use \OpenAPI\OpenAPI\Models\Shared\WriteControl;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsBatchUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsBatchUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsBatchUpdateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsBatchUpdateSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FormsFormsBatchUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->batchUpdateFormRequestInput = new BatchUpdateFormRequestInput();
    $request->batchUpdateFormRequestInput->includeFormInResponse = false;
    $request->batchUpdateFormRequestInput->requests = [
        new RequestInput(),
    ];
    $request->batchUpdateFormRequestInput->writeControl = new WriteControl();
    $request->batchUpdateFormRequestInput->writeControl->requiredRevisionId = 'delectus';
    $request->batchUpdateFormRequestInput->writeControl->targetRevisionId = 'tempora';
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'minus';
    $request->fields = 'placeat';
    $request->formId = 'voluptatum';
    $request->key = 'iusto';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'temporibus';

    $requestSecurity = new FormsFormsBatchUpdateSecurity();
    $requestSecurity->option1 = new FormsFormsBatchUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->forms->formsFormsBatchUpdate($request, $requestSecurity);

    if ($response->batchUpdateFormResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## formsFormsCreate

Create a new form using the title given in the provided form message in the request. *Important:* Only the form.info.title and form.info.document_title fields are copied to the new form. All other fields including the form description, items and settings are disallowed. To create a new form and add items, you must first call forms.create to create an empty form with a title and (optional) document title, and then call forms.update to add the items.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FormInput;
use \OpenAPI\OpenAPI\Models\Shared\InfoInput;
use \OpenAPI\OpenAPI\Models\Shared\ItemInput;
use \OpenAPI\OpenAPI\Models\Shared\ImageItemInput;
use \OpenAPI\OpenAPI\Models\Shared\ImageInput;
use \OpenAPI\OpenAPI\Models\Shared\MediaProperties;
use \OpenAPI\OpenAPI\Models\Shared\MediaPropertiesAlignmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\QuestionGroupItemInput;
use \OpenAPI\OpenAPI\Models\Shared\GridInput;
use \OpenAPI\OpenAPI\Models\Shared\ChoiceQuestionInput;
use \OpenAPI\OpenAPI\Models\Shared\OptionInput;
use \OpenAPI\OpenAPI\Models\Shared\OptionGoToActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChoiceQuestionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\QuestionInput;
use \OpenAPI\OpenAPI\Models\Shared\DateQuestion;
use \OpenAPI\OpenAPI\Models\Shared\FileUploadQuestion;
use \OpenAPI\OpenAPI\Models\Shared\FileUploadQuestionTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\Grading;
use \OpenAPI\OpenAPI\Models\Shared\CorrectAnswers;
use \OpenAPI\OpenAPI\Models\Shared\CorrectAnswer;
use \OpenAPI\OpenAPI\Models\Shared\Feedback;
use \OpenAPI\OpenAPI\Models\Shared\ExtraMaterial;
use \OpenAPI\OpenAPI\Models\Shared\TextLink;
use \OpenAPI\OpenAPI\Models\Shared\VideoLink;
use \OpenAPI\OpenAPI\Models\Shared\RowQuestion;
use \OpenAPI\OpenAPI\Models\Shared\ScaleQuestion;
use \OpenAPI\OpenAPI\Models\Shared\TextQuestion;
use \OpenAPI\OpenAPI\Models\Shared\TimeQuestion;
use \OpenAPI\OpenAPI\Models\Shared\QuestionItemInput;
use \OpenAPI\OpenAPI\Models\Shared\VideoItem;
use \OpenAPI\OpenAPI\Models\Shared\Video;
use \OpenAPI\OpenAPI\Models\Shared\FormSettings;
use \OpenAPI\OpenAPI\Models\Shared\QuizSettings;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsCreateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsCreateSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FormsFormsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->formInput = new FormInput();
    $request->formInput->info = new InfoInput();
    $request->formInput->info->description = 'quis';
    $request->formInput->info->title = 'Mr.';
    $request->formInput->items = [
        new ItemInput(),
        new ItemInput(),
        new ItemInput(),
    ];
    $request->formInput->settings = new FormSettings();
    $request->formInput->settings->quizSettings = new QuizSettings();
    $request->formInput->settings->quizSettings->isQuiz = false;
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'repellendus';
    $request->fields = 'sapiente';
    $request->key = 'quo';
    $request->oauthToken = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'at';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'maiores';

    $requestSecurity = new FormsFormsCreateSecurity();
    $requestSecurity->option1 = new FormsFormsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->forms->formsFormsCreate($request, $requestSecurity);

    if ($response->form !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## formsFormsGet

Get a form.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsGetSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsGetSecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FormsFormsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quod';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'esse';
    $request->fields = 'totam';
    $request->formId = 'porro';
    $request->key = 'dolorum';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'nam';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'occaecati';

    $requestSecurity = new FormsFormsGetSecurity();
    $requestSecurity->option1 = new FormsFormsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->forms->formsFormsGet($request, $requestSecurity);

    if ($response->form !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## formsFormsResponsesGet

Get one response from the form.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsResponsesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsResponsesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsResponsesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsResponsesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsResponsesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FormsFormsResponsesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'optio';
    $request->fields = 'totam';
    $request->formId = 'beatae';
    $request->key = 'commodi';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->responseId = 'qui';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'cum';

    $requestSecurity = new FormsFormsResponsesGetSecurity();
    $requestSecurity->option1 = new FormsFormsResponsesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->forms->formsFormsResponsesGet($request, $requestSecurity);

    if ($response->formResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## formsFormsResponsesList

List a form's responses.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsResponsesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsResponsesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsResponsesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsResponsesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsResponsesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FormsFormsResponsesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aspernatur';
    $request->fields = 'perferendis';
    $request->filter = 'ad';
    $request->formId = 'natus';
    $request->key = 'sed';
    $request->oauthToken = 'iste';
    $request->pageSize = 222321;
    $request->pageToken = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'laboriosam';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new FormsFormsResponsesListSecurity();
    $requestSecurity->option1 = new FormsFormsResponsesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->forms->formsFormsResponsesList($request, $requestSecurity);

    if ($response->listFormResponsesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## formsFormsWatchesCreate

Create a new watch. If a watch ID is provided, it must be unused. For each invoking project, the per form limit is one watch per Watch.EventType. A watch expires seven days after it is created (see Watch.expire_time).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsWatchesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateWatchRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\WatchInput;
use \OpenAPI\OpenAPI\Models\Shared\WatchEventTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\WatchTarget;
use \OpenAPI\OpenAPI\Models\Shared\CloudPubsubTopic;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsWatchesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsWatchesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsWatchesCreateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsWatchesCreateSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsWatchesCreateSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsWatchesCreateSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsWatchesCreateSecurityOption6;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FormsFormsWatchesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->createWatchRequestInput = new CreateWatchRequestInput();
    $request->createWatchRequestInput->watch = new WatchInput();
    $request->createWatchRequestInput->watch->eventType = WatchEventTypeEnum::SCHEMA;
    $request->createWatchRequestInput->watch->target = new WatchTarget();
    $request->createWatchRequestInput->watch->target->topic = new CloudPubsubTopic();
    $request->createWatchRequestInput->watch->target->topic->topicName = 'corporis';
    $request->createWatchRequestInput->watchId = 'iste';
    $request->accessToken = 'iure';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quidem';
    $request->fields = 'architecto';
    $request->formId = 'ipsa';
    $request->key = 'reiciendis';
    $request->oauthToken = 'est';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'dolores';

    $requestSecurity = new FormsFormsWatchesCreateSecurity();
    $requestSecurity->option1 = new FormsFormsWatchesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->forms->formsFormsWatchesCreate($request, $requestSecurity);

    if ($response->watch !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## formsFormsWatchesDelete

Delete a watch.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsWatchesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsWatchesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsWatchesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsWatchesDeleteSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsWatchesDeleteSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsWatchesDeleteSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsWatchesDeleteSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsWatchesDeleteSecurityOption6;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FormsFormsWatchesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nobis';
    $request->fields = 'enim';
    $request->formId = 'omnis';
    $request->key = 'nemo';
    $request->oauthToken = 'minima';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'iure';
    $request->watchId = 'culpa';

    $requestSecurity = new FormsFormsWatchesDeleteSecurity();
    $requestSecurity->option1 = new FormsFormsWatchesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->forms->formsFormsWatchesDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## formsFormsWatchesList

Return a list of the watches owned by the invoking project. The maximum number of watches is two: For each invoker, the limit is one for each event type per form.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsWatchesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsWatchesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsWatchesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsWatchesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsWatchesListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsWatchesListSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsWatchesListSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsWatchesListSecurityOption6;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FormsFormsWatchesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::JSON;
    $request->callback = 'mollitia';
    $request->fields = 'dolorem';
    $request->formId = 'culpa';
    $request->key = 'consequuntur';
    $request->oauthToken = 'repellat';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'numquam';

    $requestSecurity = new FormsFormsWatchesListSecurity();
    $requestSecurity->option1 = new FormsFormsWatchesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->forms->formsFormsWatchesList($request, $requestSecurity);

    if ($response->listWatchesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## formsFormsWatchesRenew

Renew an existing watch for seven days. The state of the watch after renewal is `ACTIVE`, and the `expire_time` is seven days from the renewal. Renewing a watch in an error state (e.g. `SUSPENDED`) succeeds if the error is no longer present, but fail otherwise. After a watch has expired, RenewWatch returns `NOT_FOUND`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsWatchesRenewRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsWatchesRenewSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsWatchesRenewSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsWatchesRenewSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsWatchesRenewSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsWatchesRenewSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsWatchesRenewSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\FormsFormsWatchesRenewSecurityOption6;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FormsFormsWatchesRenewRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'molestiae' => 'velit',
        'error' => 'quia',
    ];
    $request->accessToken = 'quis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'laborum';
    $request->fields = 'animi';
    $request->formId = 'enim';
    $request->key = 'odit';
    $request->oauthToken = 'quo';
    $request->prettyPrint = false;
    $request->quotaUser = 'sequi';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'ipsam';
    $request->watchId = 'id';

    $requestSecurity = new FormsFormsWatchesRenewSecurity();
    $requestSecurity->option1 = new FormsFormsWatchesRenewSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->forms->formsFormsWatchesRenew($request, $requestSecurity);

    if ($response->watch !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
