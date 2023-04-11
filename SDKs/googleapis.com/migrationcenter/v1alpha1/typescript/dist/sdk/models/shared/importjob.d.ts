import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionReport } from "./executionreport";
import { GCSPayloadInfo } from "./gcspayloadinfo";
import { InlinePayloadInfo } from "./inlinepayloadinfo";
import { ValidationReport } from "./validationreport";
/**
 * Output only. The state of the import job.
 */
export declare enum ImportJobStateEnum {
    ImportJobStateUnspecified = "IMPORT_JOB_STATE_UNSPECIFIED",
    ImportJobStatePending = "IMPORT_JOB_STATE_PENDING",
    ImportJobStateRunning = "IMPORT_JOB_STATE_RUNNING",
    ImportJobStateCompleted = "IMPORT_JOB_STATE_COMPLETED",
    ImportJobStateFailed = "IMPORT_JOB_STATE_FAILED",
    ImportJobStateValidating = "IMPORT_JOB_STATE_VALIDATING",
    ImportJobStateFailedValidation = "IMPORT_JOB_STATE_FAILED_VALIDATION",
    ImportJobStateReady = "IMPORT_JOB_STATE_READY"
}
/**
 * A resource that represents the background job that imports asset frames.
 */
export declare class ImportJob extends SpeakeasyBase {
    /**
     * Required. Reference to a source.
     */
    assetSource?: string;
    /**
     * Output only. The timestamp when the import job was completed.
     */
    completeTime?: string;
    /**
     * Output only. The timestamp when the import job was created.
     */
    createTime?: string;
    /**
     * User-friendly display name. Maximum length is 63 characters.
     */
    displayName?: string;
    /**
     * A resource that reports result of the import job execution.
     */
    executionReport?: ExecutionReport;
    /**
     * A resource that represents a payload hosted on Google Cloud Storage.
     */
    gcsPayload?: GCSPayloadInfo;
    /**
     * A resource that represents the inline import job payload.
     */
    inlinePayload?: InlinePayloadInfo;
    /**
     * Labels as key value pairs.
     */
    labels?: Record<string, string>;
    /**
     * Output only. The full name of the import job.
     */
    name?: string;
    /**
     * Output only. The state of the import job.
     */
    state?: ImportJobStateEnum;
    /**
     * Output only. The timestamp when the import job was last updated.
     */
    updateTime?: string;
    /**
     * A resource that aggregates errors across import job files.
     */
    validationReport?: ValidationReport;
}
/**
 * A resource that represents the background job that imports asset frames.
 */
export declare class ImportJobInput extends SpeakeasyBase {
    /**
     * Required. Reference to a source.
     */
    assetSource?: string;
    /**
     * User-friendly display name. Maximum length is 63 characters.
     */
    displayName?: string;
    /**
     * A resource that reports result of the import job execution.
     */
    executionReport?: ExecutionReport;
    /**
     * A resource that represents a payload hosted on Google Cloud Storage.
     */
    gcsPayload?: GCSPayloadInfo;
    /**
     * A resource that represents the inline import job payload.
     */
    inlinePayload?: InlinePayloadInfo;
    /**
     * Labels as key value pairs.
     */
    labels?: Record<string, string>;
    /**
     * A resource that aggregates errors across import job files.
     */
    validationReport?: ValidationReport;
}
