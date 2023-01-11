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
exports.UpdateNetworkCameraQualityRetentionProfileResponse = exports.UpdateNetworkCameraQualityRetentionProfileRequest = exports.UpdateNetworkCameraQualityRetentionProfileRequestBody = exports.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings = exports.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32 = exports.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum = exports.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum = exports.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X = exports.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum = exports.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum = exports.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71 = exports.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum = exports.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum = exports.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We = exports.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum = exports.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum = exports.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72 = exports.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum = exports.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum = exports.UpdateNetworkCameraQualityRetentionProfilePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var UpdateNetworkCameraQualityRetentionProfilePathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkCameraQualityRetentionProfilePathParams, _super);
    function UpdateNetworkCameraQualityRetentionProfilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkCameraQualityRetentionProfilePathParams.prototype, "networkId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=qualityRetentionProfileId" }),
        __metadata("design:type", String)
    ], UpdateNetworkCameraQualityRetentionProfilePathParams.prototype, "qualityRetentionProfileId", void 0);
    return UpdateNetworkCameraQualityRetentionProfilePathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkCameraQualityRetentionProfilePathParams = UpdateNetworkCameraQualityRetentionProfilePathParams;
var UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum;
(function (UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum) {
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum["Standard"] = "Standard";
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum["Enhanced"] = "Enhanced";
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum["High"] = "High";
})(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum = exports.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum || (exports.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum = {}));
var UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum;
(function (UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum) {
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum["OneThousandTwoHundredAndEightyx720"] = "1280x720";
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum["OneThousandNineHundredAndTwentyx1080"] = "1920x1080";
})(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum = exports.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum || (exports.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum = {}));
// UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72
/**
 * Quality and resolution for MV12/MV22/MV72 camera models.
**/
var UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72 = /** @class */ (function (_super) {
    __extends(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72, _super);
    function UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quality" }),
        __metadata("design:type", String)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72.prototype, "quality", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resolution" }),
        __metadata("design:type", String)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72.prototype, "resolution", void 0);
    return UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72 = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72;
var UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum;
(function (UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum) {
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum["Standard"] = "Standard";
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum["Enhanced"] = "Enhanced";
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum["High"] = "High";
})(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum = exports.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum || (exports.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum = {}));
var UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum;
(function (UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum) {
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum["OneThousandTwoHundredAndEightyx720"] = "1280x720";
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum["OneThousandNineHundredAndTwentyx1080"] = "1920x1080";
})(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum = exports.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum || (exports.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum = {}));
// UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We
/**
 * Quality and resolution for MV12WE camera models.
**/
var UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We = /** @class */ (function (_super) {
    __extends(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We, _super);
    function UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quality" }),
        __metadata("design:type", String)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We.prototype, "quality", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resolution" }),
        __metadata("design:type", String)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We.prototype, "resolution", void 0);
    return UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We;
var UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum;
(function (UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum) {
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum["Standard"] = "Standard";
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum["Enhanced"] = "Enhanced";
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum["High"] = "High";
})(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum = exports.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum || (exports.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum = {}));
var UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum;
(function (UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum) {
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum["OneThousandTwoHundredAndEightyx720"] = "1280x720";
})(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum = exports.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum || (exports.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum = {}));
// UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71
/**
 * Quality and resolution for MV21/MV71 camera models.
**/
var UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71 = /** @class */ (function (_super) {
    __extends(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71, _super);
    function UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quality" }),
        __metadata("design:type", String)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71.prototype, "quality", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resolution" }),
        __metadata("design:type", String)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71.prototype, "resolution", void 0);
    return UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71 = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71;
var UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum;
(function (UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum) {
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum["Standard"] = "Standard";
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum["Enhanced"] = "Enhanced";
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum["High"] = "High";
})(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum = exports.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum || (exports.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum = {}));
var UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum;
(function (UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum) {
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum["OneThousandTwoHundredAndEightyx720"] = "1280x720";
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum["OneThousandNineHundredAndTwentyx1080"] = "1920x1080";
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum["TwoThousandSixHundredAndEightyEightx1512"] = "2688x1512";
})(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum = exports.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum || (exports.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum = {}));
// UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X
/**
 * Quality and resolution for MV22X/MV72X camera models.
**/
var UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X = /** @class */ (function (_super) {
    __extends(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X, _super);
    function UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quality" }),
        __metadata("design:type", String)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X.prototype, "quality", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resolution" }),
        __metadata("design:type", String)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X.prototype, "resolution", void 0);
    return UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X;
var UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum;
(function (UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum) {
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum["Standard"] = "Standard";
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum["Enhanced"] = "Enhanced";
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum["High"] = "High";
})(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum = exports.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum || (exports.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum = {}));
var UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum;
(function (UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum) {
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum["OneThousandAndEightyx1080"] = "1080x1080";
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum["TwoThousandAndFiftyEightx2058"] = "2058x2058";
})(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum = exports.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum || (exports.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum = {}));
// UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32
/**
 * Quality and resolution for MV32 camera models.
**/
var UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32 = /** @class */ (function (_super) {
    __extends(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32, _super);
    function UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quality" }),
        __metadata("design:type", String)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32.prototype, "quality", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resolution" }),
        __metadata("design:type", String)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32.prototype, "resolution", void 0);
    return UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32 = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32;
// UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings
/**
 * Video quality and resolution settings for all the camera models.
**/
var UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings = /** @class */ (function (_super) {
    __extends(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings, _super);
    function UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MV12/MV22/MV72" }),
        __metadata("design:type", UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings.prototype, "mv12Mv22Mv72", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MV12WE" }),
        __metadata("design:type", UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings.prototype, "mv12WE", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MV21/MV71" }),
        __metadata("design:type", UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings.prototype, "mv21Mv71", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MV22X/MV72X" }),
        __metadata("design:type", UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings.prototype, "mv22XMv72X", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MV32" }),
        __metadata("design:type", UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings.prototype, "mv32", void 0);
    return UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings;
var UpdateNetworkCameraQualityRetentionProfileRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkCameraQualityRetentionProfileRequestBody, _super);
    function UpdateNetworkCameraQualityRetentionProfileRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audioRecordingEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBody.prototype, "audioRecordingEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloudArchiveEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBody.prototype, "cloudArchiveEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maxRetentionDays" }),
        __metadata("design:type", Number)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBody.prototype, "maxRetentionDays", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=motionBasedRetentionEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBody.prototype, "motionBasedRetentionEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=motionDetectorVersion" }),
        __metadata("design:type", Number)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBody.prototype, "motionDetectorVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBody.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=restrictedBandwidthModeEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBody.prototype, "restrictedBandwidthModeEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=scheduleId" }),
        __metadata("design:type", String)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBody.prototype, "scheduleId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=videoSettings" }),
        __metadata("design:type", UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBody.prototype, "videoSettings", void 0);
    return UpdateNetworkCameraQualityRetentionProfileRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkCameraQualityRetentionProfileRequestBody = UpdateNetworkCameraQualityRetentionProfileRequestBody;
var UpdateNetworkCameraQualityRetentionProfileRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkCameraQualityRetentionProfileRequest, _super);
    function UpdateNetworkCameraQualityRetentionProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateNetworkCameraQualityRetentionProfilePathParams)
    ], UpdateNetworkCameraQualityRetentionProfileRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkCameraQualityRetentionProfileRequestBody)
    ], UpdateNetworkCameraQualityRetentionProfileRequest.prototype, "request", void 0);
    return UpdateNetworkCameraQualityRetentionProfileRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkCameraQualityRetentionProfileRequest = UpdateNetworkCameraQualityRetentionProfileRequest;
var UpdateNetworkCameraQualityRetentionProfileResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkCameraQualityRetentionProfileResponse, _super);
    function UpdateNetworkCameraQualityRetentionProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateNetworkCameraQualityRetentionProfileResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateNetworkCameraQualityRetentionProfileResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateNetworkCameraQualityRetentionProfileResponse.prototype, "updateNetworkCameraQualityRetentionProfile200ApplicationJSONObject", void 0);
    return UpdateNetworkCameraQualityRetentionProfileResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkCameraQualityRetentionProfileResponse = UpdateNetworkCameraQualityRetentionProfileResponse;
