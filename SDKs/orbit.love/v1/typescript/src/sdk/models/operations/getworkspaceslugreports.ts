/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class GetWorkspaceSlugReportsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=http;subtype=bearer;name=Authorization",
  })
  bearer: string;
}

export class GetWorkspaceSlugReportsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=activity_type",
  })
  activityType?: string;

  /**
   * Filter activities before this date. Format: YYYY-MM-DD.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=end_date",
  })
  endDate?: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=properties",
  })
  properties?: string;

  /**
   * Relative timeframes. Format: this_<integer>_<period>, with period in [days, weeks, months, years]. For example, this_30_days.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=relative",
  })
  relative?: string;

  /**
   * Filter activities after this date. Format: YYYY-MM-DD.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=start_date",
  })
  startDate?: string;

  /**
   * Deprecated in favor of the activity_type parameter.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=workspace_slug",
  })
  workspaceSlug: string;
}

export class GetWorkspaceSlugReportsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
