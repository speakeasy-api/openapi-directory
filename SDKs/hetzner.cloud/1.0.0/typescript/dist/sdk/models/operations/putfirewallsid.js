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
exports.PutFirewallsIdResponse = exports.PutFirewallsIdRequest = exports.PutFirewallsIdFirewallResponse = exports.PutFirewallsIdFirewallResponseFirewall = exports.PutFirewallsIdFirewallResponseFirewallRule = exports.PutFirewallsIdFirewallResponseFirewallRuleProtocolEnum = exports.PutFirewallsIdFirewallResponseFirewallRuleDirectionEnum = exports.PutFirewallsIdFirewallResponseFirewallAppliedTo = exports.PutFirewallsIdFirewallResponseFirewallAppliedToTypeEnum = exports.PutFirewallsIdFirewallResponseFirewallAppliedToServer = exports.PutFirewallsIdFirewallResponseFirewallAppliedToLabelSelector = exports.PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources = exports.PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum = exports.PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesServer = exports.PutFirewallsIdUpdateFirewallRequest = exports.PutFirewallsIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var PutFirewallsIdPathParams = /** @class */ (function (_super) {
    __extends(PutFirewallsIdPathParams, _super);
    function PutFirewallsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PutFirewallsIdPathParams.prototype, "id", void 0);
    return PutFirewallsIdPathParams;
}(utils_1.SpeakeasyBase));
exports.PutFirewallsIdPathParams = PutFirewallsIdPathParams;
var PutFirewallsIdUpdateFirewallRequest = /** @class */ (function (_super) {
    __extends(PutFirewallsIdUpdateFirewallRequest, _super);
    function PutFirewallsIdUpdateFirewallRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], PutFirewallsIdUpdateFirewallRequest.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutFirewallsIdUpdateFirewallRequest.prototype, "name", void 0);
    return PutFirewallsIdUpdateFirewallRequest;
}(utils_1.SpeakeasyBase));
exports.PutFirewallsIdUpdateFirewallRequest = PutFirewallsIdUpdateFirewallRequest;
var PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesServer = /** @class */ (function (_super) {
    __extends(PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesServer, _super);
    function PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesServer.prototype, "id", void 0);
    return PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesServer;
}(utils_1.SpeakeasyBase));
exports.PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesServer = PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesServer;
var PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum;
(function (PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum) {
    PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum["Server"] = "server";
})(PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum = exports.PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum || (exports.PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum = {}));
var PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources = /** @class */ (function (_super) {
    __extends(PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources, _super);
    function PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=server" }),
        __metadata("design:type", PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesServer)
    ], PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources.prototype, "server", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources.prototype, "type", void 0);
    return PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources;
}(utils_1.SpeakeasyBase));
exports.PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources = PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources;
var PutFirewallsIdFirewallResponseFirewallAppliedToLabelSelector = /** @class */ (function (_super) {
    __extends(PutFirewallsIdFirewallResponseFirewallAppliedToLabelSelector, _super);
    function PutFirewallsIdFirewallResponseFirewallAppliedToLabelSelector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=selector" }),
        __metadata("design:type", String)
    ], PutFirewallsIdFirewallResponseFirewallAppliedToLabelSelector.prototype, "selector", void 0);
    return PutFirewallsIdFirewallResponseFirewallAppliedToLabelSelector;
}(utils_1.SpeakeasyBase));
exports.PutFirewallsIdFirewallResponseFirewallAppliedToLabelSelector = PutFirewallsIdFirewallResponseFirewallAppliedToLabelSelector;
var PutFirewallsIdFirewallResponseFirewallAppliedToServer = /** @class */ (function (_super) {
    __extends(PutFirewallsIdFirewallResponseFirewallAppliedToServer, _super);
    function PutFirewallsIdFirewallResponseFirewallAppliedToServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PutFirewallsIdFirewallResponseFirewallAppliedToServer.prototype, "id", void 0);
    return PutFirewallsIdFirewallResponseFirewallAppliedToServer;
}(utils_1.SpeakeasyBase));
exports.PutFirewallsIdFirewallResponseFirewallAppliedToServer = PutFirewallsIdFirewallResponseFirewallAppliedToServer;
var PutFirewallsIdFirewallResponseFirewallAppliedToTypeEnum;
(function (PutFirewallsIdFirewallResponseFirewallAppliedToTypeEnum) {
    PutFirewallsIdFirewallResponseFirewallAppliedToTypeEnum["Server"] = "server";
    PutFirewallsIdFirewallResponseFirewallAppliedToTypeEnum["LabelSelector"] = "label_selector";
})(PutFirewallsIdFirewallResponseFirewallAppliedToTypeEnum = exports.PutFirewallsIdFirewallResponseFirewallAppliedToTypeEnum || (exports.PutFirewallsIdFirewallResponseFirewallAppliedToTypeEnum = {}));
var PutFirewallsIdFirewallResponseFirewallAppliedTo = /** @class */ (function (_super) {
    __extends(PutFirewallsIdFirewallResponseFirewallAppliedTo, _super);
    function PutFirewallsIdFirewallResponseFirewallAppliedTo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=applied_to_resources", elemType: PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources }),
        __metadata("design:type", Array)
    ], PutFirewallsIdFirewallResponseFirewallAppliedTo.prototype, "appliedToResources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label_selector" }),
        __metadata("design:type", PutFirewallsIdFirewallResponseFirewallAppliedToLabelSelector)
    ], PutFirewallsIdFirewallResponseFirewallAppliedTo.prototype, "labelSelector", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=server" }),
        __metadata("design:type", PutFirewallsIdFirewallResponseFirewallAppliedToServer)
    ], PutFirewallsIdFirewallResponseFirewallAppliedTo.prototype, "server", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PutFirewallsIdFirewallResponseFirewallAppliedTo.prototype, "type", void 0);
    return PutFirewallsIdFirewallResponseFirewallAppliedTo;
}(utils_1.SpeakeasyBase));
exports.PutFirewallsIdFirewallResponseFirewallAppliedTo = PutFirewallsIdFirewallResponseFirewallAppliedTo;
var PutFirewallsIdFirewallResponseFirewallRuleDirectionEnum;
(function (PutFirewallsIdFirewallResponseFirewallRuleDirectionEnum) {
    PutFirewallsIdFirewallResponseFirewallRuleDirectionEnum["In"] = "in";
    PutFirewallsIdFirewallResponseFirewallRuleDirectionEnum["Out"] = "out";
})(PutFirewallsIdFirewallResponseFirewallRuleDirectionEnum = exports.PutFirewallsIdFirewallResponseFirewallRuleDirectionEnum || (exports.PutFirewallsIdFirewallResponseFirewallRuleDirectionEnum = {}));
var PutFirewallsIdFirewallResponseFirewallRuleProtocolEnum;
(function (PutFirewallsIdFirewallResponseFirewallRuleProtocolEnum) {
    PutFirewallsIdFirewallResponseFirewallRuleProtocolEnum["Tcp"] = "tcp";
    PutFirewallsIdFirewallResponseFirewallRuleProtocolEnum["Udp"] = "udp";
    PutFirewallsIdFirewallResponseFirewallRuleProtocolEnum["Icmp"] = "icmp";
    PutFirewallsIdFirewallResponseFirewallRuleProtocolEnum["Esp"] = "esp";
    PutFirewallsIdFirewallResponseFirewallRuleProtocolEnum["Gre"] = "gre";
})(PutFirewallsIdFirewallResponseFirewallRuleProtocolEnum = exports.PutFirewallsIdFirewallResponseFirewallRuleProtocolEnum || (exports.PutFirewallsIdFirewallResponseFirewallRuleProtocolEnum = {}));
var PutFirewallsIdFirewallResponseFirewallRule = /** @class */ (function (_super) {
    __extends(PutFirewallsIdFirewallResponseFirewallRule, _super);
    function PutFirewallsIdFirewallResponseFirewallRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PutFirewallsIdFirewallResponseFirewallRule.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=destination_ips" }),
        __metadata("design:type", Array)
    ], PutFirewallsIdFirewallResponseFirewallRule.prototype, "destinationIps", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=direction" }),
        __metadata("design:type", String)
    ], PutFirewallsIdFirewallResponseFirewallRule.prototype, "direction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=port" }),
        __metadata("design:type", String)
    ], PutFirewallsIdFirewallResponseFirewallRule.prototype, "port", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], PutFirewallsIdFirewallResponseFirewallRule.prototype, "protocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source_ips" }),
        __metadata("design:type", Array)
    ], PutFirewallsIdFirewallResponseFirewallRule.prototype, "sourceIps", void 0);
    return PutFirewallsIdFirewallResponseFirewallRule;
}(utils_1.SpeakeasyBase));
exports.PutFirewallsIdFirewallResponseFirewallRule = PutFirewallsIdFirewallResponseFirewallRule;
var PutFirewallsIdFirewallResponseFirewall = /** @class */ (function (_super) {
    __extends(PutFirewallsIdFirewallResponseFirewall, _super);
    function PutFirewallsIdFirewallResponseFirewall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=applied_to", elemType: PutFirewallsIdFirewallResponseFirewallAppliedTo }),
        __metadata("design:type", Array)
    ], PutFirewallsIdFirewallResponseFirewall.prototype, "appliedTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], PutFirewallsIdFirewallResponseFirewall.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PutFirewallsIdFirewallResponseFirewall.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], PutFirewallsIdFirewallResponseFirewall.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutFirewallsIdFirewallResponseFirewall.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rules", elemType: PutFirewallsIdFirewallResponseFirewallRule }),
        __metadata("design:type", Array)
    ], PutFirewallsIdFirewallResponseFirewall.prototype, "rules", void 0);
    return PutFirewallsIdFirewallResponseFirewall;
}(utils_1.SpeakeasyBase));
exports.PutFirewallsIdFirewallResponseFirewall = PutFirewallsIdFirewallResponseFirewall;
var PutFirewallsIdFirewallResponse = /** @class */ (function (_super) {
    __extends(PutFirewallsIdFirewallResponse, _super);
    function PutFirewallsIdFirewallResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=firewall" }),
        __metadata("design:type", PutFirewallsIdFirewallResponseFirewall)
    ], PutFirewallsIdFirewallResponse.prototype, "firewall", void 0);
    return PutFirewallsIdFirewallResponse;
}(utils_1.SpeakeasyBase));
exports.PutFirewallsIdFirewallResponse = PutFirewallsIdFirewallResponse;
var PutFirewallsIdRequest = /** @class */ (function (_super) {
    __extends(PutFirewallsIdRequest, _super);
    function PutFirewallsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutFirewallsIdPathParams)
    ], PutFirewallsIdRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutFirewallsIdUpdateFirewallRequest)
    ], PutFirewallsIdRequest.prototype, "request", void 0);
    return PutFirewallsIdRequest;
}(utils_1.SpeakeasyBase));
exports.PutFirewallsIdRequest = PutFirewallsIdRequest;
var PutFirewallsIdResponse = /** @class */ (function (_super) {
    __extends(PutFirewallsIdResponse, _super);
    function PutFirewallsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PutFirewallsIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutFirewallsIdFirewallResponse)
    ], PutFirewallsIdResponse.prototype, "firewallResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PutFirewallsIdResponse.prototype, "statusCode", void 0);
    return PutFirewallsIdResponse;
}(utils_1.SpeakeasyBase));
exports.PutFirewallsIdResponse = PutFirewallsIdResponse;
