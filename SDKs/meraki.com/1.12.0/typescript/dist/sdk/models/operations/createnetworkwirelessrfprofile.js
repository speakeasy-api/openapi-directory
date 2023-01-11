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
exports.CreateNetworkWirelessRfProfileResponse = exports.CreateNetworkWirelessRfProfileRequest = exports.CreateNetworkWirelessRfProfileRequestBody = exports.CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings = exports.CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum = exports.CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings = exports.CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum = exports.CreateNetworkWirelessRfProfileRequestBodyApBandSettings = exports.CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum = exports.CreateNetworkWirelessRfProfilePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var CreateNetworkWirelessRfProfilePathParams = /** @class */ (function (_super) {
    __extends(CreateNetworkWirelessRfProfilePathParams, _super);
    function CreateNetworkWirelessRfProfilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], CreateNetworkWirelessRfProfilePathParams.prototype, "networkId", void 0);
    return CreateNetworkWirelessRfProfilePathParams;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkWirelessRfProfilePathParams = CreateNetworkWirelessRfProfilePathParams;
var CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum;
(function (CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum) {
    CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum["Dual"] = "dual";
    CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum["Two4ghz"] = "2.4ghz";
    CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum["Fiveghz"] = "5ghz";
})(CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum = exports.CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum || (exports.CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum = {}));
// CreateNetworkWirelessRfProfileRequestBodyApBandSettings
/**
 * Settings that will be enabled if selectionType is set to 'ap'.
**/
var CreateNetworkWirelessRfProfileRequestBodyApBandSettings = /** @class */ (function (_super) {
    __extends(CreateNetworkWirelessRfProfileRequestBodyApBandSettings, _super);
    function CreateNetworkWirelessRfProfileRequestBodyApBandSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bandOperationMode" }),
        __metadata("design:type", String)
    ], CreateNetworkWirelessRfProfileRequestBodyApBandSettings.prototype, "bandOperationMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bandSteeringEnabled" }),
        __metadata("design:type", Boolean)
    ], CreateNetworkWirelessRfProfileRequestBodyApBandSettings.prototype, "bandSteeringEnabled", void 0);
    return CreateNetworkWirelessRfProfileRequestBodyApBandSettings;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkWirelessRfProfileRequestBodyApBandSettings = CreateNetworkWirelessRfProfileRequestBodyApBandSettings;
var CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum;
(function (CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum) {
    CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum["Ssid"] = "ssid";
    CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum["Ap"] = "ap";
})(CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum = exports.CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum || (exports.CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum = {}));
// CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings
/**
 * Settings related to 5Ghz band
**/
var CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings = /** @class */ (function (_super) {
    __extends(CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings, _super);
    function CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channelWidth" }),
        __metadata("design:type", String)
    ], CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings.prototype, "channelWidth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maxPower" }),
        __metadata("design:type", Number)
    ], CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings.prototype, "maxPower", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=minBitrate" }),
        __metadata("design:type", Number)
    ], CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings.prototype, "minBitrate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=minPower" }),
        __metadata("design:type", Number)
    ], CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings.prototype, "minPower", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rxsop" }),
        __metadata("design:type", Number)
    ], CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings.prototype, "rxsop", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=validAutoChannels" }),
        __metadata("design:type", Array)
    ], CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings.prototype, "validAutoChannels", void 0);
    return CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings = CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings;
var CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum;
(function (CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum) {
    CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum["Band"] = "band";
    CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum["Ssid"] = "ssid";
})(CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum = exports.CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum || (exports.CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum = {}));
// CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings
/**
 * Settings related to 2.4Ghz band
**/
var CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings = /** @class */ (function (_super) {
    __extends(CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings, _super);
    function CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=axEnabled" }),
        __metadata("design:type", Boolean)
    ], CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings.prototype, "axEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maxPower" }),
        __metadata("design:type", Number)
    ], CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings.prototype, "maxPower", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=minBitrate" }),
        __metadata("design:type", Number)
    ], CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings.prototype, "minBitrate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=minPower" }),
        __metadata("design:type", Number)
    ], CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings.prototype, "minPower", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rxsop" }),
        __metadata("design:type", Number)
    ], CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings.prototype, "rxsop", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=validAutoChannels" }),
        __metadata("design:type", Array)
    ], CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings.prototype, "validAutoChannels", void 0);
    return CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings = CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings;
var CreateNetworkWirelessRfProfileRequestBody = /** @class */ (function (_super) {
    __extends(CreateNetworkWirelessRfProfileRequestBody, _super);
    function CreateNetworkWirelessRfProfileRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=apBandSettings" }),
        __metadata("design:type", CreateNetworkWirelessRfProfileRequestBodyApBandSettings)
    ], CreateNetworkWirelessRfProfileRequestBody.prototype, "apBandSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bandSelectionType" }),
        __metadata("design:type", String)
    ], CreateNetworkWirelessRfProfileRequestBody.prototype, "bandSelectionType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clientBalancingEnabled" }),
        __metadata("design:type", Boolean)
    ], CreateNetworkWirelessRfProfileRequestBody.prototype, "clientBalancingEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fiveGhzSettings" }),
        __metadata("design:type", CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings)
    ], CreateNetworkWirelessRfProfileRequestBody.prototype, "fiveGhzSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=minBitrateType" }),
        __metadata("design:type", String)
    ], CreateNetworkWirelessRfProfileRequestBody.prototype, "minBitrateType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateNetworkWirelessRfProfileRequestBody.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=twoFourGhzSettings" }),
        __metadata("design:type", CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings)
    ], CreateNetworkWirelessRfProfileRequestBody.prototype, "twoFourGhzSettings", void 0);
    return CreateNetworkWirelessRfProfileRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkWirelessRfProfileRequestBody = CreateNetworkWirelessRfProfileRequestBody;
var CreateNetworkWirelessRfProfileRequest = /** @class */ (function (_super) {
    __extends(CreateNetworkWirelessRfProfileRequest, _super);
    function CreateNetworkWirelessRfProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateNetworkWirelessRfProfilePathParams)
    ], CreateNetworkWirelessRfProfileRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateNetworkWirelessRfProfileRequestBody)
    ], CreateNetworkWirelessRfProfileRequest.prototype, "request", void 0);
    return CreateNetworkWirelessRfProfileRequest;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkWirelessRfProfileRequest = CreateNetworkWirelessRfProfileRequest;
var CreateNetworkWirelessRfProfileResponse = /** @class */ (function (_super) {
    __extends(CreateNetworkWirelessRfProfileResponse, _super);
    function CreateNetworkWirelessRfProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateNetworkWirelessRfProfileResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateNetworkWirelessRfProfileResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkWirelessRfProfileResponse.prototype, "createNetworkWirelessRfProfile201ApplicationJSONObject", void 0);
    return CreateNetworkWirelessRfProfileResponse;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkWirelessRfProfileResponse = CreateNetworkWirelessRfProfileResponse;
