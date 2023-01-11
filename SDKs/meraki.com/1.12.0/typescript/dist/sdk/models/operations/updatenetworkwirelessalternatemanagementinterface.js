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
exports.UpdateNetworkWirelessAlternateManagementInterfaceResponse = exports.UpdateNetworkWirelessAlternateManagementInterfaceRequest = exports.UpdateNetworkWirelessAlternateManagementInterfaceRequestBody = exports.UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum = exports.UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints = exports.UpdateNetworkWirelessAlternateManagementInterfacePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var UpdateNetworkWirelessAlternateManagementInterfacePathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessAlternateManagementInterfacePathParams, _super);
    function UpdateNetworkWirelessAlternateManagementInterfacePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessAlternateManagementInterfacePathParams.prototype, "networkId", void 0);
    return UpdateNetworkWirelessAlternateManagementInterfacePathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkWirelessAlternateManagementInterfacePathParams = UpdateNetworkWirelessAlternateManagementInterfacePathParams;
var UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints, _super);
    function UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alternateManagementIp" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints.prototype, "alternateManagementIp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dns1" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints.prototype, "dns1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dns2" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints.prototype, "dns2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gateway" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints.prototype, "gateway", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serial" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints.prototype, "serial", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subnetMask" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints.prototype, "subnetMask", void 0);
    return UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints = UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints;
var UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum;
(function (UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum) {
    UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum["Radius"] = "radius";
    UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum["Snmp"] = "snmp";
    UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum["Syslog"] = "syslog";
    UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum["Ldap"] = "ldap";
})(UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum = exports.UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum || (exports.UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum = {}));
var UpdateNetworkWirelessAlternateManagementInterfaceRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessAlternateManagementInterfaceRequestBody, _super);
    function UpdateNetworkWirelessAlternateManagementInterfaceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accessPoints", elemType: UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints }),
        __metadata("design:type", Array)
    ], UpdateNetworkWirelessAlternateManagementInterfaceRequestBody.prototype, "accessPoints", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessAlternateManagementInterfaceRequestBody.prototype, "enabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protocols" }),
        __metadata("design:type", Array)
    ], UpdateNetworkWirelessAlternateManagementInterfaceRequestBody.prototype, "protocols", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vlanId" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessAlternateManagementInterfaceRequestBody.prototype, "vlanId", void 0);
    return UpdateNetworkWirelessAlternateManagementInterfaceRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkWirelessAlternateManagementInterfaceRequestBody = UpdateNetworkWirelessAlternateManagementInterfaceRequestBody;
var UpdateNetworkWirelessAlternateManagementInterfaceRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessAlternateManagementInterfaceRequest, _super);
    function UpdateNetworkWirelessAlternateManagementInterfaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateNetworkWirelessAlternateManagementInterfacePathParams)
    ], UpdateNetworkWirelessAlternateManagementInterfaceRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkWirelessAlternateManagementInterfaceRequestBody)
    ], UpdateNetworkWirelessAlternateManagementInterfaceRequest.prototype, "request", void 0);
    return UpdateNetworkWirelessAlternateManagementInterfaceRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkWirelessAlternateManagementInterfaceRequest = UpdateNetworkWirelessAlternateManagementInterfaceRequest;
var UpdateNetworkWirelessAlternateManagementInterfaceResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessAlternateManagementInterfaceResponse, _super);
    function UpdateNetworkWirelessAlternateManagementInterfaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessAlternateManagementInterfaceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessAlternateManagementInterfaceResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateNetworkWirelessAlternateManagementInterfaceResponse.prototype, "updateNetworkWirelessAlternateManagementInterface200ApplicationJSONObject", void 0);
    return UpdateNetworkWirelessAlternateManagementInterfaceResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkWirelessAlternateManagementInterfaceResponse = UpdateNetworkWirelessAlternateManagementInterfaceResponse;
