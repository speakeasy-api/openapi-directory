/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetDomainsRequest extends SpeakeasyBase {
  /**
   * API key.
   */
  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=Training-Key",
  })
  trainingKey: string;
}

export class GetDomainsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Error response
   */
  @SpeakeasyMetadata()
  customVisionError?: shared.CustomVisionError;

  /**
   * OK
   */
  @SpeakeasyMetadata({ elemType: shared.Domain })
  domains?: shared.Domain[];

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
