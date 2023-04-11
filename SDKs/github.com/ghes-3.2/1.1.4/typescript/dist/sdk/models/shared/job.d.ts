import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The outcome of the job.
 */
export declare enum JobConclusionEnum {
    Success = "success",
    Failure = "failure",
    Neutral = "neutral",
    Cancelled = "cancelled",
    Skipped = "skipped",
    TimedOut = "timed_out",
    ActionRequired = "action_required"
}
/**
 * The phase of the lifecycle that the job is currently in.
 */
export declare enum JobStatusEnum {
    Queued = "queued",
    InProgress = "in_progress",
    Completed = "completed"
}
/**
 * The phase of the lifecycle that the job is currently in.
 */
export declare enum JobStepsStatusEnum {
    Queued = "queued",
    InProgress = "in_progress",
    Completed = "completed"
}
export declare class JobSteps extends SpeakeasyBase {
    /**
     * The time that the job finished, in ISO 8601 format.
     */
    completedAt?: Date;
    /**
     * The outcome of the job.
     */
    conclusion: string;
    /**
     * The name of the job.
     */
    name: string;
    number: number;
    /**
     * The time that the step started, in ISO 8601 format.
     */
    startedAt?: Date;
    /**
     * The phase of the lifecycle that the job is currently in.
     */
    status: JobStepsStatusEnum;
}
/**
 * Information of a job execution in a workflow run
 */
export declare class Job extends SpeakeasyBase {
    checkRunUrl: string;
    /**
     * The time that the job finished, in ISO 8601 format.
     */
    completedAt: Date;
    /**
     * The outcome of the job.
     */
    conclusion: JobConclusionEnum;
    /**
     * The SHA of the commit that is being run.
     */
    headSha: string;
    htmlUrl: string;
    /**
     * The id of the job.
     */
    id: number;
    /**
     * The name of the job.
     */
    name: string;
    nodeId: string;
    /**
     * The id of the associated workflow run.
     */
    runId: number;
    runUrl: string;
    /**
     * The time that the job started, in ISO 8601 format.
     */
    startedAt: Date;
    /**
     * The phase of the lifecycle that the job is currently in.
     */
    status: JobStatusEnum;
    /**
     * Steps in this job.
     */
    steps?: JobSteps[];
    url: string;
}
