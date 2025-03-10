/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class TeamsDeleteDiscussionCommentInOrgRequest extends SpeakeasyBase {
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
   * The organization name. The name is not case sensitive.
   */
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  /**
   * The slug of the team name.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=team_slug",
  })
  teamSlug: string;
}

export class TeamsDeleteDiscussionCommentInOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
