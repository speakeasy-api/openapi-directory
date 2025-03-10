/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class ActionsListSelfHostedRunnerGroupsForOrgRequest extends SpeakeasyBase {
  /**
   * The organization name. The name is not case sensitive.
   */
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  /**
   * Page number of the results to fetch.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  /**
   * The number of results per page (max 100).
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=per_page",
  })
  perPage?: number;
}

/**
 * Response
 */
export class ActionsListSelfHostedRunnerGroupsForOrg200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.RunnerGroupsOrg })
  @Expose({ name: "runner_groups" })
  @Type(() => shared.RunnerGroupsOrg)
  runnerGroups: shared.RunnerGroupsOrg[];

  @SpeakeasyMetadata()
  @Expose({ name: "total_count" })
  totalCount: number;
}

export class ActionsListSelfHostedRunnerGroupsForOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Response
   */
  @SpeakeasyMetadata()
  actionsListSelfHostedRunnerGroupsForOrg200ApplicationJSONObject?: ActionsListSelfHostedRunnerGroupsForOrg200ApplicationJSON;
}
