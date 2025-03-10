"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowRunStatusEnum = void 0;
/**
 * Returns workflow runs with the check run `status` or `conclusion` that you specify. For example, a conclusion can be `success` or a status can be `in_progress`. Only GitHub can set a status of `waiting` or `requested`.
 */
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
    WorkflowRunStatusEnum["Pending"] = "pending";
})(WorkflowRunStatusEnum = exports.WorkflowRunStatusEnum || (exports.WorkflowRunStatusEnum = {}));
