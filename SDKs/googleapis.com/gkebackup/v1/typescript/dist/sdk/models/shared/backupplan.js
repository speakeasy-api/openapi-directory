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
exports.BackupPlanInput = exports.BackupPlan = void 0;
var utils_1 = require("../../../internal/utils");
var backupconfig_1 = require("./backupconfig");
var schedule_1 = require("./schedule");
var retentionpolicy_1 = require("./retentionpolicy");
// BackupPlan
/**
 * Defines the configuration and scheduling for a "line" of Backups.
**/
var BackupPlan = /** @class */ (function (_super) {
    __extends(BackupPlan, _super);
    function BackupPlan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=backupConfig" }),
        __metadata("design:type", backupconfig_1.BackupConfig)
    ], BackupPlan.prototype, "backupConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=backupSchedule" }),
        __metadata("design:type", schedule_1.Schedule)
    ], BackupPlan.prototype, "backupSchedule", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cluster" }),
        __metadata("design:type", String)
    ], BackupPlan.prototype, "cluster", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], BackupPlan.prototype, "createTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deactivated" }),
        __metadata("design:type", Boolean)
    ], BackupPlan.prototype, "deactivated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], BackupPlan.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], BackupPlan.prototype, "etag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], BackupPlan.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], BackupPlan.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protectedPodCount" }),
        __metadata("design:type", Number)
    ], BackupPlan.prototype, "protectedPodCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=retentionPolicy" }),
        __metadata("design:type", retentionpolicy_1.RetentionPolicy)
    ], BackupPlan.prototype, "retentionPolicy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], BackupPlan.prototype, "uid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], BackupPlan.prototype, "updateTime", void 0);
    return BackupPlan;
}(utils_1.SpeakeasyBase));
exports.BackupPlan = BackupPlan;
// BackupPlanInput
/**
 * Defines the configuration and scheduling for a "line" of Backups.
**/
var BackupPlanInput = /** @class */ (function (_super) {
    __extends(BackupPlanInput, _super);
    function BackupPlanInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=backupConfig" }),
        __metadata("design:type", backupconfig_1.BackupConfig)
    ], BackupPlanInput.prototype, "backupConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=backupSchedule" }),
        __metadata("design:type", schedule_1.Schedule)
    ], BackupPlanInput.prototype, "backupSchedule", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cluster" }),
        __metadata("design:type", String)
    ], BackupPlanInput.prototype, "cluster", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deactivated" }),
        __metadata("design:type", Boolean)
    ], BackupPlanInput.prototype, "deactivated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], BackupPlanInput.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], BackupPlanInput.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=retentionPolicy" }),
        __metadata("design:type", retentionpolicy_1.RetentionPolicy)
    ], BackupPlanInput.prototype, "retentionPolicy", void 0);
    return BackupPlanInput;
}(utils_1.SpeakeasyBase));
exports.BackupPlanInput = BackupPlanInput;
