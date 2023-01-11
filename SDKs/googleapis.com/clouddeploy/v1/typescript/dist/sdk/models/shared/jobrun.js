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
exports.JobRun = exports.JobRunStateEnum = void 0;
var utils_1 = require("../../../internal/utils");
var deployjobrun_1 = require("./deployjobrun");
var verifyjobrun_1 = require("./verifyjobrun");
var JobRunStateEnum;
(function (JobRunStateEnum) {
    JobRunStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    JobRunStateEnum["InProgress"] = "IN_PROGRESS";
    JobRunStateEnum["Succeeded"] = "SUCCEEDED";
    JobRunStateEnum["Failed"] = "FAILED";
})(JobRunStateEnum = exports.JobRunStateEnum || (exports.JobRunStateEnum = {}));
// JobRun
/**
 * A `JobRun` resource in the Google Cloud Deploy API. A `JobRun` contains information of a single `Rollout` job evaluation.
**/
var JobRun = /** @class */ (function (_super) {
    __extends(JobRun, _super);
    function JobRun() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], JobRun.prototype, "createTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deployJobRun" }),
        __metadata("design:type", deployjobrun_1.DeployJobRun)
    ], JobRun.prototype, "deployJobRun", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], JobRun.prototype, "endTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], JobRun.prototype, "etag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jobId" }),
        __metadata("design:type", String)
    ], JobRun.prototype, "jobId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], JobRun.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phaseId" }),
        __metadata("design:type", String)
    ], JobRun.prototype, "phaseId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], JobRun.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], JobRun.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], JobRun.prototype, "uid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=verifyJobRun" }),
        __metadata("design:type", verifyjobrun_1.VerifyJobRun)
    ], JobRun.prototype, "verifyJobRun", void 0);
    return JobRun;
}(utils_1.SpeakeasyBase));
exports.JobRun = JobRun;
