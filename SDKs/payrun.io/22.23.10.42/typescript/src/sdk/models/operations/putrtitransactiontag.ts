/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class PutRtiTransactionTagRequest extends SpeakeasyBase {
  /**
   * The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.
   */
  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=Api-Version",
  })
  apiVersion: string;

  /**
   * The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
   */
  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=Authorization",
  })
  authorization: string;

  /**
   * The employers' unique identifier. E.g ER001
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=EmployerId",
  })
  employerId: string;

  /**
   * The RTI transaction unique identifier. E.g. FPS001
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=RtiTransactionId",
  })
  rtiTransactionId: string;

  /**
   * The tag unique identifier. E.g. MyTag
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=TagId",
  })
  tagId: string;
}

export class PutRtiTransactionTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Bad Request
   */
  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * The tag object.
   */
  @SpeakeasyMetadata()
  tag?: shared.Tag;
}
