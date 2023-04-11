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
     * Labels for the workflow job. Specified by the "runs_on" attribute in the action's workflow file.
     */
    labels: string[];
    /**
     * The name of the job.
     */
    name: string;
    nodeId: string;
    /**
     * Attempt number of the associated workflow run, 1 for first attempt and higher if the workflow was re-run.
     */
    runAttempt?: number;
    /**
     * The id of the associated workflow run.
     */
    runId: number;
    runUrl: string;
    /**
     * The ID of the runner group to which this job has been assigned. (If a runner hasn't yet been assigned, this will be null.)
     */
    runnerGroupId: number;
    /**
     * The name of the runner group to which this job has been assigned. (If a runner hasn't yet been assigned, this will be null.)
     */
    runnerGroupName: string;
    /**
     * The ID of the runner to which this job has been assigned. (If a runner hasn't yet been assigned, this will be null.)
     */
    runnerId: number;
    /**
     * The name of the runner to which this job has been assigned. (If a runner hasn't yet been assigned, this will be null.)
     */
    runnerName: string;
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
