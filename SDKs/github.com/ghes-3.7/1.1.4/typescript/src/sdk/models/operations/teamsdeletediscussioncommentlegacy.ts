/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class TeamsDeleteDiscussionCommentLegacyRequest extends SpeakeasyBase {
  /**
   * The number that identifies the comment.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=comment_number",
  })
  commentNumber: number;

  /**
   * The number that identifies the discussion.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=discussion_number",
  })
  discussionNumber: number;

  /**
   * The unique identifier of the team.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=team_id",
  })
  teamId: number;
}

export class TeamsDeleteDiscussionCommentLegacyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
