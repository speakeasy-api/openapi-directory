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
exports.UpdateNetworkWirelessSsidTrafficShapingRulesResponse = exports.UpdateNetworkWirelessSsidTrafficShapingRulesRequest = exports.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody = exports.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules = exports.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits = exports.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits = exports.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions = exports.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum = exports.UpdateNetworkWirelessSsidTrafficShapingRulesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var UpdateNetworkWirelessSsidTrafficShapingRulesPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidTrafficShapingRulesPathParams, _super);
    function UpdateNetworkWirelessSsidTrafficShapingRulesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidTrafficShapingRulesPathParams.prototype, "networkId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=number" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidTrafficShapingRulesPathParams.prototype, "number", void 0);
    return UpdateNetworkWirelessSsidTrafficShapingRulesPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkWirelessSsidTrafficShapingRulesPathParams = UpdateNetworkWirelessSsidTrafficShapingRulesPathParams;
var UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum;
(function (UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum) {
    UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum["Application"] = "application";
    UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum["ApplicationCategory"] = "applicationCategory";
    UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum["Host"] = "host";
    UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum["Port"] = "port";
    UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum["IpRange"] = "ipRange";
    UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum["LocalNet"] = "localNet";
})(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum = exports.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum || (exports.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum = {}));
var UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions, _super);
    function UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions.prototype, "value", void 0);
    return UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions;
// UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits
/**
 * The bandwidth limits object, specifying the upload ('limitUp') and download ('limitDown') speed in Kbps. These are only enforced if 'settings' is set to 'custom'.
**/
var UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits, _super);
    function UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=limitDown" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits.prototype, "limitDown", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=limitUp" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits.prototype, "limitUp", void 0);
    return UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits;
// UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits
/**
 *     An object describing the bandwidth settings for your rule.
 *
**/
var UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits, _super);
    function UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bandwidthLimits" }),
        __metadata("design:type", UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits)
    ], UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits.prototype, "bandwidthLimits", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=settings" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits.prototype, "settings", void 0);
    return UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits;
var UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules, _super);
    function UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=definitions", elemType: UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions }),
        __metadata("design:type", Array)
    ], UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules.prototype, "definitions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dscpTagValue" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules.prototype, "dscpTagValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pcpTagValue" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules.prototype, "pcpTagValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=perClientBandwidthLimits" }),
        __metadata("design:type", UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits)
    ], UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules.prototype, "perClientBandwidthLimits", void 0);
    return UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules;
var UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody, _super);
    function UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=defaultRulesEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody.prototype, "defaultRulesEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rules", elemType: UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules }),
        __metadata("design:type", Array)
    ], UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody.prototype, "rules", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=trafficShapingEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody.prototype, "trafficShapingEnabled", void 0);
    return UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody;
var UpdateNetworkWirelessSsidTrafficShapingRulesRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidTrafficShapingRulesRequest, _super);
    function UpdateNetworkWirelessSsidTrafficShapingRulesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateNetworkWirelessSsidTrafficShapingRulesPathParams)
    ], UpdateNetworkWirelessSsidTrafficShapingRulesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody)
    ], UpdateNetworkWirelessSsidTrafficShapingRulesRequest.prototype, "request", void 0);
    return UpdateNetworkWirelessSsidTrafficShapingRulesRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkWirelessSsidTrafficShapingRulesRequest = UpdateNetworkWirelessSsidTrafficShapingRulesRequest;
var UpdateNetworkWirelessSsidTrafficShapingRulesResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidTrafficShapingRulesResponse, _super);
    function UpdateNetworkWirelessSsidTrafficShapingRulesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidTrafficShapingRulesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidTrafficShapingRulesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateNetworkWirelessSsidTrafficShapingRulesResponse.prototype, "updateNetworkWirelessSsidTrafficShapingRules200ApplicationJSONObject", void 0);
    return UpdateNetworkWirelessSsidTrafficShapingRulesResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkWirelessSsidTrafficShapingRulesResponse = UpdateNetworkWirelessSsidTrafficShapingRulesResponse;
