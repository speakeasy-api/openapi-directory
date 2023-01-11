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
exports.UpdateDeviceManagementInterfaceResponse = exports.UpdateDeviceManagementInterfaceRequest = exports.UpdateDeviceManagementInterfaceRequestBody = exports.UpdateDeviceManagementInterfaceRequestBodyWan2 = exports.UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum = exports.UpdateDeviceManagementInterfaceRequestBodyWan1 = exports.UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnum = exports.UpdateDeviceManagementInterfacePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var UpdateDeviceManagementInterfacePathParams = /** @class */ (function (_super) {
    __extends(UpdateDeviceManagementInterfacePathParams, _super);
    function UpdateDeviceManagementInterfacePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=serial" }),
        __metadata("design:type", String)
    ], UpdateDeviceManagementInterfacePathParams.prototype, "serial", void 0);
    return UpdateDeviceManagementInterfacePathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateDeviceManagementInterfacePathParams = UpdateDeviceManagementInterfacePathParams;
var UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnum;
(function (UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnum) {
    UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnum["Enabled"] = "enabled";
    UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnum["Disabled"] = "disabled";
    UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnum["NotConfigured"] = "not configured";
})(UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnum = exports.UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnum || (exports.UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnum = {}));
// UpdateDeviceManagementInterfaceRequestBodyWan1
/**
 * WAN 1 settings
**/
var UpdateDeviceManagementInterfaceRequestBodyWan1 = /** @class */ (function (_super) {
    __extends(UpdateDeviceManagementInterfaceRequestBodyWan1, _super);
    function UpdateDeviceManagementInterfaceRequestBodyWan1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=staticDns" }),
        __metadata("design:type", Array)
    ], UpdateDeviceManagementInterfaceRequestBodyWan1.prototype, "staticDns", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=staticGatewayIp" }),
        __metadata("design:type", String)
    ], UpdateDeviceManagementInterfaceRequestBodyWan1.prototype, "staticGatewayIp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=staticIp" }),
        __metadata("design:type", String)
    ], UpdateDeviceManagementInterfaceRequestBodyWan1.prototype, "staticIp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=staticSubnetMask" }),
        __metadata("design:type", String)
    ], UpdateDeviceManagementInterfaceRequestBodyWan1.prototype, "staticSubnetMask", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usingStaticIp" }),
        __metadata("design:type", Boolean)
    ], UpdateDeviceManagementInterfaceRequestBodyWan1.prototype, "usingStaticIp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vlan" }),
        __metadata("design:type", Number)
    ], UpdateDeviceManagementInterfaceRequestBodyWan1.prototype, "vlan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=wanEnabled" }),
        __metadata("design:type", String)
    ], UpdateDeviceManagementInterfaceRequestBodyWan1.prototype, "wanEnabled", void 0);
    return UpdateDeviceManagementInterfaceRequestBodyWan1;
}(utils_1.SpeakeasyBase));
exports.UpdateDeviceManagementInterfaceRequestBodyWan1 = UpdateDeviceManagementInterfaceRequestBodyWan1;
var UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum;
(function (UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum) {
    UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum["Enabled"] = "enabled";
    UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum["Disabled"] = "disabled";
    UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum["NotConfigured"] = "not configured";
})(UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum = exports.UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum || (exports.UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum = {}));
// UpdateDeviceManagementInterfaceRequestBodyWan2
/**
 * WAN 2 settings (only for MX devices)
**/
var UpdateDeviceManagementInterfaceRequestBodyWan2 = /** @class */ (function (_super) {
    __extends(UpdateDeviceManagementInterfaceRequestBodyWan2, _super);
    function UpdateDeviceManagementInterfaceRequestBodyWan2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=staticDns" }),
        __metadata("design:type", Array)
    ], UpdateDeviceManagementInterfaceRequestBodyWan2.prototype, "staticDns", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=staticGatewayIp" }),
        __metadata("design:type", String)
    ], UpdateDeviceManagementInterfaceRequestBodyWan2.prototype, "staticGatewayIp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=staticIp" }),
        __metadata("design:type", String)
    ], UpdateDeviceManagementInterfaceRequestBodyWan2.prototype, "staticIp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=staticSubnetMask" }),
        __metadata("design:type", String)
    ], UpdateDeviceManagementInterfaceRequestBodyWan2.prototype, "staticSubnetMask", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usingStaticIp" }),
        __metadata("design:type", Boolean)
    ], UpdateDeviceManagementInterfaceRequestBodyWan2.prototype, "usingStaticIp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vlan" }),
        __metadata("design:type", Number)
    ], UpdateDeviceManagementInterfaceRequestBodyWan2.prototype, "vlan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=wanEnabled" }),
        __metadata("design:type", String)
    ], UpdateDeviceManagementInterfaceRequestBodyWan2.prototype, "wanEnabled", void 0);
    return UpdateDeviceManagementInterfaceRequestBodyWan2;
}(utils_1.SpeakeasyBase));
exports.UpdateDeviceManagementInterfaceRequestBodyWan2 = UpdateDeviceManagementInterfaceRequestBodyWan2;
var UpdateDeviceManagementInterfaceRequestBody = /** @class */ (function (_super) {
    __extends(UpdateDeviceManagementInterfaceRequestBody, _super);
    function UpdateDeviceManagementInterfaceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=wan1" }),
        __metadata("design:type", UpdateDeviceManagementInterfaceRequestBodyWan1)
    ], UpdateDeviceManagementInterfaceRequestBody.prototype, "wan1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=wan2" }),
        __metadata("design:type", UpdateDeviceManagementInterfaceRequestBodyWan2)
    ], UpdateDeviceManagementInterfaceRequestBody.prototype, "wan2", void 0);
    return UpdateDeviceManagementInterfaceRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateDeviceManagementInterfaceRequestBody = UpdateDeviceManagementInterfaceRequestBody;
var UpdateDeviceManagementInterfaceRequest = /** @class */ (function (_super) {
    __extends(UpdateDeviceManagementInterfaceRequest, _super);
    function UpdateDeviceManagementInterfaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateDeviceManagementInterfacePathParams)
    ], UpdateDeviceManagementInterfaceRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateDeviceManagementInterfaceRequestBody)
    ], UpdateDeviceManagementInterfaceRequest.prototype, "request", void 0);
    return UpdateDeviceManagementInterfaceRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateDeviceManagementInterfaceRequest = UpdateDeviceManagementInterfaceRequest;
var UpdateDeviceManagementInterfaceResponse = /** @class */ (function (_super) {
    __extends(UpdateDeviceManagementInterfaceResponse, _super);
    function UpdateDeviceManagementInterfaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateDeviceManagementInterfaceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateDeviceManagementInterfaceResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateDeviceManagementInterfaceResponse.prototype, "updateDeviceManagementInterface200ApplicationJSONObject", void 0);
    return UpdateDeviceManagementInterfaceResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateDeviceManagementInterfaceResponse = UpdateDeviceManagementInterfaceResponse;
