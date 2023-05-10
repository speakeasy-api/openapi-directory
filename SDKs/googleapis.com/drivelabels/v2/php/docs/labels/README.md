# labels

### Available Operations

* [drivelabelsLabelsCreate](#drivelabelslabelscreate) - Creates a new Label.
* [drivelabelsLabelsDelta](#drivelabelslabelsdelta) - Updates a single Label by applying a set of update requests resulting in a new draft revision. The batch update is all-or-nothing: If any of the update requests are invalid, no changes are applied. The resulting draft revision must be published before the changes may be used with Drive Items.
* [drivelabelsLabelsDisable](#drivelabelslabelsdisable) - Disable a published Label. Disabling a Label will result in a new disabled published revision based on the current published revision. If there is a draft revision, a new disabled draft revision will be created based on the latest draft revision. Older draft revisions will be deleted. Once disabled, a label may be deleted with `DeleteLabel`.
* [drivelabelsLabelsEnable](#drivelabelslabelsenable) - Enable a disabled Label and restore it to its published state. This will result in a new published revision based on the current disabled published revision. If there is an existing disabled draft revision, a new revision will be created based on that draft and will be enabled.
* [drivelabelsLabelsList](#drivelabelslabelslist) - List labels.
* [drivelabelsLabelsPublish](#drivelabelslabelspublish) - Publish all draft changes to the Label. Once published, the Label may not return to its draft state. See `google.apps.drive.labels.v2.Lifecycle` for more information. Publishing a Label will result in a new published revision. All previous draft revisions will be deleted. Previous published revisions will be kept but are subject to automated deletion as needed. Once published, some changes are no longer permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the Label will be rejected. For example, the following changes to a Label will be rejected after the Label is published: * The label cannot be directly deleted. It must be disabled first, then deleted. * Field.FieldType cannot be changed. * Changes to Field validation options cannot reject something that was previously accepted. * Reducing the max entries.
* [drivelabelsLabelsRevisionsLocksList](#drivelabelslabelsrevisionslockslist) - Lists the LabelLocks on a Label.
* [drivelabelsLabelsRevisionsPermissionsBatchDelete](#drivelabelslabelsrevisionspermissionsbatchdelete) - Deletes Label permissions. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* [drivelabelsLabelsRevisionsPermissionsBatchUpdate](#drivelabelslabelsrevisionspermissionsbatchupdate) - Updates Label permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* [drivelabelsLabelsRevisionsPermissionsCreate](#drivelabelslabelsrevisionspermissionscreate) - Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* [drivelabelsLabelsRevisionsPermissionsDelete](#drivelabelslabelsrevisionspermissionsdelete) - Deletes a Label's permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* [drivelabelsLabelsRevisionsPermissionsList](#drivelabelslabelsrevisionspermissionslist) - Lists a Label's permissions.
* [drivelabelsLabelsRevisionsUpdatePermissions](#drivelabelslabelsrevisionsupdatepermissions) - Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* [drivelabelsLabelsUpdateLabelCopyMode](#drivelabelslabelsupdatelabelcopymode) - Updates a Label's `CopyMode`. Changes to this policy are not revisioned, do not require publishing, and take effect immediately.

## drivelabelsLabelsCreate

Creates a new Label.

### Example Usage

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
    $request->googleAppsDriveLabelsV2LabelInput->appliedLabelPolicy->copyMode = GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyCopyModeEnum::DO_NOT_COPY;
    $request->googleAppsDriveLabelsV2LabelInput->creator = new GoogleAppsDriveLabelsV2UserInfo();
    $request->googleAppsDriveLabelsV2LabelInput->creator->person = 'excepturi';
    $request->googleAppsDriveLabelsV2LabelInput->disabler = new GoogleAppsDriveLabelsV2UserInfo();
    $request->googleAppsDriveLabelsV2LabelInput->disabler->person = 'nisi';
    $request->googleAppsDriveLabelsV2LabelInput->displayHints = new GoogleAppsDriveLabelsV2LabelDisplayHints();
    $request->googleAppsDriveLabelsV2LabelInput->displayHints->disabled = false;
    $request->googleAppsDriveLabelsV2LabelInput->displayHints->hiddenInSearch = false;
    $request->googleAppsDriveLabelsV2LabelInput->displayHints->priority = 'recusandae';
    $request->googleAppsDriveLabelsV2LabelInput->displayHints->shownInApply = false;
    $request->googleAppsDriveLabelsV2LabelInput->fields = [
        new GoogleAppsDriveLabelsV2FieldInput(),
        new GoogleAppsDriveLabelsV2FieldInput(),
        new GoogleAppsDriveLabelsV2FieldInput(),
        new GoogleAppsDriveLabelsV2FieldInput(),
    ];
    $request->googleAppsDriveLabelsV2LabelInput->labelType = GoogleAppsDriveLabelsV2LabelLabelTypeEnum::LABEL_TYPE_UNSPECIFIED;
    $request->googleAppsDriveLabelsV2LabelInput->learnMoreUri = 'quis';
    $request->googleAppsDriveLabelsV2LabelInput->lifecycle = new GoogleAppsDriveLabelsV2LifecycleInput();
    $request->googleAppsDriveLabelsV2LabelInput->lifecycle->disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy();
    $request->googleAppsDriveLabelsV2LabelInput->lifecycle->disabledPolicy->hideInSearch = false;
    $request->googleAppsDriveLabelsV2LabelInput->lifecycle->disabledPolicy->showInApply = false;
    $request->googleAppsDriveLabelsV2LabelInput->properties = new GoogleAppsDriveLabelsV2LabelProperties();
    $request->googleAppsDriveLabelsV2LabelInput->properties->description = 'veritatis';
    $request->googleAppsDriveLabelsV2LabelInput->properties->title = 'Miss';
    $request->googleAppsDriveLabelsV2LabelInput->publisher = new GoogleAppsDriveLabelsV2UserInfo();
    $request->googleAppsDriveLabelsV2LabelInput->publisher->person = 'perferendis';
    $request->googleAppsDriveLabelsV2LabelInput->revisionCreator = new GoogleAppsDriveLabelsV2UserInfo();
    $request->googleAppsDriveLabelsV2LabelInput->revisionCreator->person = 'ipsam';
    $request->googleAppsDriveLabelsV2LabelInput->schemaCapabilities = new GoogleAppsDriveLabelsV2LabelSchemaCapabilities();
    $request->googleAppsDriveLabelsV2LabelInput->schemaCapabilities->canDelete = false;
    $request->googleAppsDriveLabelsV2LabelInput->schemaCapabilities->canDisable = false;
    $request->googleAppsDriveLabelsV2LabelInput->schemaCapabilities->canEnable = false;
    $request->googleAppsDriveLabelsV2LabelInput->schemaCapabilities->canUpdate = false;
    $request->accessToken = 'repellendus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quo';
    $request->fields = 'odit';
    $request->key = 'at';
    $request->languageCode = 'at';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'quod';
    $request->useAdminAccess = false;

    $response = $sdk->labels->drivelabelsLabelsCreate($request);

    if ($response->googleAppsDriveLabelsV2Label !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## drivelabelsLabelsDelta

Updates a single Label by applying a set of update requests resulting in a new draft revision. The batch update is all-or-nothing: If any of the update requests are invalid, no changes are applied. The resulting draft revision must be published before the changes may be used with Drive Items.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DrivelabelsLabelsDeltaRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestCreateFieldRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2FieldInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2FieldAppliedCapabilities;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2UserInfo;
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestCreateSelectionChoiceRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteFieldRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteSelectionChoiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableFieldRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableSelectionChoiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestEnableFieldRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestEnableSelectionChoiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldPropertiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldTypeRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateLabelPropertiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2LabelProperties;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestViewEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2WriteControl;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivelabelsLabelsDeltaRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleAppsDriveLabelsV2DeltaUpdateLabelRequestInput = new GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestInput();
    $request->googleAppsDriveLabelsV2DeltaUpdateLabelRequestInput->languageCode = 'totam';
    $request->googleAppsDriveLabelsV2DeltaUpdateLabelRequestInput->requests = [
        new GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestRequestInput(),
        new GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestRequestInput(),
        new GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestRequestInput(),
        new GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestRequestInput(),
    ];
    $request->googleAppsDriveLabelsV2DeltaUpdateLabelRequestInput->useAdminAccess = false;
    $request->googleAppsDriveLabelsV2DeltaUpdateLabelRequestInput->view = GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestViewEnum::LABEL_VIEW_FULL;
    $request->googleAppsDriveLabelsV2DeltaUpdateLabelRequestInput->writeControl = new GoogleAppsDriveLabelsV2WriteControl();
    $request->googleAppsDriveLabelsV2DeltaUpdateLabelRequestInput->writeControl->requiredRevisionId = 'dicta';
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

    $response = $sdk->labels->drivelabelsLabelsDelta($request);

    if ($response->googleAppsDriveLabelsV2DeltaUpdateLabelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## drivelabelsLabelsDisable

Disable a published Label. Disabling a Label will result in a new disabled published revision based on the current published revision. If there is a draft revision, a new disabled draft revision will be created based on the latest draft revision. Older draft revisions will be deleted. Once disabled, a label may be deleted with `DeleteLabel`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DrivelabelsLabelsDisableRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2DisableLabelRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2LifecycleDisabledPolicy;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2WriteControl;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivelabelsLabelsDisableRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleAppsDriveLabelsV2DisableLabelRequest = new GoogleAppsDriveLabelsV2DisableLabelRequest();
    $request->googleAppsDriveLabelsV2DisableLabelRequest->disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy();
    $request->googleAppsDriveLabelsV2DisableLabelRequest->disabledPolicy->hideInSearch = false;
    $request->googleAppsDriveLabelsV2DisableLabelRequest->disabledPolicy->showInApply = false;
    $request->googleAppsDriveLabelsV2DisableLabelRequest->languageCode = 'ipsum';
    $request->googleAppsDriveLabelsV2DisableLabelRequest->updateMask = 'excepturi';
    $request->googleAppsDriveLabelsV2DisableLabelRequest->useAdminAccess = false;
    $request->googleAppsDriveLabelsV2DisableLabelRequest->writeControl = new GoogleAppsDriveLabelsV2WriteControl();
    $request->googleAppsDriveLabelsV2DisableLabelRequest->writeControl->requiredRevisionId = 'aspernatur';
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'natus';
    $request->fields = 'sed';
    $request->key = 'iste';
    $request->name = 'Faye Howe';
    $request->oauthToken = 'fuga';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'iste';

    $response = $sdk->labels->drivelabelsLabelsDisable($request);

    if ($response->googleAppsDriveLabelsV2Label !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## drivelabelsLabelsEnable

Enable a disabled Label and restore it to its published state. This will result in a new published revision based on the current disabled published revision. If there is an existing disabled draft revision, a new revision will be created based on that draft and will be enabled.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DrivelabelsLabelsEnableRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2EnableLabelRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2WriteControl;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivelabelsLabelsEnableRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleAppsDriveLabelsV2EnableLabelRequest = new GoogleAppsDriveLabelsV2EnableLabelRequest();
    $request->googleAppsDriveLabelsV2EnableLabelRequest->languageCode = 'saepe';
    $request->googleAppsDriveLabelsV2EnableLabelRequest->useAdminAccess = false;
    $request->googleAppsDriveLabelsV2EnableLabelRequest->writeControl = new GoogleAppsDriveLabelsV2WriteControl();
    $request->googleAppsDriveLabelsV2EnableLabelRequest->writeControl->requiredRevisionId = 'quidem';
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

    $response = $sdk->labels->drivelabelsLabelsEnable($request);

    if ($response->googleAppsDriveLabelsV2Label !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## drivelabelsLabelsList

List labels.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DrivelabelsLabelsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DrivelabelsLabelsListMinimumRoleEnum;
use \OpenAPI\OpenAPI\Models\Operations\DrivelabelsLabelsListViewEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivelabelsLabelsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iure';
    $request->customer = 'culpa';
    $request->fields = 'doloribus';
    $request->key = 'sapiente';
    $request->languageCode = 'architecto';
    $request->minimumRole = DrivelabelsLabelsListMinimumRoleEnum::ORGANIZER;
    $request->oauthToken = 'dolorem';
    $request->pageSize = 635059;
    $request->pageToken = 'consequuntur';
    $request->prettyPrint = false;
    $request->publishedOnly = false;
    $request->quotaUser = 'repellat';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'occaecati';
    $request->useAdminAccess = false;
    $request->view = DrivelabelsLabelsListViewEnum::LABEL_VIEW_BASIC;

    $response = $sdk->labels->drivelabelsLabelsList($request);

    if ($response->googleAppsDriveLabelsV2ListLabelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## drivelabelsLabelsPublish

Publish all draft changes to the Label. Once published, the Label may not return to its draft state. See `google.apps.drive.labels.v2.Lifecycle` for more information. Publishing a Label will result in a new published revision. All previous draft revisions will be deleted. Previous published revisions will be kept but are subject to automated deletion as needed. Once published, some changes are no longer permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the Label will be rejected. For example, the following changes to a Label will be rejected after the Label is published: * The label cannot be directly deleted. It must be disabled first, then deleted. * Field.FieldType cannot be changed. * Changes to Field validation options cannot reject something that was previously accepted. * Reducing the max entries.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DrivelabelsLabelsPublishRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2PublishLabelRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2WriteControl;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivelabelsLabelsPublishRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleAppsDriveLabelsV2PublishLabelRequest = new GoogleAppsDriveLabelsV2PublishLabelRequest();
    $request->googleAppsDriveLabelsV2PublishLabelRequest->languageCode = 'quam';
    $request->googleAppsDriveLabelsV2PublishLabelRequest->useAdminAccess = false;
    $request->googleAppsDriveLabelsV2PublishLabelRequest->writeControl = new GoogleAppsDriveLabelsV2WriteControl();
    $request->googleAppsDriveLabelsV2PublishLabelRequest->writeControl->requiredRevisionId = 'molestiae';
    $request->accessToken = 'velit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quia';
    $request->fields = 'quis';
    $request->key = 'vitae';
    $request->name = 'Matt Hamill';
    $request->oauthToken = 'sequi';
    $request->prettyPrint = false;
    $request->quotaUser = 'tenetur';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'id';

    $response = $sdk->labels->drivelabelsLabelsPublish($request);

    if ($response->googleAppsDriveLabelsV2Label !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## drivelabelsLabelsRevisionsLocksList

Lists the LabelLocks on a Label.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DrivelabelsLabelsRevisionsLocksListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivelabelsLabelsRevisionsLocksListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aut';
    $request->alt = AltEnum::JSON;
    $request->callback = 'error';
    $request->fields = 'temporibus';
    $request->key = 'laborum';
    $request->oauthToken = 'quasi';
    $request->pageSize = 971945;
    $request->pageToken = 'voluptatibus';
    $request->parent = 'vero';
    $request->prettyPrint = false;
    $request->quotaUser = 'nihil';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'voluptatibus';

    $response = $sdk->labels->drivelabelsLabelsRevisionsLocksList($request);

    if ($response->googleAppsDriveLabelsV2ListLabelLocksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## drivelabelsLabelsRevisionsPermissionsBatchDelete

Deletes Label permissions. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DrivelabelsLabelsRevisionsPermissionsBatchDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2BatchDeleteLabelPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2DeleteLabelPermissionRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivelabelsLabelsRevisionsPermissionsBatchDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleAppsDriveLabelsV2BatchDeleteLabelPermissionsRequest = new GoogleAppsDriveLabelsV2BatchDeleteLabelPermissionsRequest();
    $request->googleAppsDriveLabelsV2BatchDeleteLabelPermissionsRequest->requests = [
        new GoogleAppsDriveLabelsV2DeleteLabelPermissionRequest(),
        new GoogleAppsDriveLabelsV2DeleteLabelPermissionRequest(),
        new GoogleAppsDriveLabelsV2DeleteLabelPermissionRequest(),
    ];
    $request->googleAppsDriveLabelsV2BatchDeleteLabelPermissionsRequest->useAdminAccess = false;
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'perferendis';
    $request->fields = 'doloremque';
    $request->key = 'reprehenderit';
    $request->oauthToken = 'ut';
    $request->parent = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'dolore';

    $response = $sdk->labels->drivelabelsLabelsRevisionsPermissionsBatchDelete($request);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## drivelabelsLabelsRevisionsPermissionsBatchUpdate

Updates Label permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DrivelabelsLabelsRevisionsPermissionsBatchUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2UpdateLabelPermissionRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2LabelPermission;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2LabelPermissionRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivelabelsLabelsRevisionsPermissionsBatchUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleAppsDriveLabelsV2BatchUpdateLabelPermissionsRequest = new GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsRequest();
    $request->googleAppsDriveLabelsV2BatchUpdateLabelPermissionsRequest->requests = [
        new GoogleAppsDriveLabelsV2UpdateLabelPermissionRequest(),
    ];
    $request->googleAppsDriveLabelsV2BatchUpdateLabelPermissionsRequest->useAdminAccess = false;
    $request->accessToken = 'harum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'accusamus';
    $request->fields = 'commodi';
    $request->key = 'repudiandae';
    $request->oauthToken = 'quae';
    $request->parent = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'molestias';
    $request->uploadProtocol = 'excepturi';

    $response = $sdk->labels->drivelabelsLabelsRevisionsPermissionsBatchUpdate($request);

    if ($response->googleAppsDriveLabelsV2BatchUpdateLabelPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## drivelabelsLabelsRevisionsPermissionsCreate

Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DrivelabelsLabelsRevisionsPermissionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2LabelPermission;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2LabelPermissionRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivelabelsLabelsRevisionsPermissionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleAppsDriveLabelsV2LabelPermission = new GoogleAppsDriveLabelsV2LabelPermission();
    $request->googleAppsDriveLabelsV2LabelPermission->audience = 'modi';
    $request->googleAppsDriveLabelsV2LabelPermission->email = 'Judah92@yahoo.com';
    $request->googleAppsDriveLabelsV2LabelPermission->group = 'sint';
    $request->googleAppsDriveLabelsV2LabelPermission->name = 'Patti Gottlieb MD';
    $request->googleAppsDriveLabelsV2LabelPermission->person = 'quibusdam';
    $request->googleAppsDriveLabelsV2LabelPermission->role = GoogleAppsDriveLabelsV2LabelPermissionRoleEnum::LABEL_ROLE_UNSPECIFIED;
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'labore';
    $request->key = 'modi';
    $request->oauthToken = 'qui';
    $request->parent = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'cupiditate';
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'perferendis';
    $request->useAdminAccess = false;

    $response = $sdk->labels->drivelabelsLabelsRevisionsPermissionsCreate($request);

    if ($response->googleAppsDriveLabelsV2LabelPermission !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## drivelabelsLabelsRevisionsPermissionsDelete

Deletes a Label's permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DrivelabelsLabelsRevisionsPermissionsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivelabelsLabelsRevisionsPermissionsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'assumenda';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'alias';
    $request->fields = 'fugit';
    $request->key = 'dolorum';
    $request->name = 'Eddie Prosacco';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'eum';
    $request->uploadType = 'non';
    $request->uploadProtocol = 'eligendi';
    $request->useAdminAccess = false;
    $request->writeControlRequiredRevisionId = 'sint';

    $response = $sdk->labels->drivelabelsLabelsRevisionsPermissionsDelete($request);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## drivelabelsLabelsRevisionsPermissionsList

Lists a Label's permissions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DrivelabelsLabelsRevisionsPermissionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivelabelsLabelsRevisionsPermissionsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sint';
    $request->fields = 'officia';
    $request->key = 'dolor';
    $request->oauthToken = 'debitis';
    $request->pageSize = 952749;
    $request->pageToken = 'dolorum';
    $request->parent = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->uploadType = 'illum';
    $request->uploadProtocol = 'maiores';
    $request->useAdminAccess = false;

    $response = $sdk->labels->drivelabelsLabelsRevisionsPermissionsList($request);

    if ($response->googleAppsDriveLabelsV2ListLabelPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## drivelabelsLabelsRevisionsUpdatePermissions

Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DrivelabelsLabelsRevisionsUpdatePermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2LabelPermission;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2LabelPermissionRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivelabelsLabelsRevisionsUpdatePermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleAppsDriveLabelsV2LabelPermission = new GoogleAppsDriveLabelsV2LabelPermission();
    $request->googleAppsDriveLabelsV2LabelPermission->audience = 'dicta';
    $request->googleAppsDriveLabelsV2LabelPermission->email = 'Obie.Schulist@gmail.com';
    $request->googleAppsDriveLabelsV2LabelPermission->group = 'laborum';
    $request->googleAppsDriveLabelsV2LabelPermission->name = 'Alfred McClure';
    $request->googleAppsDriveLabelsV2LabelPermission->person = 'delectus';
    $request->googleAppsDriveLabelsV2LabelPermission->role = GoogleAppsDriveLabelsV2LabelPermissionRoleEnum::ORGANIZER;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'id';
    $request->fields = 'blanditiis';
    $request->key = 'deleniti';
    $request->oauthToken = 'sapiente';
    $request->parent = 'amet';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'nisi';
    $request->uploadProtocol = 'vel';
    $request->useAdminAccess = false;

    $response = $sdk->labels->drivelabelsLabelsRevisionsUpdatePermissions($request);

    if ($response->googleAppsDriveLabelsV2LabelPermission !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## drivelabelsLabelsUpdateLabelCopyMode

Updates a Label's `CopyMode`. Changes to this policy are not revisioned, do not require publishing, and take effect immediately.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DrivelabelsLabelsUpdateLabelCopyModeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2UpdateLabelCopyModeRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2UpdateLabelCopyModeRequestCopyModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2UpdateLabelCopyModeRequestViewEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivelabelsLabelsUpdateLabelCopyModeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleAppsDriveLabelsV2UpdateLabelCopyModeRequest = new GoogleAppsDriveLabelsV2UpdateLabelCopyModeRequest();
    $request->googleAppsDriveLabelsV2UpdateLabelCopyModeRequest->copyMode = GoogleAppsDriveLabelsV2UpdateLabelCopyModeRequestCopyModeEnum::ALWAYS_COPY;
    $request->googleAppsDriveLabelsV2UpdateLabelCopyModeRequest->languageCode = 'molestiae';
    $request->googleAppsDriveLabelsV2UpdateLabelCopyModeRequest->useAdminAccess = false;
    $request->googleAppsDriveLabelsV2UpdateLabelCopyModeRequest->view = GoogleAppsDriveLabelsV2UpdateLabelCopyModeRequestViewEnum::LABEL_VIEW_BASIC;
    $request->accessToken = 'nihil';
    $request->alt = AltEnum::JSON;
    $request->callback = 'distinctio';
    $request->fields = 'id';
    $request->key = 'labore';
    $request->name = 'Laurie Mosciski';
    $request->oauthToken = 'vero';
    $request->prettyPrint = false;
    $request->quotaUser = 'aspernatur';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'magnam';

    $response = $sdk->labels->drivelabelsLabelsUpdateLabelCopyMode($request);

    if ($response->googleAppsDriveLabelsV2Label !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
