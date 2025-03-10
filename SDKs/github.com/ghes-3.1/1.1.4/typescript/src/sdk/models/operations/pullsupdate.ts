/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

/**
 * State of this Pull Request. Either `open` or `closed`.
 */
export enum PullsUpdateRequestBodyStateEnum {
  Open = "open",
  Closed = "closed",
}

export class PullsUpdateRequestBody extends SpeakeasyBase {
  /**
   * The name of the branch you want your changes pulled into. This should be an existing branch on the current repository. You cannot update the base branch on a pull request to point to another repository.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "base" })
  base?: string;

  /**
   * The contents of the pull request.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "body" })
  body?: string;

  /**
   * Indicates whether [maintainers can modify](https://docs.github.com/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork/) the pull request.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "maintainer_can_modify" })
  maintainerCanModify?: boolean;

  /**
   * State of this Pull Request. Either `open` or `closed`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state?: PullsUpdateRequestBodyStateEnum;

  /**
   * The title of the pull request.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: string;
}

export class PullsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: PullsUpdateRequestBody;

  /**
   * The account owner of the repository. The name is not case sensitive.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=owner",
  })
  owner: string;

  /**
   * The number that identifies the pull request.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=pull_number",
  })
  pullNumber: number;

  /**
   * The name of the repository. The name is not case sensitive.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=repo",
  })
  repo: string;
}

export class PullsUpdateResponse extends SpeakeasyBase {
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

  /**
   * Response
   */
  @SpeakeasyMetadata()
  pullRequest?: shared.PullRequest;

  /**
   * Validation failed
   */
  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
