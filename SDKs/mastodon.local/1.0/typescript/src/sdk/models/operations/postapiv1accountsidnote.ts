/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class PostApiV1AccountsIdNoteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=http;subtype=bearer;name=Authorization",
  })
  bearerAuth: string;
}

export class PostApiV1AccountsIdNoteRequestBody extends SpeakeasyBase {
  /**
   * The comment to be set on that user. Provide an empty string or leave out this parameter to clear the currently set note.
   */
  @SpeakeasyMetadata()
  comment?: string;
}

export class PostApiV1AccountsIdNoteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/form-data" })
  requestBody?: Uint8Array;

  /**
   * The id of the account in the database
   */
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export class PostApiV1AccountsIdNoteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Invalid or missing Authorization header
   */
  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  /**
   * Successfully unmuted, or account was already unmuted.
   */
  @SpeakeasyMetadata()
  relationship?: shared.Relationship;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
