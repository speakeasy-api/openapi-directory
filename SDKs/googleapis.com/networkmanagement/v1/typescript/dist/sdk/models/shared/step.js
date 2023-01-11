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
exports.Step = exports.StepStateEnum = void 0;
var utils_1 = require("../../../internal/utils");
var abortinfo_1 = require("./abortinfo");
var appengineversioninfo_1 = require("./appengineversioninfo");
var cloudfunctioninfo_1 = require("./cloudfunctioninfo");
var cloudrunrevisioninfo_1 = require("./cloudrunrevisioninfo");
var cloudsqlinstanceinfo_1 = require("./cloudsqlinstanceinfo");
var deliverinfo_1 = require("./deliverinfo");
var dropinfo_1 = require("./dropinfo");
var endpointinfo_1 = require("./endpointinfo");
var firewallinfo_1 = require("./firewallinfo");
var forwardinfo_1 = require("./forwardinfo");
var forwardingruleinfo_1 = require("./forwardingruleinfo");
var gkemasterinfo_1 = require("./gkemasterinfo");
var instanceinfo_1 = require("./instanceinfo");
var loadbalancerinfo_1 = require("./loadbalancerinfo");
var networkinfo_1 = require("./networkinfo");
var routeinfo_1 = require("./routeinfo");
var vpcconnectorinfo_1 = require("./vpcconnectorinfo");
var vpngatewayinfo_1 = require("./vpngatewayinfo");
var vpntunnelinfo_1 = require("./vpntunnelinfo");
var StepStateEnum;
(function (StepStateEnum) {
    StepStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    StepStateEnum["StartFromInstance"] = "START_FROM_INSTANCE";
    StepStateEnum["StartFromInternet"] = "START_FROM_INTERNET";
    StepStateEnum["StartFromPrivateNetwork"] = "START_FROM_PRIVATE_NETWORK";
    StepStateEnum["StartFromGkeMaster"] = "START_FROM_GKE_MASTER";
    StepStateEnum["StartFromCloudSqlInstance"] = "START_FROM_CLOUD_SQL_INSTANCE";
    StepStateEnum["StartFromCloudFunction"] = "START_FROM_CLOUD_FUNCTION";
    StepStateEnum["StartFromAppEngineVersion"] = "START_FROM_APP_ENGINE_VERSION";
    StepStateEnum["StartFromCloudRunRevision"] = "START_FROM_CLOUD_RUN_REVISION";
    StepStateEnum["ApplyIngressFirewallRule"] = "APPLY_INGRESS_FIREWALL_RULE";
    StepStateEnum["ApplyEgressFirewallRule"] = "APPLY_EGRESS_FIREWALL_RULE";
    StepStateEnum["ApplyRoute"] = "APPLY_ROUTE";
    StepStateEnum["ApplyForwardingRule"] = "APPLY_FORWARDING_RULE";
    StepStateEnum["SpoofingApproved"] = "SPOOFING_APPROVED";
    StepStateEnum["ArriveAtInstance"] = "ARRIVE_AT_INSTANCE";
    StepStateEnum["ArriveAtInternalLoadBalancer"] = "ARRIVE_AT_INTERNAL_LOAD_BALANCER";
    StepStateEnum["ArriveAtExternalLoadBalancer"] = "ARRIVE_AT_EXTERNAL_LOAD_BALANCER";
    StepStateEnum["ArriveAtVpnGateway"] = "ARRIVE_AT_VPN_GATEWAY";
    StepStateEnum["ArriveAtVpnTunnel"] = "ARRIVE_AT_VPN_TUNNEL";
    StepStateEnum["ArriveAtVpcConnector"] = "ARRIVE_AT_VPC_CONNECTOR";
    StepStateEnum["Nat"] = "NAT";
    StepStateEnum["ProxyConnection"] = "PROXY_CONNECTION";
    StepStateEnum["Deliver"] = "DELIVER";
    StepStateEnum["Drop"] = "DROP";
    StepStateEnum["Forward"] = "FORWARD";
    StepStateEnum["Abort"] = "ABORT";
    StepStateEnum["ViewerPermissionMissing"] = "VIEWER_PERMISSION_MISSING";
})(StepStateEnum = exports.StepStateEnum || (exports.StepStateEnum = {}));
// Step
/**
 * A simulated forwarding path is composed of multiple steps. Each step has a well-defined state and an associated configuration.
**/
var Step = /** @class */ (function (_super) {
    __extends(Step, _super);
    function Step() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=abort" }),
        __metadata("design:type", abortinfo_1.AbortInfo)
    ], Step.prototype, "abort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=appEngineVersion" }),
        __metadata("design:type", appengineversioninfo_1.AppEngineVersionInfo)
    ], Step.prototype, "appEngineVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=causesDrop" }),
        __metadata("design:type", Boolean)
    ], Step.prototype, "causesDrop", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloudFunction" }),
        __metadata("design:type", cloudfunctioninfo_1.CloudFunctionInfo)
    ], Step.prototype, "cloudFunction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloudRunRevision" }),
        __metadata("design:type", cloudrunrevisioninfo_1.CloudRunRevisionInfo)
    ], Step.prototype, "cloudRunRevision", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloudSqlInstance" }),
        __metadata("design:type", cloudsqlinstanceinfo_1.CloudSqlInstanceInfo)
    ], Step.prototype, "cloudSqlInstance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deliver" }),
        __metadata("design:type", deliverinfo_1.DeliverInfo)
    ], Step.prototype, "deliver", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Step.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=drop" }),
        __metadata("design:type", dropinfo_1.DropInfo)
    ], Step.prototype, "drop", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endpoint" }),
        __metadata("design:type", endpointinfo_1.EndpointInfo)
    ], Step.prototype, "endpoint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=firewall" }),
        __metadata("design:type", firewallinfo_1.FirewallInfo)
    ], Step.prototype, "firewall", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=forward" }),
        __metadata("design:type", forwardinfo_1.ForwardInfo)
    ], Step.prototype, "forward", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=forwardingRule" }),
        __metadata("design:type", forwardingruleinfo_1.ForwardingRuleInfo)
    ], Step.prototype, "forwardingRule", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gkeMaster" }),
        __metadata("design:type", gkemasterinfo_1.GkeMasterInfo)
    ], Step.prototype, "gkeMaster", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=instance" }),
        __metadata("design:type", instanceinfo_1.InstanceInfo)
    ], Step.prototype, "instance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=loadBalancer" }),
        __metadata("design:type", loadbalancerinfo_1.LoadBalancerInfo)
    ], Step.prototype, "loadBalancer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=network" }),
        __metadata("design:type", networkinfo_1.NetworkInfo)
    ], Step.prototype, "network", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=projectId" }),
        __metadata("design:type", String)
    ], Step.prototype, "projectId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=route" }),
        __metadata("design:type", routeinfo_1.RouteInfo)
    ], Step.prototype, "route", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Step.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vpcConnector" }),
        __metadata("design:type", vpcconnectorinfo_1.VpcConnectorInfo)
    ], Step.prototype, "vpcConnector", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vpnGateway" }),
        __metadata("design:type", vpngatewayinfo_1.VpnGatewayInfo)
    ], Step.prototype, "vpnGateway", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vpnTunnel" }),
        __metadata("design:type", vpntunnelinfo_1.VpnTunnelInfo)
    ], Step.prototype, "vpnTunnel", void 0);
    return Step;
}(utils_1.SpeakeasyBase));
exports.Step = Step;
