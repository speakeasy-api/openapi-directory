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
exports.UpdateNetworkSwitchAccessControlListsResponse = exports.UpdateNetworkSwitchAccessControlListsRequest = exports.UpdateNetworkSwitchAccessControlListsRequestBody = exports.UpdateNetworkSwitchAccessControlListsRequestBodyRules = exports.UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum = exports.UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnum = exports.UpdateNetworkSwitchAccessControlListsRequestBodyRulesIpVersionEnum = exports.UpdateNetworkSwitchAccessControlListsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var UpdateNetworkSwitchAccessControlListsPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchAccessControlListsPathParams, _super);
    function UpdateNetworkSwitchAccessControlListsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchAccessControlListsPathParams.prototype, "networkId", void 0);
    return UpdateNetworkSwitchAccessControlListsPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkSwitchAccessControlListsPathParams = UpdateNetworkSwitchAccessControlListsPathParams;
var UpdateNetworkSwitchAccessControlListsRequestBodyRulesIpVersionEnum;
(function (UpdateNetworkSwitchAccessControlListsRequestBodyRulesIpVersionEnum) {
    UpdateNetworkSwitchAccessControlListsRequestBodyRulesIpVersionEnum["Any"] = "any";
    UpdateNetworkSwitchAccessControlListsRequestBodyRulesIpVersionEnum["Ipv4"] = "ipv4";
    UpdateNetworkSwitchAccessControlListsRequestBodyRulesIpVersionEnum["Ipv6"] = "ipv6";
})(UpdateNetworkSwitchAccessControlListsRequestBodyRulesIpVersionEnum = exports.UpdateNetworkSwitchAccessControlListsRequestBodyRulesIpVersionEnum || (exports.UpdateNetworkSwitchAccessControlListsRequestBodyRulesIpVersionEnum = {}));
var UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnum;
(function (UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnum) {
    UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnum["Allow"] = "allow";
    UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnum["Deny"] = "deny";
})(UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnum = exports.UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnum || (exports.UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnum = {}));
var UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum;
(function (UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum) {
    UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum["Tcp"] = "tcp";
    UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum["Udp"] = "udp";
    UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum["Any"] = "any";
})(UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum = exports.UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum || (exports.UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum = {}));
var UpdateNetworkSwitchAccessControlListsRequestBodyRules = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchAccessControlListsRequestBodyRules, _super);
    function UpdateNetworkSwitchAccessControlListsRequestBodyRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchAccessControlListsRequestBodyRules.prototype, "comment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dstCidr" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchAccessControlListsRequestBodyRules.prototype, "dstCidr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dstPort" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchAccessControlListsRequestBodyRules.prototype, "dstPort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ipVersion" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchAccessControlListsRequestBodyRules.prototype, "ipVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=policy" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchAccessControlListsRequestBodyRules.prototype, "policy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchAccessControlListsRequestBodyRules.prototype, "protocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=srcCidr" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchAccessControlListsRequestBodyRules.prototype, "srcCidr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=srcPort" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchAccessControlListsRequestBodyRules.prototype, "srcPort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vlan" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchAccessControlListsRequestBodyRules.prototype, "vlan", void 0);
    return UpdateNetworkSwitchAccessControlListsRequestBodyRules;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkSwitchAccessControlListsRequestBodyRules = UpdateNetworkSwitchAccessControlListsRequestBodyRules;
var UpdateNetworkSwitchAccessControlListsRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchAccessControlListsRequestBody, _super);
    function UpdateNetworkSwitchAccessControlListsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rules", elemType: UpdateNetworkSwitchAccessControlListsRequestBodyRules }),
        __metadata("design:type", Array)
    ], UpdateNetworkSwitchAccessControlListsRequestBody.prototype, "rules", void 0);
    return UpdateNetworkSwitchAccessControlListsRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkSwitchAccessControlListsRequestBody = UpdateNetworkSwitchAccessControlListsRequestBody;
var UpdateNetworkSwitchAccessControlListsRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchAccessControlListsRequest, _super);
    function UpdateNetworkSwitchAccessControlListsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateNetworkSwitchAccessControlListsPathParams)
    ], UpdateNetworkSwitchAccessControlListsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkSwitchAccessControlListsRequestBody)
    ], UpdateNetworkSwitchAccessControlListsRequest.prototype, "request", void 0);
    return UpdateNetworkSwitchAccessControlListsRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkSwitchAccessControlListsRequest = UpdateNetworkSwitchAccessControlListsRequest;
var UpdateNetworkSwitchAccessControlListsResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchAccessControlListsResponse, _super);
    function UpdateNetworkSwitchAccessControlListsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchAccessControlListsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateNetworkSwitchAccessControlListsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateNetworkSwitchAccessControlListsResponse.prototype, "updateNetworkSwitchAccessControlLists200ApplicationJSONObject", void 0);
    return UpdateNetworkSwitchAccessControlListsResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkSwitchAccessControlListsResponse = UpdateNetworkSwitchAccessControlListsResponse;
