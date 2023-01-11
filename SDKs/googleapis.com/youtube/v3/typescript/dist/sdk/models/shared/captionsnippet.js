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
exports.CaptionSnippet = exports.CaptionSnippetTrackKindEnum = exports.CaptionSnippetStatusEnum = exports.CaptionSnippetFailureReasonEnum = exports.CaptionSnippetAudioTrackTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var CaptionSnippetAudioTrackTypeEnum;
(function (CaptionSnippetAudioTrackTypeEnum) {
    CaptionSnippetAudioTrackTypeEnum["Unknown"] = "unknown";
    CaptionSnippetAudioTrackTypeEnum["Primary"] = "primary";
    CaptionSnippetAudioTrackTypeEnum["Commentary"] = "commentary";
    CaptionSnippetAudioTrackTypeEnum["Descriptive"] = "descriptive";
})(CaptionSnippetAudioTrackTypeEnum = exports.CaptionSnippetAudioTrackTypeEnum || (exports.CaptionSnippetAudioTrackTypeEnum = {}));
var CaptionSnippetFailureReasonEnum;
(function (CaptionSnippetFailureReasonEnum) {
    CaptionSnippetFailureReasonEnum["UnknownFormat"] = "unknownFormat";
    CaptionSnippetFailureReasonEnum["UnsupportedFormat"] = "unsupportedFormat";
    CaptionSnippetFailureReasonEnum["ProcessingFailed"] = "processingFailed";
})(CaptionSnippetFailureReasonEnum = exports.CaptionSnippetFailureReasonEnum || (exports.CaptionSnippetFailureReasonEnum = {}));
var CaptionSnippetStatusEnum;
(function (CaptionSnippetStatusEnum) {
    CaptionSnippetStatusEnum["Serving"] = "serving";
    CaptionSnippetStatusEnum["Syncing"] = "syncing";
    CaptionSnippetStatusEnum["Failed"] = "failed";
})(CaptionSnippetStatusEnum = exports.CaptionSnippetStatusEnum || (exports.CaptionSnippetStatusEnum = {}));
var CaptionSnippetTrackKindEnum;
(function (CaptionSnippetTrackKindEnum) {
    CaptionSnippetTrackKindEnum["Standard"] = "standard";
    CaptionSnippetTrackKindEnum["Asr"] = "ASR";
    CaptionSnippetTrackKindEnum["Forced"] = "forced";
})(CaptionSnippetTrackKindEnum = exports.CaptionSnippetTrackKindEnum || (exports.CaptionSnippetTrackKindEnum = {}));
// CaptionSnippet
/**
 * Basic details about a caption track, such as its language and name.
**/
var CaptionSnippet = /** @class */ (function (_super) {
    __extends(CaptionSnippet, _super);
    function CaptionSnippet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audioTrackType" }),
        __metadata("design:type", String)
    ], CaptionSnippet.prototype, "audioTrackType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=failureReason" }),
        __metadata("design:type", String)
    ], CaptionSnippet.prototype, "failureReason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isAutoSynced" }),
        __metadata("design:type", Boolean)
    ], CaptionSnippet.prototype, "isAutoSynced", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isCC" }),
        __metadata("design:type", Boolean)
    ], CaptionSnippet.prototype, "isCC", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isDraft" }),
        __metadata("design:type", Boolean)
    ], CaptionSnippet.prototype, "isDraft", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isEasyReader" }),
        __metadata("design:type", Boolean)
    ], CaptionSnippet.prototype, "isEasyReader", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isLarge" }),
        __metadata("design:type", Boolean)
    ], CaptionSnippet.prototype, "isLarge", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], CaptionSnippet.prototype, "language", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastUpdated" }),
        __metadata("design:type", Date)
    ], CaptionSnippet.prototype, "lastUpdated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CaptionSnippet.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], CaptionSnippet.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=trackKind" }),
        __metadata("design:type", String)
    ], CaptionSnippet.prototype, "trackKind", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=videoId" }),
        __metadata("design:type", String)
    ], CaptionSnippet.prototype, "videoId", void 0);
    return CaptionSnippet;
}(utils_1.SpeakeasyBase));
exports.CaptionSnippet = CaptionSnippet;
