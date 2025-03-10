/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";

/**
 * The outcome of the job.
 */
export enum JobConclusionEnum {
  Success = "success",
  Failure = "failure",
  Neutral = "neutral",
  Cancelled = "cancelled",
  Skipped = "skipped",
  TimedOut = "timed_out",
  ActionRequired = "action_required",
}

/**
 * The phase of the lifecycle that the job is currently in.
 */
export enum JobStatusEnum {
  Queued = "queued",
  InProgress = "in_progress",
  Completed = "completed",
}

/**
 * The phase of the lifecycle that the job is currently in.
 */
export enum JobStepsStatusEnum {
  Queued = "queued",
  InProgress = "in_progress",
  Completed = "completed",
}

export class JobSteps extends SpeakeasyBase {
  /**
   * The time that the job finished, in ISO 8601 format.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "completed_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  completedAt?: Date;

  /**
   * The outcome of the job.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "conclusion" })
  conclusion: string;

  /**
   * The name of the job.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "number" })
  number: number;

  /**
   * The time that the step started, in ISO 8601 format.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "started_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  startedAt?: Date;

  /**
   * The phase of the lifecycle that the job is currently in.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: JobStepsStatusEnum;
}

/**
 * Information of a job execution in a workflow run
 */
export class Job extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "check_run_url" })
  checkRunUrl: string;

  /**
   * The time that the job finished, in ISO 8601 format.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "completed_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  completedAt: Date;

  /**
   * The outcome of the job.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "conclusion" })
  conclusion: JobConclusionEnum;

  /**
   * The SHA of the commit that is being run.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "head_sha" })
  headSha: string;

  @SpeakeasyMetadata()
  @Expose({ name: "html_url" })
  htmlUrl: string;

  /**
   * The id of the job.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  /**
   * Labels for the workflow job. Specified by the "runs_on" attribute in the action's workflow file.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "labels" })
  labels: string[];

  /**
   * The name of the job.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "node_id" })
  nodeId: string;

  /**
   * Attempt number of the associated workflow run, 1 for first attempt and higher if the workflow was re-run.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "run_attempt" })
  runAttempt?: number;

  /**
   * The id of the associated workflow run.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "run_id" })
  runId: number;

  @SpeakeasyMetadata()
  @Expose({ name: "run_url" })
  runUrl: string;

  /**
   * The ID of the runner group to which this job has been assigned. (If a runner hasn't yet been assigned, this will be null.)
   */
  @SpeakeasyMetadata()
  @Expose({ name: "runner_group_id" })
  runnerGroupId: number;

  /**
   * The name of the runner group to which this job has been assigned. (If a runner hasn't yet been assigned, this will be null.)
   */
  @SpeakeasyMetadata()
  @Expose({ name: "runner_group_name" })
  runnerGroupName: string;

  /**
   * The ID of the runner to which this job has been assigned. (If a runner hasn't yet been assigned, this will be null.)
   */
  @SpeakeasyMetadata()
  @Expose({ name: "runner_id" })
  runnerId: number;

  /**
   * The name of the runner to which this job has been assigned. (If a runner hasn't yet been assigned, this will be null.)
   */
  @SpeakeasyMetadata()
  @Expose({ name: "runner_name" })
  runnerName: string;

  /**
   * The time that the job started, in ISO 8601 format.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "started_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  startedAt: Date;

  /**
   * The phase of the lifecycle that the job is currently in.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: JobStatusEnum;

  /**
   * Steps in this job.
   */
  @SpeakeasyMetadata({ elemType: JobSteps })
  @Expose({ name: "steps" })
  @Type(() => JobSteps)
  steps?: JobSteps[];

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url: string;
}
