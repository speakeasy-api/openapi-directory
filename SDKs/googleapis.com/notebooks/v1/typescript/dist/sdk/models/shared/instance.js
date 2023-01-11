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
exports.InstanceInput = exports.Instance = exports.InstanceStateEnum = exports.InstanceNicTypeEnum = exports.InstanceDiskEncryptionEnum = exports.InstanceDataDiskTypeEnum = exports.InstanceBootDiskTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var acceleratorconfig_1 = require("./acceleratorconfig");
var containerimage_1 = require("./containerimage");
var disk_1 = require("./disk");
var reservationaffinity_1 = require("./reservationaffinity");
var shieldedinstanceconfig_1 = require("./shieldedinstanceconfig");
var upgradehistoryentry_1 = require("./upgradehistoryentry");
var vmimage_1 = require("./vmimage");
var InstanceBootDiskTypeEnum;
(function (InstanceBootDiskTypeEnum) {
    InstanceBootDiskTypeEnum["DiskTypeUnspecified"] = "DISK_TYPE_UNSPECIFIED";
    InstanceBootDiskTypeEnum["PdStandard"] = "PD_STANDARD";
    InstanceBootDiskTypeEnum["PdSsd"] = "PD_SSD";
    InstanceBootDiskTypeEnum["PdBalanced"] = "PD_BALANCED";
    InstanceBootDiskTypeEnum["PdExtreme"] = "PD_EXTREME";
})(InstanceBootDiskTypeEnum = exports.InstanceBootDiskTypeEnum || (exports.InstanceBootDiskTypeEnum = {}));
var InstanceDataDiskTypeEnum;
(function (InstanceDataDiskTypeEnum) {
    InstanceDataDiskTypeEnum["DiskTypeUnspecified"] = "DISK_TYPE_UNSPECIFIED";
    InstanceDataDiskTypeEnum["PdStandard"] = "PD_STANDARD";
    InstanceDataDiskTypeEnum["PdSsd"] = "PD_SSD";
    InstanceDataDiskTypeEnum["PdBalanced"] = "PD_BALANCED";
    InstanceDataDiskTypeEnum["PdExtreme"] = "PD_EXTREME";
})(InstanceDataDiskTypeEnum = exports.InstanceDataDiskTypeEnum || (exports.InstanceDataDiskTypeEnum = {}));
var InstanceDiskEncryptionEnum;
(function (InstanceDiskEncryptionEnum) {
    InstanceDiskEncryptionEnum["DiskEncryptionUnspecified"] = "DISK_ENCRYPTION_UNSPECIFIED";
    InstanceDiskEncryptionEnum["Gmek"] = "GMEK";
    InstanceDiskEncryptionEnum["Cmek"] = "CMEK";
})(InstanceDiskEncryptionEnum = exports.InstanceDiskEncryptionEnum || (exports.InstanceDiskEncryptionEnum = {}));
var InstanceNicTypeEnum;
(function (InstanceNicTypeEnum) {
    InstanceNicTypeEnum["UnspecifiedNicType"] = "UNSPECIFIED_NIC_TYPE";
    InstanceNicTypeEnum["VirtioNet"] = "VIRTIO_NET";
    InstanceNicTypeEnum["Gvnic"] = "GVNIC";
})(InstanceNicTypeEnum = exports.InstanceNicTypeEnum || (exports.InstanceNicTypeEnum = {}));
var InstanceStateEnum;
(function (InstanceStateEnum) {
    InstanceStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    InstanceStateEnum["Starting"] = "STARTING";
    InstanceStateEnum["Provisioning"] = "PROVISIONING";
    InstanceStateEnum["Active"] = "ACTIVE";
    InstanceStateEnum["Stopping"] = "STOPPING";
    InstanceStateEnum["Stopped"] = "STOPPED";
    InstanceStateEnum["Deleted"] = "DELETED";
    InstanceStateEnum["Upgrading"] = "UPGRADING";
    InstanceStateEnum["Initializing"] = "INITIALIZING";
    InstanceStateEnum["Registering"] = "REGISTERING";
    InstanceStateEnum["Suspending"] = "SUSPENDING";
    InstanceStateEnum["Suspended"] = "SUSPENDED";
})(InstanceStateEnum = exports.InstanceStateEnum || (exports.InstanceStateEnum = {}));
// Instance
/**
 * The definition of a notebook instance.
**/
var Instance = /** @class */ (function (_super) {
    __extends(Instance, _super);
    function Instance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=acceleratorConfig" }),
        __metadata("design:type", acceleratorconfig_1.AcceleratorConfig)
    ], Instance.prototype, "acceleratorConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bootDiskSizeGb" }),
        __metadata("design:type", String)
    ], Instance.prototype, "bootDiskSizeGb", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bootDiskType" }),
        __metadata("design:type", String)
    ], Instance.prototype, "bootDiskType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=canIpForward" }),
        __metadata("design:type", Boolean)
    ], Instance.prototype, "canIpForward", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=containerImage" }),
        __metadata("design:type", containerimage_1.ContainerImage)
    ], Instance.prototype, "containerImage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Instance.prototype, "createTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creator" }),
        __metadata("design:type", String)
    ], Instance.prototype, "creator", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customGpuDriverPath" }),
        __metadata("design:type", String)
    ], Instance.prototype, "customGpuDriverPath", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dataDiskSizeGb" }),
        __metadata("design:type", String)
    ], Instance.prototype, "dataDiskSizeGb", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dataDiskType" }),
        __metadata("design:type", String)
    ], Instance.prototype, "dataDiskType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=diskEncryption" }),
        __metadata("design:type", String)
    ], Instance.prototype, "diskEncryption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disks", elemType: disk_1.Disk }),
        __metadata("design:type", Array)
    ], Instance.prototype, "disks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=installGpuDriver" }),
        __metadata("design:type", Boolean)
    ], Instance.prototype, "installGpuDriver", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=instanceOwners" }),
        __metadata("design:type", Array)
    ], Instance.prototype, "instanceOwners", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kmsKey" }),
        __metadata("design:type", String)
    ], Instance.prototype, "kmsKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], Instance.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=machineType" }),
        __metadata("design:type", String)
    ], Instance.prototype, "machineType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metadata" }),
        __metadata("design:type", Object)
    ], Instance.prototype, "metadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Instance.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=network" }),
        __metadata("design:type", String)
    ], Instance.prototype, "network", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nicType" }),
        __metadata("design:type", String)
    ], Instance.prototype, "nicType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=noProxyAccess" }),
        __metadata("design:type", Boolean)
    ], Instance.prototype, "noProxyAccess", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=noPublicIp" }),
        __metadata("design:type", Boolean)
    ], Instance.prototype, "noPublicIp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=noRemoveDataDisk" }),
        __metadata("design:type", Boolean)
    ], Instance.prototype, "noRemoveDataDisk", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=postStartupScript" }),
        __metadata("design:type", String)
    ], Instance.prototype, "postStartupScript", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=proxyUri" }),
        __metadata("design:type", String)
    ], Instance.prototype, "proxyUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reservationAffinity" }),
        __metadata("design:type", reservationaffinity_1.ReservationAffinity)
    ], Instance.prototype, "reservationAffinity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serviceAccount" }),
        __metadata("design:type", String)
    ], Instance.prototype, "serviceAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serviceAccountScopes" }),
        __metadata("design:type", Array)
    ], Instance.prototype, "serviceAccountScopes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shieldedInstanceConfig" }),
        __metadata("design:type", shieldedinstanceconfig_1.ShieldedInstanceConfig)
    ], Instance.prototype, "shieldedInstanceConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Instance.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subnet" }),
        __metadata("design:type", String)
    ], Instance.prototype, "subnet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], Instance.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Instance.prototype, "updateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=upgradeHistory", elemType: upgradehistoryentry_1.UpgradeHistoryEntry }),
        __metadata("design:type", Array)
    ], Instance.prototype, "upgradeHistory", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vmImage" }),
        __metadata("design:type", vmimage_1.VmImage)
    ], Instance.prototype, "vmImage", void 0);
    return Instance;
}(utils_1.SpeakeasyBase));
exports.Instance = Instance;
// InstanceInput
/**
 * The definition of a notebook instance.
**/
var InstanceInput = /** @class */ (function (_super) {
    __extends(InstanceInput, _super);
    function InstanceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=acceleratorConfig" }),
        __metadata("design:type", acceleratorconfig_1.AcceleratorConfig)
    ], InstanceInput.prototype, "acceleratorConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bootDiskSizeGb" }),
        __metadata("design:type", String)
    ], InstanceInput.prototype, "bootDiskSizeGb", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bootDiskType" }),
        __metadata("design:type", String)
    ], InstanceInput.prototype, "bootDiskType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=canIpForward" }),
        __metadata("design:type", Boolean)
    ], InstanceInput.prototype, "canIpForward", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=containerImage" }),
        __metadata("design:type", containerimage_1.ContainerImage)
    ], InstanceInput.prototype, "containerImage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customGpuDriverPath" }),
        __metadata("design:type", String)
    ], InstanceInput.prototype, "customGpuDriverPath", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dataDiskSizeGb" }),
        __metadata("design:type", String)
    ], InstanceInput.prototype, "dataDiskSizeGb", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dataDiskType" }),
        __metadata("design:type", String)
    ], InstanceInput.prototype, "dataDiskType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=diskEncryption" }),
        __metadata("design:type", String)
    ], InstanceInput.prototype, "diskEncryption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=installGpuDriver" }),
        __metadata("design:type", Boolean)
    ], InstanceInput.prototype, "installGpuDriver", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=instanceOwners" }),
        __metadata("design:type", Array)
    ], InstanceInput.prototype, "instanceOwners", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kmsKey" }),
        __metadata("design:type", String)
    ], InstanceInput.prototype, "kmsKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], InstanceInput.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=machineType" }),
        __metadata("design:type", String)
    ], InstanceInput.prototype, "machineType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metadata" }),
        __metadata("design:type", Object)
    ], InstanceInput.prototype, "metadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=network" }),
        __metadata("design:type", String)
    ], InstanceInput.prototype, "network", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nicType" }),
        __metadata("design:type", String)
    ], InstanceInput.prototype, "nicType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=noProxyAccess" }),
        __metadata("design:type", Boolean)
    ], InstanceInput.prototype, "noProxyAccess", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=noPublicIp" }),
        __metadata("design:type", Boolean)
    ], InstanceInput.prototype, "noPublicIp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=noRemoveDataDisk" }),
        __metadata("design:type", Boolean)
    ], InstanceInput.prototype, "noRemoveDataDisk", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=postStartupScript" }),
        __metadata("design:type", String)
    ], InstanceInput.prototype, "postStartupScript", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reservationAffinity" }),
        __metadata("design:type", reservationaffinity_1.ReservationAffinity)
    ], InstanceInput.prototype, "reservationAffinity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serviceAccount" }),
        __metadata("design:type", String)
    ], InstanceInput.prototype, "serviceAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serviceAccountScopes" }),
        __metadata("design:type", Array)
    ], InstanceInput.prototype, "serviceAccountScopes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shieldedInstanceConfig" }),
        __metadata("design:type", shieldedinstanceconfig_1.ShieldedInstanceConfig)
    ], InstanceInput.prototype, "shieldedInstanceConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subnet" }),
        __metadata("design:type", String)
    ], InstanceInput.prototype, "subnet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], InstanceInput.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=upgradeHistory", elemType: upgradehistoryentry_1.UpgradeHistoryEntry }),
        __metadata("design:type", Array)
    ], InstanceInput.prototype, "upgradeHistory", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vmImage" }),
        __metadata("design:type", vmimage_1.VmImage)
    ], InstanceInput.prototype, "vmImage", void 0);
    return InstanceInput;
}(utils_1.SpeakeasyBase));
exports.InstanceInput = InstanceInput;
