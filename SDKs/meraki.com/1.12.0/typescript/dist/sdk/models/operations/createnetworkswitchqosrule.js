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
exports.CreateNetworkSwitchQosRuleResponse = exports.CreateNetworkSwitchQosRuleRequest = exports.CreateNetworkSwitchQosRuleRequestBody = exports.CreateNetworkSwitchQosRuleRequestBodyProtocolEnum = exports.CreateNetworkSwitchQosRulePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var CreateNetworkSwitchQosRulePathParams = /** @class */ (function (_super) {
    __extends(CreateNetworkSwitchQosRulePathParams, _super);
    function CreateNetworkSwitchQosRulePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchQosRulePathParams.prototype, "networkId", void 0);
    return CreateNetworkSwitchQosRulePathParams;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkSwitchQosRulePathParams = CreateNetworkSwitchQosRulePathParams;
var CreateNetworkSwitchQosRuleRequestBodyProtocolEnum;
(function (CreateNetworkSwitchQosRuleRequestBodyProtocolEnum) {
    CreateNetworkSwitchQosRuleRequestBodyProtocolEnum["Any"] = "ANY";
    CreateNetworkSwitchQosRuleRequestBodyProtocolEnum["Tcp"] = "TCP";
    CreateNetworkSwitchQosRuleRequestBodyProtocolEnum["Udp"] = "UDP";
})(CreateNetworkSwitchQosRuleRequestBodyProtocolEnum = exports.CreateNetworkSwitchQosRuleRequestBodyProtocolEnum || (exports.CreateNetworkSwitchQosRuleRequestBodyProtocolEnum = {}));
var CreateNetworkSwitchQosRuleRequestBody = /** @class */ (function (_super) {
    __extends(CreateNetworkSwitchQosRuleRequestBody, _super);
    function CreateNetworkSwitchQosRuleRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dscp" }),
        __metadata("design:type", Number)
    ], CreateNetworkSwitchQosRuleRequestBody.prototype, "dscp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dstPort" }),
        __metadata("design:type", Number)
    ], CreateNetworkSwitchQosRuleRequestBody.prototype, "dstPort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dstPortRange" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchQosRuleRequestBody.prototype, "dstPortRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchQosRuleRequestBody.prototype, "protocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=srcPort" }),
        __metadata("design:type", Number)
    ], CreateNetworkSwitchQosRuleRequestBody.prototype, "srcPort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=srcPortRange" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchQosRuleRequestBody.prototype, "srcPortRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vlan" }),
        __metadata("design:type", Number)
    ], CreateNetworkSwitchQosRuleRequestBody.prototype, "vlan", void 0);
    return CreateNetworkSwitchQosRuleRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkSwitchQosRuleRequestBody = CreateNetworkSwitchQosRuleRequestBody;
var CreateNetworkSwitchQosRuleRequest = /** @class */ (function (_super) {
    __extends(CreateNetworkSwitchQosRuleRequest, _super);
    function CreateNetworkSwitchQosRuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateNetworkSwitchQosRulePathParams)
    ], CreateNetworkSwitchQosRuleRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateNetworkSwitchQosRuleRequestBody)
    ], CreateNetworkSwitchQosRuleRequest.prototype, "request", void 0);
    return CreateNetworkSwitchQosRuleRequest;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkSwitchQosRuleRequest = CreateNetworkSwitchQosRuleRequest;
var CreateNetworkSwitchQosRuleResponse = /** @class */ (function (_super) {
    __extends(CreateNetworkSwitchQosRuleResponse, _super);
    function CreateNetworkSwitchQosRuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateNetworkSwitchQosRuleResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateNetworkSwitchQosRuleResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkSwitchQosRuleResponse.prototype, "createNetworkSwitchQosRule201ApplicationJSONObject", void 0);
    return CreateNetworkSwitchQosRuleResponse;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkSwitchQosRuleResponse = CreateNetworkSwitchQosRuleResponse;
