"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowRunStatusEnum = void 0;
var WorkflowRunStatusEnum;
(function (WorkflowRunStatusEnum) {
    WorkflowRunStatusEnum["Completed"] = "completed";
    WorkflowRunStatusEnum["ActionRequired"] = "action_required";
    WorkflowRunStatusEnum["Cancelled"] = "cancelled";
    WorkflowRunStatusEnum["Failure"] = "failure";
    WorkflowRunStatusEnum["Neutral"] = "neutral";
    WorkflowRunStatusEnum["Skipped"] = "skipped";
    WorkflowRunStatusEnum["Stale"] = "stale";
    WorkflowRunStatusEnum["Success"] = "success";
    WorkflowRunStatusEnum["TimedOut"] = "timed_out";
    WorkflowRunStatusEnum["InProgress"] = "in_progress";
    WorkflowRunStatusEnum["Queued"] = "queued";
    WorkflowRunStatusEnum["Requested"] = "requested";
    WorkflowRunStatusEnum["Waiting"] = "waiting";
})(WorkflowRunStatusEnum = exports.WorkflowRunStatusEnum || (exports.WorkflowRunStatusEnum = {}));
