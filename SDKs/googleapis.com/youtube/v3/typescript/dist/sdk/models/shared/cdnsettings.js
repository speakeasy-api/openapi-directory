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
exports.CdnSettings = exports.CdnSettingsResolutionEnum = exports.CdnSettingsIngestionTypeEnum = exports.CdnSettingsFrameRateEnum = void 0;
var utils_1 = require("../../../internal/utils");
var ingestioninfo_1 = require("./ingestioninfo");
var CdnSettingsFrameRateEnum;
(function (CdnSettingsFrameRateEnum) {
    CdnSettingsFrameRateEnum["Thirtyfps"] = "30fps";
    CdnSettingsFrameRateEnum["Sixtyfps"] = "60fps";
    CdnSettingsFrameRateEnum["Variable"] = "variable";
})(CdnSettingsFrameRateEnum = exports.CdnSettingsFrameRateEnum || (exports.CdnSettingsFrameRateEnum = {}));
var CdnSettingsIngestionTypeEnum;
(function (CdnSettingsIngestionTypeEnum) {
    CdnSettingsIngestionTypeEnum["Rtmp"] = "rtmp";
    CdnSettingsIngestionTypeEnum["Dash"] = "dash";
    CdnSettingsIngestionTypeEnum["Webrtc"] = "webrtc";
    CdnSettingsIngestionTypeEnum["Hls"] = "hls";
})(CdnSettingsIngestionTypeEnum = exports.CdnSettingsIngestionTypeEnum || (exports.CdnSettingsIngestionTypeEnum = {}));
var CdnSettingsResolutionEnum;
(function (CdnSettingsResolutionEnum) {
    CdnSettingsResolutionEnum["TwoHundredAndFortyp"] = "240p";
    CdnSettingsResolutionEnum["ThreeHundredAndSixtyp"] = "360p";
    CdnSettingsResolutionEnum["FourHundredAndEightyp"] = "480p";
    CdnSettingsResolutionEnum["SevenHundredAndTwentyp"] = "720p";
    CdnSettingsResolutionEnum["OneThousandAndEightyp"] = "1080p";
    CdnSettingsResolutionEnum["OneThousandFourHundredAndFortyp"] = "1440p";
    CdnSettingsResolutionEnum["TwoThousandOneHundredAndSixtyp"] = "2160p";
    CdnSettingsResolutionEnum["Variable"] = "variable";
})(CdnSettingsResolutionEnum = exports.CdnSettingsResolutionEnum || (exports.CdnSettingsResolutionEnum = {}));
// CdnSettings
/**
 * Brief description of the live stream cdn settings.
**/
var CdnSettings = /** @class */ (function (_super) {
    __extends(CdnSettings, _super);
    function CdnSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], CdnSettings.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=frameRate" }),
        __metadata("design:type", String)
    ], CdnSettings.prototype, "frameRate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ingestionInfo" }),
        __metadata("design:type", ingestioninfo_1.IngestionInfo)
    ], CdnSettings.prototype, "ingestionInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ingestionType" }),
        __metadata("design:type", String)
    ], CdnSettings.prototype, "ingestionType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resolution" }),
        __metadata("design:type", String)
    ], CdnSettings.prototype, "resolution", void 0);
    return CdnSettings;
}(utils_1.SpeakeasyBase));
exports.CdnSettings = CdnSettings;
