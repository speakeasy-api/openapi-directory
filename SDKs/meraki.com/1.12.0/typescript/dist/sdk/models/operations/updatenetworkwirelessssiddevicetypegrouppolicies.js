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
exports.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesResponse = exports.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest = exports.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody = exports.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies = exports.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum = exports.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum = exports.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesPathParams, _super);
    function UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesPathParams.prototype, "networkId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=number" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesPathParams.prototype, "number", void 0);
    return UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesPathParams = UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesPathParams;
var UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum;
(function (UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum) {
    UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum["Allowed"] = "Allowed";
    UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum["Blocked"] = "Blocked";
    UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum["GroupPolicy"] = "Group policy";
})(UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum = exports.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum || (exports.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum = {}));
var UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum;
(function (UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum) {
    UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum["Android"] = "Android";
    UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum["BlackBerry"] = "BlackBerry";
    UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum["ChromeOs"] = "Chrome OS";
    UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum["IPad"] = "iPad";
    UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum["IPhone"] = "iPhone";
    UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum["IPod"] = "iPod";
    UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum["MacOsX"] = "Mac OS X";
    UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum["Windows"] = "Windows";
    UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum["WindowsPhone"] = "Windows Phone";
    UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum["BAndNNook"] = "B&N Nook";
    UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum["OtherOs"] = "Other OS";
})(UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum = exports.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum || (exports.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum = {}));
var UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies, _super);
    function UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=devicePolicy" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies.prototype, "devicePolicy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deviceType" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies.prototype, "deviceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=groupPolicyId" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies.prototype, "groupPolicyId", void 0);
    return UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies = UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies;
var UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody, _super);
    function UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deviceTypePolicies", elemType: UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies }),
        __metadata("design:type", Array)
    ], UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody.prototype, "deviceTypePolicies", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody.prototype, "enabled", void 0);
    return UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody = UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody;
var UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest, _super);
    function UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesPathParams)
    ], UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody)
    ], UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest.prototype, "request", void 0);
    return UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest = UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest;
var UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesResponse, _super);
    function UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesResponse.prototype, "updateNetworkWirelessSsidDeviceTypeGroupPolicies200ApplicationJSONObject", void 0);
    return UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesResponse = UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesResponse;
