"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomVisionError = exports.CustomVisionErrorCodeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var CustomVisionErrorCodeEnum;
(function (CustomVisionErrorCodeEnum) {
    CustomVisionErrorCodeEnum["NoError"] = "NoError";
    CustomVisionErrorCodeEnum["BadRequest"] = "BadRequest";
    CustomVisionErrorCodeEnum["BadRequestExceededBatchSize"] = "BadRequestExceededBatchSize";
    CustomVisionErrorCodeEnum["BadRequestNotSupported"] = "BadRequestNotSupported";
    CustomVisionErrorCodeEnum["BadRequestInvalidIds"] = "BadRequestInvalidIds";
    CustomVisionErrorCodeEnum["BadRequestProjectName"] = "BadRequestProjectName";
    CustomVisionErrorCodeEnum["BadRequestProjectNameNotUnique"] = "BadRequestProjectNameNotUnique";
    CustomVisionErrorCodeEnum["BadRequestProjectDescription"] = "BadRequestProjectDescription";
    CustomVisionErrorCodeEnum["BadRequestProjectUnknownDomain"] = "BadRequestProjectUnknownDomain";
    CustomVisionErrorCodeEnum["BadRequestProjectUnknownClassification"] = "BadRequestProjectUnknownClassification";
    CustomVisionErrorCodeEnum["BadRequestProjectUnsupportedDomainTypeChange"] = "BadRequestProjectUnsupportedDomainTypeChange";
    CustomVisionErrorCodeEnum["BadRequestProjectUnsupportedExportPlatform"] = "BadRequestProjectUnsupportedExportPlatform";
    CustomVisionErrorCodeEnum["BadRequestIterationName"] = "BadRequestIterationName";
    CustomVisionErrorCodeEnum["BadRequestIterationNameNotUnique"] = "BadRequestIterationNameNotUnique";
    CustomVisionErrorCodeEnum["BadRequestIterationDescription"] = "BadRequestIterationDescription";
    CustomVisionErrorCodeEnum["BadRequestIterationIsNotTrained"] = "BadRequestIterationIsNotTrained";
    CustomVisionErrorCodeEnum["BadRequestWorkspaceCannotBeModified"] = "BadRequestWorkspaceCannotBeModified";
    CustomVisionErrorCodeEnum["BadRequestWorkspaceNotDeletable"] = "BadRequestWorkspaceNotDeletable";
    CustomVisionErrorCodeEnum["BadRequestTagName"] = "BadRequestTagName";
    CustomVisionErrorCodeEnum["BadRequestTagNameNotUnique"] = "BadRequestTagNameNotUnique";
    CustomVisionErrorCodeEnum["BadRequestTagDescription"] = "BadRequestTagDescription";
    CustomVisionErrorCodeEnum["BadRequestTagType"] = "BadRequestTagType";
    CustomVisionErrorCodeEnum["BadRequestMultipleNegativeTag"] = "BadRequestMultipleNegativeTag";
    CustomVisionErrorCodeEnum["BadRequestImageTags"] = "BadRequestImageTags";
    CustomVisionErrorCodeEnum["BadRequestImageRegions"] = "BadRequestImageRegions";
    CustomVisionErrorCodeEnum["BadRequestNegativeAndRegularTagOnSameImage"] = "BadRequestNegativeAndRegularTagOnSameImage";
    CustomVisionErrorCodeEnum["BadRequestRequiredParamIsNull"] = "BadRequestRequiredParamIsNull";
    CustomVisionErrorCodeEnum["BadRequestIterationIsPublished"] = "BadRequestIterationIsPublished";
    CustomVisionErrorCodeEnum["BadRequestInvalidPublishName"] = "BadRequestInvalidPublishName";
    CustomVisionErrorCodeEnum["BadRequestInvalidPublishTarget"] = "BadRequestInvalidPublishTarget";
    CustomVisionErrorCodeEnum["BadRequestUnpublishFailed"] = "BadRequestUnpublishFailed";
    CustomVisionErrorCodeEnum["BadRequestIterationNotPublished"] = "BadRequestIterationNotPublished";
    CustomVisionErrorCodeEnum["BadRequestSubscriptionApi"] = "BadRequestSubscriptionApi";
    CustomVisionErrorCodeEnum["BadRequestExceedProjectLimit"] = "BadRequestExceedProjectLimit";
    CustomVisionErrorCodeEnum["BadRequestExceedIterationPerProjectLimit"] = "BadRequestExceedIterationPerProjectLimit";
    CustomVisionErrorCodeEnum["BadRequestExceedTagPerProjectLimit"] = "BadRequestExceedTagPerProjectLimit";
    CustomVisionErrorCodeEnum["BadRequestExceedTagPerImageLimit"] = "BadRequestExceedTagPerImageLimit";
    CustomVisionErrorCodeEnum["BadRequestExceededQuota"] = "BadRequestExceededQuota";
    CustomVisionErrorCodeEnum["BadRequestCannotMigrateProjectWithName"] = "BadRequestCannotMigrateProjectWithName";
    CustomVisionErrorCodeEnum["BadRequestNotLimitedTrial"] = "BadRequestNotLimitedTrial";
    CustomVisionErrorCodeEnum["BadRequestImageBatch"] = "BadRequestImageBatch";
    CustomVisionErrorCodeEnum["BadRequestImageStream"] = "BadRequestImageStream";
    CustomVisionErrorCodeEnum["BadRequestImageUrl"] = "BadRequestImageUrl";
    CustomVisionErrorCodeEnum["BadRequestImageFormat"] = "BadRequestImageFormat";
    CustomVisionErrorCodeEnum["BadRequestImageSizeBytes"] = "BadRequestImageSizeBytes";
    CustomVisionErrorCodeEnum["BadRequestImageExceededCount"] = "BadRequestImageExceededCount";
    CustomVisionErrorCodeEnum["BadRequestTrainingNotNeeded"] = "BadRequestTrainingNotNeeded";
    CustomVisionErrorCodeEnum["BadRequestTrainingNotNeededButTrainingPipelineUpdated"] = "BadRequestTrainingNotNeededButTrainingPipelineUpdated";
    CustomVisionErrorCodeEnum["BadRequestTrainingValidationFailed"] = "BadRequestTrainingValidationFailed";
    CustomVisionErrorCodeEnum["BadRequestClassificationTrainingValidationFailed"] = "BadRequestClassificationTrainingValidationFailed";
    CustomVisionErrorCodeEnum["BadRequestMultiClassClassificationTrainingValidationFailed"] = "BadRequestMultiClassClassificationTrainingValidationFailed";
    CustomVisionErrorCodeEnum["BadRequestMultiLabelClassificationTrainingValidationFailed"] = "BadRequestMultiLabelClassificationTrainingValidationFailed";
    CustomVisionErrorCodeEnum["BadRequestDetectionTrainingValidationFailed"] = "BadRequestDetectionTrainingValidationFailed";
    CustomVisionErrorCodeEnum["BadRequestTrainingAlreadyInProgress"] = "BadRequestTrainingAlreadyInProgress";
    CustomVisionErrorCodeEnum["BadRequestDetectionTrainingNotAllowNegativeTag"] = "BadRequestDetectionTrainingNotAllowNegativeTag";
    CustomVisionErrorCodeEnum["BadRequestInvalidEmailAddress"] = "BadRequestInvalidEmailAddress";
    CustomVisionErrorCodeEnum["BadRequestDomainNotSupportedForAdvancedTraining"] = "BadRequestDomainNotSupportedForAdvancedTraining";
    CustomVisionErrorCodeEnum["BadRequestExportPlatformNotSupportedForAdvancedTraining"] = "BadRequestExportPlatformNotSupportedForAdvancedTraining";
    CustomVisionErrorCodeEnum["BadRequestReservedBudgetInHoursNotEnoughForAdvancedTraining"] = "BadRequestReservedBudgetInHoursNotEnoughForAdvancedTraining";
    CustomVisionErrorCodeEnum["BadRequestExportValidationFailed"] = "BadRequestExportValidationFailed";
    CustomVisionErrorCodeEnum["BadRequestExportAlreadyInProgress"] = "BadRequestExportAlreadyInProgress";
    CustomVisionErrorCodeEnum["BadRequestPredictionIdsMissing"] = "BadRequestPredictionIdsMissing";
    CustomVisionErrorCodeEnum["BadRequestPredictionIdsExceededCount"] = "BadRequestPredictionIdsExceededCount";
    CustomVisionErrorCodeEnum["BadRequestPredictionTagsExceededCount"] = "BadRequestPredictionTagsExceededCount";
    CustomVisionErrorCodeEnum["BadRequestPredictionResultsExceededCount"] = "BadRequestPredictionResultsExceededCount";
    CustomVisionErrorCodeEnum["BadRequestPredictionInvalidApplicationName"] = "BadRequestPredictionInvalidApplicationName";
    CustomVisionErrorCodeEnum["BadRequestPredictionInvalidQueryParameters"] = "BadRequestPredictionInvalidQueryParameters";
    CustomVisionErrorCodeEnum["BadRequestInvalid"] = "BadRequestInvalid";
    CustomVisionErrorCodeEnum["UnsupportedMediaType"] = "UnsupportedMediaType";
    CustomVisionErrorCodeEnum["Forbidden"] = "Forbidden";
    CustomVisionErrorCodeEnum["ForbiddenUser"] = "ForbiddenUser";
    CustomVisionErrorCodeEnum["ForbiddenUserResource"] = "ForbiddenUserResource";
    CustomVisionErrorCodeEnum["ForbiddenUserSignupDisabled"] = "ForbiddenUserSignupDisabled";
    CustomVisionErrorCodeEnum["ForbiddenUserSignupAllowanceExceeded"] = "ForbiddenUserSignupAllowanceExceeded";
    CustomVisionErrorCodeEnum["ForbiddenUserDoesNotExist"] = "ForbiddenUserDoesNotExist";
    CustomVisionErrorCodeEnum["ForbiddenUserDisabled"] = "ForbiddenUserDisabled";
    CustomVisionErrorCodeEnum["ForbiddenUserInsufficientCapability"] = "ForbiddenUserInsufficientCapability";
    CustomVisionErrorCodeEnum["ForbiddenDrModeEnabled"] = "ForbiddenDRModeEnabled";
    CustomVisionErrorCodeEnum["ForbiddenInvalid"] = "ForbiddenInvalid";
    CustomVisionErrorCodeEnum["NotFound"] = "NotFound";
    CustomVisionErrorCodeEnum["NotFoundProject"] = "NotFoundProject";
    CustomVisionErrorCodeEnum["NotFoundProjectDefaultIteration"] = "NotFoundProjectDefaultIteration";
    CustomVisionErrorCodeEnum["NotFoundIteration"] = "NotFoundIteration";
    CustomVisionErrorCodeEnum["NotFoundIterationPerformance"] = "NotFoundIterationPerformance";
    CustomVisionErrorCodeEnum["NotFoundTag"] = "NotFoundTag";
    CustomVisionErrorCodeEnum["NotFoundImage"] = "NotFoundImage";
    CustomVisionErrorCodeEnum["NotFoundDomain"] = "NotFoundDomain";
    CustomVisionErrorCodeEnum["NotFoundApimSubscription"] = "NotFoundApimSubscription";
    CustomVisionErrorCodeEnum["NotFoundInvalid"] = "NotFoundInvalid";
    CustomVisionErrorCodeEnum["Conflict"] = "Conflict";
    CustomVisionErrorCodeEnum["ConflictInvalid"] = "ConflictInvalid";
    CustomVisionErrorCodeEnum["ErrorUnknown"] = "ErrorUnknown";
    CustomVisionErrorCodeEnum["ErrorProjectInvalidWorkspace"] = "ErrorProjectInvalidWorkspace";
    CustomVisionErrorCodeEnum["ErrorProjectInvalidPipelineConfiguration"] = "ErrorProjectInvalidPipelineConfiguration";
    CustomVisionErrorCodeEnum["ErrorProjectInvalidDomain"] = "ErrorProjectInvalidDomain";
    CustomVisionErrorCodeEnum["ErrorProjectTrainingRequestFailed"] = "ErrorProjectTrainingRequestFailed";
    CustomVisionErrorCodeEnum["ErrorProjectExportRequestFailed"] = "ErrorProjectExportRequestFailed";
    CustomVisionErrorCodeEnum["ErrorFeaturizationServiceUnavailable"] = "ErrorFeaturizationServiceUnavailable";
    CustomVisionErrorCodeEnum["ErrorFeaturizationQueueTimeout"] = "ErrorFeaturizationQueueTimeout";
    CustomVisionErrorCodeEnum["ErrorFeaturizationInvalidFeaturizer"] = "ErrorFeaturizationInvalidFeaturizer";
    CustomVisionErrorCodeEnum["ErrorFeaturizationAugmentationUnavailable"] = "ErrorFeaturizationAugmentationUnavailable";
    CustomVisionErrorCodeEnum["ErrorFeaturizationUnrecognizedJob"] = "ErrorFeaturizationUnrecognizedJob";
    CustomVisionErrorCodeEnum["ErrorFeaturizationAugmentationError"] = "ErrorFeaturizationAugmentationError";
    CustomVisionErrorCodeEnum["ErrorExporterInvalidPlatform"] = "ErrorExporterInvalidPlatform";
    CustomVisionErrorCodeEnum["ErrorExporterInvalidFeaturizer"] = "ErrorExporterInvalidFeaturizer";
    CustomVisionErrorCodeEnum["ErrorExporterInvalidClassifier"] = "ErrorExporterInvalidClassifier";
    CustomVisionErrorCodeEnum["ErrorPredictionServiceUnavailable"] = "ErrorPredictionServiceUnavailable";
    CustomVisionErrorCodeEnum["ErrorPredictionModelNotFound"] = "ErrorPredictionModelNotFound";
    CustomVisionErrorCodeEnum["ErrorPredictionModelNotCached"] = "ErrorPredictionModelNotCached";
    CustomVisionErrorCodeEnum["ErrorPrediction"] = "ErrorPrediction";
    CustomVisionErrorCodeEnum["ErrorPredictionStorage"] = "ErrorPredictionStorage";
    CustomVisionErrorCodeEnum["ErrorRegionProposal"] = "ErrorRegionProposal";
    CustomVisionErrorCodeEnum["ErrorInvalid"] = "ErrorInvalid";
})(CustomVisionErrorCodeEnum = exports.CustomVisionErrorCodeEnum || (exports.CustomVisionErrorCodeEnum = {}));
var CustomVisionError = /** @class */ (function (_super) {
    __extends(CustomVisionError, _super);
    function CustomVisionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], CustomVisionError.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CustomVisionError.prototype, "message", void 0);
    return CustomVisionError;
}(utils_1.SpeakeasyBase));
exports.CustomVisionError = CustomVisionError;
