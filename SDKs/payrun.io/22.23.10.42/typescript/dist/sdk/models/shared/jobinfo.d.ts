import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The job infos' errors
 */
export declare class JobInfoJobInfoErrors extends SpeakeasyBase {
    error?: string[];
}
/**
 * The job infos' job status
 */
export declare enum JobInfoJobInfoJobStatusEnum {
    New = "New",
    Pending = "Pending",
    InProgress = "InProgress",
    Success = "Success",
    Failed = "Failed",
    OnHold = "OnHold"
}
export declare class JobInfoJobInfo extends SpeakeasyBase {
    /**
     * The job infos' created
     */
    created?: Date;
    /**
     * The job infos' employer key
     */
    employerKey?: string;
    /**
     * The job infos' errors
     */
    errors?: JobInfoJobInfoErrors;
    /**
     * The job infos' holding date
     */
    holdingDate?: Date;
    /**
     * The job infos' job id
     */
    jobId?: string;
    /**
     * The job infos' job status
     */
    jobStatus?: JobInfoJobInfoJobStatusEnum;
    /**
     * The job infos' job type
     */
    jobType?: string;
    /**
     * The job infos' last updated
     */
    lastUpdated?: Date;
    /**
     * The job infos' progress
     */
    progress?: number;
}
/**
 * The job info object.
 */
export declare class JobInfo extends SpeakeasyBase {
    jobInfo?: JobInfoJobInfo;
}
