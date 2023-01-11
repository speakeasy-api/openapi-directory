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
exports.OrderedJob = void 0;
var utils_1 = require("../../../internal/utils");
var hadoopjob_1 = require("./hadoopjob");
var hivejob_1 = require("./hivejob");
var pigjob_1 = require("./pigjob");
var prestojob_1 = require("./prestojob");
var pysparkjob_1 = require("./pysparkjob");
var jobscheduling_1 = require("./jobscheduling");
var sparkjob_1 = require("./sparkjob");
var sparkrjob_1 = require("./sparkrjob");
var sparksqljob_1 = require("./sparksqljob");
var trinojob_1 = require("./trinojob");
// OrderedJob
/**
 * A job executed by the workflow.
**/
var OrderedJob = /** @class */ (function (_super) {
    __extends(OrderedJob, _super);
    function OrderedJob() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hadoopJob" }),
        __metadata("design:type", hadoopjob_1.HadoopJob)
    ], OrderedJob.prototype, "hadoopJob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hiveJob" }),
        __metadata("design:type", hivejob_1.HiveJob)
    ], OrderedJob.prototype, "hiveJob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], OrderedJob.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pigJob" }),
        __metadata("design:type", pigjob_1.PigJob)
    ], OrderedJob.prototype, "pigJob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prerequisiteStepIds" }),
        __metadata("design:type", Array)
    ], OrderedJob.prototype, "prerequisiteStepIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prestoJob" }),
        __metadata("design:type", prestojob_1.PrestoJob)
    ], OrderedJob.prototype, "prestoJob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pysparkJob" }),
        __metadata("design:type", pysparkjob_1.PySparkJob)
    ], OrderedJob.prototype, "pysparkJob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=scheduling" }),
        __metadata("design:type", jobscheduling_1.JobScheduling)
    ], OrderedJob.prototype, "scheduling", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sparkJob" }),
        __metadata("design:type", sparkjob_1.SparkJob)
    ], OrderedJob.prototype, "sparkJob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sparkRJob" }),
        __metadata("design:type", sparkrjob_1.SparkRJob)
    ], OrderedJob.prototype, "sparkRJob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sparkSqlJob" }),
        __metadata("design:type", sparksqljob_1.SparkSqlJob)
    ], OrderedJob.prototype, "sparkSqlJob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stepId" }),
        __metadata("design:type", String)
    ], OrderedJob.prototype, "stepId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=trinoJob" }),
        __metadata("design:type", trinojob_1.TrinoJob)
    ], OrderedJob.prototype, "trinoJob", void 0);
    return OrderedJob;
}(utils_1.SpeakeasyBase));
exports.OrderedJob = OrderedJob;
