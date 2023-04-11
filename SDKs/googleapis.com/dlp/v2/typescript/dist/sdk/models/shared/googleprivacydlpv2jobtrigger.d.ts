import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Error } from "./googleprivacydlpv2error";
import { GooglePrivacyDlpV2InspectJobConfig } from "./googleprivacydlpv2inspectjobconfig";
import { GooglePrivacyDlpV2Trigger } from "./googleprivacydlpv2trigger";
/**
 * Required. A status for this trigger.
 */
export declare enum GooglePrivacyDlpV2JobTriggerStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    Healthy = "HEALTHY",
    Paused = "PAUSED",
    Cancelled = "CANCELLED"
}
/**
 * Contains a configuration to make dlp api calls on a repeating basis. See https://cloud.google.com/dlp/docs/concepts-job-triggers to learn more.
 */
export declare class GooglePrivacyDlpV2JobTrigger extends SpeakeasyBase {
    /**
     * Output only. The creation timestamp of a triggeredJob.
     */
    createTime?: string;
    /**
     * User provided description (max 256 chars)
     */
    description?: string;
    /**
     * Display name (max 100 chars)
     */
    displayName?: string;
    /**
     * Output only. A stream of errors encountered when the trigger was activated. Repeated errors may result in the JobTrigger automatically being paused. Will return the last 100 errors. Whenever the JobTrigger is modified this list will be cleared.
     */
    errors?: GooglePrivacyDlpV2Error[];
    /**
     * Controls what and how to inspect for findings.
     */
    inspectJob?: GooglePrivacyDlpV2InspectJobConfig;
    /**
     * Output only. The timestamp of the last time this trigger executed.
     */
    lastRunTime?: string;
    /**
     * Unique resource name for the triggeredJob, assigned by the service when the triggeredJob is created, for example `projects/dlp-test-project/jobTriggers/53234423`.
     */
    name?: string;
    /**
     * Required. A status for this trigger.
     */
    status?: GooglePrivacyDlpV2JobTriggerStatusEnum;
    /**
     * A list of triggers which will be OR'ed together. Only one in the list needs to trigger for a job to be started. The list may contain only a single Schedule trigger and must have at least one object.
     */
    triggers?: GooglePrivacyDlpV2Trigger[];
    /**
     * Output only. The last update timestamp of a triggeredJob.
     */
    updateTime?: string;
}
/**
 * Contains a configuration to make dlp api calls on a repeating basis. See https://cloud.google.com/dlp/docs/concepts-job-triggers to learn more.
 */
export declare class GooglePrivacyDlpV2JobTriggerInput extends SpeakeasyBase {
    /**
     * User provided description (max 256 chars)
     */
    description?: string;
    /**
     * Display name (max 100 chars)
     */
    displayName?: string;
    /**
     * Controls what and how to inspect for findings.
     */
    inspectJob?: GooglePrivacyDlpV2InspectJobConfig;
    /**
     * Unique resource name for the triggeredJob, assigned by the service when the triggeredJob is created, for example `projects/dlp-test-project/jobTriggers/53234423`.
     */
    name?: string;
    /**
     * Required. A status for this trigger.
     */
    status?: GooglePrivacyDlpV2JobTriggerStatusEnum;
    /**
     * A list of triggers which will be OR'ed together. Only one in the list needs to trigger for a job to be started. The list may contain only a single Schedule trigger and must have at least one object.
     */
    triggers?: GooglePrivacyDlpV2Trigger[];
}
