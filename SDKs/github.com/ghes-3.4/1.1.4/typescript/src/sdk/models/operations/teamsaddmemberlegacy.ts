/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class TeamsAddMemberLegacyRequest extends SpeakeasyBase {
  /**
   * The unique identifier of the team.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=team_id",
  })
  teamId: number;

  /**
   * The handle for the GitHub user account.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=username",
  })
  username: string;
}

export class TeamsAddMemberLegacyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Forbidden
   */
  @SpeakeasyMetadata()
  basicError?: shared.BasicError;
}
