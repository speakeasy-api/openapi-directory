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
exports.SubmitJobOptions = exports.SubmitJobOptionsLanguageEnum = exports.SubmitJobOptionsCustomVocabularies = void 0;
var utils_1 = require("../../../internal/utils");
// SubmitJobOptionsCustomVocabularies
/**
 * Contains a collection of phrases. Custom vocabulary informs and biases the speech recognition to find those phrases (at the cost of slightly slower transcription).
**/
var SubmitJobOptionsCustomVocabularies = /** @class */ (function (_super) {
    __extends(SubmitJobOptionsCustomVocabularies, _super);
    function SubmitJobOptionsCustomVocabularies() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phrases" }),
        __metadata("design:type", Array)
    ], SubmitJobOptionsCustomVocabularies.prototype, "phrases", void 0);
    return SubmitJobOptionsCustomVocabularies;
}(utils_1.SpeakeasyBase));
exports.SubmitJobOptionsCustomVocabularies = SubmitJobOptionsCustomVocabularies;
var SubmitJobOptionsLanguageEnum;
(function (SubmitJobOptionsLanguageEnum) {
    SubmitJobOptionsLanguageEnum["En"] = "en";
    SubmitJobOptionsLanguageEnum["Ar"] = "ar";
    SubmitJobOptionsLanguageEnum["Bg"] = "bg";
    SubmitJobOptionsLanguageEnum["Ca"] = "ca";
    SubmitJobOptionsLanguageEnum["Cmn"] = "cmn";
    SubmitJobOptionsLanguageEnum["Cs"] = "cs";
    SubmitJobOptionsLanguageEnum["Da"] = "da";
    SubmitJobOptionsLanguageEnum["De"] = "de";
    SubmitJobOptionsLanguageEnum["El"] = "el";
    SubmitJobOptionsLanguageEnum["Es"] = "es";
    SubmitJobOptionsLanguageEnum["Fi"] = "fi";
    SubmitJobOptionsLanguageEnum["Fr"] = "fr";
    SubmitJobOptionsLanguageEnum["Hi"] = "hi";
    SubmitJobOptionsLanguageEnum["Hr"] = "hr";
    SubmitJobOptionsLanguageEnum["Hu"] = "hu";
    SubmitJobOptionsLanguageEnum["It"] = "it";
    SubmitJobOptionsLanguageEnum["Ja"] = "ja";
    SubmitJobOptionsLanguageEnum["Ko"] = "ko";
    SubmitJobOptionsLanguageEnum["Lt"] = "lt";
    SubmitJobOptionsLanguageEnum["Lv"] = "lv";
    SubmitJobOptionsLanguageEnum["Ms"] = "ms";
    SubmitJobOptionsLanguageEnum["Nl"] = "nl";
    SubmitJobOptionsLanguageEnum["No"] = "no";
    SubmitJobOptionsLanguageEnum["Pl"] = "pl";
    SubmitJobOptionsLanguageEnum["Pt"] = "pt";
    SubmitJobOptionsLanguageEnum["Ro"] = "ro";
    SubmitJobOptionsLanguageEnum["Ru"] = "ru";
    SubmitJobOptionsLanguageEnum["Sk"] = "sk";
    SubmitJobOptionsLanguageEnum["Sl"] = "sl";
    SubmitJobOptionsLanguageEnum["Sv"] = "sv";
    SubmitJobOptionsLanguageEnum["Tr"] = "tr";
})(SubmitJobOptionsLanguageEnum = exports.SubmitJobOptionsLanguageEnum || (exports.SubmitJobOptionsLanguageEnum = {}));
// SubmitJobOptions
/**
 * Rev.ai Job Options Object Model
**/
var SubmitJobOptions = /** @class */ (function (_super) {
    __extends(SubmitJobOptions, _super);
    function SubmitJobOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callback_url" }),
        __metadata("design:type", String)
    ], SubmitJobOptions.prototype, "callbackUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_vocabularies", elemType: SubmitJobOptionsCustomVocabularies }),
        __metadata("design:type", Array)
    ], SubmitJobOptions.prototype, "customVocabularies", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_vocabulary_id" }),
        __metadata("design:type", String)
    ], SubmitJobOptions.prototype, "customVocabularyId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=delete_after_seconds" }),
        __metadata("design:type", Number)
    ], SubmitJobOptions.prototype, "deleteAfterSeconds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=filter_profanity" }),
        __metadata("design:type", Boolean)
    ], SubmitJobOptions.prototype, "filterProfanity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], SubmitJobOptions.prototype, "language", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=media_url" }),
        __metadata("design:type", String)
    ], SubmitJobOptions.prototype, "mediaUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metadata" }),
        __metadata("design:type", String)
    ], SubmitJobOptions.prototype, "metadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remove_disfluencies" }),
        __metadata("design:type", Boolean)
    ], SubmitJobOptions.prototype, "removeDisfluencies", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=skip_diarization" }),
        __metadata("design:type", Boolean)
    ], SubmitJobOptions.prototype, "skipDiarization", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=skip_punctuation" }),
        __metadata("design:type", Boolean)
    ], SubmitJobOptions.prototype, "skipPunctuation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=speaker_channels_count" }),
        __metadata("design:type", Number)
    ], SubmitJobOptions.prototype, "speakerChannelsCount", void 0);
    return SubmitJobOptions;
}(utils_1.SpeakeasyBase));
exports.SubmitJobOptions = SubmitJobOptions;
