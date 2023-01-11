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
exports.UpdateNetworkWirelessSsidVpnResponse = exports.UpdateNetworkWirelessSsidVpnRequest = exports.UpdateNetworkWirelessSsidVpnRequestBody = exports.UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel = exports.UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules = exports.UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum = exports.UpdateNetworkWirelessSsidVpnPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var UpdateNetworkWirelessSsidVpnPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidVpnPathParams, _super);
    function UpdateNetworkWirelessSsidVpnPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidVpnPathParams.prototype, "networkId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=number" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidVpnPathParams.prototype, "number", void 0);
    return UpdateNetworkWirelessSsidVpnPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkWirelessSsidVpnPathParams = UpdateNetworkWirelessSsidVpnPathParams;
var UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum;
(function (UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum) {
    UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum["Any"] = "Any";
    UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum["Tcp"] = "TCP";
    UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum["Udp"] = "UDP";
})(UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum = exports.UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum || (exports.UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum = {}));
var UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules, _super);
    function UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules.prototype, "comment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=destCidr" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules.prototype, "destCidr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=destPort" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules.prototype, "destPort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=policy" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules.prototype, "policy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules.prototype, "protocol", void 0);
    return UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules = UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules;
// UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel
/**
 * The VPN split tunnel settings for this SSID.
**/
var UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel, _super);
    function UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel.prototype, "enabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rules", elemType: UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules }),
        __metadata("design:type", Array)
    ], UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel.prototype, "rules", void 0);
    return UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel = UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel;
var UpdateNetworkWirelessSsidVpnRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidVpnRequestBody, _super);
    function UpdateNetworkWirelessSsidVpnRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=splitTunnel" }),
        __metadata("design:type", UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel)
    ], UpdateNetworkWirelessSsidVpnRequestBody.prototype, "splitTunnel", void 0);
    return UpdateNetworkWirelessSsidVpnRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkWirelessSsidVpnRequestBody = UpdateNetworkWirelessSsidVpnRequestBody;
var UpdateNetworkWirelessSsidVpnRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidVpnRequest, _super);
    function UpdateNetworkWirelessSsidVpnRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateNetworkWirelessSsidVpnPathParams)
    ], UpdateNetworkWirelessSsidVpnRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkWirelessSsidVpnRequestBody)
    ], UpdateNetworkWirelessSsidVpnRequest.prototype, "request", void 0);
    return UpdateNetworkWirelessSsidVpnRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkWirelessSsidVpnRequest = UpdateNetworkWirelessSsidVpnRequest;
var UpdateNetworkWirelessSsidVpnResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidVpnResponse, _super);
    function UpdateNetworkWirelessSsidVpnResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidVpnResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidVpnResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateNetworkWirelessSsidVpnResponse.prototype, "updateNetworkWirelessSsidVpn200ApplicationJSONObject", void 0);
    return UpdateNetworkWirelessSsidVpnResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkWirelessSsidVpnResponse = UpdateNetworkWirelessSsidVpnResponse;
