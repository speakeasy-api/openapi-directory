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
exports.Job = exports.JobTypeEnum = exports.JobStatusEnum = exports.JobLanguageEnum = exports.JobFailureEnum = void 0;
var utils_1 = require("../../../internal/utils");
var JobFailureEnum;
(function (JobFailureEnum) {
    JobFailureEnum["InternalProcessing"] = "internal_processing";
    JobFailureEnum["DownloadFailure"] = "download_failure";
    JobFailureEnum["DurationExceeded"] = "duration_exceeded";
    JobFailureEnum["DurationTooShort"] = "duration_too_short";
    JobFailureEnum["InvalidMedia"] = "invalid_media";
    JobFailureEnum["EmptyMedia"] = "empty_media";
    JobFailureEnum["Transcription"] = "transcription";
    JobFailureEnum["InsufficientBalance"] = "insufficient_balance";
    JobFailureEnum["InvoicingLimitExceeded"] = "invoicing_limit_exceeded";
})(JobFailureEnum = exports.JobFailureEnum || (exports.JobFailureEnum = {}));
var JobLanguageEnum;
(function (JobLanguageEnum) {
    JobLanguageEnum["En"] = "en";
    JobLanguageEnum["Ar"] = "ar";
    JobLanguageEnum["Bg"] = "bg";
    JobLanguageEnum["Ca"] = "ca";
    JobLanguageEnum["Cmn"] = "cmn";
    JobLanguageEnum["Cs"] = "cs";
    JobLanguageEnum["Da"] = "da";
    JobLanguageEnum["De"] = "de";
    JobLanguageEnum["El"] = "el";
    JobLanguageEnum["Es"] = "es";
    JobLanguageEnum["Fi"] = "fi";
    JobLanguageEnum["Fr"] = "fr";
    JobLanguageEnum["Hi"] = "hi";
    JobLanguageEnum["Hr"] = "hr";
    JobLanguageEnum["Hu"] = "hu";
    JobLanguageEnum["It"] = "it";
    JobLanguageEnum["Ja"] = "ja";
    JobLanguageEnum["Ko"] = "ko";
    JobLanguageEnum["Lt"] = "lt";
    JobLanguageEnum["Lv"] = "lv";
    JobLanguageEnum["Ms"] = "ms";
    JobLanguageEnum["Nl"] = "nl";
    JobLanguageEnum["No"] = "no";
    JobLanguageEnum["Pl"] = "pl";
    JobLanguageEnum["Pt"] = "pt";
    JobLanguageEnum["Ro"] = "ro";
    JobLanguageEnum["Ru"] = "ru";
    JobLanguageEnum["Sk"] = "sk";
    JobLanguageEnum["Sl"] = "sl";
    JobLanguageEnum["Sv"] = "sv";
    JobLanguageEnum["Tr"] = "tr";
})(JobLanguageEnum = exports.JobLanguageEnum || (exports.JobLanguageEnum = {}));
var JobStatusEnum;
(function (JobStatusEnum) {
    JobStatusEnum["InProgress"] = "in_progress";
    JobStatusEnum["Transcribed"] = "transcribed";
    JobStatusEnum["Failed"] = "failed";
})(JobStatusEnum = exports.JobStatusEnum || (exports.JobStatusEnum = {}));
var JobTypeEnum;
(function (JobTypeEnum) {
    JobTypeEnum["Async"] = "async";
})(JobTypeEnum = exports.JobTypeEnum || (exports.JobTypeEnum = {}));
// Job
/**
 * Rev.ai Transcription Job
 * ***
 * Note: properties are not displayed in the returned object if they are null
 *
**/
var Job = /** @class */ (function (_super) {
    __extends(Job, _super);
    function Job() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callback_url" }),
        __metadata("design:type", String)
    ], Job.prototype, "callbackUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=completed_on" }),
        __metadata("design:type", String)
    ], Job.prototype, "completedOn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_on" }),
        __metadata("design:type", String)
    ], Job.prototype, "createdOn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_vocabulary_id" }),
        __metadata("design:type", String)
    ], Job.prototype, "customVocabularyId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=delete_after_seconds" }),
        __metadata("design:type", Number)
    ], Job.prototype, "deleteAfterSeconds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration_seconds" }),
        __metadata("design:type", Number)
    ], Job.prototype, "durationSeconds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=failure" }),
        __metadata("design:type", String)
    ], Job.prototype, "failure", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=failure_detail" }),
        __metadata("design:type", String)
    ], Job.prototype, "failureDetail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=filter_profanity" }),
        __metadata("design:type", Boolean)
    ], Job.prototype, "filterProfanity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Job.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], Job.prototype, "language", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=media_url" }),
        __metadata("design:type", String)
    ], Job.prototype, "mediaUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metadata" }),
        __metadata("design:type", String)
    ], Job.prototype, "metadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Job.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remove_disfluencies" }),
        __metadata("design:type", Boolean)
    ], Job.prototype, "removeDisfluencies", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=skip_diarization" }),
        __metadata("design:type", Boolean)
    ], Job.prototype, "skipDiarization", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=skip_punctuation" }),
        __metadata("design:type", Boolean)
    ], Job.prototype, "skipPunctuation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=speaker_channels_count" }),
        __metadata("design:type", Number)
    ], Job.prototype, "speakerChannelsCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Job.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Job.prototype, "type", void 0);
    return Job;
}(utils_1.SpeakeasyBase));
exports.Job = Job;
