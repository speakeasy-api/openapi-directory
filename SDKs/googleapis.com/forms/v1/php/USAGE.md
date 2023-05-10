<!-- Start SDK Example Usage -->
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
        new RequestInput(),
        new RequestInput(),
    ];
    $request->batchUpdateFormRequestInput->writeControl = new WriteControl();
    $request->batchUpdateFormRequestInput->writeControl->requiredRevisionId = 'distinctio';
    $request->batchUpdateFormRequestInput->writeControl->targetRevisionId = 'quibusdam';
    $request->accessToken = 'unde';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'corrupti';
    $request->fields = 'illum';
    $request->formId = 'vel';
    $request->key = 'error';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'suscipit';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'magnam';

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
<!-- End SDK Example Usage -->