# projects

### Available Operations

* [dlpProjectsLocationsContentDeidentify](#dlpprojectslocationscontentdeidentify) - De-identifies potentially sensitive info from a ContentItem. This method has limits on input size and output size. See https://cloud.google.com/dlp/docs/deidentify-sensitive-data to learn more. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.
* [dlpProjectsLocationsContentInspect](#dlpprojectslocationscontentinspect) - Finds potentially sensitive info in content. This method has limits on input size, processing time, and output size. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated. For how to guides, see https://cloud.google.com/dlp/docs/inspecting-images and https://cloud.google.com/dlp/docs/inspecting-text,
* [dlpProjectsLocationsContentReidentify](#dlpprojectslocationscontentreidentify) - Re-identifies content that has been de-identified. See https://cloud.google.com/dlp/docs/pseudonymization#re-identification_in_free_text_code_example to learn more.
* [dlpProjectsLocationsDeidentifyTemplatesCreate](#dlpprojectslocationsdeidentifytemplatescreate) - Creates a DeidentifyTemplate for reusing frequently used configuration for de-identifying content, images, and storage. See https://cloud.google.com/dlp/docs/creating-templates-deid to learn more.
* [dlpProjectsLocationsDeidentifyTemplatesList](#dlpprojectslocationsdeidentifytemplateslist) - Lists DeidentifyTemplates. See https://cloud.google.com/dlp/docs/creating-templates-deid to learn more.
* [dlpProjectsLocationsDlpJobsCancel](#dlpprojectslocationsdlpjobscancel) - Starts asynchronous cancellation on a long-running DlpJob. The server makes a best effort to cancel the DlpJob, but success is not guaranteed. See https://cloud.google.com/dlp/docs/inspecting-storage and https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.
* [dlpProjectsLocationsDlpJobsCreate](#dlpprojectslocationsdlpjobscreate) - Creates a new job to inspect storage or calculate risk metrics. See https://cloud.google.com/dlp/docs/inspecting-storage and https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more. When no InfoTypes or CustomInfoTypes are specified in inspect jobs, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.
* [dlpProjectsLocationsDlpJobsFinish](#dlpprojectslocationsdlpjobsfinish) - Finish a running hybrid DlpJob. Triggers the finalization steps and running of any enabled actions that have not yet run.
* [dlpProjectsLocationsDlpJobsList](#dlpprojectslocationsdlpjobslist) - Lists DlpJobs that match the specified filter in the request. See https://cloud.google.com/dlp/docs/inspecting-storage and https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.
* [dlpProjectsLocationsImageRedact](#dlpprojectslocationsimageredact) - Redacts potentially sensitive info from an image. This method has limits on input size, processing time, and output size. See https://cloud.google.com/dlp/docs/redacting-sensitive-data-images to learn more. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.
* [dlpProjectsLocationsInspectTemplatesCreate](#dlpprojectslocationsinspecttemplatescreate) - Creates an InspectTemplate for reusing frequently used configuration for inspecting content, images, and storage. See https://cloud.google.com/dlp/docs/creating-templates to learn more.
* [dlpProjectsLocationsInspectTemplatesList](#dlpprojectslocationsinspecttemplateslist) - Lists InspectTemplates. See https://cloud.google.com/dlp/docs/creating-templates to learn more.
* [dlpProjectsLocationsJobTriggersActivate](#dlpprojectslocationsjobtriggersactivate) - Activate a job trigger. Causes the immediate execute of a trigger instead of waiting on the trigger event to occur.
* [dlpProjectsLocationsJobTriggersCreate](#dlpprojectslocationsjobtriggerscreate) - Creates a job trigger to run DLP actions such as scanning storage for sensitive information on a set schedule. See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.
* [dlpProjectsLocationsJobTriggersHybridInspect](#dlpprojectslocationsjobtriggershybridinspect) - Inspect hybrid content and store findings to a trigger. The inspection will be processed asynchronously. To review the findings monitor the jobs within the trigger.
* [dlpProjectsLocationsJobTriggersList](#dlpprojectslocationsjobtriggerslist) - Lists job triggers. See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.
* [dlpProjectsStoredInfoTypesCreate](#dlpprojectsstoredinfotypescreate) - Creates a pre-built stored infoType to be used for inspection. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
* [dlpProjectsStoredInfoTypesDelete](#dlpprojectsstoredinfotypesdelete) - Deletes a stored infoType. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
* [dlpProjectsStoredInfoTypesGet](#dlpprojectsstoredinfotypesget) - Gets a stored infoType. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
* [dlpProjectsStoredInfoTypesList](#dlpprojectsstoredinfotypeslist) - Lists stored infoTypes. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
* [dlpProjectsStoredInfoTypesPatch](#dlpprojectsstoredinfotypespatch) - Updates the stored infoType by creating a new version. The existing version will continue to be used until the new version is ready. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.

## dlpProjectsLocationsContentDeidentify

De-identifies potentially sensitive info from a ContentItem. This method has limits on input size and output size. See https://cloud.google.com/dlp/docs/deidentify-sensitive-data to learn more. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsLocationsContentDeidentifyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2DeidentifyContentRequest;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2DeidentifyConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ImageTransformations;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ImageTransformation;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Color;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2SelectedInfoTypes;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InfoType;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2SensitivityScore;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2SensitivityScoreScoreEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InfoTypeTransformations;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InfoTypeTransformation;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2PrimitiveTransformation;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2BucketingConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Bucket;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Value;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDate;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ValueDayOfWeekValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeTimeOfDay;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CharacterMaskConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CharsToIgnore;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnoreEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CryptoDeterministicConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2FieldId;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CryptoKey;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2KmsWrappedCryptoKey;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2TransientCryptoKey;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2UnwrappedCryptoKey;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CryptoHashConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2DateShiftConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2FixedSizeBucketingConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ReplaceValueConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ReplaceDictionaryConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2WordList;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2TimePartConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2TimePartConfigPartToExtractEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2RecordTransformations;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2FieldTransformation;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2RecordCondition;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Expressions;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Conditions;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Condition;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ConditionOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ExpressionsLogicalOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2RecordSuppression;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2TransformationErrorHandling;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InspectConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InspectConfigContentOptionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CustomInfoType;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2DetectionRule;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2HotwordRule;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Regex;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2LikelihoodAdjustment;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihoodEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Proximity;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Dictionary;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CloudStoragePath;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CustomInfoTypeExclusionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2StoredType;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2FindingLimits;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InfoTypeLimit;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InspectionRuleSet;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InspectionRule;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ExclusionRule;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ExcludeByHotword;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ExcludeInfoTypes;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ContentItem;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ByteContentItem;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ByteContentItemTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Table;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Row;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsLocationsContentDeidentifySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DlpProjectsLocationsContentDeidentifyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googlePrivacyDlpV2DeidentifyContentRequest = new GooglePrivacyDlpV2DeidentifyContentRequest();
    $request->googlePrivacyDlpV2DeidentifyContentRequest->deidentifyConfig = new GooglePrivacyDlpV2DeidentifyConfig();
    $request->googlePrivacyDlpV2DeidentifyContentRequest->deidentifyConfig->imageTransformations = new GooglePrivacyDlpV2ImageTransformations();
    $request->googlePrivacyDlpV2DeidentifyContentRequest->deidentifyConfig->imageTransformations->transforms = [
        new GooglePrivacyDlpV2ImageTransformation(),
        new GooglePrivacyDlpV2ImageTransformation(),
        new GooglePrivacyDlpV2ImageTransformation(),
        new GooglePrivacyDlpV2ImageTransformation(),
    ];
    $request->googlePrivacyDlpV2DeidentifyContentRequest->deidentifyConfig->infoTypeTransformations = new GooglePrivacyDlpV2InfoTypeTransformations();
    $request->googlePrivacyDlpV2DeidentifyContentRequest->deidentifyConfig->infoTypeTransformations->transformations = [
        new GooglePrivacyDlpV2InfoTypeTransformation(),
        new GooglePrivacyDlpV2InfoTypeTransformation(),
    ];
    $request->googlePrivacyDlpV2DeidentifyContentRequest->deidentifyConfig->recordTransformations = new GooglePrivacyDlpV2RecordTransformations();
    $request->googlePrivacyDlpV2DeidentifyContentRequest->deidentifyConfig->recordTransformations->fieldTransformations = [
        new GooglePrivacyDlpV2FieldTransformation(),
        new GooglePrivacyDlpV2FieldTransformation(),
        new GooglePrivacyDlpV2FieldTransformation(),
    ];
    $request->googlePrivacyDlpV2DeidentifyContentRequest->deidentifyConfig->recordTransformations->recordSuppressions = [
        new GooglePrivacyDlpV2RecordSuppression(),
        new GooglePrivacyDlpV2RecordSuppression(),
        new GooglePrivacyDlpV2RecordSuppression(),
        new GooglePrivacyDlpV2RecordSuppression(),
    ];
    $request->googlePrivacyDlpV2DeidentifyContentRequest->deidentifyConfig->transformationErrorHandling = new GooglePrivacyDlpV2TransformationErrorHandling();
    $request->googlePrivacyDlpV2DeidentifyContentRequest->deidentifyConfig->transformationErrorHandling->leaveUntransformed = [
        'dicta' => 'nam',
        'officia' => 'occaecati',
        'fugit' => 'deleniti',
    ];
    $request->googlePrivacyDlpV2DeidentifyContentRequest->deidentifyConfig->transformationErrorHandling->throwError = [
        'optio' => 'totam',
        'beatae' => 'commodi',
        'molestiae' => 'modi',
        'qui' => 'impedit',
    ];
    $request->googlePrivacyDlpV2DeidentifyContentRequest->deidentifyTemplateName = 'cum';
    $request->googlePrivacyDlpV2DeidentifyContentRequest->inspectConfig = new GooglePrivacyDlpV2InspectConfig();
    $request->googlePrivacyDlpV2DeidentifyContentRequest->inspectConfig->contentOptions = [
        GooglePrivacyDlpV2InspectConfigContentOptionsEnum::CONTENT_UNSPECIFIED,
        GooglePrivacyDlpV2InspectConfigContentOptionsEnum::CONTENT_TEXT,
    ];
    $request->googlePrivacyDlpV2DeidentifyContentRequest->inspectConfig->customInfoTypes = [
        new GooglePrivacyDlpV2CustomInfoType(),
    ];
    $request->googlePrivacyDlpV2DeidentifyContentRequest->inspectConfig->excludeInfoTypes = false;
    $request->googlePrivacyDlpV2DeidentifyContentRequest->inspectConfig->includeQuote = false;
    $request->googlePrivacyDlpV2DeidentifyContentRequest->inspectConfig->infoTypes = [
        new GooglePrivacyDlpV2InfoType(),
    ];
    $request->googlePrivacyDlpV2DeidentifyContentRequest->inspectConfig->limits = new GooglePrivacyDlpV2FindingLimits();
    $request->googlePrivacyDlpV2DeidentifyContentRequest->inspectConfig->limits->maxFindingsPerInfoType = [
        new GooglePrivacyDlpV2InfoTypeLimit(),
        new GooglePrivacyDlpV2InfoTypeLimit(),
    ];
    $request->googlePrivacyDlpV2DeidentifyContentRequest->inspectConfig->limits->maxFindingsPerItem = 617636;
    $request->googlePrivacyDlpV2DeidentifyContentRequest->inspectConfig->limits->maxFindingsPerRequest = 149675;
    $request->googlePrivacyDlpV2DeidentifyContentRequest->inspectConfig->minLikelihood = GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum::POSSIBLE;
    $request->googlePrivacyDlpV2DeidentifyContentRequest->inspectConfig->ruleSet = [
        new GooglePrivacyDlpV2InspectionRuleSet(),
    ];
    $request->googlePrivacyDlpV2DeidentifyContentRequest->inspectTemplateName = 'natus';
    $request->googlePrivacyDlpV2DeidentifyContentRequest->item = new GooglePrivacyDlpV2ContentItem();
    $request->googlePrivacyDlpV2DeidentifyContentRequest->item->byteItem = new GooglePrivacyDlpV2ByteContentItem();
    $request->googlePrivacyDlpV2DeidentifyContentRequest->item->byteItem->data = 'laboriosam';
    $request->googlePrivacyDlpV2DeidentifyContentRequest->item->byteItem->type = GooglePrivacyDlpV2ByteContentItemTypeEnum::TSV;
    $request->googlePrivacyDlpV2DeidentifyContentRequest->item->table = new GooglePrivacyDlpV2Table();
    $request->googlePrivacyDlpV2DeidentifyContentRequest->item->table->headers = [
        new GooglePrivacyDlpV2FieldId(),
        new GooglePrivacyDlpV2FieldId(),
        new GooglePrivacyDlpV2FieldId(),
        new GooglePrivacyDlpV2FieldId(),
    ];
    $request->googlePrivacyDlpV2DeidentifyContentRequest->item->table->rows = [
        new GooglePrivacyDlpV2Row(),
        new GooglePrivacyDlpV2Row(),
        new GooglePrivacyDlpV2Row(),
    ];
    $request->googlePrivacyDlpV2DeidentifyContentRequest->item->value = 'in';
    $request->googlePrivacyDlpV2DeidentifyContentRequest->locationId = 'corporis';
    $request->accessToken = 'iste';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'saepe';
    $request->fields = 'quidem';
    $request->key = 'architecto';
    $request->oauthToken = 'ipsa';
    $request->parent = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'est';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new DlpProjectsLocationsContentDeidentifySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dlpProjectsLocationsContentDeidentify($request, $requestSecurity);

    if ($response->googlePrivacyDlpV2DeidentifyContentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dlpProjectsLocationsContentInspect

Finds potentially sensitive info in content. This method has limits on input size, processing time, and output size. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated. For how to guides, see https://cloud.google.com/dlp/docs/inspecting-images and https://cloud.google.com/dlp/docs/inspecting-text,

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsLocationsContentInspectRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InspectContentRequest;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InspectConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InspectConfigContentOptionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CustomInfoType;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2DetectionRule;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2HotwordRule;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Regex;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2LikelihoodAdjustment;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihoodEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Proximity;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Dictionary;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CloudStoragePath;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2WordList;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CustomInfoTypeExclusionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InfoType;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2SensitivityScore;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2SensitivityScoreScoreEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2StoredType;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2FindingLimits;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InfoTypeLimit;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InspectionRuleSet;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InspectionRule;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ExclusionRule;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ExcludeByHotword;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ExcludeInfoTypes;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ContentItem;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ByteContentItem;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ByteContentItemTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Table;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2FieldId;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Row;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Value;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDate;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ValueDayOfWeekValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeTimeOfDay;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsLocationsContentInspectSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DlpProjectsLocationsContentInspectRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googlePrivacyDlpV2InspectContentRequest = new GooglePrivacyDlpV2InspectContentRequest();
    $request->googlePrivacyDlpV2InspectContentRequest->inspectConfig = new GooglePrivacyDlpV2InspectConfig();
    $request->googlePrivacyDlpV2InspectContentRequest->inspectConfig->contentOptions = [
        GooglePrivacyDlpV2InspectConfigContentOptionsEnum::CONTENT_TEXT,
    ];
    $request->googlePrivacyDlpV2InspectContentRequest->inspectConfig->customInfoTypes = [
        new GooglePrivacyDlpV2CustomInfoType(),
    ];
    $request->googlePrivacyDlpV2InspectContentRequest->inspectConfig->excludeInfoTypes = false;
    $request->googlePrivacyDlpV2InspectContentRequest->inspectConfig->includeQuote = false;
    $request->googlePrivacyDlpV2InspectContentRequest->inspectConfig->infoTypes = [
        new GooglePrivacyDlpV2InfoType(),
        new GooglePrivacyDlpV2InfoType(),
        new GooglePrivacyDlpV2InfoType(),
        new GooglePrivacyDlpV2InfoType(),
    ];
    $request->googlePrivacyDlpV2InspectContentRequest->inspectConfig->limits = new GooglePrivacyDlpV2FindingLimits();
    $request->googlePrivacyDlpV2InspectContentRequest->inspectConfig->limits->maxFindingsPerInfoType = [
        new GooglePrivacyDlpV2InfoTypeLimit(),
        new GooglePrivacyDlpV2InfoTypeLimit(),
    ];
    $request->googlePrivacyDlpV2InspectContentRequest->inspectConfig->limits->maxFindingsPerItem = 607831;
    $request->googlePrivacyDlpV2InspectContentRequest->inspectConfig->limits->maxFindingsPerRequest = 363711;
    $request->googlePrivacyDlpV2InspectContentRequest->inspectConfig->minLikelihood = GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum::VERY_UNLIKELY;
    $request->googlePrivacyDlpV2InspectContentRequest->inspectConfig->ruleSet = [
        new GooglePrivacyDlpV2InspectionRuleSet(),
        new GooglePrivacyDlpV2InspectionRuleSet(),
        new GooglePrivacyDlpV2InspectionRuleSet(),
    ];
    $request->googlePrivacyDlpV2InspectContentRequest->inspectTemplateName = 'accusantium';
    $request->googlePrivacyDlpV2InspectContentRequest->item = new GooglePrivacyDlpV2ContentItem();
    $request->googlePrivacyDlpV2InspectContentRequest->item->byteItem = new GooglePrivacyDlpV2ByteContentItem();
    $request->googlePrivacyDlpV2InspectContentRequest->item->byteItem->data = 'iure';
    $request->googlePrivacyDlpV2InspectContentRequest->item->byteItem->type = GooglePrivacyDlpV2ByteContentItemTypeEnum::PDF;
    $request->googlePrivacyDlpV2InspectContentRequest->item->table = new GooglePrivacyDlpV2Table();
    $request->googlePrivacyDlpV2InspectContentRequest->item->table->headers = [
        new GooglePrivacyDlpV2FieldId(),
        new GooglePrivacyDlpV2FieldId(),
        new GooglePrivacyDlpV2FieldId(),
        new GooglePrivacyDlpV2FieldId(),
    ];
    $request->googlePrivacyDlpV2InspectContentRequest->item->table->rows = [
        new GooglePrivacyDlpV2Row(),
        new GooglePrivacyDlpV2Row(),
        new GooglePrivacyDlpV2Row(),
        new GooglePrivacyDlpV2Row(),
    ];
    $request->googlePrivacyDlpV2InspectContentRequest->item->value = 'architecto';
    $request->googlePrivacyDlpV2InspectContentRequest->locationId = 'mollitia';
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'consequuntur';
    $request->fields = 'repellat';
    $request->key = 'mollitia';
    $request->oauthToken = 'occaecati';
    $request->parent = 'numquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new DlpProjectsLocationsContentInspectSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dlpProjectsLocationsContentInspect($request, $requestSecurity);

    if ($response->googlePrivacyDlpV2InspectContentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dlpProjectsLocationsContentReidentify

Re-identifies content that has been de-identified. See https://cloud.google.com/dlp/docs/pseudonymization#re-identification_in_free_text_code_example to learn more.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsLocationsContentReidentifyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ReidentifyContentRequest;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InspectConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InspectConfigContentOptionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CustomInfoType;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2DetectionRule;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2HotwordRule;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Regex;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2LikelihoodAdjustment;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihoodEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Proximity;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Dictionary;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CloudStoragePath;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2WordList;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CustomInfoTypeExclusionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InfoType;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2SensitivityScore;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2SensitivityScoreScoreEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2StoredType;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2FindingLimits;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InfoTypeLimit;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InspectionRuleSet;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InspectionRule;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ExclusionRule;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ExcludeByHotword;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ExcludeInfoTypes;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ContentItem;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ByteContentItem;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ByteContentItemTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Table;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2FieldId;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Row;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Value;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDate;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ValueDayOfWeekValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeTimeOfDay;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2DeidentifyConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ImageTransformations;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ImageTransformation;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Color;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2SelectedInfoTypes;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InfoTypeTransformations;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InfoTypeTransformation;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2PrimitiveTransformation;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2BucketingConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Bucket;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CharacterMaskConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CharsToIgnore;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnoreEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CryptoDeterministicConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CryptoKey;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2KmsWrappedCryptoKey;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2TransientCryptoKey;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2UnwrappedCryptoKey;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CryptoHashConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2DateShiftConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2FixedSizeBucketingConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ReplaceValueConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ReplaceDictionaryConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2TimePartConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2TimePartConfigPartToExtractEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2RecordTransformations;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2FieldTransformation;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2RecordCondition;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Expressions;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Conditions;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Condition;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ConditionOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ExpressionsLogicalOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2RecordSuppression;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2TransformationErrorHandling;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsLocationsContentReidentifySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DlpProjectsLocationsContentReidentifyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googlePrivacyDlpV2ReidentifyContentRequest = new GooglePrivacyDlpV2ReidentifyContentRequest();
    $request->googlePrivacyDlpV2ReidentifyContentRequest->inspectConfig = new GooglePrivacyDlpV2InspectConfig();
    $request->googlePrivacyDlpV2ReidentifyContentRequest->inspectConfig->contentOptions = [
        GooglePrivacyDlpV2InspectConfigContentOptionsEnum::CONTENT_UNSPECIFIED,
        GooglePrivacyDlpV2InspectConfigContentOptionsEnum::CONTENT_TEXT,
        GooglePrivacyDlpV2InspectConfigContentOptionsEnum::CONTENT_UNSPECIFIED,
    ];
    $request->googlePrivacyDlpV2ReidentifyContentRequest->inspectConfig->customInfoTypes = [
        new GooglePrivacyDlpV2CustomInfoType(),
        new GooglePrivacyDlpV2CustomInfoType(),
        new GooglePrivacyDlpV2CustomInfoType(),
    ];
    $request->googlePrivacyDlpV2ReidentifyContentRequest->inspectConfig->excludeInfoTypes = false;
    $request->googlePrivacyDlpV2ReidentifyContentRequest->inspectConfig->includeQuote = false;
    $request->googlePrivacyDlpV2ReidentifyContentRequest->inspectConfig->infoTypes = [
        new GooglePrivacyDlpV2InfoType(),
        new GooglePrivacyDlpV2InfoType(),
        new GooglePrivacyDlpV2InfoType(),
    ];
    $request->googlePrivacyDlpV2ReidentifyContentRequest->inspectConfig->limits = new GooglePrivacyDlpV2FindingLimits();
    $request->googlePrivacyDlpV2ReidentifyContentRequest->inspectConfig->limits->maxFindingsPerInfoType = [
        new GooglePrivacyDlpV2InfoTypeLimit(),
        new GooglePrivacyDlpV2InfoTypeLimit(),
    ];
    $request->googlePrivacyDlpV2ReidentifyContentRequest->inspectConfig->limits->maxFindingsPerItem = 138183;
    $request->googlePrivacyDlpV2ReidentifyContentRequest->inspectConfig->limits->maxFindingsPerRequest = 778346;
    $request->googlePrivacyDlpV2ReidentifyContentRequest->inspectConfig->minLikelihood = GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum::VERY_UNLIKELY;
    $request->googlePrivacyDlpV2ReidentifyContentRequest->inspectConfig->ruleSet = [
        new GooglePrivacyDlpV2InspectionRuleSet(),
        new GooglePrivacyDlpV2InspectionRuleSet(),
        new GooglePrivacyDlpV2InspectionRuleSet(),
        new GooglePrivacyDlpV2InspectionRuleSet(),
    ];
    $request->googlePrivacyDlpV2ReidentifyContentRequest->inspectTemplateName = 'ipsam';
    $request->googlePrivacyDlpV2ReidentifyContentRequest->item = new GooglePrivacyDlpV2ContentItem();
    $request->googlePrivacyDlpV2ReidentifyContentRequest->item->byteItem = new GooglePrivacyDlpV2ByteContentItem();
    $request->googlePrivacyDlpV2ReidentifyContentRequest->item->byteItem->data = 'id';
    $request->googlePrivacyDlpV2ReidentifyContentRequest->item->byteItem->type = GooglePrivacyDlpV2ByteContentItemTypeEnum::AVRO;
    $request->googlePrivacyDlpV2ReidentifyContentRequest->item->table = new GooglePrivacyDlpV2Table();
    $request->googlePrivacyDlpV2ReidentifyContentRequest->item->table->headers = [
        new GooglePrivacyDlpV2FieldId(),
    ];
    $request->googlePrivacyDlpV2ReidentifyContentRequest->item->table->rows = [
        new GooglePrivacyDlpV2Row(),
    ];
    $request->googlePrivacyDlpV2ReidentifyContentRequest->item->value = 'error';
    $request->googlePrivacyDlpV2ReidentifyContentRequest->locationId = 'temporibus';
    $request->googlePrivacyDlpV2ReidentifyContentRequest->reidentifyConfig = new GooglePrivacyDlpV2DeidentifyConfig();
    $request->googlePrivacyDlpV2ReidentifyContentRequest->reidentifyConfig->imageTransformations = new GooglePrivacyDlpV2ImageTransformations();
    $request->googlePrivacyDlpV2ReidentifyContentRequest->reidentifyConfig->imageTransformations->transforms = [
        new GooglePrivacyDlpV2ImageTransformation(),
        new GooglePrivacyDlpV2ImageTransformation(),
        new GooglePrivacyDlpV2ImageTransformation(),
    ];
    $request->googlePrivacyDlpV2ReidentifyContentRequest->reidentifyConfig->infoTypeTransformations = new GooglePrivacyDlpV2InfoTypeTransformations();
    $request->googlePrivacyDlpV2ReidentifyContentRequest->reidentifyConfig->infoTypeTransformations->transformations = [
        new GooglePrivacyDlpV2InfoTypeTransformation(),
    ];
    $request->googlePrivacyDlpV2ReidentifyContentRequest->reidentifyConfig->recordTransformations = new GooglePrivacyDlpV2RecordTransformations();
    $request->googlePrivacyDlpV2ReidentifyContentRequest->reidentifyConfig->recordTransformations->fieldTransformations = [
        new GooglePrivacyDlpV2FieldTransformation(),
        new GooglePrivacyDlpV2FieldTransformation(),
        new GooglePrivacyDlpV2FieldTransformation(),
        new GooglePrivacyDlpV2FieldTransformation(),
    ];
    $request->googlePrivacyDlpV2ReidentifyContentRequest->reidentifyConfig->recordTransformations->recordSuppressions = [
        new GooglePrivacyDlpV2RecordSuppression(),
        new GooglePrivacyDlpV2RecordSuppression(),
        new GooglePrivacyDlpV2RecordSuppression(),
        new GooglePrivacyDlpV2RecordSuppression(),
    ];
    $request->googlePrivacyDlpV2ReidentifyContentRequest->reidentifyConfig->transformationErrorHandling = new GooglePrivacyDlpV2TransformationErrorHandling();
    $request->googlePrivacyDlpV2ReidentifyContentRequest->reidentifyConfig->transformationErrorHandling->leaveUntransformed = [
        'nihil' => 'praesentium',
        'voluptatibus' => 'ipsa',
        'omnis' => 'voluptate',
        'cum' => 'perferendis',
    ];
    $request->googlePrivacyDlpV2ReidentifyContentRequest->reidentifyConfig->transformationErrorHandling->throwError = [
        'reprehenderit' => 'ut',
    ];
    $request->googlePrivacyDlpV2ReidentifyContentRequest->reidentifyTemplateName = 'maiores';
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolore';
    $request->fields = 'iusto';
    $request->key = 'dicta';
    $request->oauthToken = 'harum';
    $request->parent = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'repudiandae';

    $requestSecurity = new DlpProjectsLocationsContentReidentifySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dlpProjectsLocationsContentReidentify($request, $requestSecurity);

    if ($response->googlePrivacyDlpV2ReidentifyContentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dlpProjectsLocationsDeidentifyTemplatesCreate

Creates a DeidentifyTemplate for reusing frequently used configuration for de-identifying content, images, and storage. See https://cloud.google.com/dlp/docs/creating-templates-deid to learn more.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsLocationsDeidentifyTemplatesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CreateDeidentifyTemplateRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2DeidentifyTemplateInput;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2DeidentifyConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ImageTransformations;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ImageTransformation;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Color;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2SelectedInfoTypes;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InfoType;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2SensitivityScore;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2SensitivityScoreScoreEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InfoTypeTransformations;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InfoTypeTransformation;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2PrimitiveTransformation;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2BucketingConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Bucket;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Value;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDate;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ValueDayOfWeekValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeTimeOfDay;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CharacterMaskConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CharsToIgnore;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnoreEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CryptoDeterministicConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2FieldId;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CryptoKey;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2KmsWrappedCryptoKey;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2TransientCryptoKey;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2UnwrappedCryptoKey;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CryptoHashConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2DateShiftConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2FixedSizeBucketingConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ReplaceValueConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ReplaceDictionaryConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2WordList;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2TimePartConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2TimePartConfigPartToExtractEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2RecordTransformations;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2FieldTransformation;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2RecordCondition;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Expressions;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Conditions;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Condition;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ConditionOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ExpressionsLogicalOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2RecordSuppression;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2TransformationErrorHandling;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsLocationsDeidentifyTemplatesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DlpProjectsLocationsDeidentifyTemplatesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googlePrivacyDlpV2CreateDeidentifyTemplateRequestInput = new GooglePrivacyDlpV2CreateDeidentifyTemplateRequestInput();
    $request->googlePrivacyDlpV2CreateDeidentifyTemplateRequestInput->deidentifyTemplate = new GooglePrivacyDlpV2DeidentifyTemplateInput();
    $request->googlePrivacyDlpV2CreateDeidentifyTemplateRequestInput->deidentifyTemplate->deidentifyConfig = new GooglePrivacyDlpV2DeidentifyConfig();
    $request->googlePrivacyDlpV2CreateDeidentifyTemplateRequestInput->deidentifyTemplate->deidentifyConfig->imageTransformations = new GooglePrivacyDlpV2ImageTransformations();
    $request->googlePrivacyDlpV2CreateDeidentifyTemplateRequestInput->deidentifyTemplate->deidentifyConfig->imageTransformations->transforms = [
        new GooglePrivacyDlpV2ImageTransformation(),
    ];
    $request->googlePrivacyDlpV2CreateDeidentifyTemplateRequestInput->deidentifyTemplate->deidentifyConfig->infoTypeTransformations = new GooglePrivacyDlpV2InfoTypeTransformations();
    $request->googlePrivacyDlpV2CreateDeidentifyTemplateRequestInput->deidentifyTemplate->deidentifyConfig->infoTypeTransformations->transformations = [
        new GooglePrivacyDlpV2InfoTypeTransformation(),
        new GooglePrivacyDlpV2InfoTypeTransformation(),
        new GooglePrivacyDlpV2InfoTypeTransformation(),
    ];
    $request->googlePrivacyDlpV2CreateDeidentifyTemplateRequestInput->deidentifyTemplate->deidentifyConfig->recordTransformations = new GooglePrivacyDlpV2RecordTransformations();
    $request->googlePrivacyDlpV2CreateDeidentifyTemplateRequestInput->deidentifyTemplate->deidentifyConfig->recordTransformations->fieldTransformations = [
        new GooglePrivacyDlpV2FieldTransformation(),
        new GooglePrivacyDlpV2FieldTransformation(),
        new GooglePrivacyDlpV2FieldTransformation(),
    ];
    $request->googlePrivacyDlpV2CreateDeidentifyTemplateRequestInput->deidentifyTemplate->deidentifyConfig->recordTransformations->recordSuppressions = [
        new GooglePrivacyDlpV2RecordSuppression(),
        new GooglePrivacyDlpV2RecordSuppression(),
        new GooglePrivacyDlpV2RecordSuppression(),
    ];
    $request->googlePrivacyDlpV2CreateDeidentifyTemplateRequestInput->deidentifyTemplate->deidentifyConfig->transformationErrorHandling = new GooglePrivacyDlpV2TransformationErrorHandling();
    $request->googlePrivacyDlpV2CreateDeidentifyTemplateRequestInput->deidentifyTemplate->deidentifyConfig->transformationErrorHandling->leaveUntransformed = [
        'modi' => 'praesentium',
        'rem' => 'voluptates',
        'quasi' => 'repudiandae',
        'sint' => 'veritatis',
    ];
    $request->googlePrivacyDlpV2CreateDeidentifyTemplateRequestInput->deidentifyTemplate->deidentifyConfig->transformationErrorHandling->throwError = [
        'incidunt' => 'enim',
        'consequatur' => 'est',
        'quibusdam' => 'explicabo',
        'deserunt' => 'distinctio',
    ];
    $request->googlePrivacyDlpV2CreateDeidentifyTemplateRequestInput->deidentifyTemplate->description = 'quibusdam';
    $request->googlePrivacyDlpV2CreateDeidentifyTemplateRequestInput->deidentifyTemplate->displayName = 'labore';
    $request->googlePrivacyDlpV2CreateDeidentifyTemplateRequestInput->locationId = 'modi';
    $request->googlePrivacyDlpV2CreateDeidentifyTemplateRequestInput->templateId = 'qui';
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quos';
    $request->fields = 'perferendis';
    $request->key = 'magni';
    $request->oauthToken = 'assumenda';
    $request->parent = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'alias';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new DlpProjectsLocationsDeidentifyTemplatesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dlpProjectsLocationsDeidentifyTemplatesCreate($request, $requestSecurity);

    if ($response->googlePrivacyDlpV2DeidentifyTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dlpProjectsLocationsDeidentifyTemplatesList

Lists DeidentifyTemplates. See https://cloud.google.com/dlp/docs/creating-templates-deid to learn more.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsLocationsDeidentifyTemplatesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsLocationsDeidentifyTemplatesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DlpProjectsLocationsDeidentifyTemplatesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempore';
    $request->fields = 'labore';
    $request->key = 'delectus';
    $request->locationId = 'eum';
    $request->oauthToken = 'non';
    $request->orderBy = 'eligendi';
    $request->pageSize = 576157;
    $request->pageToken = 'aliquid';
    $request->parent = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'necessitatibus';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'officia';

    $requestSecurity = new DlpProjectsLocationsDeidentifyTemplatesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dlpProjectsLocationsDeidentifyTemplatesList($request, $requestSecurity);

    if ($response->googlePrivacyDlpV2ListDeidentifyTemplatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dlpProjectsLocationsDlpJobsCancel

Starts asynchronous cancellation on a long-running DlpJob. The server makes a best effort to cancel the DlpJob, but success is not guaranteed. See https://cloud.google.com/dlp/docs/inspecting-storage and https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsLocationsDlpJobsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsLocationsDlpJobsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DlpProjectsLocationsDlpJobsCancelRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'a' => 'dolorum',
        'in' => 'in',
        'illum' => 'maiores',
        'rerum' => 'dicta',
    ];
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'facere';
    $request->fields = 'ea';
    $request->key = 'aliquid';
    $request->name = 'Tomas Friesen';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'delectus';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'provident';

    $requestSecurity = new DlpProjectsLocationsDlpJobsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dlpProjectsLocationsDlpJobsCancel($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dlpProjectsLocationsDlpJobsCreate

Creates a new job to inspect storage or calculate risk metrics. See https://cloud.google.com/dlp/docs/inspecting-storage and https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more. When no InfoTypes or CustomInfoTypes are specified in inspect jobs, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsLocationsDlpJobsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CreateDlpJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InspectJobConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Action;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Deidentify;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2TransformationConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2TransformationDetailsStorageConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2BigQueryTable;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2PublishToPubSub;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2SaveFindings;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2OutputStorageConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2OutputStorageConfigOutputSchemaEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InspectConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InspectConfigContentOptionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CustomInfoType;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2DetectionRule;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2HotwordRule;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Regex;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2LikelihoodAdjustment;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihoodEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Proximity;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Dictionary;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CloudStoragePath;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2WordList;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CustomInfoTypeExclusionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InfoType;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2SensitivityScore;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2SensitivityScoreScoreEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2StoredType;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2FindingLimits;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InfoTypeLimit;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InspectionRuleSet;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InspectionRule;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ExclusionRule;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ExcludeByHotword;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ExcludeInfoTypes;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2StorageConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2BigQueryOptions;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2FieldId;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2BigQueryOptionsSampleMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CloudStorageOptions;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2FileSet;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CloudStorageRegexFileSet;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CloudStorageOptionsSampleMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2DatastoreOptions;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2KindExpression;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2PartitionId;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2HybridOptions;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2TableOptions;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2TimespanConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2RiskAnalysisJobConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2PrivacyMetric;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CategoricalStatsConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2DeltaPresenceEstimationConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2StatisticalTable;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2QuasiIdentifierField;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2QuasiId;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2KAnonymityConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2EntityId;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2KMapEstimationConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2AuxiliaryTable;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2QuasiIdField;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2TaggedField;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2LDiversityConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2NumericalStatsConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsLocationsDlpJobsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DlpProjectsLocationsDlpJobsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googlePrivacyDlpV2CreateDlpJobRequest = new GooglePrivacyDlpV2CreateDlpJobRequest();
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob = new GooglePrivacyDlpV2InspectJobConfig();
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->actions = [
        new GooglePrivacyDlpV2Action(),
        new GooglePrivacyDlpV2Action(),
        new GooglePrivacyDlpV2Action(),
    ];
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->inspectConfig = new GooglePrivacyDlpV2InspectConfig();
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->inspectConfig->contentOptions = [
        GooglePrivacyDlpV2InspectConfigContentOptionsEnum::CONTENT_TEXT,
        GooglePrivacyDlpV2InspectConfigContentOptionsEnum::CONTENT_IMAGE,
        GooglePrivacyDlpV2InspectConfigContentOptionsEnum::CONTENT_UNSPECIFIED,
    ];
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->inspectConfig->customInfoTypes = [
        new GooglePrivacyDlpV2CustomInfoType(),
        new GooglePrivacyDlpV2CustomInfoType(),
        new GooglePrivacyDlpV2CustomInfoType(),
    ];
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->inspectConfig->excludeInfoTypes = false;
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->inspectConfig->includeQuote = false;
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->inspectConfig->infoTypes = [
        new GooglePrivacyDlpV2InfoType(),
        new GooglePrivacyDlpV2InfoType(),
    ];
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->inspectConfig->limits = new GooglePrivacyDlpV2FindingLimits();
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->inspectConfig->limits->maxFindingsPerInfoType = [
        new GooglePrivacyDlpV2InfoTypeLimit(),
        new GooglePrivacyDlpV2InfoTypeLimit(),
    ];
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->inspectConfig->limits->maxFindingsPerItem = 618809;
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->inspectConfig->limits->maxFindingsPerRequest = 606393;
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->inspectConfig->minLikelihood = GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum::UNLIKELY;
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->inspectConfig->ruleSet = [
        new GooglePrivacyDlpV2InspectionRuleSet(),
    ];
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->inspectTemplateName = 'nihil';
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->storageConfig = new GooglePrivacyDlpV2StorageConfig();
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->storageConfig->bigQueryOptions = new GooglePrivacyDlpV2BigQueryOptions();
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->storageConfig->bigQueryOptions->excludedFields = [
        new GooglePrivacyDlpV2FieldId(),
        new GooglePrivacyDlpV2FieldId(),
    ];
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->storageConfig->bigQueryOptions->identifyingFields = [
        new GooglePrivacyDlpV2FieldId(),
        new GooglePrivacyDlpV2FieldId(),
        new GooglePrivacyDlpV2FieldId(),
    ];
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->storageConfig->bigQueryOptions->includedFields = [
        new GooglePrivacyDlpV2FieldId(),
        new GooglePrivacyDlpV2FieldId(),
        new GooglePrivacyDlpV2FieldId(),
    ];
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->storageConfig->bigQueryOptions->rowsLimit = 'labore';
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->storageConfig->bigQueryOptions->rowsLimitPercent = 290077;
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->storageConfig->bigQueryOptions->sampleMethod = GooglePrivacyDlpV2BigQueryOptionsSampleMethodEnum::TOP;
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->storageConfig->bigQueryOptions->tableReference = new GooglePrivacyDlpV2BigQueryTable();
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->storageConfig->bigQueryOptions->tableReference->datasetId = 'natus';
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->storageConfig->bigQueryOptions->tableReference->projectId = 'nobis';
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->storageConfig->bigQueryOptions->tableReference->tableId = 'eum';
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->storageConfig->cloudStorageOptions = new GooglePrivacyDlpV2CloudStorageOptions();
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->storageConfig->cloudStorageOptions->bytesLimitPerFile = 'vero';
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->storageConfig->cloudStorageOptions->bytesLimitPerFilePercent = 135474;
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->storageConfig->cloudStorageOptions->fileSet = new GooglePrivacyDlpV2FileSet();
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->storageConfig->cloudStorageOptions->fileSet->regexFileSet = new GooglePrivacyDlpV2CloudStorageRegexFileSet();
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->storageConfig->cloudStorageOptions->fileSet->regexFileSet->bucketName = 'architecto';
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->storageConfig->cloudStorageOptions->fileSet->regexFileSet->excludeRegex = [
        'et',
        'excepturi',
    ];
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->storageConfig->cloudStorageOptions->fileSet->regexFileSet->includeRegex = [
        'provident',
        'quos',
    ];
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->storageConfig->cloudStorageOptions->fileSet->url = 'sint';
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->storageConfig->cloudStorageOptions->fileTypes = [
        GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum::CSV,
    ];
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->storageConfig->cloudStorageOptions->filesLimitPercent = 968962;
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->storageConfig->cloudStorageOptions->sampleMethod = GooglePrivacyDlpV2CloudStorageOptionsSampleMethodEnum::TOP;
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->storageConfig->datastoreOptions = new GooglePrivacyDlpV2DatastoreOptions();
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->storageConfig->datastoreOptions->kind = new GooglePrivacyDlpV2KindExpression();
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->storageConfig->datastoreOptions->kind->name = 'Natalie Ernser';
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->storageConfig->datastoreOptions->partitionId = new GooglePrivacyDlpV2PartitionId();
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->storageConfig->datastoreOptions->partitionId->namespaceId = 'nemo';
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->storageConfig->datastoreOptions->partitionId->projectId = 'quasi';
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->storageConfig->hybridOptions = new GooglePrivacyDlpV2HybridOptions();
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->storageConfig->hybridOptions->description = 'iure';
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->storageConfig->hybridOptions->labels = [
        'debitis' => 'eius',
        'maxime' => 'deleniti',
        'facilis' => 'in',
        'architecto' => 'architecto',
    ];
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->storageConfig->hybridOptions->requiredFindingLabelKeys = [
        'ullam',
        'expedita',
        'nihil',
        'repellat',
    ];
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->storageConfig->hybridOptions->tableOptions = new GooglePrivacyDlpV2TableOptions();
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->storageConfig->hybridOptions->tableOptions->identifyingFields = [
        new GooglePrivacyDlpV2FieldId(),
        new GooglePrivacyDlpV2FieldId(),
        new GooglePrivacyDlpV2FieldId(),
        new GooglePrivacyDlpV2FieldId(),
    ];
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->storageConfig->timespanConfig = new GooglePrivacyDlpV2TimespanConfig();
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->storageConfig->timespanConfig->enableAutoPopulationOfTimespanConfig = false;
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->storageConfig->timespanConfig->endTime = 'sed';
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->storageConfig->timespanConfig->startTime = 'saepe';
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->storageConfig->timespanConfig->timestampField = new GooglePrivacyDlpV2FieldId();
    $request->googlePrivacyDlpV2CreateDlpJobRequest->inspectJob->storageConfig->timespanConfig->timestampField->name = 'Edward Crooks';
    $request->googlePrivacyDlpV2CreateDlpJobRequest->jobId = 'magni';
    $request->googlePrivacyDlpV2CreateDlpJobRequest->locationId = 'sunt';
    $request->googlePrivacyDlpV2CreateDlpJobRequest->riskJob = new GooglePrivacyDlpV2RiskAnalysisJobConfig();
    $request->googlePrivacyDlpV2CreateDlpJobRequest->riskJob->actions = [
        new GooglePrivacyDlpV2Action(),
        new GooglePrivacyDlpV2Action(),
        new GooglePrivacyDlpV2Action(),
        new GooglePrivacyDlpV2Action(),
    ];
    $request->googlePrivacyDlpV2CreateDlpJobRequest->riskJob->privacyMetric = new GooglePrivacyDlpV2PrivacyMetric();
    $request->googlePrivacyDlpV2CreateDlpJobRequest->riskJob->privacyMetric->categoricalStatsConfig = new GooglePrivacyDlpV2CategoricalStatsConfig();
    $request->googlePrivacyDlpV2CreateDlpJobRequest->riskJob->privacyMetric->categoricalStatsConfig->field = new GooglePrivacyDlpV2FieldId();
    $request->googlePrivacyDlpV2CreateDlpJobRequest->riskJob->privacyMetric->categoricalStatsConfig->field->name = 'Ervin Schoen';
    $request->googlePrivacyDlpV2CreateDlpJobRequest->riskJob->privacyMetric->deltaPresenceEstimationConfig = new GooglePrivacyDlpV2DeltaPresenceEstimationConfig();
    $request->googlePrivacyDlpV2CreateDlpJobRequest->riskJob->privacyMetric->deltaPresenceEstimationConfig->auxiliaryTables = [
        new GooglePrivacyDlpV2StatisticalTable(),
    ];
    $request->googlePrivacyDlpV2CreateDlpJobRequest->riskJob->privacyMetric->deltaPresenceEstimationConfig->quasiIds = [
        new GooglePrivacyDlpV2QuasiId(),
        new GooglePrivacyDlpV2QuasiId(),
    ];
    $request->googlePrivacyDlpV2CreateDlpJobRequest->riskJob->privacyMetric->deltaPresenceEstimationConfig->regionCode = 'accusantium';
    $request->googlePrivacyDlpV2CreateDlpJobRequest->riskJob->privacyMetric->kAnonymityConfig = new GooglePrivacyDlpV2KAnonymityConfig();
    $request->googlePrivacyDlpV2CreateDlpJobRequest->riskJob->privacyMetric->kAnonymityConfig->entityId = new GooglePrivacyDlpV2EntityId();
    $request->googlePrivacyDlpV2CreateDlpJobRequest->riskJob->privacyMetric->kAnonymityConfig->entityId->field = new GooglePrivacyDlpV2FieldId();
    $request->googlePrivacyDlpV2CreateDlpJobRequest->riskJob->privacyMetric->kAnonymityConfig->entityId->field->name = 'Ebony Predovic';
    $request->googlePrivacyDlpV2CreateDlpJobRequest->riskJob->privacyMetric->kAnonymityConfig->quasiIds = [
        new GooglePrivacyDlpV2FieldId(),
        new GooglePrivacyDlpV2FieldId(),
    ];
    $request->googlePrivacyDlpV2CreateDlpJobRequest->riskJob->privacyMetric->kMapEstimationConfig = new GooglePrivacyDlpV2KMapEstimationConfig();
    $request->googlePrivacyDlpV2CreateDlpJobRequest->riskJob->privacyMetric->kMapEstimationConfig->auxiliaryTables = [
        new GooglePrivacyDlpV2AuxiliaryTable(),
        new GooglePrivacyDlpV2AuxiliaryTable(),
        new GooglePrivacyDlpV2AuxiliaryTable(),
    ];
    $request->googlePrivacyDlpV2CreateDlpJobRequest->riskJob->privacyMetric->kMapEstimationConfig->quasiIds = [
        new GooglePrivacyDlpV2TaggedField(),
    ];
    $request->googlePrivacyDlpV2CreateDlpJobRequest->riskJob->privacyMetric->kMapEstimationConfig->regionCode = 'pariatur';
    $request->googlePrivacyDlpV2CreateDlpJobRequest->riskJob->privacyMetric->lDiversityConfig = new GooglePrivacyDlpV2LDiversityConfig();
    $request->googlePrivacyDlpV2CreateDlpJobRequest->riskJob->privacyMetric->lDiversityConfig->quasiIds = [
        new GooglePrivacyDlpV2FieldId(),
        new GooglePrivacyDlpV2FieldId(),
    ];
    $request->googlePrivacyDlpV2CreateDlpJobRequest->riskJob->privacyMetric->lDiversityConfig->sensitiveAttribute = new GooglePrivacyDlpV2FieldId();
    $request->googlePrivacyDlpV2CreateDlpJobRequest->riskJob->privacyMetric->lDiversityConfig->sensitiveAttribute->name = 'Joseph Steuber DDS';
    $request->googlePrivacyDlpV2CreateDlpJobRequest->riskJob->privacyMetric->numericalStatsConfig = new GooglePrivacyDlpV2NumericalStatsConfig();
    $request->googlePrivacyDlpV2CreateDlpJobRequest->riskJob->privacyMetric->numericalStatsConfig->field = new GooglePrivacyDlpV2FieldId();
    $request->googlePrivacyDlpV2CreateDlpJobRequest->riskJob->privacyMetric->numericalStatsConfig->field->name = 'Mindy Renner';
    $request->googlePrivacyDlpV2CreateDlpJobRequest->riskJob->sourceTable = new GooglePrivacyDlpV2BigQueryTable();
    $request->googlePrivacyDlpV2CreateDlpJobRequest->riskJob->sourceTable->datasetId = 'quis';
    $request->googlePrivacyDlpV2CreateDlpJobRequest->riskJob->sourceTable->projectId = 'totam';
    $request->googlePrivacyDlpV2CreateDlpJobRequest->riskJob->sourceTable->tableId = 'dignissimos';
    $request->accessToken = 'eaque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nesciunt';
    $request->fields = 'eos';
    $request->key = 'perferendis';
    $request->oauthToken = 'dolores';
    $request->parent = 'minus';
    $request->prettyPrint = false;
    $request->quotaUser = 'quam';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'vero';

    $requestSecurity = new DlpProjectsLocationsDlpJobsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dlpProjectsLocationsDlpJobsCreate($request, $requestSecurity);

    if ($response->googlePrivacyDlpV2DlpJob !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dlpProjectsLocationsDlpJobsFinish

Finish a running hybrid DlpJob. Triggers the finalization steps and running of any enabled actions that have not yet run.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsLocationsDlpJobsFinishRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsLocationsDlpJobsFinishSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DlpProjectsLocationsDlpJobsFinishRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'recusandae' => 'omnis',
        'facilis' => 'perspiciatis',
        'voluptatem' => 'porro',
        'consequuntur' => 'blanditiis',
    ];
    $request->accessToken = 'error';
    $request->alt = AltEnum::JSON;
    $request->callback = 'occaecati';
    $request->fields = 'rerum';
    $request->key = 'adipisci';
    $request->name = 'Merle Gleichner';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'nobis';

    $requestSecurity = new DlpProjectsLocationsDlpJobsFinishSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dlpProjectsLocationsDlpJobsFinish($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dlpProjectsLocationsDlpJobsList

Lists DlpJobs that match the specified filter in the request. See https://cloud.google.com/dlp/docs/inspecting-storage and https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsLocationsDlpJobsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsLocationsDlpJobsListTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsLocationsDlpJobsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DlpProjectsLocationsDlpJobsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quos';
    $request->fields = 'aliquid';
    $request->filter = 'dolorem';
    $request->key = 'dolorem';
    $request->locationId = 'dolor';
    $request->oauthToken = 'qui';
    $request->orderBy = 'ipsum';
    $request->pageSize = 944373;
    $request->pageToken = 'excepturi';
    $request->parent = 'cum';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->type = DlpProjectsLocationsDlpJobsListTypeEnum::INSPECT_JOB;
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'amet';

    $requestSecurity = new DlpProjectsLocationsDlpJobsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dlpProjectsLocationsDlpJobsList($request, $requestSecurity);

    if ($response->googlePrivacyDlpV2ListDlpJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dlpProjectsLocationsImageRedact

Redacts potentially sensitive info from an image. This method has limits on input size, processing time, and output size. See https://cloud.google.com/dlp/docs/redacting-sensitive-data-images to learn more. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsLocationsImageRedactRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2RedactImageRequest;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ByteContentItem;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ByteContentItemTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ImageRedactionConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InfoType;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2SensitivityScore;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2SensitivityScoreScoreEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Color;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InspectConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InspectConfigContentOptionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CustomInfoType;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2DetectionRule;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2HotwordRule;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Regex;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2LikelihoodAdjustment;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihoodEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Proximity;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Dictionary;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CloudStoragePath;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2WordList;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CustomInfoTypeExclusionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2StoredType;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2FindingLimits;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InfoTypeLimit;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InspectionRuleSet;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InspectionRule;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ExclusionRule;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ExcludeByHotword;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ExcludeInfoTypes;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsLocationsImageRedactSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DlpProjectsLocationsImageRedactRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googlePrivacyDlpV2RedactImageRequest = new GooglePrivacyDlpV2RedactImageRequest();
    $request->googlePrivacyDlpV2RedactImageRequest->byteItem = new GooglePrivacyDlpV2ByteContentItem();
    $request->googlePrivacyDlpV2RedactImageRequest->byteItem->data = 'numquam';
    $request->googlePrivacyDlpV2RedactImageRequest->byteItem->type = GooglePrivacyDlpV2ByteContentItemTypeEnum::IMAGE;
    $request->googlePrivacyDlpV2RedactImageRequest->imageRedactionConfigs = [
        new GooglePrivacyDlpV2ImageRedactionConfig(),
    ];
    $request->googlePrivacyDlpV2RedactImageRequest->includeFindings = false;
    $request->googlePrivacyDlpV2RedactImageRequest->inspectConfig = new GooglePrivacyDlpV2InspectConfig();
    $request->googlePrivacyDlpV2RedactImageRequest->inspectConfig->contentOptions = [
        GooglePrivacyDlpV2InspectConfigContentOptionsEnum::CONTENT_TEXT,
    ];
    $request->googlePrivacyDlpV2RedactImageRequest->inspectConfig->customInfoTypes = [
        new GooglePrivacyDlpV2CustomInfoType(),
        new GooglePrivacyDlpV2CustomInfoType(),
    ];
    $request->googlePrivacyDlpV2RedactImageRequest->inspectConfig->excludeInfoTypes = false;
    $request->googlePrivacyDlpV2RedactImageRequest->inspectConfig->includeQuote = false;
    $request->googlePrivacyDlpV2RedactImageRequest->inspectConfig->infoTypes = [
        new GooglePrivacyDlpV2InfoType(),
        new GooglePrivacyDlpV2InfoType(),
    ];
    $request->googlePrivacyDlpV2RedactImageRequest->inspectConfig->limits = new GooglePrivacyDlpV2FindingLimits();
    $request->googlePrivacyDlpV2RedactImageRequest->inspectConfig->limits->maxFindingsPerInfoType = [
        new GooglePrivacyDlpV2InfoTypeLimit(),
        new GooglePrivacyDlpV2InfoTypeLimit(),
        new GooglePrivacyDlpV2InfoTypeLimit(),
        new GooglePrivacyDlpV2InfoTypeLimit(),
    ];
    $request->googlePrivacyDlpV2RedactImageRequest->inspectConfig->limits->maxFindingsPerItem = 696344;
    $request->googlePrivacyDlpV2RedactImageRequest->inspectConfig->limits->maxFindingsPerRequest = 976405;
    $request->googlePrivacyDlpV2RedactImageRequest->inspectConfig->minLikelihood = GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum::UNLIKELY;
    $request->googlePrivacyDlpV2RedactImageRequest->inspectConfig->ruleSet = [
        new GooglePrivacyDlpV2InspectionRuleSet(),
        new GooglePrivacyDlpV2InspectionRuleSet(),
        new GooglePrivacyDlpV2InspectionRuleSet(),
    ];
    $request->googlePrivacyDlpV2RedactImageRequest->locationId = 'eos';
    $request->accessToken = 'atque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugiat';
    $request->fields = 'ab';
    $request->key = 'soluta';
    $request->oauthToken = 'dolorum';
    $request->parent = 'iusto';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'deleniti';

    $requestSecurity = new DlpProjectsLocationsImageRedactSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dlpProjectsLocationsImageRedact($request, $requestSecurity);

    if ($response->googlePrivacyDlpV2RedactImageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dlpProjectsLocationsInspectTemplatesCreate

Creates an InspectTemplate for reusing frequently used configuration for inspecting content, images, and storage. See https://cloud.google.com/dlp/docs/creating-templates to learn more.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsLocationsInspectTemplatesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CreateInspectTemplateRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InspectTemplateInput;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InspectConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InspectConfigContentOptionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CustomInfoType;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2DetectionRule;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2HotwordRule;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Regex;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2LikelihoodAdjustment;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihoodEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Proximity;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Dictionary;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CloudStoragePath;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2WordList;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CustomInfoTypeExclusionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InfoType;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2SensitivityScore;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2SensitivityScoreScoreEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2StoredType;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2FindingLimits;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InfoTypeLimit;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InspectionRuleSet;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InspectionRule;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ExclusionRule;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ExcludeByHotword;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ExcludeInfoTypes;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsLocationsInspectTemplatesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DlpProjectsLocationsInspectTemplatesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googlePrivacyDlpV2CreateInspectTemplateRequestInput = new GooglePrivacyDlpV2CreateInspectTemplateRequestInput();
    $request->googlePrivacyDlpV2CreateInspectTemplateRequestInput->inspectTemplate = new GooglePrivacyDlpV2InspectTemplateInput();
    $request->googlePrivacyDlpV2CreateInspectTemplateRequestInput->inspectTemplate->description = 'necessitatibus';
    $request->googlePrivacyDlpV2CreateInspectTemplateRequestInput->inspectTemplate->displayName = 'distinctio';
    $request->googlePrivacyDlpV2CreateInspectTemplateRequestInput->inspectTemplate->inspectConfig = new GooglePrivacyDlpV2InspectConfig();
    $request->googlePrivacyDlpV2CreateInspectTemplateRequestInput->inspectTemplate->inspectConfig->contentOptions = [
        GooglePrivacyDlpV2InspectConfigContentOptionsEnum::CONTENT_TEXT,
        GooglePrivacyDlpV2InspectConfigContentOptionsEnum::CONTENT_UNSPECIFIED,
        GooglePrivacyDlpV2InspectConfigContentOptionsEnum::CONTENT_TEXT,
        GooglePrivacyDlpV2InspectConfigContentOptionsEnum::CONTENT_TEXT,
    ];
    $request->googlePrivacyDlpV2CreateInspectTemplateRequestInput->inspectTemplate->inspectConfig->customInfoTypes = [
        new GooglePrivacyDlpV2CustomInfoType(),
        new GooglePrivacyDlpV2CustomInfoType(),
        new GooglePrivacyDlpV2CustomInfoType(),
        new GooglePrivacyDlpV2CustomInfoType(),
    ];
    $request->googlePrivacyDlpV2CreateInspectTemplateRequestInput->inspectTemplate->inspectConfig->excludeInfoTypes = false;
    $request->googlePrivacyDlpV2CreateInspectTemplateRequestInput->inspectTemplate->inspectConfig->includeQuote = false;
    $request->googlePrivacyDlpV2CreateInspectTemplateRequestInput->inspectTemplate->inspectConfig->infoTypes = [
        new GooglePrivacyDlpV2InfoType(),
        new GooglePrivacyDlpV2InfoType(),
    ];
    $request->googlePrivacyDlpV2CreateInspectTemplateRequestInput->inspectTemplate->inspectConfig->limits = new GooglePrivacyDlpV2FindingLimits();
    $request->googlePrivacyDlpV2CreateInspectTemplateRequestInput->inspectTemplate->inspectConfig->limits->maxFindingsPerInfoType = [
        new GooglePrivacyDlpV2InfoTypeLimit(),
    ];
    $request->googlePrivacyDlpV2CreateInspectTemplateRequestInput->inspectTemplate->inspectConfig->limits->maxFindingsPerItem = 20651;
    $request->googlePrivacyDlpV2CreateInspectTemplateRequestInput->inspectTemplate->inspectConfig->limits->maxFindingsPerRequest = 229219;
    $request->googlePrivacyDlpV2CreateInspectTemplateRequestInput->inspectTemplate->inspectConfig->minLikelihood = GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum::LIKELY;
    $request->googlePrivacyDlpV2CreateInspectTemplateRequestInput->inspectTemplate->inspectConfig->ruleSet = [
        new GooglePrivacyDlpV2InspectionRuleSet(),
        new GooglePrivacyDlpV2InspectionRuleSet(),
        new GooglePrivacyDlpV2InspectionRuleSet(),
        new GooglePrivacyDlpV2InspectionRuleSet(),
    ];
    $request->googlePrivacyDlpV2CreateInspectTemplateRequestInput->locationId = 'ad';
    $request->googlePrivacyDlpV2CreateInspectTemplateRequestInput->templateId = 'saepe';
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'provident';
    $request->fields = 'minima';
    $request->key = 'repellendus';
    $request->oauthToken = 'totam';
    $request->parent = 'similique';
    $request->prettyPrint = false;
    $request->quotaUser = 'alias';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'quaerat';

    $requestSecurity = new DlpProjectsLocationsInspectTemplatesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dlpProjectsLocationsInspectTemplatesCreate($request, $requestSecurity);

    if ($response->googlePrivacyDlpV2InspectTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dlpProjectsLocationsInspectTemplatesList

Lists InspectTemplates. See https://cloud.google.com/dlp/docs/creating-templates to learn more.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsLocationsInspectTemplatesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsLocationsInspectTemplatesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DlpProjectsLocationsInspectTemplatesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'vel';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'officiis';
    $request->fields = 'qui';
    $request->key = 'dolorum';
    $request->locationId = 'a';
    $request->oauthToken = 'esse';
    $request->orderBy = 'harum';
    $request->pageSize = 483409;
    $request->pageToken = 'ipsum';
    $request->parent = 'quisquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'tenetur';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'tempore';

    $requestSecurity = new DlpProjectsLocationsInspectTemplatesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dlpProjectsLocationsInspectTemplatesList($request, $requestSecurity);

    if ($response->googlePrivacyDlpV2ListInspectTemplatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dlpProjectsLocationsJobTriggersActivate

Activate a job trigger. Causes the immediate execute of a trigger instead of waiting on the trigger event to occur.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsLocationsJobTriggersActivateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsLocationsJobTriggersActivateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DlpProjectsLocationsJobTriggersActivateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'enim' => 'dolorem',
        'sapiente' => 'totam',
    ];
    $request->accessToken = 'nihil';
    $request->alt = AltEnum::JSON;
    $request->callback = 'expedita';
    $request->fields = 'neque';
    $request->key = 'sed';
    $request->name = 'Kelli Hintz';
    $request->oauthToken = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'incidunt';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'cupiditate';

    $requestSecurity = new DlpProjectsLocationsJobTriggersActivateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dlpProjectsLocationsJobTriggersActivate($request, $requestSecurity);

    if ($response->googlePrivacyDlpV2DlpJob !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dlpProjectsLocationsJobTriggersCreate

Creates a job trigger to run DLP actions such as scanning storage for sensitive information on a set schedule. See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsLocationsJobTriggersCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CreateJobTriggerRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2JobTriggerInput;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InspectJobConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Action;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Deidentify;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2TransformationConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2TransformationDetailsStorageConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2BigQueryTable;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2PublishToPubSub;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2SaveFindings;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2OutputStorageConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2OutputStorageConfigOutputSchemaEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InspectConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InspectConfigContentOptionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CustomInfoType;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2DetectionRule;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2HotwordRule;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Regex;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2LikelihoodAdjustment;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihoodEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Proximity;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Dictionary;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CloudStoragePath;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2WordList;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CustomInfoTypeExclusionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InfoType;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2SensitivityScore;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2SensitivityScoreScoreEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2StoredType;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2FindingLimits;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InfoTypeLimit;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InspectionRuleSet;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2InspectionRule;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ExclusionRule;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ExcludeByHotword;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ExcludeInfoTypes;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2StorageConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2BigQueryOptions;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2FieldId;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2BigQueryOptionsSampleMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CloudStorageOptions;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2FileSet;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CloudStorageRegexFileSet;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CloudStorageOptionsSampleMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2DatastoreOptions;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2KindExpression;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2PartitionId;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2HybridOptions;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2TableOptions;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2TimespanConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2JobTriggerStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Trigger;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Schedule;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsLocationsJobTriggersCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DlpProjectsLocationsJobTriggersCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput = new GooglePrivacyDlpV2CreateJobTriggerRequestInput();
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger = new GooglePrivacyDlpV2JobTriggerInput();
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->description = 'pariatur';
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->displayName = 'soluta';
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob = new GooglePrivacyDlpV2InspectJobConfig();
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->actions = [
        new GooglePrivacyDlpV2Action(),
    ];
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->inspectConfig = new GooglePrivacyDlpV2InspectConfig();
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->inspectConfig->contentOptions = [
        GooglePrivacyDlpV2InspectConfigContentOptionsEnum::CONTENT_TEXT,
        GooglePrivacyDlpV2InspectConfigContentOptionsEnum::CONTENT_UNSPECIFIED,
        GooglePrivacyDlpV2InspectConfigContentOptionsEnum::CONTENT_UNSPECIFIED,
    ];
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->inspectConfig->customInfoTypes = [
        new GooglePrivacyDlpV2CustomInfoType(),
    ];
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->inspectConfig->excludeInfoTypes = false;
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->inspectConfig->includeQuote = false;
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->inspectConfig->infoTypes = [
        new GooglePrivacyDlpV2InfoType(),
        new GooglePrivacyDlpV2InfoType(),
        new GooglePrivacyDlpV2InfoType(),
    ];
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->inspectConfig->limits = new GooglePrivacyDlpV2FindingLimits();
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->inspectConfig->limits->maxFindingsPerInfoType = [
        new GooglePrivacyDlpV2InfoTypeLimit(),
        new GooglePrivacyDlpV2InfoTypeLimit(),
        new GooglePrivacyDlpV2InfoTypeLimit(),
    ];
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->inspectConfig->limits->maxFindingsPerItem = 396060;
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->inspectConfig->limits->maxFindingsPerRequest = 463150;
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->inspectConfig->minLikelihood = GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum::POSSIBLE;
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->inspectConfig->ruleSet = [
        new GooglePrivacyDlpV2InspectionRuleSet(),
        new GooglePrivacyDlpV2InspectionRuleSet(),
        new GooglePrivacyDlpV2InspectionRuleSet(),
        new GooglePrivacyDlpV2InspectionRuleSet(),
    ];
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->inspectTemplateName = 'qui';
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->storageConfig = new GooglePrivacyDlpV2StorageConfig();
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->storageConfig->bigQueryOptions = new GooglePrivacyDlpV2BigQueryOptions();
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->storageConfig->bigQueryOptions->excludedFields = [
        new GooglePrivacyDlpV2FieldId(),
    ];
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->storageConfig->bigQueryOptions->identifyingFields = [
        new GooglePrivacyDlpV2FieldId(),
    ];
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->storageConfig->bigQueryOptions->includedFields = [
        new GooglePrivacyDlpV2FieldId(),
    ];
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->storageConfig->bigQueryOptions->rowsLimit = 'odio';
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->storageConfig->bigQueryOptions->rowsLimitPercent = 124833;
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->storageConfig->bigQueryOptions->sampleMethod = GooglePrivacyDlpV2BigQueryOptionsSampleMethodEnum::TOP;
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->storageConfig->bigQueryOptions->tableReference = new GooglePrivacyDlpV2BigQueryTable();
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->storageConfig->bigQueryOptions->tableReference->datasetId = 'nam';
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->storageConfig->bigQueryOptions->tableReference->projectId = 'hic';
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->storageConfig->bigQueryOptions->tableReference->tableId = 'voluptatem';
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->storageConfig->cloudStorageOptions = new GooglePrivacyDlpV2CloudStorageOptions();
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->storageConfig->cloudStorageOptions->bytesLimitPerFile = 'cumque';
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->storageConfig->cloudStorageOptions->bytesLimitPerFilePercent = 746994;
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->storageConfig->cloudStorageOptions->fileSet = new GooglePrivacyDlpV2FileSet();
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->storageConfig->cloudStorageOptions->fileSet->regexFileSet = new GooglePrivacyDlpV2CloudStorageRegexFileSet();
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->storageConfig->cloudStorageOptions->fileSet->regexFileSet->bucketName = 'nobis';
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->storageConfig->cloudStorageOptions->fileSet->regexFileSet->excludeRegex = [
        'saepe',
    ];
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->storageConfig->cloudStorageOptions->fileSet->regexFileSet->includeRegex = [
        'veritatis',
    ];
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->storageConfig->cloudStorageOptions->fileSet->url = 'nobis';
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->storageConfig->cloudStorageOptions->fileTypes = [
        GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum::TSV,
        GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum::AVRO,
        GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum::FILE_TYPE_UNSPECIFIED,
    ];
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->storageConfig->cloudStorageOptions->filesLimitPercent = 961937;
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->storageConfig->cloudStorageOptions->sampleMethod = GooglePrivacyDlpV2CloudStorageOptionsSampleMethodEnum::SAMPLE_METHOD_UNSPECIFIED;
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->storageConfig->datastoreOptions = new GooglePrivacyDlpV2DatastoreOptions();
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->storageConfig->datastoreOptions->kind = new GooglePrivacyDlpV2KindExpression();
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->storageConfig->datastoreOptions->kind->name = 'Clara Fisher Jr.';
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->storageConfig->datastoreOptions->partitionId = new GooglePrivacyDlpV2PartitionId();
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->storageConfig->datastoreOptions->partitionId->namespaceId = 'aut';
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->storageConfig->datastoreOptions->partitionId->projectId = 'quas';
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->storageConfig->hybridOptions = new GooglePrivacyDlpV2HybridOptions();
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->storageConfig->hybridOptions->description = 'itaque';
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->storageConfig->hybridOptions->labels = [
        'est' => 'repellendus',
    ];
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->storageConfig->hybridOptions->requiredFindingLabelKeys = [
        'doloribus',
        'ut',
        'facilis',
        'cupiditate',
    ];
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->storageConfig->hybridOptions->tableOptions = new GooglePrivacyDlpV2TableOptions();
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->storageConfig->hybridOptions->tableOptions->identifyingFields = [
        new GooglePrivacyDlpV2FieldId(),
    ];
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->storageConfig->timespanConfig = new GooglePrivacyDlpV2TimespanConfig();
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->storageConfig->timespanConfig->enableAutoPopulationOfTimespanConfig = false;
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->storageConfig->timespanConfig->endTime = 'quae';
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->storageConfig->timespanConfig->startTime = 'laudantium';
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->storageConfig->timespanConfig->timestampField = new GooglePrivacyDlpV2FieldId();
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->inspectJob->storageConfig->timespanConfig->timestampField->name = 'Toni Wolff';
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->name = 'Tim Erdman';
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->status = GooglePrivacyDlpV2JobTriggerStatusEnum::STATUS_UNSPECIFIED;
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->jobTrigger->triggers = [
        new GooglePrivacyDlpV2Trigger(),
        new GooglePrivacyDlpV2Trigger(),
        new GooglePrivacyDlpV2Trigger(),
        new GooglePrivacyDlpV2Trigger(),
    ];
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->locationId = 'tenetur';
    $request->googlePrivacyDlpV2CreateJobTriggerRequestInput->triggerId = 'dignissimos';
    $request->accessToken = 'hic';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quod';
    $request->fields = 'odio';
    $request->key = 'similique';
    $request->oauthToken = 'facilis';
    $request->parent = 'vero';
    $request->prettyPrint = false;
    $request->quotaUser = 'ducimus';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'quibusdam';

    $requestSecurity = new DlpProjectsLocationsJobTriggersCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dlpProjectsLocationsJobTriggersCreate($request, $requestSecurity);

    if ($response->googlePrivacyDlpV2JobTrigger !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dlpProjectsLocationsJobTriggersHybridInspect

Inspect hybrid content and store findings to a trigger. The inspection will be processed asynchronously. To review the findings monitor the jobs within the trigger.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsLocationsJobTriggersHybridInspectRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2HybridInspectJobTriggerRequest;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2HybridContentItem;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2HybridFindingDetails;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Container;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2TableOptions;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2FieldId;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ContentItem;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ByteContentItem;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ByteContentItemTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Table;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Row;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Value;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDate;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2ValueDayOfWeekValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeTimeOfDay;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsLocationsJobTriggersHybridInspectSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DlpProjectsLocationsJobTriggersHybridInspectRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googlePrivacyDlpV2HybridInspectJobTriggerRequest = new GooglePrivacyDlpV2HybridInspectJobTriggerRequest();
    $request->googlePrivacyDlpV2HybridInspectJobTriggerRequest->hybridItem = new GooglePrivacyDlpV2HybridContentItem();
    $request->googlePrivacyDlpV2HybridInspectJobTriggerRequest->hybridItem->findingDetails = new GooglePrivacyDlpV2HybridFindingDetails();
    $request->googlePrivacyDlpV2HybridInspectJobTriggerRequest->hybridItem->findingDetails->containerDetails = new GooglePrivacyDlpV2Container();
    $request->googlePrivacyDlpV2HybridInspectJobTriggerRequest->hybridItem->findingDetails->containerDetails->fullPath = 'sequi';
    $request->googlePrivacyDlpV2HybridInspectJobTriggerRequest->hybridItem->findingDetails->containerDetails->projectId = 'natus';
    $request->googlePrivacyDlpV2HybridInspectJobTriggerRequest->hybridItem->findingDetails->containerDetails->relativePath = 'impedit';
    $request->googlePrivacyDlpV2HybridInspectJobTriggerRequest->hybridItem->findingDetails->containerDetails->rootPath = 'aut';
    $request->googlePrivacyDlpV2HybridInspectJobTriggerRequest->hybridItem->findingDetails->containerDetails->type = 'voluptatibus';
    $request->googlePrivacyDlpV2HybridInspectJobTriggerRequest->hybridItem->findingDetails->containerDetails->updateTime = 'exercitationem';
    $request->googlePrivacyDlpV2HybridInspectJobTriggerRequest->hybridItem->findingDetails->containerDetails->version = 'nulla';
    $request->googlePrivacyDlpV2HybridInspectJobTriggerRequest->hybridItem->findingDetails->fileOffset = 'fugit';
    $request->googlePrivacyDlpV2HybridInspectJobTriggerRequest->hybridItem->findingDetails->labels = [
        'maiores' => 'doloribus',
        'iusto' => 'eligendi',
        'ducimus' => 'alias',
        'officia' => 'tempora',
    ];
    $request->googlePrivacyDlpV2HybridInspectJobTriggerRequest->hybridItem->findingDetails->rowOffset = 'ipsam';
    $request->googlePrivacyDlpV2HybridInspectJobTriggerRequest->hybridItem->findingDetails->tableOptions = new GooglePrivacyDlpV2TableOptions();
    $request->googlePrivacyDlpV2HybridInspectJobTriggerRequest->hybridItem->findingDetails->tableOptions->identifyingFields = [
        new GooglePrivacyDlpV2FieldId(),
        new GooglePrivacyDlpV2FieldId(),
    ];
    $request->googlePrivacyDlpV2HybridInspectJobTriggerRequest->hybridItem->item = new GooglePrivacyDlpV2ContentItem();
    $request->googlePrivacyDlpV2HybridInspectJobTriggerRequest->hybridItem->item->byteItem = new GooglePrivacyDlpV2ByteContentItem();
    $request->googlePrivacyDlpV2HybridInspectJobTriggerRequest->hybridItem->item->byteItem->data = 'aspernatur';
    $request->googlePrivacyDlpV2HybridInspectJobTriggerRequest->hybridItem->item->byteItem->type = GooglePrivacyDlpV2ByteContentItemTypeEnum::IMAGE_SVG;
    $request->googlePrivacyDlpV2HybridInspectJobTriggerRequest->hybridItem->item->table = new GooglePrivacyDlpV2Table();
    $request->googlePrivacyDlpV2HybridInspectJobTriggerRequest->hybridItem->item->table->headers = [
        new GooglePrivacyDlpV2FieldId(),
        new GooglePrivacyDlpV2FieldId(),
        new GooglePrivacyDlpV2FieldId(),
        new GooglePrivacyDlpV2FieldId(),
    ];
    $request->googlePrivacyDlpV2HybridInspectJobTriggerRequest->hybridItem->item->table->rows = [
        new GooglePrivacyDlpV2Row(),
        new GooglePrivacyDlpV2Row(),
    ];
    $request->googlePrivacyDlpV2HybridInspectJobTriggerRequest->hybridItem->item->value = 'ratione';
    $request->accessToken = 'ex';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dicta';
    $request->fields = 'dolor';
    $request->key = 'maiores';
    $request->name = 'Rosemary Stoltenberg';
    $request->oauthToken = 'nostrum';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'quisquam';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new DlpProjectsLocationsJobTriggersHybridInspectSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dlpProjectsLocationsJobTriggersHybridInspect($request, $requestSecurity);

    if ($response->googlePrivacyDlpV2HybridInspectResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dlpProjectsLocationsJobTriggersList

Lists job triggers. See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsLocationsJobTriggersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsLocationsJobTriggersListTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsLocationsJobTriggersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DlpProjectsLocationsJobTriggersListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'impedit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veniam';
    $request->fields = 'aliquid';
    $request->filter = 'inventore';
    $request->key = 'magnam';
    $request->locationId = 'ea';
    $request->oauthToken = 'quo';
    $request->orderBy = 'consectetur';
    $request->pageSize = 926213;
    $request->pageToken = 'aspernatur';
    $request->parent = 'minima';
    $request->prettyPrint = false;
    $request->quotaUser = 'eaque';
    $request->type = DlpProjectsLocationsJobTriggersListTypeEnum::RISK_ANALYSIS_JOB;
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'aut';

    $requestSecurity = new DlpProjectsLocationsJobTriggersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dlpProjectsLocationsJobTriggersList($request, $requestSecurity);

    if ($response->googlePrivacyDlpV2ListJobTriggersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dlpProjectsStoredInfoTypesCreate

Creates a pre-built stored infoType to be used for inspection. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsStoredInfoTypesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CreateStoredInfoTypeRequest;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2StoredInfoTypeConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Dictionary;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CloudStoragePath;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2WordList;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2LargeCustomDictionaryConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2BigQueryField;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2FieldId;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2BigQueryTable;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CloudStorageFileSet;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Regex;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsStoredInfoTypesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DlpProjectsStoredInfoTypesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googlePrivacyDlpV2CreateStoredInfoTypeRequest = new GooglePrivacyDlpV2CreateStoredInfoTypeRequest();
    $request->googlePrivacyDlpV2CreateStoredInfoTypeRequest->config = new GooglePrivacyDlpV2StoredInfoTypeConfig();
    $request->googlePrivacyDlpV2CreateStoredInfoTypeRequest->config->description = 'deleniti';
    $request->googlePrivacyDlpV2CreateStoredInfoTypeRequest->config->dictionary = new GooglePrivacyDlpV2Dictionary();
    $request->googlePrivacyDlpV2CreateStoredInfoTypeRequest->config->dictionary->cloudStoragePath = new GooglePrivacyDlpV2CloudStoragePath();
    $request->googlePrivacyDlpV2CreateStoredInfoTypeRequest->config->dictionary->cloudStoragePath->path = 'impedit';
    $request->googlePrivacyDlpV2CreateStoredInfoTypeRequest->config->dictionary->wordList = new GooglePrivacyDlpV2WordList();
    $request->googlePrivacyDlpV2CreateStoredInfoTypeRequest->config->dictionary->wordList->words = [
        'fugit',
        'accusamus',
    ];
    $request->googlePrivacyDlpV2CreateStoredInfoTypeRequest->config->displayName = 'inventore';
    $request->googlePrivacyDlpV2CreateStoredInfoTypeRequest->config->largeCustomDictionary = new GooglePrivacyDlpV2LargeCustomDictionaryConfig();
    $request->googlePrivacyDlpV2CreateStoredInfoTypeRequest->config->largeCustomDictionary->bigQueryField = new GooglePrivacyDlpV2BigQueryField();
    $request->googlePrivacyDlpV2CreateStoredInfoTypeRequest->config->largeCustomDictionary->bigQueryField->field = new GooglePrivacyDlpV2FieldId();
    $request->googlePrivacyDlpV2CreateStoredInfoTypeRequest->config->largeCustomDictionary->bigQueryField->field->name = 'Janet Pagac';
    $request->googlePrivacyDlpV2CreateStoredInfoTypeRequest->config->largeCustomDictionary->bigQueryField->table = new GooglePrivacyDlpV2BigQueryTable();
    $request->googlePrivacyDlpV2CreateStoredInfoTypeRequest->config->largeCustomDictionary->bigQueryField->table->datasetId = 'velit';
    $request->googlePrivacyDlpV2CreateStoredInfoTypeRequest->config->largeCustomDictionary->bigQueryField->table->projectId = 'eum';
    $request->googlePrivacyDlpV2CreateStoredInfoTypeRequest->config->largeCustomDictionary->bigQueryField->table->tableId = 'autem';
    $request->googlePrivacyDlpV2CreateStoredInfoTypeRequest->config->largeCustomDictionary->cloudStorageFileSet = new GooglePrivacyDlpV2CloudStorageFileSet();
    $request->googlePrivacyDlpV2CreateStoredInfoTypeRequest->config->largeCustomDictionary->cloudStorageFileSet->url = 'nobis';
    $request->googlePrivacyDlpV2CreateStoredInfoTypeRequest->config->largeCustomDictionary->outputPath = new GooglePrivacyDlpV2CloudStoragePath();
    $request->googlePrivacyDlpV2CreateStoredInfoTypeRequest->config->largeCustomDictionary->outputPath->path = 'quas';
    $request->googlePrivacyDlpV2CreateStoredInfoTypeRequest->config->regex = new GooglePrivacyDlpV2Regex();
    $request->googlePrivacyDlpV2CreateStoredInfoTypeRequest->config->regex->groupIndexes = [
        860552,
        379034,
        727044,
        96549,
    ];
    $request->googlePrivacyDlpV2CreateStoredInfoTypeRequest->config->regex->pattern = 'tempora';
    $request->googlePrivacyDlpV2CreateStoredInfoTypeRequest->locationId = 'numquam';
    $request->googlePrivacyDlpV2CreateStoredInfoTypeRequest->storedInfoTypeId = 'explicabo';
    $request->accessToken = 'provident';
    $request->alt = AltEnum::JSON;
    $request->callback = 'molestiae';
    $request->fields = 'magnam';
    $request->key = 'odio';
    $request->oauthToken = 'eius';
    $request->parent = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->uploadType = 'rem';
    $request->uploadProtocol = 'fuga';

    $requestSecurity = new DlpProjectsStoredInfoTypesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dlpProjectsStoredInfoTypesCreate($request, $requestSecurity);

    if ($response->googlePrivacyDlpV2StoredInfoType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dlpProjectsStoredInfoTypesDelete

Deletes a stored infoType. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsStoredInfoTypesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsStoredInfoTypesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DlpProjectsStoredInfoTypesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ut';
    $request->fields = 'eum';
    $request->key = 'suscipit';
    $request->name = 'Alan Lang Jr.';
    $request->oauthToken = 'id';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'neque';
    $request->uploadProtocol = 'quo';

    $requestSecurity = new DlpProjectsStoredInfoTypesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dlpProjectsStoredInfoTypesDelete($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dlpProjectsStoredInfoTypesGet

Gets a stored infoType. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsStoredInfoTypesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsStoredInfoTypesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DlpProjectsStoredInfoTypesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eius';
    $request->fields = 'eos';
    $request->key = 'voluptas';
    $request->name = 'Shelly Altenwerth';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'aspernatur';
    $request->uploadType = 'sequi';
    $request->uploadProtocol = 'quo';

    $requestSecurity = new DlpProjectsStoredInfoTypesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dlpProjectsStoredInfoTypesGet($request, $requestSecurity);

    if ($response->googlePrivacyDlpV2StoredInfoType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dlpProjectsStoredInfoTypesList

Lists stored infoTypes. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsStoredInfoTypesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsStoredInfoTypesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DlpProjectsStoredInfoTypesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'distinctio';
    $request->fields = 'quod';
    $request->key = 'dignissimos';
    $request->locationId = 'inventore';
    $request->oauthToken = 'nihil';
    $request->orderBy = 'totam';
    $request->pageSize = 882710;
    $request->pageToken = 'aliquam';
    $request->parent = 'odio';
    $request->prettyPrint = false;
    $request->quotaUser = 'occaecati';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'sapiente';

    $requestSecurity = new DlpProjectsStoredInfoTypesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dlpProjectsStoredInfoTypesList($request, $requestSecurity);

    if ($response->googlePrivacyDlpV2ListStoredInfoTypesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dlpProjectsStoredInfoTypesPatch

Updates the stored infoType by creating a new version. The existing version will continue to be used until the new version is ready. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsStoredInfoTypesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2UpdateStoredInfoTypeRequest;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2StoredInfoTypeConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Dictionary;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CloudStoragePath;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2WordList;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2LargeCustomDictionaryConfig;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2BigQueryField;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2FieldId;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2BigQueryTable;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2CloudStorageFileSet;
use \OpenAPI\OpenAPI\Models\Shared\GooglePrivacyDlpV2Regex;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DlpProjectsStoredInfoTypesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DlpProjectsStoredInfoTypesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googlePrivacyDlpV2UpdateStoredInfoTypeRequest = new GooglePrivacyDlpV2UpdateStoredInfoTypeRequest();
    $request->googlePrivacyDlpV2UpdateStoredInfoTypeRequest->config = new GooglePrivacyDlpV2StoredInfoTypeConfig();
    $request->googlePrivacyDlpV2UpdateStoredInfoTypeRequest->config->description = 'deserunt';
    $request->googlePrivacyDlpV2UpdateStoredInfoTypeRequest->config->dictionary = new GooglePrivacyDlpV2Dictionary();
    $request->googlePrivacyDlpV2UpdateStoredInfoTypeRequest->config->dictionary->cloudStoragePath = new GooglePrivacyDlpV2CloudStoragePath();
    $request->googlePrivacyDlpV2UpdateStoredInfoTypeRequest->config->dictionary->cloudStoragePath->path = 'molestiae';
    $request->googlePrivacyDlpV2UpdateStoredInfoTypeRequest->config->dictionary->wordList = new GooglePrivacyDlpV2WordList();
    $request->googlePrivacyDlpV2UpdateStoredInfoTypeRequest->config->dictionary->wordList->words = [
        'porro',
    ];
    $request->googlePrivacyDlpV2UpdateStoredInfoTypeRequest->config->displayName = 'eum';
    $request->googlePrivacyDlpV2UpdateStoredInfoTypeRequest->config->largeCustomDictionary = new GooglePrivacyDlpV2LargeCustomDictionaryConfig();
    $request->googlePrivacyDlpV2UpdateStoredInfoTypeRequest->config->largeCustomDictionary->bigQueryField = new GooglePrivacyDlpV2BigQueryField();
    $request->googlePrivacyDlpV2UpdateStoredInfoTypeRequest->config->largeCustomDictionary->bigQueryField->field = new GooglePrivacyDlpV2FieldId();
    $request->googlePrivacyDlpV2UpdateStoredInfoTypeRequest->config->largeCustomDictionary->bigQueryField->field->name = 'Dwayne Cronin';
    $request->googlePrivacyDlpV2UpdateStoredInfoTypeRequest->config->largeCustomDictionary->bigQueryField->table = new GooglePrivacyDlpV2BigQueryTable();
    $request->googlePrivacyDlpV2UpdateStoredInfoTypeRequest->config->largeCustomDictionary->bigQueryField->table->datasetId = 'fuga';
    $request->googlePrivacyDlpV2UpdateStoredInfoTypeRequest->config->largeCustomDictionary->bigQueryField->table->projectId = 'mollitia';
    $request->googlePrivacyDlpV2UpdateStoredInfoTypeRequest->config->largeCustomDictionary->bigQueryField->table->tableId = 'incidunt';
    $request->googlePrivacyDlpV2UpdateStoredInfoTypeRequest->config->largeCustomDictionary->cloudStorageFileSet = new GooglePrivacyDlpV2CloudStorageFileSet();
    $request->googlePrivacyDlpV2UpdateStoredInfoTypeRequest->config->largeCustomDictionary->cloudStorageFileSet->url = 'atque';
    $request->googlePrivacyDlpV2UpdateStoredInfoTypeRequest->config->largeCustomDictionary->outputPath = new GooglePrivacyDlpV2CloudStoragePath();
    $request->googlePrivacyDlpV2UpdateStoredInfoTypeRequest->config->largeCustomDictionary->outputPath->path = 'explicabo';
    $request->googlePrivacyDlpV2UpdateStoredInfoTypeRequest->config->regex = new GooglePrivacyDlpV2Regex();
    $request->googlePrivacyDlpV2UpdateStoredInfoTypeRequest->config->regex->groupIndexes = [
        392676,
        147014,
    ];
    $request->googlePrivacyDlpV2UpdateStoredInfoTypeRequest->config->regex->pattern = 'sapiente';
    $request->googlePrivacyDlpV2UpdateStoredInfoTypeRequest->updateMask = 'consequuntur';
    $request->accessToken = 'ratione';
    $request->alt = AltEnum::JSON;
    $request->callback = 'saepe';
    $request->fields = 'occaecati';
    $request->key = 'atque';
    $request->name = 'Tamara Vandervort IV';
    $request->oauthToken = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'nam';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'aliquid';

    $requestSecurity = new DlpProjectsStoredInfoTypesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dlpProjectsStoredInfoTypesPatch($request, $requestSecurity);

    if ($response->googlePrivacyDlpV2StoredInfoType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
