/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class IssuesRemoveLabelRequest extends SpeakeasyBase {
  /**
   * The number that identifies the issue.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=issue_number",
  })
  issueNumber: number;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=name",
  })
  name: string;

  /**
   * The account owner of the repository. The name is not case sensitive.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=owner",
  })
  owner: string;

  /**
   * The name of the repository. The name is not case sensitive.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=repo",
  })
  repo: string;
}

export class IssuesRemoveLabelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Moved permanently
   */
  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  /**
   * Response
   */
  @SpeakeasyMetadata({ elemType: shared.Label })
  labels?: shared.Label[];
}
