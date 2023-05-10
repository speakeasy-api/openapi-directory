<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DrivelabelsLabelsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaLabelInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicyCopyModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaUserInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaLabelDisplayHints;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaFieldInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaFieldDateOptionsInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDate;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaFieldDisplayHints;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaLifecycleInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaFieldProperties;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaBadgeColors;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeColor;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaBadgeConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaFieldListOptions;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaFieldUserOptions;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaLabelProperties;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivelabelsLabelsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleAppsDriveLabelsV2betaLabelInput = new GoogleAppsDriveLabelsV2betaLabelInput();
    $request->googleAppsDriveLabelsV2betaLabelInput->appliedCapabilities = new GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities();
    $request->googleAppsDriveLabelsV2betaLabelInput->appliedCapabilities->canApply = false;
    $request->googleAppsDriveLabelsV2betaLabelInput->appliedCapabilities->canRead = false;
    $request->googleAppsDriveLabelsV2betaLabelInput->appliedCapabilities->canRemove = false;
    $request->googleAppsDriveLabelsV2betaLabelInput->appliedLabelPolicy = new GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy();
    $request->googleAppsDriveLabelsV2betaLabelInput->appliedLabelPolicy->copyMode = GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicyCopyModeEnum::ALWAYS_COPY;
    $request->googleAppsDriveLabelsV2betaLabelInput->creator = new GoogleAppsDriveLabelsV2betaUserInfo();
    $request->googleAppsDriveLabelsV2betaLabelInput->creator->person = 'distinctio';
    $request->googleAppsDriveLabelsV2betaLabelInput->disabler = new GoogleAppsDriveLabelsV2betaUserInfo();
    $request->googleAppsDriveLabelsV2betaLabelInput->disabler->person = 'quibusdam';
    $request->googleAppsDriveLabelsV2betaLabelInput->displayHints = new GoogleAppsDriveLabelsV2betaLabelDisplayHints();
    $request->googleAppsDriveLabelsV2betaLabelInput->displayHints->disabled = false;
    $request->googleAppsDriveLabelsV2betaLabelInput->displayHints->hiddenInSearch = false;
    $request->googleAppsDriveLabelsV2betaLabelInput->displayHints->priority = 'unde';
    $request->googleAppsDriveLabelsV2betaLabelInput->displayHints->shownInApply = false;
    $request->googleAppsDriveLabelsV2betaLabelInput->fields = [
        new GoogleAppsDriveLabelsV2betaFieldInput(),
        new GoogleAppsDriveLabelsV2betaFieldInput(),
        new GoogleAppsDriveLabelsV2betaFieldInput(),
        new GoogleAppsDriveLabelsV2betaFieldInput(),
    ];
    $request->googleAppsDriveLabelsV2betaLabelInput->labelType = GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum::ADMIN;
    $request->googleAppsDriveLabelsV2betaLabelInput->learnMoreUri = 'illum';
    $request->googleAppsDriveLabelsV2betaLabelInput->lifecycle = new GoogleAppsDriveLabelsV2betaLifecycleInput();
    $request->googleAppsDriveLabelsV2betaLabelInput->lifecycle->disabledPolicy = new GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy();
    $request->googleAppsDriveLabelsV2betaLabelInput->lifecycle->disabledPolicy->hideInSearch = false;
    $request->googleAppsDriveLabelsV2betaLabelInput->lifecycle->disabledPolicy->showInApply = false;
    $request->googleAppsDriveLabelsV2betaLabelInput->properties = new GoogleAppsDriveLabelsV2betaLabelProperties();
    $request->googleAppsDriveLabelsV2betaLabelInput->properties->description = 'vel';
    $request->googleAppsDriveLabelsV2betaLabelInput->properties->title = 'Miss';
    $request->googleAppsDriveLabelsV2betaLabelInput->publisher = new GoogleAppsDriveLabelsV2betaUserInfo();
    $request->googleAppsDriveLabelsV2betaLabelInput->publisher->person = 'deserunt';
    $request->googleAppsDriveLabelsV2betaLabelInput->revisionCreator = new GoogleAppsDriveLabelsV2betaUserInfo();
    $request->googleAppsDriveLabelsV2betaLabelInput->revisionCreator->person = 'suscipit';
    $request->googleAppsDriveLabelsV2betaLabelInput->schemaCapabilities = new GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities();
    $request->googleAppsDriveLabelsV2betaLabelInput->schemaCapabilities->canDelete = false;
    $request->googleAppsDriveLabelsV2betaLabelInput->schemaCapabilities->canDisable = false;
    $request->googleAppsDriveLabelsV2betaLabelInput->schemaCapabilities->canEnable = false;
    $request->googleAppsDriveLabelsV2betaLabelInput->schemaCapabilities->canUpdate = false;
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

    if ($response->googleAppsDriveLabelsV2betaLabel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->