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
    $request->googleAppsDriveLabelsV2betaLabelInput->appliedLabelPolicy->copyMode = GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicyCopyModeEnum::DO_NOT_COPY;
    $request->googleAppsDriveLabelsV2betaLabelInput->creator = new GoogleAppsDriveLabelsV2betaUserInfo();
    $request->googleAppsDriveLabelsV2betaLabelInput->creator->person = 'excepturi';
    $request->googleAppsDriveLabelsV2betaLabelInput->disabler = new GoogleAppsDriveLabelsV2betaUserInfo();
    $request->googleAppsDriveLabelsV2betaLabelInput->disabler->person = 'nisi';
    $request->googleAppsDriveLabelsV2betaLabelInput->displayHints = new GoogleAppsDriveLabelsV2betaLabelDisplayHints();
    $request->googleAppsDriveLabelsV2betaLabelInput->displayHints->disabled = false;
    $request->googleAppsDriveLabelsV2betaLabelInput->displayHints->hiddenInSearch = false;
    $request->googleAppsDriveLabelsV2betaLabelInput->displayHints->priority = 'recusandae';
    $request->googleAppsDriveLabelsV2betaLabelInput->displayHints->shownInApply = false;
    $request->googleAppsDriveLabelsV2betaLabelInput->fields = [
        new GoogleAppsDriveLabelsV2betaFieldInput(),
        new GoogleAppsDriveLabelsV2betaFieldInput(),
        new GoogleAppsDriveLabelsV2betaFieldInput(),
        new GoogleAppsDriveLabelsV2betaFieldInput(),
    ];
    $request->googleAppsDriveLabelsV2betaLabelInput->labelType = GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum::LABEL_TYPE_UNSPECIFIED;
    $request->googleAppsDriveLabelsV2betaLabelInput->learnMoreUri = 'quis';
    $request->googleAppsDriveLabelsV2betaLabelInput->lifecycle = new GoogleAppsDriveLabelsV2betaLifecycleInput();
    $request->googleAppsDriveLabelsV2betaLabelInput->lifecycle->disabledPolicy = new GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy();
    $request->googleAppsDriveLabelsV2betaLabelInput->lifecycle->disabledPolicy->hideInSearch = false;
    $request->googleAppsDriveLabelsV2betaLabelInput->lifecycle->disabledPolicy->showInApply = false;
    $request->googleAppsDriveLabelsV2betaLabelInput->properties = new GoogleAppsDriveLabelsV2betaLabelProperties();
    $request->googleAppsDriveLabelsV2betaLabelInput->properties->description = 'veritatis';
    $request->googleAppsDriveLabelsV2betaLabelInput->properties->title = 'Miss';
    $request->googleAppsDriveLabelsV2betaLabelInput->publisher = new GoogleAppsDriveLabelsV2betaUserInfo();
    $request->googleAppsDriveLabelsV2betaLabelInput->publisher->person = 'perferendis';
    $request->googleAppsDriveLabelsV2betaLabelInput->revisionCreator = new GoogleAppsDriveLabelsV2betaUserInfo();
    $request->googleAppsDriveLabelsV2betaLabelInput->revisionCreator->person = 'ipsam';
    $request->googleAppsDriveLabelsV2betaLabelInput->schemaCapabilities = new GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities();
    $request->googleAppsDriveLabelsV2betaLabelInput->schemaCapabilities->canDelete = false;
    $request->googleAppsDriveLabelsV2betaLabelInput->schemaCapabilities->canDisable = false;
    $request->googleAppsDriveLabelsV2betaLabelInput->schemaCapabilities->canEnable = false;
    $request->googleAppsDriveLabelsV2betaLabelInput->schemaCapabilities->canUpdate = false;
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

    if ($response->googleAppsDriveLabelsV2betaLabel !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaFieldInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaUserInfo;
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteFieldRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteSelectionChoiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableFieldRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldPropertiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateLabelPropertiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaLabelProperties;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestViewEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaWriteControl;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivelabelsLabelsDeltaRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleAppsDriveLabelsV2betaDeltaUpdateLabelRequestInput = new GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestInput();
    $request->googleAppsDriveLabelsV2betaDeltaUpdateLabelRequestInput->languageCode = 'totam';
    $request->googleAppsDriveLabelsV2betaDeltaUpdateLabelRequestInput->requests = [
        new GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput(),
        new GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput(),
        new GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput(),
        new GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput(),
    ];
    $request->googleAppsDriveLabelsV2betaDeltaUpdateLabelRequestInput->useAdminAccess = false;
    $request->googleAppsDriveLabelsV2betaDeltaUpdateLabelRequestInput->view = GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestViewEnum::LABEL_VIEW_FULL;
    $request->googleAppsDriveLabelsV2betaDeltaUpdateLabelRequestInput->writeControl = new GoogleAppsDriveLabelsV2betaWriteControl();
    $request->googleAppsDriveLabelsV2betaDeltaUpdateLabelRequestInput->writeControl->requiredRevisionId = 'dicta';
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

    if ($response->googleAppsDriveLabelsV2betaDeltaUpdateLabelResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaDisableLabelRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaWriteControl;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivelabelsLabelsDisableRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleAppsDriveLabelsV2betaDisableLabelRequest = new GoogleAppsDriveLabelsV2betaDisableLabelRequest();
    $request->googleAppsDriveLabelsV2betaDisableLabelRequest->disabledPolicy = new GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy();
    $request->googleAppsDriveLabelsV2betaDisableLabelRequest->disabledPolicy->hideInSearch = false;
    $request->googleAppsDriveLabelsV2betaDisableLabelRequest->disabledPolicy->showInApply = false;
    $request->googleAppsDriveLabelsV2betaDisableLabelRequest->languageCode = 'ipsum';
    $request->googleAppsDriveLabelsV2betaDisableLabelRequest->updateMask = 'excepturi';
    $request->googleAppsDriveLabelsV2betaDisableLabelRequest->useAdminAccess = false;
    $request->googleAppsDriveLabelsV2betaDisableLabelRequest->writeControl = new GoogleAppsDriveLabelsV2betaWriteControl();
    $request->googleAppsDriveLabelsV2betaDisableLabelRequest->writeControl->requiredRevisionId = 'aspernatur';
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

    if ($response->googleAppsDriveLabelsV2betaLabel !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaEnableLabelRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaWriteControl;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivelabelsLabelsEnableRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleAppsDriveLabelsV2betaEnableLabelRequest = new GoogleAppsDriveLabelsV2betaEnableLabelRequest();
    $request->googleAppsDriveLabelsV2betaEnableLabelRequest->languageCode = 'saepe';
    $request->googleAppsDriveLabelsV2betaEnableLabelRequest->useAdminAccess = false;
    $request->googleAppsDriveLabelsV2betaEnableLabelRequest->writeControl = new GoogleAppsDriveLabelsV2betaWriteControl();
    $request->googleAppsDriveLabelsV2betaEnableLabelRequest->writeControl->requiredRevisionId = 'quidem';
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

    if ($response->googleAppsDriveLabelsV2betaLabel !== null) {
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

    if ($response->googleAppsDriveLabelsV2betaListLabelsResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaPublishLabelRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaWriteControl;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivelabelsLabelsPublishRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleAppsDriveLabelsV2betaPublishLabelRequest = new GoogleAppsDriveLabelsV2betaPublishLabelRequest();
    $request->googleAppsDriveLabelsV2betaPublishLabelRequest->languageCode = 'quam';
    $request->googleAppsDriveLabelsV2betaPublishLabelRequest->useAdminAccess = false;
    $request->googleAppsDriveLabelsV2betaPublishLabelRequest->writeControl = new GoogleAppsDriveLabelsV2betaWriteControl();
    $request->googleAppsDriveLabelsV2betaPublishLabelRequest->writeControl->requiredRevisionId = 'molestiae';
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

    if ($response->googleAppsDriveLabelsV2betaLabel !== null) {
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

    if ($response->googleAppsDriveLabelsV2betaListLabelLocksResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivelabelsLabelsRevisionsPermissionsBatchDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequest = new GoogleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequest();
    $request->googleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequest->requests = [
        new GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequest(),
        new GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequest(),
        new GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequest(),
    ];
    $request->googleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequest->useAdminAccess = false;
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaLabelPermission;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivelabelsLabelsRevisionsPermissionsBatchUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsRequest = new GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsRequest();
    $request->googleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsRequest->requests = [
        new GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest(),
    ];
    $request->googleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsRequest->useAdminAccess = false;
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

    if ($response->googleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaLabelPermission;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivelabelsLabelsRevisionsPermissionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleAppsDriveLabelsV2betaLabelPermission = new GoogleAppsDriveLabelsV2betaLabelPermission();
    $request->googleAppsDriveLabelsV2betaLabelPermission->audience = 'modi';
    $request->googleAppsDriveLabelsV2betaLabelPermission->email = 'Judah92@yahoo.com';
    $request->googleAppsDriveLabelsV2betaLabelPermission->group = 'sint';
    $request->googleAppsDriveLabelsV2betaLabelPermission->name = 'Patti Gottlieb MD';
    $request->googleAppsDriveLabelsV2betaLabelPermission->person = 'quibusdam';
    $request->googleAppsDriveLabelsV2betaLabelPermission->role = GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnum::LABEL_ROLE_UNSPECIFIED;
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

    if ($response->googleAppsDriveLabelsV2betaLabelPermission !== null) {
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

    if ($response->googleAppsDriveLabelsV2betaListLabelPermissionsResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaLabelPermission;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivelabelsLabelsRevisionsUpdatePermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleAppsDriveLabelsV2betaLabelPermission = new GoogleAppsDriveLabelsV2betaLabelPermission();
    $request->googleAppsDriveLabelsV2betaLabelPermission->audience = 'dicta';
    $request->googleAppsDriveLabelsV2betaLabelPermission->email = 'Obie.Schulist@gmail.com';
    $request->googleAppsDriveLabelsV2betaLabelPermission->group = 'laborum';
    $request->googleAppsDriveLabelsV2betaLabelPermission->name = 'Alfred McClure';
    $request->googleAppsDriveLabelsV2betaLabelPermission->person = 'delectus';
    $request->googleAppsDriveLabelsV2betaLabelPermission->role = GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnum::ORGANIZER;
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

    if ($response->googleAppsDriveLabelsV2betaLabelPermission !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestCopyModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestViewEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivelabelsLabelsUpdateLabelCopyModeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest = new GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest();
    $request->googleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest->copyMode = GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestCopyModeEnum::ALWAYS_COPY;
    $request->googleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest->languageCode = 'molestiae';
    $request->googleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest->useAdminAccess = false;
    $request->googleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest->view = GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestViewEnum::LABEL_VIEW_BASIC;
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

    if ($response->googleAppsDriveLabelsV2betaLabel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
