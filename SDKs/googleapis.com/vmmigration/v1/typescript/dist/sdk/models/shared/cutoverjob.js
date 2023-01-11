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
exports.CutoverJobInput = exports.CutoverJob = exports.CutoverJobStateEnum = void 0;
var utils_1 = require("../../../internal/utils");
var computeenginetargetdetails_1 = require("./computeenginetargetdetails");
var status_1 = require("./status");
var cutoverstep_1 = require("./cutoverstep");
var CutoverJobStateEnum;
(function (CutoverJobStateEnum) {
    CutoverJobStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    CutoverJobStateEnum["Pending"] = "PENDING";
    CutoverJobStateEnum["Failed"] = "FAILED";
    CutoverJobStateEnum["Succeeded"] = "SUCCEEDED";
    CutoverJobStateEnum["Cancelled"] = "CANCELLED";
    CutoverJobStateEnum["Cancelling"] = "CANCELLING";
    CutoverJobStateEnum["Active"] = "ACTIVE";
    CutoverJobStateEnum["AdaptingOs"] = "ADAPTING_OS";
})(CutoverJobStateEnum = exports.CutoverJobStateEnum || (exports.CutoverJobStateEnum = {}));
// CutoverJob
/**
 * CutoverJob message describes a cutover of a migrating VM. The CutoverJob is the operation of shutting down the VM, creating a snapshot and clonning the VM using the replicated snapshot.
**/
var CutoverJob = /** @class */ (function (_super) {
    __extends(CutoverJob, _super);
    function CutoverJob() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=computeEngineTargetDetails" }),
        __metadata("design:type", computeenginetargetdetails_1.ComputeEngineTargetDetails)
    ], CutoverJob.prototype, "computeEngineTargetDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], CutoverJob.prototype, "createTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], CutoverJob.prototype, "endTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", status_1.Status)
    ], CutoverJob.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CutoverJob.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=progressPercent" }),
        __metadata("design:type", Number)
    ], CutoverJob.prototype, "progressPercent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], CutoverJob.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stateMessage" }),
        __metadata("design:type", String)
    ], CutoverJob.prototype, "stateMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stateTime" }),
        __metadata("design:type", String)
    ], CutoverJob.prototype, "stateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=steps", elemType: cutoverstep_1.CutoverStep }),
        __metadata("design:type", Array)
    ], CutoverJob.prototype, "steps", void 0);
    return CutoverJob;
}(utils_1.SpeakeasyBase));
exports.CutoverJob = CutoverJob;
// CutoverJobInput
/**
 * CutoverJob message describes a cutover of a migrating VM. The CutoverJob is the operation of shutting down the VM, creating a snapshot and clonning the VM using the replicated snapshot.
**/
var CutoverJobInput = /** @class */ (function (_super) {
    __extends(CutoverJobInput, _super);
    function CutoverJobInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=computeEngineTargetDetails" }),
        __metadata("design:type", computeenginetargetdetails_1.ComputeEngineTargetDetails)
    ], CutoverJobInput.prototype, "computeEngineTargetDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", status_1.Status)
    ], CutoverJobInput.prototype, "error", void 0);
    return CutoverJobInput;
}(utils_1.SpeakeasyBase));
exports.CutoverJobInput = CutoverJobInput;
