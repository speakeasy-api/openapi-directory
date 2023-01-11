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
exports.UpdateNetworkApplianceFirewallL3FirewallRulesResponse = exports.UpdateNetworkApplianceFirewallL3FirewallRulesRequest = exports.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBody = exports.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules = exports.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum = exports.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnum = exports.UpdateNetworkApplianceFirewallL3FirewallRulesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var UpdateNetworkApplianceFirewallL3FirewallRulesPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceFirewallL3FirewallRulesPathParams, _super);
    function UpdateNetworkApplianceFirewallL3FirewallRulesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallL3FirewallRulesPathParams.prototype, "networkId", void 0);
    return UpdateNetworkApplianceFirewallL3FirewallRulesPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkApplianceFirewallL3FirewallRulesPathParams = UpdateNetworkApplianceFirewallL3FirewallRulesPathParams;
var UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnum;
(function (UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnum) {
    UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnum["Allow"] = "allow";
    UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnum["Deny"] = "deny";
})(UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnum = exports.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnum || (exports.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnum = {}));
var UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum;
(function (UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum) {
    UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum["Tcp"] = "tcp";
    UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum["Udp"] = "udp";
    UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum["Icmp"] = "icmp";
    UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum["Any"] = "any";
})(UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum = exports.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum || (exports.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum = {}));
var UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules, _super);
    function UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules.prototype, "comment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=destCidr" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules.prototype, "destCidr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=destPort" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules.prototype, "destPort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=policy" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules.prototype, "policy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules.prototype, "protocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=srcCidr" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules.prototype, "srcCidr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=srcPort" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules.prototype, "srcPort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=syslogEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules.prototype, "syslogEnabled", void 0);
    return UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules = UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules;
var UpdateNetworkApplianceFirewallL3FirewallRulesRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceFirewallL3FirewallRulesRequestBody, _super);
    function UpdateNetworkApplianceFirewallL3FirewallRulesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rules", elemType: UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules }),
        __metadata("design:type", Array)
    ], UpdateNetworkApplianceFirewallL3FirewallRulesRequestBody.prototype, "rules", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=syslogDefaultRule" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkApplianceFirewallL3FirewallRulesRequestBody.prototype, "syslogDefaultRule", void 0);
    return UpdateNetworkApplianceFirewallL3FirewallRulesRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBody = UpdateNetworkApplianceFirewallL3FirewallRulesRequestBody;
var UpdateNetworkApplianceFirewallL3FirewallRulesRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceFirewallL3FirewallRulesRequest, _super);
    function UpdateNetworkApplianceFirewallL3FirewallRulesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateNetworkApplianceFirewallL3FirewallRulesPathParams)
    ], UpdateNetworkApplianceFirewallL3FirewallRulesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkApplianceFirewallL3FirewallRulesRequestBody)
    ], UpdateNetworkApplianceFirewallL3FirewallRulesRequest.prototype, "request", void 0);
    return UpdateNetworkApplianceFirewallL3FirewallRulesRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkApplianceFirewallL3FirewallRulesRequest = UpdateNetworkApplianceFirewallL3FirewallRulesRequest;
var UpdateNetworkApplianceFirewallL3FirewallRulesResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceFirewallL3FirewallRulesResponse, _super);
    function UpdateNetworkApplianceFirewallL3FirewallRulesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallL3FirewallRulesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceFirewallL3FirewallRulesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateNetworkApplianceFirewallL3FirewallRulesResponse.prototype, "updateNetworkApplianceFirewallL3FirewallRules200ApplicationJSONObject", void 0);
    return UpdateNetworkApplianceFirewallL3FirewallRulesResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkApplianceFirewallL3FirewallRulesResponse = UpdateNetworkApplianceFirewallL3FirewallRulesResponse;
