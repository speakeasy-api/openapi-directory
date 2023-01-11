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
exports.ClusterConfigInput = exports.ClusterConfig = void 0;
var utils_1 = require("../../../internal/utils");
var autoscalingconfig_1 = require("./autoscalingconfig");
var dataprocmetricconfig_1 = require("./dataprocmetricconfig");
var encryptionconfig_1 = require("./encryptionconfig");
var endpointconfig_1 = require("./endpointconfig");
var gceclusterconfig_1 = require("./gceclusterconfig");
var gkeclusterconfig_1 = require("./gkeclusterconfig");
var nodeinitializationaction_1 = require("./nodeinitializationaction");
var lifecycleconfig_1 = require("./lifecycleconfig");
var instancegroupconfig_1 = require("./instancegroupconfig");
var metastoreconfig_1 = require("./metastoreconfig");
var securityconfig_1 = require("./securityconfig");
var softwareconfig_1 = require("./softwareconfig");
var endpointconfig_2 = require("./endpointconfig");
var lifecycleconfig_2 = require("./lifecycleconfig");
var instancegroupconfig_2 = require("./instancegroupconfig");
// ClusterConfig
/**
 * The cluster config.
**/
var ClusterConfig = /** @class */ (function (_super) {
    __extends(ClusterConfig, _super);
    function ClusterConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=autoscalingConfig" }),
        __metadata("design:type", autoscalingconfig_1.AutoscalingConfig)
    ], ClusterConfig.prototype, "autoscalingConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=configBucket" }),
        __metadata("design:type", String)
    ], ClusterConfig.prototype, "configBucket", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dataprocMetricConfig" }),
        __metadata("design:type", dataprocmetricconfig_1.DataprocMetricConfig)
    ], ClusterConfig.prototype, "dataprocMetricConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=encryptionConfig" }),
        __metadata("design:type", encryptionconfig_1.EncryptionConfig)
    ], ClusterConfig.prototype, "encryptionConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endpointConfig" }),
        __metadata("design:type", endpointconfig_1.EndpointConfig)
    ], ClusterConfig.prototype, "endpointConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gceClusterConfig" }),
        __metadata("design:type", gceclusterconfig_1.GceClusterConfig)
    ], ClusterConfig.prototype, "gceClusterConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gkeClusterConfig" }),
        __metadata("design:type", gkeclusterconfig_1.GkeClusterConfig)
    ], ClusterConfig.prototype, "gkeClusterConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=initializationActions", elemType: nodeinitializationaction_1.NodeInitializationAction }),
        __metadata("design:type", Array)
    ], ClusterConfig.prototype, "initializationActions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lifecycleConfig" }),
        __metadata("design:type", lifecycleconfig_1.LifecycleConfig)
    ], ClusterConfig.prototype, "lifecycleConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=masterConfig" }),
        __metadata("design:type", instancegroupconfig_1.InstanceGroupConfig)
    ], ClusterConfig.prototype, "masterConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metastoreConfig" }),
        __metadata("design:type", metastoreconfig_1.MetastoreConfig)
    ], ClusterConfig.prototype, "metastoreConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=secondaryWorkerConfig" }),
        __metadata("design:type", instancegroupconfig_1.InstanceGroupConfig)
    ], ClusterConfig.prototype, "secondaryWorkerConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=securityConfig" }),
        __metadata("design:type", securityconfig_1.SecurityConfig)
    ], ClusterConfig.prototype, "securityConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=softwareConfig" }),
        __metadata("design:type", softwareconfig_1.SoftwareConfig)
    ], ClusterConfig.prototype, "softwareConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tempBucket" }),
        __metadata("design:type", String)
    ], ClusterConfig.prototype, "tempBucket", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workerConfig" }),
        __metadata("design:type", instancegroupconfig_1.InstanceGroupConfig)
    ], ClusterConfig.prototype, "workerConfig", void 0);
    return ClusterConfig;
}(utils_1.SpeakeasyBase));
exports.ClusterConfig = ClusterConfig;
// ClusterConfigInput
/**
 * The cluster config.
**/
var ClusterConfigInput = /** @class */ (function (_super) {
    __extends(ClusterConfigInput, _super);
    function ClusterConfigInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=autoscalingConfig" }),
        __metadata("design:type", autoscalingconfig_1.AutoscalingConfig)
    ], ClusterConfigInput.prototype, "autoscalingConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=configBucket" }),
        __metadata("design:type", String)
    ], ClusterConfigInput.prototype, "configBucket", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dataprocMetricConfig" }),
        __metadata("design:type", dataprocmetricconfig_1.DataprocMetricConfig)
    ], ClusterConfigInput.prototype, "dataprocMetricConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=encryptionConfig" }),
        __metadata("design:type", encryptionconfig_1.EncryptionConfig)
    ], ClusterConfigInput.prototype, "encryptionConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endpointConfig" }),
        __metadata("design:type", endpointconfig_2.EndpointConfigInput)
    ], ClusterConfigInput.prototype, "endpointConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gceClusterConfig" }),
        __metadata("design:type", gceclusterconfig_1.GceClusterConfig)
    ], ClusterConfigInput.prototype, "gceClusterConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gkeClusterConfig" }),
        __metadata("design:type", gkeclusterconfig_1.GkeClusterConfig)
    ], ClusterConfigInput.prototype, "gkeClusterConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=initializationActions", elemType: nodeinitializationaction_1.NodeInitializationAction }),
        __metadata("design:type", Array)
    ], ClusterConfigInput.prototype, "initializationActions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lifecycleConfig" }),
        __metadata("design:type", lifecycleconfig_2.LifecycleConfigInput)
    ], ClusterConfigInput.prototype, "lifecycleConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=masterConfig" }),
        __metadata("design:type", instancegroupconfig_2.InstanceGroupConfigInput)
    ], ClusterConfigInput.prototype, "masterConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metastoreConfig" }),
        __metadata("design:type", metastoreconfig_1.MetastoreConfig)
    ], ClusterConfigInput.prototype, "metastoreConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=secondaryWorkerConfig" }),
        __metadata("design:type", instancegroupconfig_2.InstanceGroupConfigInput)
    ], ClusterConfigInput.prototype, "secondaryWorkerConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=securityConfig" }),
        __metadata("design:type", securityconfig_1.SecurityConfig)
    ], ClusterConfigInput.prototype, "securityConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=softwareConfig" }),
        __metadata("design:type", softwareconfig_1.SoftwareConfig)
    ], ClusterConfigInput.prototype, "softwareConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tempBucket" }),
        __metadata("design:type", String)
    ], ClusterConfigInput.prototype, "tempBucket", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workerConfig" }),
        __metadata("design:type", instancegroupconfig_2.InstanceGroupConfigInput)
    ], ClusterConfigInput.prototype, "workerConfig", void 0);
    return ClusterConfigInput;
}(utils_1.SpeakeasyBase));
exports.ClusterConfigInput = ClusterConfigInput;
