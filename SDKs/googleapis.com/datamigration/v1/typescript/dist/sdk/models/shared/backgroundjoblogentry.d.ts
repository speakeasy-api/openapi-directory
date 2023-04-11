import { SpeakeasyBase } from "../../../internal/utils";
import { ApplyJobDetails } from "./applyjobdetails";
import { ConvertJobDetails } from "./convertjobdetails";
import { ImportRulesJobDetails } from "./importrulesjobdetails";
import { SeedJobDetails } from "./seedjobdetails";
/**
 * Job completion state, i.e. the final state after the job completed.
 */
export declare enum BackgroundJobLogEntryCompletionStateEnum {
    JobCompletionStateUnspecified = "JOB_COMPLETION_STATE_UNSPECIFIED",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}
/**
 * The type of job that was executed.
 */
export declare enum BackgroundJobLogEntryJobTypeEnum {
    BackgroundJobTypeUnspecified = "BACKGROUND_JOB_TYPE_UNSPECIFIED",
    BackgroundJobTypeSourceSeed = "BACKGROUND_JOB_TYPE_SOURCE_SEED",
    BackgroundJobTypeConvert = "BACKGROUND_JOB_TYPE_CONVERT",
    BackgroundJobTypeApplyDestination = "BACKGROUND_JOB_TYPE_APPLY_DESTINATION",
    BackgroundJobTypeImportRulesFile = "BACKGROUND_JOB_TYPE_IMPORT_RULES_FILE"
}
/**
 * Execution log of a background job.
 */
export declare class BackgroundJobLogEntry extends SpeakeasyBase {
    /**
     * Details regarding an Apply background job.
     */
    applyJobDetails?: ApplyJobDetails;
    /**
     * Job completion comment, such as how many entities were seeded, how many warnings were found during conversion, and similar information.
     */
    completionComment?: string;
    /**
     * Job completion state, i.e. the final state after the job completed.
     */
    completionState?: BackgroundJobLogEntryCompletionStateEnum;
    /**
     * Details regarding a Convert background job.
     */
    convertJobDetails?: ConvertJobDetails;
    /**
     * The timestamp when the background job was finished.
     */
    finishTime?: string;
    /**
     * The background job log entry ID.
     */
    id?: string;
    /**
     * Details regarding an Import Rules background job.
     */
    importRulesJobDetails?: ImportRulesJobDetails;
    /**
     * The type of job that was executed.
     */
    jobType?: BackgroundJobLogEntryJobTypeEnum;
    /**
     * Whether the client requested the conversion workspace to be committed after a successful completion of the job.
     */
    requestAutocommit?: boolean;
    /**
     * Details regarding a Seed background job.
     */
    seedJobDetails?: SeedJobDetails;
    /**
     * The timestamp when the background job was started.
     */
    startTime?: string;
}
