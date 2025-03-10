/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Which type of jobs will use the reservation.
 */
export enum AssignmentJobTypeEnum {
  JobTypeUnspecified = "JOB_TYPE_UNSPECIFIED",
  Pipeline = "PIPELINE",
  Query = "QUERY",
  MlExternal = "ML_EXTERNAL",
  Background = "BACKGROUND",
}

/**
 * Output only. State of the assignment.
 */
export enum AssignmentStateEnum {
  StateUnspecified = "STATE_UNSPECIFIED",
  Pending = "PENDING",
  Active = "ACTIVE",
}

/**
 * An assignment allows a project to submit jobs of a certain type using slots from the specified reservation.
 */
export class Assignment extends SpeakeasyBase {
  /**
   * The resource which will use the reservation. E.g. `projects/myproject`, `folders/123`, or `organizations/456`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "assignee" })
  assignee?: string;

  /**
   * Which type of jobs will use the reservation.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "jobType" })
  jobType?: AssignmentJobTypeEnum;

  /**
   * Output only. Name of the resource. E.g.: `projects/myproject/locations/US/reservations/team1-prod/assignments/123`. The assignment_id must only contain lower case alphanumeric characters or dashes and the max length is 64 characters.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * Output only. State of the assignment.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state?: AssignmentStateEnum;
}

/**
 * An assignment allows a project to submit jobs of a certain type using slots from the specified reservation.
 */
export class AssignmentInput extends SpeakeasyBase {
  /**
   * The resource which will use the reservation. E.g. `projects/myproject`, `folders/123`, or `organizations/456`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "assignee" })
  assignee?: string;

  /**
   * Which type of jobs will use the reservation.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "jobType" })
  jobType?: AssignmentJobTypeEnum;
}
