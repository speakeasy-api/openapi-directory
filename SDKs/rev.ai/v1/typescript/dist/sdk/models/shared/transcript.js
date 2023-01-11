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
exports.Transcript = exports.TranscriptMonologues = exports.TranscriptMonologuesElements = exports.TranscriptMonologuesElementsTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var TranscriptMonologuesElementsTypeEnum;
(function (TranscriptMonologuesElementsTypeEnum) {
    TranscriptMonologuesElementsTypeEnum["Text"] = "text";
    TranscriptMonologuesElementsTypeEnum["Punct"] = "punct";
    TranscriptMonologuesElementsTypeEnum["Unknown"] = "unknown";
})(TranscriptMonologuesElementsTypeEnum = exports.TranscriptMonologuesElementsTypeEnum || (exports.TranscriptMonologuesElementsTypeEnum = {}));
var TranscriptMonologuesElements = /** @class */ (function (_super) {
    __extends(TranscriptMonologuesElements, _super);
    function TranscriptMonologuesElements() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=confidence" }),
        __metadata("design:type", Number)
    ], TranscriptMonologuesElements.prototype, "confidence", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ts" }),
        __metadata("design:type", Number)
    ], TranscriptMonologuesElements.prototype, "ts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ts_end" }),
        __metadata("design:type", Number)
    ], TranscriptMonologuesElements.prototype, "tsEnd", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], TranscriptMonologuesElements.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], TranscriptMonologuesElements.prototype, "value", void 0);
    return TranscriptMonologuesElements;
}(utils_1.SpeakeasyBase));
exports.TranscriptMonologuesElements = TranscriptMonologuesElements;
var TranscriptMonologues = /** @class */ (function (_super) {
    __extends(TranscriptMonologues, _super);
    function TranscriptMonologues() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=elements", elemType: TranscriptMonologuesElements }),
        __metadata("design:type", Array)
    ], TranscriptMonologues.prototype, "elements", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=speaker" }),
        __metadata("design:type", Number)
    ], TranscriptMonologues.prototype, "speaker", void 0);
    return TranscriptMonologues;
}(utils_1.SpeakeasyBase));
exports.TranscriptMonologues = TranscriptMonologues;
// Transcript
/**
 * Rev.ai Transcript Model
 * ***
 * Note: properties are not displayed in the returned object if they are null
 *
 * Jobs with skip_diarization set to true will only show a single speaker for the entire duration of the transcript.
 *
**/
var Transcript = /** @class */ (function (_super) {
    __extends(Transcript, _super);
    function Transcript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=monologues", elemType: TranscriptMonologues }),
        __metadata("design:type", Array)
    ], Transcript.prototype, "monologues", void 0);
    return Transcript;
}(utils_1.SpeakeasyBase));
exports.Transcript = Transcript;
