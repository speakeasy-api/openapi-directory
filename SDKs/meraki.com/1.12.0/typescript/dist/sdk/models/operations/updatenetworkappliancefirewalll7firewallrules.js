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
exports.UpdateNetworkApplianceFirewallL7FirewallRulesResponse = exports.UpdateNetworkApplianceFirewallL7FirewallRulesRequest = exports.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBody = exports.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules = exports.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnum = exports.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesPolicyEnum = exports.UpdateNetworkApplianceFirewallL7FirewallRulesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var UpdateNetworkApplianceFirewallL7FirewallRulesPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceFirewallL7FirewallRulesPathParams, _super);
    function UpdateNetworkApplianceFirewallL7FirewallRulesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallL7FirewallRulesPathParams.prototype, "networkId", void 0);
    return UpdateNetworkApplianceFirewallL7FirewallRulesPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkApplianceFirewallL7FirewallRulesPathParams = UpdateNetworkApplianceFirewallL7FirewallRulesPathParams;
var UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesPolicyEnum;
(function (UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesPolicyEnum) {
    UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesPolicyEnum["Deny"] = "deny";
})(UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesPolicyEnum = exports.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesPolicyEnum || (exports.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesPolicyEnum = {}));
var UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnum;
(function (UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnum) {
    UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnum["Application"] = "application";
    UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnum["ApplicationCategory"] = "applicationCategory";
    UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnum["Host"] = "host";
    UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnum["Port"] = "port";
    UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnum["IpRange"] = "ipRange";
})(UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnum = exports.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnum || (exports.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnum = {}));
var UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules, _super);
    function UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=policy" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules.prototype, "policy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules.prototype, "value", void 0);
    return UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules = UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules;
var UpdateNetworkApplianceFirewallL7FirewallRulesRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceFirewallL7FirewallRulesRequestBody, _super);
    function UpdateNetworkApplianceFirewallL7FirewallRulesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rules", elemType: UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules }),
        __metadata("design:type", Array)
    ], UpdateNetworkApplianceFirewallL7FirewallRulesRequestBody.prototype, "rules", void 0);
    return UpdateNetworkApplianceFirewallL7FirewallRulesRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBody = UpdateNetworkApplianceFirewallL7FirewallRulesRequestBody;
var UpdateNetworkApplianceFirewallL7FirewallRulesRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceFirewallL7FirewallRulesRequest, _super);
    function UpdateNetworkApplianceFirewallL7FirewallRulesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateNetworkApplianceFirewallL7FirewallRulesPathParams)
    ], UpdateNetworkApplianceFirewallL7FirewallRulesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkApplianceFirewallL7FirewallRulesRequestBody)
    ], UpdateNetworkApplianceFirewallL7FirewallRulesRequest.prototype, "request", void 0);
    return UpdateNetworkApplianceFirewallL7FirewallRulesRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkApplianceFirewallL7FirewallRulesRequest = UpdateNetworkApplianceFirewallL7FirewallRulesRequest;
var UpdateNetworkApplianceFirewallL7FirewallRulesResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceFirewallL7FirewallRulesResponse, _super);
    function UpdateNetworkApplianceFirewallL7FirewallRulesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallL7FirewallRulesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceFirewallL7FirewallRulesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateNetworkApplianceFirewallL7FirewallRulesResponse.prototype, "updateNetworkApplianceFirewallL7FirewallRules200ApplicationJSONObject", void 0);
    return UpdateNetworkApplianceFirewallL7FirewallRulesResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkApplianceFirewallL7FirewallRulesResponse = UpdateNetworkApplianceFirewallL7FirewallRulesResponse;
