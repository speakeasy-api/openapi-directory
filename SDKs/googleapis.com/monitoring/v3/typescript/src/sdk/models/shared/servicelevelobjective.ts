/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ServiceLevelIndicator } from "./servicelevelindicator";
import { Expose, Type } from "class-transformer";

/**
 * A calendar period, semantically "since the start of the current ". At this time, only DAY, WEEK, FORTNIGHT, and MONTH are supported.
 */
export enum ServiceLevelObjectiveCalendarPeriodEnum {
  CalendarPeriodUnspecified = "CALENDAR_PERIOD_UNSPECIFIED",
  Day = "DAY",
  Week = "WEEK",
  Fortnight = "FORTNIGHT",
  Month = "MONTH",
  Quarter = "QUARTER",
  Half = "HALF",
  Year = "YEAR",
}

/**
 * A Service-Level Objective (SLO) describes a level of desired good service. It consists of a service-level indicator (SLI), a performance goal, and a period over which the objective is to be evaluated against that goal. The SLO can use SLIs defined in a number of different manners. Typical SLOs might include "99% of requests in each rolling week have latency below 200 milliseconds" or "99.5% of requests in each calendar month return successfully."
 */
export class ServiceLevelObjective extends SpeakeasyBase {
  /**
   * A calendar period, semantically "since the start of the current ". At this time, only DAY, WEEK, FORTNIGHT, and MONTH are supported.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "calendarPeriod" })
  calendarPeriod?: ServiceLevelObjectiveCalendarPeriodEnum;

  /**
   * Name used for UI elements listing this SLO.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName?: string;

  /**
   * The fraction of service that must be good in order for this objective to be met. 0 < goal <= 0.999.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "goal" })
  goal?: number;

  /**
   * Resource name for this ServiceLevelObjective. The format is: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID]/serviceLevelObjectives/[SLO_NAME]
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * A rolling time period, semantically "in the past ". Must be an integer multiple of 1 day no larger than 30 days.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "rollingPeriod" })
  rollingPeriod?: string;

  /**
   * A Service-Level Indicator (SLI) describes the "performance" of a service. For some services, the SLI is well-defined. In such cases, the SLI can be described easily by referencing the well-known SLI and providing the needed parameters. Alternatively, a "custom" SLI can be defined with a query to the underlying metric store. An SLI is defined to be good_service / total_service over any queried time interval. The value of performance always falls into the range 0 <= performance <= 1. A custom SLI describes how to compute this ratio, whether this is by dividing values from a pair of time series, cutting a Distribution into good and bad counts, or counting time windows in which the service complies with a criterion. For separation of concerns, a single Service-Level Indicator measures performance for only one aspect of service quality, such as fraction of successful queries or fast-enough queries.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "serviceLevelIndicator" })
  @Type(() => ServiceLevelIndicator)
  serviceLevelIndicator?: ServiceLevelIndicator;

  /**
   * Labels which have been used to annotate the service-level objective. Label keys must start with a letter. Label keys and values may contain lowercase letters, numbers, underscores, and dashes. Label keys and values have a maximum length of 63 characters, and must be less than 128 bytes in size. Up to 64 label entries may be stored. For labels which do not have a semantic value, the empty string may be supplied for the label value.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "userLabels" })
  userLabels?: Record<string, string>;
}
