/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

/**
 * The state of the status.
 */
export enum ReposCreateCommitStatusRequestBodyStateEnum {
  Error = "error",
  Failure = "failure",
  Pending = "pending",
  Success = "success",
}

export class ReposCreateCommitStatusRequestBody extends SpeakeasyBase {
  /**
   * A string label to differentiate this status from the status of other systems. This field is case-insensitive.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "context" })
  context?: string;

  /**
   * A short description of the status.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  /**
   * The state of the status.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state: ReposCreateCommitStatusRequestBodyStateEnum;

  /**
   * The target URL to associate with this status. This URL will be linked from the GitHub UI to allow users to easily see the source of the status.
   *
   * @remarks
   * For example, if your continuous integration system is posting build status, you would want to provide the deep link for the build output for this specific SHA:
   * `http://ci.example.com/user/repo/build/sha`
   */
  @SpeakeasyMetadata()
  @Expose({ name: "target_url" })
  targetUrl?: string;
}

export class ReposCreateCommitStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody: ReposCreateCommitStatusRequestBody;

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

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sha" })
  sha: string;
}

export class ReposCreateCommitStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers?: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Response
   */
  @SpeakeasyMetadata()
  status?: shared.Status;
}
