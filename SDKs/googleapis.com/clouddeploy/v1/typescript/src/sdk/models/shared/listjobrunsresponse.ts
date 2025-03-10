/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { JobRun } from "./jobrun";
import { Expose, Type } from "class-transformer";

/**
 * ListJobRunsResponse is the response object returned by `ListJobRuns`.
 */
export class ListJobRunsResponse extends SpeakeasyBase {
  /**
   * The `JobRun` objects.
   */
  @SpeakeasyMetadata({ elemType: JobRun })
  @Expose({ name: "jobRuns" })
  @Type(() => JobRun)
  jobRuns?: JobRun[];

  /**
   * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "nextPageToken" })
  nextPageToken?: string;

  /**
   * Locations that could not be reached
   */
  @SpeakeasyMetadata()
  @Expose({ name: "unreachable" })
  unreachable?: string[];
}
