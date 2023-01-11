"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventTypeEnum = void 0;
var EventTypeEnum;
(function (EventTypeEnum) {
    EventTypeEnum["UserCreated"] = "user_created";
    EventTypeEnum["UserDeleted"] = "user_deleted";
    EventTypeEnum["TargetCreated"] = "target_created";
    EventTypeEnum["TargetDeleted"] = "target_deleted";
    EventTypeEnum["TargetVerified"] = "target_verified";
    EventTypeEnum["TargetVerificationFailed"] = "target_verification_failed";
    EventTypeEnum["ScanStarted"] = "scan_started";
    EventTypeEnum["ScanCanceled"] = "scan_canceled";
    EventTypeEnum["ScanCompleted"] = "scan_completed";
    EventTypeEnum["ScanFailed"] = "scan_failed";
    EventTypeEnum["FindingDetected"] = "finding_detected";
    EventTypeEnum["FindingFixed"] = "finding_fixed";
})(EventTypeEnum = exports.EventTypeEnum || (exports.EventTypeEnum = {}));
