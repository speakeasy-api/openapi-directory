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
exports.CreateNetworkSwitchStackRoutingInterfaceResponse = exports.CreateNetworkSwitchStackRoutingInterfaceRequest = exports.CreateNetworkSwitchStackRoutingInterfaceRequestBody = exports.CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings = exports.CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum = exports.CreateNetworkSwitchStackRoutingInterfacePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var CreateNetworkSwitchStackRoutingInterfacePathParams = /** @class */ (function (_super) {
    __extends(CreateNetworkSwitchStackRoutingInterfacePathParams, _super);
    function CreateNetworkSwitchStackRoutingInterfacePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchStackRoutingInterfacePathParams.prototype, "networkId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=switchStackId" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchStackRoutingInterfacePathParams.prototype, "switchStackId", void 0);
    return CreateNetworkSwitchStackRoutingInterfacePathParams;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkSwitchStackRoutingInterfacePathParams = CreateNetworkSwitchStackRoutingInterfacePathParams;
var CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum;
(function (CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum) {
    CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum["Disabled"] = "disabled";
    CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum["Enabled"] = "enabled";
    CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum["IgmpSnoopingQuerier"] = "IGMP snooping querier";
})(CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum = exports.CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum || (exports.CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum = {}));
// CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings
/**
 * The OSPF routing settings of the interface.
**/
var CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings = /** @class */ (function (_super) {
    __extends(CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings, _super);
    function CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=area" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings.prototype, "area", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cost" }),
        __metadata("design:type", Number)
    ], CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings.prototype, "cost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isPassiveEnabled" }),
        __metadata("design:type", Boolean)
    ], CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings.prototype, "isPassiveEnabled", void 0);
    return CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings = CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings;
var CreateNetworkSwitchStackRoutingInterfaceRequestBody = /** @class */ (function (_super) {
    __extends(CreateNetworkSwitchStackRoutingInterfaceRequestBody, _super);
    function CreateNetworkSwitchStackRoutingInterfaceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=defaultGateway" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchStackRoutingInterfaceRequestBody.prototype, "defaultGateway", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interfaceIp" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchStackRoutingInterfaceRequestBody.prototype, "interfaceIp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=multicastRouting" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchStackRoutingInterfaceRequestBody.prototype, "multicastRouting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchStackRoutingInterfaceRequestBody.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ospfSettings" }),
        __metadata("design:type", CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings)
    ], CreateNetworkSwitchStackRoutingInterfaceRequestBody.prototype, "ospfSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subnet" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchStackRoutingInterfaceRequestBody.prototype, "subnet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vlanId" }),
        __metadata("design:type", Number)
    ], CreateNetworkSwitchStackRoutingInterfaceRequestBody.prototype, "vlanId", void 0);
    return CreateNetworkSwitchStackRoutingInterfaceRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkSwitchStackRoutingInterfaceRequestBody = CreateNetworkSwitchStackRoutingInterfaceRequestBody;
var CreateNetworkSwitchStackRoutingInterfaceRequest = /** @class */ (function (_super) {
    __extends(CreateNetworkSwitchStackRoutingInterfaceRequest, _super);
    function CreateNetworkSwitchStackRoutingInterfaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateNetworkSwitchStackRoutingInterfacePathParams)
    ], CreateNetworkSwitchStackRoutingInterfaceRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateNetworkSwitchStackRoutingInterfaceRequestBody)
    ], CreateNetworkSwitchStackRoutingInterfaceRequest.prototype, "request", void 0);
    return CreateNetworkSwitchStackRoutingInterfaceRequest;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkSwitchStackRoutingInterfaceRequest = CreateNetworkSwitchStackRoutingInterfaceRequest;
var CreateNetworkSwitchStackRoutingInterfaceResponse = /** @class */ (function (_super) {
    __extends(CreateNetworkSwitchStackRoutingInterfaceResponse, _super);
    function CreateNetworkSwitchStackRoutingInterfaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateNetworkSwitchStackRoutingInterfaceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateNetworkSwitchStackRoutingInterfaceResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkSwitchStackRoutingInterfaceResponse.prototype, "createNetworkSwitchStackRoutingInterface201ApplicationJSONObject", void 0);
    return CreateNetworkSwitchStackRoutingInterfaceResponse;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkSwitchStackRoutingInterfaceResponse = CreateNetworkSwitchStackRoutingInterfaceResponse;
