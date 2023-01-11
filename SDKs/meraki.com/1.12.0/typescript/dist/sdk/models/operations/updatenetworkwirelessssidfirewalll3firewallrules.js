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
exports.UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse = exports.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest = exports.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody = exports.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules = exports.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum = exports.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum = exports.UpdateNetworkWirelessSsidFirewallL3FirewallRulesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var UpdateNetworkWirelessSsidFirewallL3FirewallRulesPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidFirewallL3FirewallRulesPathParams, _super);
    function UpdateNetworkWirelessSsidFirewallL3FirewallRulesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidFirewallL3FirewallRulesPathParams.prototype, "networkId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=number" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidFirewallL3FirewallRulesPathParams.prototype, "number", void 0);
    return UpdateNetworkWirelessSsidFirewallL3FirewallRulesPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkWirelessSsidFirewallL3FirewallRulesPathParams = UpdateNetworkWirelessSsidFirewallL3FirewallRulesPathParams;
var UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum;
(function (UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum) {
    UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum["Allow"] = "allow";
    UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum["Deny"] = "deny";
})(UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum = exports.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum || (exports.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum = {}));
var UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum;
(function (UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum) {
    UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum["Tcp"] = "tcp";
    UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum["Udp"] = "udp";
    UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum["Icmp"] = "icmp";
    UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum["Any"] = "any";
})(UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum = exports.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum || (exports.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum = {}));
var UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules, _super);
    function UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules.prototype, "comment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=destCidr" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules.prototype, "destCidr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=destPort" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules.prototype, "destPort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=policy" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules.prototype, "policy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules.prototype, "protocol", void 0);
    return UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules = UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules;
var UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody, _super);
    function UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allowLanAccess" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody.prototype, "allowLanAccess", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rules", elemType: UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules }),
        __metadata("design:type", Array)
    ], UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody.prototype, "rules", void 0);
    return UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody = UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody;
var UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest, _super);
    function UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateNetworkWirelessSsidFirewallL3FirewallRulesPathParams)
    ], UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody)
    ], UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest.prototype, "request", void 0);
    return UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest = UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest;
var UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse, _super);
    function UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse.prototype, "updateNetworkWirelessSsidFirewallL3FirewallRules200ApplicationJSONObject", void 0);
    return UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse = UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse;
