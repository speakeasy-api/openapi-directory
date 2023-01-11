"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchStatusEnum = void 0;
var BatchStatusEnum;
(function (BatchStatusEnum) {
    BatchStatusEnum["Open"] = "open";
    BatchStatusEnum["Queued"] = "queued";
    BatchStatusEnum["Processing"] = "processing";
    BatchStatusEnum["Completed"] = "completed";
    BatchStatusEnum["CompletedWithErrors"] = "completed_with_errors";
    BatchStatusEnum["Archived"] = "archived";
    BatchStatusEnum["Notifying"] = "notifying";
    BatchStatusEnum["Invalid"] = "invalid";
})(BatchStatusEnum = exports.BatchStatusEnum || (exports.BatchStatusEnum = {}));
