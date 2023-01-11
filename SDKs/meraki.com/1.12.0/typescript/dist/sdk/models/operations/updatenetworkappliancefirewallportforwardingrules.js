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
exports.UpdateNetworkApplianceFirewallPortForwardingRulesResponse = exports.UpdateNetworkApplianceFirewallPortForwardingRulesRequest = exports.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBody = exports.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules = exports.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnum = exports.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum = exports.UpdateNetworkApplianceFirewallPortForwardingRulesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var UpdateNetworkApplianceFirewallPortForwardingRulesPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceFirewallPortForwardingRulesPathParams, _super);
    function UpdateNetworkApplianceFirewallPortForwardingRulesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallPortForwardingRulesPathParams.prototype, "networkId", void 0);
    return UpdateNetworkApplianceFirewallPortForwardingRulesPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkApplianceFirewallPortForwardingRulesPathParams = UpdateNetworkApplianceFirewallPortForwardingRulesPathParams;
var UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum;
(function (UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum) {
    UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum["Tcp"] = "tcp";
    UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum["Udp"] = "udp";
})(UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum = exports.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum || (exports.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum = {}));
var UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnum;
(function (UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnum) {
    UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnum["Internet1"] = "internet1";
    UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnum["Internet2"] = "internet2";
    UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnum["Both"] = "both";
})(UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnum = exports.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnum || (exports.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnum = {}));
var UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules, _super);
    function UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allowedIps" }),
        __metadata("design:type", Array)
    ], UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules.prototype, "allowedIps", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lanIp" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules.prototype, "lanIp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=localPort" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules.prototype, "localPort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules.prototype, "protocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=publicPort" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules.prototype, "publicPort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uplink" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules.prototype, "uplink", void 0);
    return UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules = UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules;
var UpdateNetworkApplianceFirewallPortForwardingRulesRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceFirewallPortForwardingRulesRequestBody, _super);
    function UpdateNetworkApplianceFirewallPortForwardingRulesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rules", elemType: UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules }),
        __metadata("design:type", Array)
    ], UpdateNetworkApplianceFirewallPortForwardingRulesRequestBody.prototype, "rules", void 0);
    return UpdateNetworkApplianceFirewallPortForwardingRulesRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBody = UpdateNetworkApplianceFirewallPortForwardingRulesRequestBody;
var UpdateNetworkApplianceFirewallPortForwardingRulesRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceFirewallPortForwardingRulesRequest, _super);
    function UpdateNetworkApplianceFirewallPortForwardingRulesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateNetworkApplianceFirewallPortForwardingRulesPathParams)
    ], UpdateNetworkApplianceFirewallPortForwardingRulesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkApplianceFirewallPortForwardingRulesRequestBody)
    ], UpdateNetworkApplianceFirewallPortForwardingRulesRequest.prototype, "request", void 0);
    return UpdateNetworkApplianceFirewallPortForwardingRulesRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkApplianceFirewallPortForwardingRulesRequest = UpdateNetworkApplianceFirewallPortForwardingRulesRequest;
var UpdateNetworkApplianceFirewallPortForwardingRulesResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceFirewallPortForwardingRulesResponse, _super);
    function UpdateNetworkApplianceFirewallPortForwardingRulesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallPortForwardingRulesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceFirewallPortForwardingRulesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateNetworkApplianceFirewallPortForwardingRulesResponse.prototype, "updateNetworkApplianceFirewallPortForwardingRules200ApplicationJSONObject", void 0);
    return UpdateNetworkApplianceFirewallPortForwardingRulesResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkApplianceFirewallPortForwardingRulesResponse = UpdateNetworkApplianceFirewallPortForwardingRulesResponse;
