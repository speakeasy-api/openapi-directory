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
exports.MembershipEndpoint = exports.MembershipEndpointInput = void 0;
var utils_1 = require("../../../internal/utils");
var appliancecluster_1 = require("./appliancecluster");
var edgecluster_1 = require("./edgecluster");
var gkecluster_1 = require("./gkecluster");
var kubernetesresource_1 = require("./kubernetesresource");
var multicloudcluster_1 = require("./multicloudcluster");
var onpremcluster_1 = require("./onpremcluster");
var gkecluster_2 = require("./gkecluster");
var kubernetesmetadata_1 = require("./kubernetesmetadata");
var kubernetesresource_2 = require("./kubernetesresource");
var multicloudcluster_2 = require("./multicloudcluster");
var onpremcluster_2 = require("./onpremcluster");
// MembershipEndpointInput
/**
 * MembershipEndpoint contains information needed to contact a Kubernetes API, endpoint and any additional Kubernetes metadata.
**/
var MembershipEndpointInput = /** @class */ (function (_super) {
    __extends(MembershipEndpointInput, _super);
    function MembershipEndpointInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=applianceCluster" }),
        __metadata("design:type", appliancecluster_1.ApplianceCluster)
    ], MembershipEndpointInput.prototype, "applianceCluster", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=edgeCluster" }),
        __metadata("design:type", edgecluster_1.EdgeCluster)
    ], MembershipEndpointInput.prototype, "edgeCluster", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gkeCluster" }),
        __metadata("design:type", gkecluster_1.GkeClusterInput)
    ], MembershipEndpointInput.prototype, "gkeCluster", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kubernetesResource" }),
        __metadata("design:type", kubernetesresource_1.KubernetesResourceInput)
    ], MembershipEndpointInput.prototype, "kubernetesResource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=multiCloudCluster" }),
        __metadata("design:type", multicloudcluster_1.MultiCloudClusterInput)
    ], MembershipEndpointInput.prototype, "multiCloudCluster", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=onPremCluster" }),
        __metadata("design:type", onpremcluster_1.OnPremClusterInput)
    ], MembershipEndpointInput.prototype, "onPremCluster", void 0);
    return MembershipEndpointInput;
}(utils_1.SpeakeasyBase));
exports.MembershipEndpointInput = MembershipEndpointInput;
// MembershipEndpoint
/**
 * MembershipEndpoint contains information needed to contact a Kubernetes API, endpoint and any additional Kubernetes metadata.
**/
var MembershipEndpoint = /** @class */ (function (_super) {
    __extends(MembershipEndpoint, _super);
    function MembershipEndpoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=applianceCluster" }),
        __metadata("design:type", appliancecluster_1.ApplianceCluster)
    ], MembershipEndpoint.prototype, "applianceCluster", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=edgeCluster" }),
        __metadata("design:type", edgecluster_1.EdgeCluster)
    ], MembershipEndpoint.prototype, "edgeCluster", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gkeCluster" }),
        __metadata("design:type", gkecluster_2.GkeCluster)
    ], MembershipEndpoint.prototype, "gkeCluster", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kubernetesMetadata" }),
        __metadata("design:type", kubernetesmetadata_1.KubernetesMetadata)
    ], MembershipEndpoint.prototype, "kubernetesMetadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kubernetesResource" }),
        __metadata("design:type", kubernetesresource_2.KubernetesResource)
    ], MembershipEndpoint.prototype, "kubernetesResource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=multiCloudCluster" }),
        __metadata("design:type", multicloudcluster_2.MultiCloudCluster)
    ], MembershipEndpoint.prototype, "multiCloudCluster", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=onPremCluster" }),
        __metadata("design:type", onpremcluster_2.OnPremCluster)
    ], MembershipEndpoint.prototype, "onPremCluster", void 0);
    return MembershipEndpoint;
}(utils_1.SpeakeasyBase));
exports.MembershipEndpoint = MembershipEndpoint;
