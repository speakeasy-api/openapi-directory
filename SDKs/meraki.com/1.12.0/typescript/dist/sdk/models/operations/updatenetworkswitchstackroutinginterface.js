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
exports.UpdateNetworkSwitchStackRoutingInterfaceResponse = exports.UpdateNetworkSwitchStackRoutingInterfaceRequest = exports.UpdateNetworkSwitchStackRoutingInterfaceRequestBody = exports.UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings = exports.UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum = exports.UpdateNetworkSwitchStackRoutingInterfacePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var UpdateNetworkSwitchStackRoutingInterfacePathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchStackRoutingInterfacePathParams, _super);
    function UpdateNetworkSwitchStackRoutingInterfacePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=interfaceId" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchStackRoutingInterfacePathParams.prototype, "interfaceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchStackRoutingInterfacePathParams.prototype, "networkId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=switchStackId" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchStackRoutingInterfacePathParams.prototype, "switchStackId", void 0);
    return UpdateNetworkSwitchStackRoutingInterfacePathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkSwitchStackRoutingInterfacePathParams = UpdateNetworkSwitchStackRoutingInterfacePathParams;
var UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum;
(function (UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum) {
    UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum["Disabled"] = "disabled";
    UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum["Enabled"] = "enabled";
    UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum["IgmpSnoopingQuerier"] = "IGMP snooping querier";
})(UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum = exports.UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum || (exports.UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum = {}));
// UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings
/**
 * The OSPF routing settings of the interface.
**/
var UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings, _super);
    function UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=area" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings.prototype, "area", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cost" }),
        __metadata("design:type", Number)
    ], UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings.prototype, "cost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isPassiveEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings.prototype, "isPassiveEnabled", void 0);
    return UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings = UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings;
var UpdateNetworkSwitchStackRoutingInterfaceRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchStackRoutingInterfaceRequestBody, _super);
    function UpdateNetworkSwitchStackRoutingInterfaceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interfaceIp" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchStackRoutingInterfaceRequestBody.prototype, "interfaceIp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=multicastRouting" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchStackRoutingInterfaceRequestBody.prototype, "multicastRouting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchStackRoutingInterfaceRequestBody.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ospfSettings" }),
        __metadata("design:type", UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings)
    ], UpdateNetworkSwitchStackRoutingInterfaceRequestBody.prototype, "ospfSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subnet" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchStackRoutingInterfaceRequestBody.prototype, "subnet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vlanId" }),
        __metadata("design:type", Number)
    ], UpdateNetworkSwitchStackRoutingInterfaceRequestBody.prototype, "vlanId", void 0);
    return UpdateNetworkSwitchStackRoutingInterfaceRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkSwitchStackRoutingInterfaceRequestBody = UpdateNetworkSwitchStackRoutingInterfaceRequestBody;
var UpdateNetworkSwitchStackRoutingInterfaceRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchStackRoutingInterfaceRequest, _super);
    function UpdateNetworkSwitchStackRoutingInterfaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateNetworkSwitchStackRoutingInterfacePathParams)
    ], UpdateNetworkSwitchStackRoutingInterfaceRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkSwitchStackRoutingInterfaceRequestBody)
    ], UpdateNetworkSwitchStackRoutingInterfaceRequest.prototype, "request", void 0);
    return UpdateNetworkSwitchStackRoutingInterfaceRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkSwitchStackRoutingInterfaceRequest = UpdateNetworkSwitchStackRoutingInterfaceRequest;
var UpdateNetworkSwitchStackRoutingInterfaceResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchStackRoutingInterfaceResponse, _super);
    function UpdateNetworkSwitchStackRoutingInterfaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchStackRoutingInterfaceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateNetworkSwitchStackRoutingInterfaceResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateNetworkSwitchStackRoutingInterfaceResponse.prototype, "updateNetworkSwitchStackRoutingInterface200ApplicationJSONObject", void 0);
    return UpdateNetworkSwitchStackRoutingInterfaceResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkSwitchStackRoutingInterfaceResponse = UpdateNetworkSwitchStackRoutingInterfaceResponse;
