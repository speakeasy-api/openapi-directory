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
exports.Instance = exports.InstanceInput = exports.InstanceStateEnum = exports.InstanceDisabledReasonEnum = exports.InstanceTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var accelerator_1 = require("./accelerator");
var version_1 = require("./version");
var cryptokeyconfig_1 = require("./cryptokeyconfig");
var eventpublishconfig_1 = require("./eventpublishconfig");
var networkconfig_1 = require("./networkconfig");
var InstanceTypeEnum;
(function (InstanceTypeEnum) {
    InstanceTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    InstanceTypeEnum["Basic"] = "BASIC";
    InstanceTypeEnum["Enterprise"] = "ENTERPRISE";
    InstanceTypeEnum["Developer"] = "DEVELOPER";
})(InstanceTypeEnum = exports.InstanceTypeEnum || (exports.InstanceTypeEnum = {}));
var InstanceDisabledReasonEnum;
(function (InstanceDisabledReasonEnum) {
    InstanceDisabledReasonEnum["DisabledReasonUnspecified"] = "DISABLED_REASON_UNSPECIFIED";
    InstanceDisabledReasonEnum["KmsKeyIssue"] = "KMS_KEY_ISSUE";
})(InstanceDisabledReasonEnum = exports.InstanceDisabledReasonEnum || (exports.InstanceDisabledReasonEnum = {}));
var InstanceStateEnum;
(function (InstanceStateEnum) {
    InstanceStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    InstanceStateEnum["Creating"] = "CREATING";
    InstanceStateEnum["Active"] = "ACTIVE";
    InstanceStateEnum["Failed"] = "FAILED";
    InstanceStateEnum["Deleting"] = "DELETING";
    InstanceStateEnum["Upgrading"] = "UPGRADING";
    InstanceStateEnum["Restarting"] = "RESTARTING";
    InstanceStateEnum["Updating"] = "UPDATING";
    InstanceStateEnum["AutoUpdating"] = "AUTO_UPDATING";
    InstanceStateEnum["AutoUpgrading"] = "AUTO_UPGRADING";
    InstanceStateEnum["Disabled"] = "DISABLED";
})(InstanceStateEnum = exports.InstanceStateEnum || (exports.InstanceStateEnum = {}));
// InstanceInput
/**
 * Represents a Data Fusion instance.
**/
var InstanceInput = /** @class */ (function (_super) {
    __extends(InstanceInput, _super);
    function InstanceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accelerators", elemType: accelerator_1.Accelerator }),
        __metadata("design:type", Array)
    ], InstanceInput.prototype, "accelerators", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=availableVersion", elemType: version_1.Version }),
        __metadata("design:type", Array)
    ], InstanceInput.prototype, "availableVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cryptoKeyConfig" }),
        __metadata("design:type", cryptokeyconfig_1.CryptoKeyConfig)
    ], InstanceInput.prototype, "cryptoKeyConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dataprocServiceAccount" }),
        __metadata("design:type", String)
    ], InstanceInput.prototype, "dataprocServiceAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], InstanceInput.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], InstanceInput.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enableRbac" }),
        __metadata("design:type", Boolean)
    ], InstanceInput.prototype, "enableRbac", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enableStackdriverLogging" }),
        __metadata("design:type", Boolean)
    ], InstanceInput.prototype, "enableStackdriverLogging", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enableStackdriverMonitoring" }),
        __metadata("design:type", Boolean)
    ], InstanceInput.prototype, "enableStackdriverMonitoring", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=eventPublishConfig" }),
        __metadata("design:type", eventpublishconfig_1.EventPublishConfig)
    ], InstanceInput.prototype, "eventPublishConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], InstanceInput.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=networkConfig" }),
        __metadata("design:type", networkconfig_1.NetworkConfig)
    ], InstanceInput.prototype, "networkConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Object)
    ], InstanceInput.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=privateInstance" }),
        __metadata("design:type", Boolean)
    ], InstanceInput.prototype, "privateInstance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], InstanceInput.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], InstanceInput.prototype, "version", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zone" }),
        __metadata("design:type", String)
    ], InstanceInput.prototype, "zone", void 0);
    return InstanceInput;
}(utils_1.SpeakeasyBase));
exports.InstanceInput = InstanceInput;
// Instance
/**
 * Represents a Data Fusion instance.
**/
var Instance = /** @class */ (function (_super) {
    __extends(Instance, _super);
    function Instance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accelerators", elemType: accelerator_1.Accelerator }),
        __metadata("design:type", Array)
    ], Instance.prototype, "accelerators", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=apiEndpoint" }),
        __metadata("design:type", String)
    ], Instance.prototype, "apiEndpoint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=availableVersion", elemType: version_1.Version }),
        __metadata("design:type", Array)
    ], Instance.prototype, "availableVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Instance.prototype, "createTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cryptoKeyConfig" }),
        __metadata("design:type", cryptokeyconfig_1.CryptoKeyConfig)
    ], Instance.prototype, "cryptoKeyConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dataprocServiceAccount" }),
        __metadata("design:type", String)
    ], Instance.prototype, "dataprocServiceAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Instance.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disabledReason" }),
        __metadata("design:type", Array)
    ], Instance.prototype, "disabledReason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Instance.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enableRbac" }),
        __metadata("design:type", Boolean)
    ], Instance.prototype, "enableRbac", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enableStackdriverLogging" }),
        __metadata("design:type", Boolean)
    ], Instance.prototype, "enableStackdriverLogging", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enableStackdriverMonitoring" }),
        __metadata("design:type", Boolean)
    ], Instance.prototype, "enableStackdriverMonitoring", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=eventPublishConfig" }),
        __metadata("design:type", eventpublishconfig_1.EventPublishConfig)
    ], Instance.prototype, "eventPublishConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gcsBucket" }),
        __metadata("design:type", String)
    ], Instance.prototype, "gcsBucket", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], Instance.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Instance.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=networkConfig" }),
        __metadata("design:type", networkconfig_1.NetworkConfig)
    ], Instance.prototype, "networkConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Object)
    ], Instance.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=p4ServiceAccount" }),
        __metadata("design:type", String)
    ], Instance.prototype, "p4ServiceAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=privateInstance" }),
        __metadata("design:type", Boolean)
    ], Instance.prototype, "privateInstance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serviceAccount" }),
        __metadata("design:type", String)
    ], Instance.prototype, "serviceAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serviceEndpoint" }),
        __metadata("design:type", String)
    ], Instance.prototype, "serviceEndpoint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Instance.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stateMessage" }),
        __metadata("design:type", String)
    ], Instance.prototype, "stateMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tenantProjectId" }),
        __metadata("design:type", String)
    ], Instance.prototype, "tenantProjectId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Instance.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Instance.prototype, "updateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], Instance.prototype, "version", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zone" }),
        __metadata("design:type", String)
    ], Instance.prototype, "zone", void 0);
    return Instance;
}(utils_1.SpeakeasyBase));
exports.Instance = Instance;
