# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [forms](docs/forms/README.md)

* [formsFormsBatchUpdate](docs/forms/README.md#formsformsbatchupdate) - Change the form with a batch of updates.
* [formsFormsCreate](docs/forms/README.md#formsformscreate) - Create a new form using the title given in the provided form message in the request. *Important:* Only the form.info.title and form.info.document_title fields are copied to the new form. All other fields including the form description, items and settings are disallowed. To create a new form and add items, you must first call forms.create to create an empty form with a title and (optional) document title, and then call forms.update to add the items.
* [formsFormsGet](docs/forms/README.md#formsformsget) - Get a form.
* [formsFormsResponsesGet](docs/forms/README.md#formsformsresponsesget) - Get one response from the form.
* [formsFormsResponsesList](docs/forms/README.md#formsformsresponseslist) - List a form's responses.
* [formsFormsWatchesCreate](docs/forms/README.md#formsformswatchescreate) - Create a new watch. If a watch ID is provided, it must be unused. For each invoking project, the per form limit is one watch per Watch.EventType. A watch expires seven days after it is created (see Watch.expire_time).
* [formsFormsWatchesDelete](docs/forms/README.md#formsformswatchesdelete) - Delete a watch.
* [formsFormsWatchesList](docs/forms/README.md#formsformswatcheslist) - Return a list of the watches owned by the invoking project. The maximum number of watches is two: For each invoker, the limit is one for each event type per form.
* [formsFormsWatchesRenew](docs/forms/README.md#formsformswatchesrenew) - Renew an existing watch for seven days. The state of the watch after renewal is `ACTIVE`, and the `expire_time` is seven days from the renewal. Renewing a watch in an error state (e.g. `SUSPENDED`) succeeds if the error is no longer present, but fail otherwise. After a watch has expired, RenewWatch returns `NOT_FOUND`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
