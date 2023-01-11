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
var hadoopjob_1 = require("./hadoopjob");
var hivejob_1 = require("./hivejob");
var pigjob_1 = require("./pigjob");
var jobplacement_1 = require("./jobplacement");
var prestojob_1 = require("./prestojob");
var pysparkjob_1 = require("./pysparkjob");
var jobreference_1 = require("./jobreference");
var jobscheduling_1 = require("./jobscheduling");
var sparkjob_1 = require("./sparkjob");
var sparkrjob_1 = require("./sparkrjob");
var sparksqljob_1 = require("./sparksqljob");
var jobstatus_1 = require("./jobstatus");
var trinojob_1 = require("./trinojob");
var yarnapplication_1 = require("./yarnapplication");
var jobplacement_2 = require("./jobplacement");
// Job
/**
 * A Dataproc job resource.
**/
var Job = /** @class */ (function (_super) {
    __extends(Job, _super);
    function Job() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=done" }),
        __metadata("design:type", Boolean)
    ], Job.prototype, "done", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=driverControlFilesUri" }),
        __metadata("design:type", String)
    ], Job.prototype, "driverControlFilesUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=driverOutputResourceUri" }),
        __metadata("design:type", String)
    ], Job.prototype, "driverOutputResourceUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hadoopJob" }),
        __metadata("design:type", hadoopjob_1.HadoopJob)
    ], Job.prototype, "hadoopJob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hiveJob" }),
        __metadata("design:type", hivejob_1.HiveJob)
    ], Job.prototype, "hiveJob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jobUuid" }),
        __metadata("design:type", String)
    ], Job.prototype, "jobUuid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], Job.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pigJob" }),
        __metadata("design:type", pigjob_1.PigJob)
    ], Job.prototype, "pigJob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=placement" }),
        __metadata("design:type", jobplacement_1.JobPlacement)
    ], Job.prototype, "placement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prestoJob" }),
        __metadata("design:type", prestojob_1.PrestoJob)
    ], Job.prototype, "prestoJob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pysparkJob" }),
        __metadata("design:type", pysparkjob_1.PySparkJob)
    ], Job.prototype, "pysparkJob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reference" }),
        __metadata("design:type", jobreference_1.JobReference)
    ], Job.prototype, "reference", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=scheduling" }),
        __metadata("design:type", jobscheduling_1.JobScheduling)
    ], Job.prototype, "scheduling", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sparkJob" }),
        __metadata("design:type", sparkjob_1.SparkJob)
    ], Job.prototype, "sparkJob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sparkRJob" }),
        __metadata("design:type", sparkrjob_1.SparkRJob)
    ], Job.prototype, "sparkRJob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sparkSqlJob" }),
        __metadata("design:type", sparksqljob_1.SparkSqlJob)
    ], Job.prototype, "sparkSqlJob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", jobstatus_1.JobStatus)
    ], Job.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=statusHistory", elemType: jobstatus_1.JobStatus }),
        __metadata("design:type", Array)
    ], Job.prototype, "statusHistory", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=trinoJob" }),
        __metadata("design:type", trinojob_1.TrinoJob)
    ], Job.prototype, "trinoJob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=yarnApplications", elemType: yarnapplication_1.YarnApplication }),
        __metadata("design:type", Array)
    ], Job.prototype, "yarnApplications", void 0);
    return Job;
}(utils_1.SpeakeasyBase));
exports.Job = Job;
// JobInput
/**
 * A Dataproc job resource.
**/
var JobInput = /** @class */ (function (_super) {
    __extends(JobInput, _super);
    function JobInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hadoopJob" }),
        __metadata("design:type", hadoopjob_1.HadoopJob)
    ], JobInput.prototype, "hadoopJob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hiveJob" }),
        __metadata("design:type", hivejob_1.HiveJob)
    ], JobInput.prototype, "hiveJob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], JobInput.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pigJob" }),
        __metadata("design:type", pigjob_1.PigJob)
    ], JobInput.prototype, "pigJob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=placement" }),
        __metadata("design:type", jobplacement_2.JobPlacementInput)
    ], JobInput.prototype, "placement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prestoJob" }),
        __metadata("design:type", prestojob_1.PrestoJob)
    ], JobInput.prototype, "prestoJob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pysparkJob" }),
        __metadata("design:type", pysparkjob_1.PySparkJob)
    ], JobInput.prototype, "pysparkJob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reference" }),
        __metadata("design:type", jobreference_1.JobReference)
    ], JobInput.prototype, "reference", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=scheduling" }),
        __metadata("design:type", jobscheduling_1.JobScheduling)
    ], JobInput.prototype, "scheduling", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sparkJob" }),
        __metadata("design:type", sparkjob_1.SparkJob)
    ], JobInput.prototype, "sparkJob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sparkRJob" }),
        __metadata("design:type", sparkrjob_1.SparkRJob)
    ], JobInput.prototype, "sparkRJob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sparkSqlJob" }),
        __metadata("design:type", sparksqljob_1.SparkSqlJob)
    ], JobInput.prototype, "sparkSqlJob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=trinoJob" }),
        __metadata("design:type", trinojob_1.TrinoJob)
    ], JobInput.prototype, "trinoJob", void 0);
    return JobInput;
}(utils_1.SpeakeasyBase));
exports.JobInput = JobInput;
