/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetJournalInstructionTemplateRequest extends SpeakeasyBase {
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
   * The journal instruction unique identifier. E.g JI001
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=JournalInstructionId",
  })
  journalInstructionId: string;
}

export class GetJournalInstructionTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Bad Request
   */
  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  /**
   * The journal instruction object.
   */
  @SpeakeasyMetadata()
  journalInstruction?: shared.JournalInstruction;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
