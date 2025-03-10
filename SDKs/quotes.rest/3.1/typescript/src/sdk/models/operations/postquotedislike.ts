/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class PostQuoteDislikeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=apiKey;subtype=header;name=X-TheySaidSo-Api-Secret",
  })
  xTheySaidSoApiSecret: string;
}

export class PostQuoteDislikeRequest extends SpeakeasyBase {
  /**
   * Quote ID
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=quote_id",
  })
  quoteId: string;
}

export class PostQuoteDislikeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
