import { SpeakeasyBase } from "../../../internal/utils";
import { Environment, EnvironmentInput } from "./environment";
import { ExecutionStageState } from "./executionstagestate";
import { JobExecutionInfo } from "./jobexecutioninfo";
import { JobMetadata } from "./jobmetadata";
import { PipelineDescription } from "./pipelinedescription";
import { Step } from "./step";
/**
 * The current state of the job. Jobs are created in the `JOB_STATE_STOPPED` state unless otherwise specified. A job in the `JOB_STATE_RUNNING` state may asynchronously enter a terminal state. After a job has reached a terminal state, no further state updates may be made. This field may be mutated by the Cloud Dataflow service; callers cannot mutate it.
 */
export declare enum JobCurrentStateEnum {
    JobStateUnknown = "JOB_STATE_UNKNOWN",
    JobStateStopped = "JOB_STATE_STOPPED",
    JobStateRunning = "JOB_STATE_RUNNING",
    JobStateDone = "JOB_STATE_DONE",
    JobStateFailed = "JOB_STATE_FAILED",
    JobStateCancelled = "JOB_STATE_CANCELLED",
    JobStateUpdated = "JOB_STATE_UPDATED",
    JobStateDraining = "JOB_STATE_DRAINING",
    JobStateDrained = "JOB_STATE_DRAINED",
    JobStatePending = "JOB_STATE_PENDING",
    JobStateCancelling = "JOB_STATE_CANCELLING",
    JobStateQueued = "JOB_STATE_QUEUED",
    JobStateResourceCleaningUp = "JOB_STATE_RESOURCE_CLEANING_UP"
}
/**
 * The job's requested state. `UpdateJob` may be used to switch between the `JOB_STATE_STOPPED` and `JOB_STATE_RUNNING` states, by setting requested_state. `UpdateJob` may also be used to directly set a job's requested state to `JOB_STATE_CANCELLED` or `JOB_STATE_DONE`, irrevocably terminating the job if it has not already reached a terminal state.
 */
export declare enum JobRequestedStateEnum {
    JobStateUnknown = "JOB_STATE_UNKNOWN",
    JobStateStopped = "JOB_STATE_STOPPED",
    JobStateRunning = "JOB_STATE_RUNNING",
    JobStateDone = "JOB_STATE_DONE",
    JobStateFailed = "JOB_STATE_FAILED",
    JobStateCancelled = "JOB_STATE_CANCELLED",
    JobStateUpdated = "JOB_STATE_UPDATED",
    JobStateDraining = "JOB_STATE_DRAINING",
    JobStateDrained = "JOB_STATE_DRAINED",
    JobStatePending = "JOB_STATE_PENDING",
    JobStateCancelling = "JOB_STATE_CANCELLING",
    JobStateQueued = "JOB_STATE_QUEUED",
    JobStateResourceCleaningUp = "JOB_STATE_RESOURCE_CLEANING_UP"
}
/**
 * The type of Cloud Dataflow job.
 */
export declare enum JobTypeEnum {
    JobTypeUnknown = "JOB_TYPE_UNKNOWN",
    JobTypeBatch = "JOB_TYPE_BATCH",
    JobTypeStreaming = "JOB_TYPE_STREAMING"
}
/**
 * Defines a job to be run by the Cloud Dataflow service. Do not enter confidential information when you supply string values using the API.
 */
export declare class Job extends SpeakeasyBase {
    /**
     * The client's unique identifier of the job, re-used across retried attempts. If this field is set, the service will ensure its uniqueness. The request to create a job will fail if the service has knowledge of a previously submitted job with the same client's ID and job name. The caller may use this field to ensure idempotence of job creation across retried attempts to create a job. By default, the field is empty and, in that case, the service ignores it.
     */
    clientRequestId?: string;
    /**
     * The timestamp when the job was initially created. Immutable and set by the Cloud Dataflow service.
     */
    createTime?: string;
    /**
     * If this is specified, the job's initial state is populated from the given snapshot.
     */
    createdFromSnapshotId?: string;
    /**
     * The current state of the job. Jobs are created in the `JOB_STATE_STOPPED` state unless otherwise specified. A job in the `JOB_STATE_RUNNING` state may asynchronously enter a terminal state. After a job has reached a terminal state, no further state updates may be made. This field may be mutated by the Cloud Dataflow service; callers cannot mutate it.
     */
    currentState?: JobCurrentStateEnum;
    /**
     * The timestamp associated with the current state.
     */
    currentStateTime?: string;
    /**
     * Describes the environment in which a Dataflow Job runs.
     */
    environment?: Environment;
    /**
     * Additional information about how a Cloud Dataflow job will be executed that isn't contained in the submitted job.
     */
    executionInfo?: JobExecutionInfo;
    /**
     * The unique ID of this job. This field is set by the Cloud Dataflow service when the Job is created, and is immutable for the life of the job.
     */
    id?: string;
    /**
     * Metadata available primarily for filtering jobs. Will be included in the ListJob response and Job SUMMARY view.
     */
    jobMetadata?: JobMetadata;
    /**
     * User-defined labels for this job. The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: * Keys must conform to regexp: \p{Ll}\p{Lo}{0,62} * Values must conform to regexp: [\p{Ll}\p{Lo}\p{N}_-]{0,63} * Both keys and values are additionally constrained to be <= 128 bytes in size.
     */
    labels?: Record<string, string>;
    /**
     * The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.
     */
    location?: string;
    /**
     * The user-specified Cloud Dataflow job name. Only one Job with a given name can exist in a project within one region at any given time. Jobs in different regions can have the same name. If a caller attempts to create a Job with the same name as an already-existing Job, the attempt returns the existing Job. The name must match the regular expression `[a-z]([-a-z0-9]{0,1022}[a-z0-9])?`
     */
    name?: string;
    /**
     * A descriptive representation of submitted pipeline as well as the executed form. This data is provided by the Dataflow service for ease of visualizing the pipeline and interpreting Dataflow provided metrics.
     */
    pipelineDescription?: PipelineDescription;
    /**
     * The ID of the Cloud Platform project that the job belongs to.
     */
    projectId?: string;
    /**
     * If this job is an update of an existing job, this field is the job ID of the job it replaced. When sending a `CreateJobRequest`, you can update a job by specifying it here. The job named here is stopped, and its intermediate state is transferred to this job.
     */
    replaceJobId?: string;
    /**
     * If another job is an update of this job (and thus, this job is in `JOB_STATE_UPDATED`), this field contains the ID of that job.
     */
    replacedByJobId?: string;
    /**
     * The job's requested state. `UpdateJob` may be used to switch between the `JOB_STATE_STOPPED` and `JOB_STATE_RUNNING` states, by setting requested_state. `UpdateJob` may also be used to directly set a job's requested state to `JOB_STATE_CANCELLED` or `JOB_STATE_DONE`, irrevocably terminating the job if it has not already reached a terminal state.
     */
    requestedState?: JobRequestedStateEnum;
    /**
     * Reserved for future use. This field is set only in responses from the server; it is ignored if it is set in any requests.
     */
    satisfiesPzs?: boolean;
    /**
     * This field may be mutated by the Cloud Dataflow service; callers cannot mutate it.
     */
    stageStates?: ExecutionStageState[];
    /**
     * The timestamp when the job was started (transitioned to JOB_STATE_PENDING). Flexible resource scheduling jobs are started with some delay after job creation, so start_time is unset before start and is updated when the job is started by the Cloud Dataflow service. For other jobs, start_time always equals to create_time and is immutable and set by the Cloud Dataflow service.
     */
    startTime?: string;
    /**
     * Exactly one of step or steps_location should be specified. The top-level steps that constitute the entire job. Only retrieved with JOB_VIEW_ALL.
     */
    steps?: Step[];
    /**
     * The Cloud Storage location where the steps are stored.
     */
    stepsLocation?: string;
    /**
     * A set of files the system should be aware of that are used for temporary storage. These temporary files will be removed on job completion. No duplicates are allowed. No file patterns are supported. The supported files are: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object}
     */
    tempFiles?: string[];
    /**
     * The map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job.
     */
    transformNameMapping?: Record<string, string>;
    /**
     * The type of Cloud Dataflow job.
     */
    type?: JobTypeEnum;
}
/**
 * Defines a job to be run by the Cloud Dataflow service. Do not enter confidential information when you supply string values using the API.
 */
export declare class JobInput extends SpeakeasyBase {
    /**
     * The client's unique identifier of the job, re-used across retried attempts. If this field is set, the service will ensure its uniqueness. The request to create a job will fail if the service has knowledge of a previously submitted job with the same client's ID and job name. The caller may use this field to ensure idempotence of job creation across retried attempts to create a job. By default, the field is empty and, in that case, the service ignores it.
     */
    clientRequestId?: string;
    /**
     * The timestamp when the job was initially created. Immutable and set by the Cloud Dataflow service.
     */
    createTime?: string;
    /**
     * If this is specified, the job's initial state is populated from the given snapshot.
     */
    createdFromSnapshotId?: string;
    /**
     * The current state of the job. Jobs are created in the `JOB_STATE_STOPPED` state unless otherwise specified. A job in the `JOB_STATE_RUNNING` state may asynchronously enter a terminal state. After a job has reached a terminal state, no further state updates may be made. This field may be mutated by the Cloud Dataflow service; callers cannot mutate it.
     */
    currentState?: JobCurrentStateEnum;
    /**
     * The timestamp associated with the current state.
     */
    currentStateTime?: string;
    /**
     * Describes the environment in which a Dataflow Job runs.
     */
    environment?: EnvironmentInput;
    /**
     * Additional information about how a Cloud Dataflow job will be executed that isn't contained in the submitted job.
     */
    executionInfo?: JobExecutionInfo;
    /**
     * The unique ID of this job. This field is set by the Cloud Dataflow service when the Job is created, and is immutable for the life of the job.
     */
    id?: string;
    /**
     * Metadata available primarily for filtering jobs. Will be included in the ListJob response and Job SUMMARY view.
     */
    jobMetadata?: JobMetadata;
    /**
     * User-defined labels for this job. The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: * Keys must conform to regexp: \p{Ll}\p{Lo}{0,62} * Values must conform to regexp: [\p{Ll}\p{Lo}\p{N}_-]{0,63} * Both keys and values are additionally constrained to be <= 128 bytes in size.
     */
    labels?: Record<string, string>;
    /**
     * The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.
     */
    location?: string;
    /**
     * The user-specified Cloud Dataflow job name. Only one Job with a given name can exist in a project within one region at any given time. Jobs in different regions can have the same name. If a caller attempts to create a Job with the same name as an already-existing Job, the attempt returns the existing Job. The name must match the regular expression `[a-z]([-a-z0-9]{0,1022}[a-z0-9])?`
     */
    name?: string;
    /**
     * A descriptive representation of submitted pipeline as well as the executed form. This data is provided by the Dataflow service for ease of visualizing the pipeline and interpreting Dataflow provided metrics.
     */
    pipelineDescription?: PipelineDescription;
    /**
     * The ID of the Cloud Platform project that the job belongs to.
     */
    projectId?: string;
    /**
     * If this job is an update of an existing job, this field is the job ID of the job it replaced. When sending a `CreateJobRequest`, you can update a job by specifying it here. The job named here is stopped, and its intermediate state is transferred to this job.
     */
    replaceJobId?: string;
    /**
     * If another job is an update of this job (and thus, this job is in `JOB_STATE_UPDATED`), this field contains the ID of that job.
     */
    replacedByJobId?: string;
    /**
     * The job's requested state. `UpdateJob` may be used to switch between the `JOB_STATE_STOPPED` and `JOB_STATE_RUNNING` states, by setting requested_state. `UpdateJob` may also be used to directly set a job's requested state to `JOB_STATE_CANCELLED` or `JOB_STATE_DONE`, irrevocably terminating the job if it has not already reached a terminal state.
     */
    requestedState?: JobRequestedStateEnum;
    /**
     * Reserved for future use. This field is set only in responses from the server; it is ignored if it is set in any requests.
     */
    satisfiesPzs?: boolean;
    /**
     * This field may be mutated by the Cloud Dataflow service; callers cannot mutate it.
     */
    stageStates?: ExecutionStageState[];
    /**
     * The timestamp when the job was started (transitioned to JOB_STATE_PENDING). Flexible resource scheduling jobs are started with some delay after job creation, so start_time is unset before start and is updated when the job is started by the Cloud Dataflow service. For other jobs, start_time always equals to create_time and is immutable and set by the Cloud Dataflow service.
     */
    startTime?: string;
    /**
     * Exactly one of step or steps_location should be specified. The top-level steps that constitute the entire job. Only retrieved with JOB_VIEW_ALL.
     */
    steps?: Step[];
    /**
     * The Cloud Storage location where the steps are stored.
     */
    stepsLocation?: string;
    /**
     * A set of files the system should be aware of that are used for temporary storage. These temporary files will be removed on job completion. No duplicates are allowed. No file patterns are supported. The supported files are: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object}
     */
    tempFiles?: string[];
    /**
     * The map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job.
     */
    transformNameMapping?: Record<string, string>;
    /**
     * The type of Cloud Dataflow job.
     */
    type?: JobTypeEnum;
}
