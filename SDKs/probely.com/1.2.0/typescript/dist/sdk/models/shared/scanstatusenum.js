"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScanStatusEnum = void 0;
var ScanStatusEnum;
(function (ScanStatusEnum) {
    ScanStatusEnum["Queued"] = "queued";
    ScanStatusEnum["Started"] = "started";
    ScanStatusEnum["UnderReview"] = "under_review";
    ScanStatusEnum["Completed"] = "completed";
    ScanStatusEnum["CompletedWithErrors"] = "completed_with_errors";
    ScanStatusEnum["Failed"] = "failed";
    ScanStatusEnum["Canceled"] = "canceled";
    ScanStatusEnum["Canceling"] = "canceling";
})(ScanStatusEnum = exports.ScanStatusEnum || (exports.ScanStatusEnum = {}));
