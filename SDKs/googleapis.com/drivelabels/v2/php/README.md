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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [labels](docs/labels/README.md)

* [drivelabelsLabelsCreate](docs/labels/README.md#drivelabelslabelscreate) - Creates a new Label.
* [drivelabelsLabelsDelta](docs/labels/README.md#drivelabelslabelsdelta) - Updates a single Label by applying a set of update requests resulting in a new draft revision. The batch update is all-or-nothing: If any of the update requests are invalid, no changes are applied. The resulting draft revision must be published before the changes may be used with Drive Items.
* [drivelabelsLabelsDisable](docs/labels/README.md#drivelabelslabelsdisable) - Disable a published Label. Disabling a Label will result in a new disabled published revision based on the current published revision. If there is a draft revision, a new disabled draft revision will be created based on the latest draft revision. Older draft revisions will be deleted. Once disabled, a label may be deleted with `DeleteLabel`.
* [drivelabelsLabelsEnable](docs/labels/README.md#drivelabelslabelsenable) - Enable a disabled Label and restore it to its published state. This will result in a new published revision based on the current disabled published revision. If there is an existing disabled draft revision, a new revision will be created based on that draft and will be enabled.
* [drivelabelsLabelsList](docs/labels/README.md#drivelabelslabelslist) - List labels.
* [drivelabelsLabelsPublish](docs/labels/README.md#drivelabelslabelspublish) - Publish all draft changes to the Label. Once published, the Label may not return to its draft state. See `google.apps.drive.labels.v2.Lifecycle` for more information. Publishing a Label will result in a new published revision. All previous draft revisions will be deleted. Previous published revisions will be kept but are subject to automated deletion as needed. Once published, some changes are no longer permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the Label will be rejected. For example, the following changes to a Label will be rejected after the Label is published: * The label cannot be directly deleted. It must be disabled first, then deleted. * Field.FieldType cannot be changed. * Changes to Field validation options cannot reject something that was previously accepted. * Reducing the max entries.
* [drivelabelsLabelsRevisionsLocksList](docs/labels/README.md#drivelabelslabelsrevisionslockslist) - Lists the LabelLocks on a Label.
* [drivelabelsLabelsRevisionsPermissionsBatchDelete](docs/labels/README.md#drivelabelslabelsrevisionspermissionsbatchdelete) - Deletes Label permissions. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* [drivelabelsLabelsRevisionsPermissionsBatchUpdate](docs/labels/README.md#drivelabelslabelsrevisionspermissionsbatchupdate) - Updates Label permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* [drivelabelsLabelsRevisionsPermissionsCreate](docs/labels/README.md#drivelabelslabelsrevisionspermissionscreate) - Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* [drivelabelsLabelsRevisionsPermissionsDelete](docs/labels/README.md#drivelabelslabelsrevisionspermissionsdelete) - Deletes a Label's permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* [drivelabelsLabelsRevisionsPermissionsList](docs/labels/README.md#drivelabelslabelsrevisionspermissionslist) - Lists a Label's permissions.
* [drivelabelsLabelsRevisionsUpdatePermissions](docs/labels/README.md#drivelabelslabelsrevisionsupdatepermissions) - Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* [drivelabelsLabelsUpdateLabelCopyMode](docs/labels/README.md#drivelabelslabelsupdatelabelcopymode) - Updates a Label's `CopyMode`. Changes to this policy are not revisioned, do not require publishing, and take effect immediately.

### [limits](docs/limits/README.md)

* [drivelabelsLimitsGetLabel](docs/limits/README.md#drivelabelslimitsgetlabel) - Get the constraints on the structure of a Label; such as, the maximum number of Fields allowed and maximum length of the label title.

### [users](docs/users/README.md)

* [drivelabelsUsersGetCapabilities](docs/users/README.md#drivelabelsusersgetcapabilities) - Gets the user capabilities.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
