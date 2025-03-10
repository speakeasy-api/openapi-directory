/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class ChecksCreateSuiteRequestBody extends SpeakeasyBase {
  /**
   * The sha of the head commit.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "head_sha" })
  headSha: string;
}

export class ChecksCreateSuiteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody: ChecksCreateSuiteRequestBody;

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

export class ChecksCreateSuiteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Response when the suite already exists
   */
  @SpeakeasyMetadata()
  checkSuite?: shared.CheckSuite;
}
