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
exports.ClusterInput = exports.Cluster = void 0;
var utils_1 = require("../../../internal/utils");
var clusterconfig_1 = require("./clusterconfig");
var clustermetrics_1 = require("./clustermetrics");
var clusterstatus_1 = require("./clusterstatus");
var virtualclusterconfig_1 = require("./virtualclusterconfig");
var clusterconfig_2 = require("./clusterconfig");
// Cluster
/**
 * Describes the identifying information, config, and status of a Dataproc cluster
**/
var Cluster = /** @class */ (function (_super) {
    __extends(Cluster, _super);
    function Cluster() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clusterName" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "clusterName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clusterUuid" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "clusterUuid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=config" }),
        __metadata("design:type", clusterconfig_1.ClusterConfig)
    ], Cluster.prototype, "config", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], Cluster.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metrics" }),
        __metadata("design:type", clustermetrics_1.ClusterMetrics)
    ], Cluster.prototype, "metrics", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=projectId" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "projectId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", clusterstatus_1.ClusterStatus)
    ], Cluster.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=statusHistory", elemType: clusterstatus_1.ClusterStatus }),
        __metadata("design:type", Array)
    ], Cluster.prototype, "statusHistory", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=virtualClusterConfig" }),
        __metadata("design:type", virtualclusterconfig_1.VirtualClusterConfig)
    ], Cluster.prototype, "virtualClusterConfig", void 0);
    return Cluster;
}(utils_1.SpeakeasyBase));
exports.Cluster = Cluster;
// ClusterInput
/**
 * Describes the identifying information, config, and status of a Dataproc cluster
**/
var ClusterInput = /** @class */ (function (_super) {
    __extends(ClusterInput, _super);
    function ClusterInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clusterName" }),
        __metadata("design:type", String)
    ], ClusterInput.prototype, "clusterName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=config" }),
        __metadata("design:type", clusterconfig_2.ClusterConfigInput)
    ], ClusterInput.prototype, "config", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], ClusterInput.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metrics" }),
        __metadata("design:type", clustermetrics_1.ClusterMetrics)
    ], ClusterInput.prototype, "metrics", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=projectId" }),
        __metadata("design:type", String)
    ], ClusterInput.prototype, "projectId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=virtualClusterConfig" }),
        __metadata("design:type", virtualclusterconfig_1.VirtualClusterConfig)
    ], ClusterInput.prototype, "virtualClusterConfig", void 0);
    return ClusterInput;
}(utils_1.SpeakeasyBase));
exports.ClusterInput = ClusterInput;
