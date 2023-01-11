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
exports.JobInput = exports.Job = void 0;
var utils_1 = require("../../../internal/utils");
var allocationpolicy_1 = require("./allocationpolicy");
var logspolicy_1 = require("./logspolicy");
var jobnotification_1 = require("./jobnotification");
var jobstatus_1 = require("./jobstatus");
var taskgroup_1 = require("./taskgroup");
var taskgroup_2 = require("./taskgroup");
// Job
/**
 * The Cloud Batch Job description.
**/
var Job = /** @class */ (function (_super) {
    __extends(Job, _super);
    function Job() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allocationPolicy" }),
        __metadata("design:type", allocationpolicy_1.AllocationPolicy)
    ], Job.prototype, "allocationPolicy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Job.prototype, "createTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], Job.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=logsPolicy" }),
        __metadata("design:type", logspolicy_1.LogsPolicy)
    ], Job.prototype, "logsPolicy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Job.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notifications", elemType: jobnotification_1.JobNotification }),
        __metadata("design:type", Array)
    ], Job.prototype, "notifications", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=priority" }),
        __metadata("design:type", String)
    ], Job.prototype, "priority", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", jobstatus_1.JobStatus)
    ], Job.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taskGroups", elemType: taskgroup_1.TaskGroup }),
        __metadata("design:type", Array)
    ], Job.prototype, "taskGroups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], Job.prototype, "uid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Job.prototype, "updateTime", void 0);
    return Job;
}(utils_1.SpeakeasyBase));
exports.Job = Job;
// JobInput
/**
 * The Cloud Batch Job description.
**/
var JobInput = /** @class */ (function (_super) {
    __extends(JobInput, _super);
    function JobInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allocationPolicy" }),
        __metadata("design:type", allocationpolicy_1.AllocationPolicy)
    ], JobInput.prototype, "allocationPolicy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], JobInput.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=logsPolicy" }),
        __metadata("design:type", logspolicy_1.LogsPolicy)
    ], JobInput.prototype, "logsPolicy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notifications", elemType: jobnotification_1.JobNotification }),
        __metadata("design:type", Array)
    ], JobInput.prototype, "notifications", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=priority" }),
        __metadata("design:type", String)
    ], JobInput.prototype, "priority", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", jobstatus_1.JobStatus)
    ], JobInput.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taskGroups", elemType: taskgroup_2.TaskGroupInput }),
        __metadata("design:type", Array)
    ], JobInput.prototype, "taskGroups", void 0);
    return JobInput;
}(utils_1.SpeakeasyBase));
exports.JobInput = JobInput;
