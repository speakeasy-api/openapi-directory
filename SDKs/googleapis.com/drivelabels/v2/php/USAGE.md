<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DrivelabelsLabelsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2LabelInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2LabelAppliedCapabilities;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyCopyModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2UserInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2LabelDisplayHints;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2FieldInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2FieldAppliedCapabilities;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2FieldDateOptionsInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDate;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2FieldDisplayHints;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2LifecycleInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2LifecycleDisabledPolicy;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2FieldProperties;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2FieldSchemaCapabilities;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2FieldSelectionOptionsInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2BadgeColors;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeColor;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2BadgeConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2FieldListOptions;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2FieldUserOptions;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2LabelLabelTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2LabelProperties;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2LabelSchemaCapabilities;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivelabelsLabelsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleAppsDriveLabelsV2LabelInput = new GoogleAppsDriveLabelsV2LabelInput();
    $request->googleAppsDriveLabelsV2LabelInput->appliedCapabilities = new GoogleAppsDriveLabelsV2LabelAppliedCapabilities();
    $request->googleAppsDriveLabelsV2LabelInput->appliedCapabilities->canApply = false;
    $request->googleAppsDriveLabelsV2LabelInput->appliedCapabilities->canRead = false;
    $request->googleAppsDriveLabelsV2LabelInput->appliedCapabilities->canRemove = false;
    $request->googleAppsDriveLabelsV2LabelInput->appliedLabelPolicy = new GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy();
    $request->googleAppsDriveLabelsV2LabelInput->appliedLabelPolicy->copyMode = GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyCopyModeEnum::ALWAYS_COPY;
    $request->googleAppsDriveLabelsV2LabelInput->creator = new GoogleAppsDriveLabelsV2UserInfo();
    $request->googleAppsDriveLabelsV2LabelInput->creator->person = 'distinctio';
    $request->googleAppsDriveLabelsV2LabelInput->disabler = new GoogleAppsDriveLabelsV2UserInfo();
    $request->googleAppsDriveLabelsV2LabelInput->disabler->person = 'quibusdam';
    $request->googleAppsDriveLabelsV2LabelInput->displayHints = new GoogleAppsDriveLabelsV2LabelDisplayHints();
    $request->googleAppsDriveLabelsV2LabelInput->displayHints->disabled = false;
    $request->googleAppsDriveLabelsV2LabelInput->displayHints->hiddenInSearch = false;
    $request->googleAppsDriveLabelsV2LabelInput->displayHints->priority = 'unde';
    $request->googleAppsDriveLabelsV2LabelInput->displayHints->shownInApply = false;
    $request->googleAppsDriveLabelsV2LabelInput->fields = [
        new GoogleAppsDriveLabelsV2FieldInput(),
        new GoogleAppsDriveLabelsV2FieldInput(),
        new GoogleAppsDriveLabelsV2FieldInput(),
        new GoogleAppsDriveLabelsV2FieldInput(),
    ];
    $request->googleAppsDriveLabelsV2LabelInput->labelType = GoogleAppsDriveLabelsV2LabelLabelTypeEnum::ADMIN;
    $request->googleAppsDriveLabelsV2LabelInput->learnMoreUri = 'illum';
    $request->googleAppsDriveLabelsV2LabelInput->lifecycle = new GoogleAppsDriveLabelsV2LifecycleInput();
    $request->googleAppsDriveLabelsV2LabelInput->lifecycle->disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy();
    $request->googleAppsDriveLabelsV2LabelInput->lifecycle->disabledPolicy->hideInSearch = false;
    $request->googleAppsDriveLabelsV2LabelInput->lifecycle->disabledPolicy->showInApply = false;
    $request->googleAppsDriveLabelsV2LabelInput->properties = new GoogleAppsDriveLabelsV2LabelProperties();
    $request->googleAppsDriveLabelsV2LabelInput->properties->description = 'vel';
    $request->googleAppsDriveLabelsV2LabelInput->properties->title = 'Miss';
    $request->googleAppsDriveLabelsV2LabelInput->publisher = new GoogleAppsDriveLabelsV2UserInfo();
    $request->googleAppsDriveLabelsV2LabelInput->publisher->person = 'deserunt';
    $request->googleAppsDriveLabelsV2LabelInput->revisionCreator = new GoogleAppsDriveLabelsV2UserInfo();
    $request->googleAppsDriveLabelsV2LabelInput->revisionCreator->person = 'suscipit';
    $request->googleAppsDriveLabelsV2LabelInput->schemaCapabilities = new GoogleAppsDriveLabelsV2LabelSchemaCapabilities();
    $request->googleAppsDriveLabelsV2LabelInput->schemaCapabilities->canDelete = false;
    $request->googleAppsDriveLabelsV2LabelInput->schemaCapabilities->canDisable = false;
    $request->googleAppsDriveLabelsV2LabelInput->schemaCapabilities->canEnable = false;
    $request->googleAppsDriveLabelsV2LabelInput->schemaCapabilities->canUpdate = false;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::JSON;
    $request->callback = 'debitis';
    $request->fields = 'ipsa';
    $request->key = 'delectus';
    $request->languageCode = 'tempora';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'placeat';
    $request->useAdminAccess = false;

    $response = $sdk->labels->drivelabelsLabelsCreate($request);

    if ($response->googleAppsDriveLabelsV2Label !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->