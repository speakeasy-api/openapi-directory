/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class OrgsConvertMemberToOutsideCollaboratorRequestBody extends SpeakeasyBase {
  /**
   * When set to `true`, the request will be performed asynchronously. Returns a 202 status code when the job is successfully queued.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "async" })
  async?: boolean;
}

export class OrgsConvertMemberToOutsideCollaboratorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: OrgsConvertMemberToOutsideCollaboratorRequestBody;

  /**
   * The organization name. The name is not case sensitive.
   */
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  /**
   * The handle for the GitHub user account.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=username",
  })
  username: string;
}

export class OrgsConvertMemberToOutsideCollaboratorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Resource not found
   */
  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  /**
   * User is getting converted asynchronously
   */
  @SpeakeasyMetadata()
  orgsConvertMemberToOutsideCollaborator202ApplicationJSONObject?: Record<
    string,
    any
  >;
}
