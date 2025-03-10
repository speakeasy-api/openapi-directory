/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetSuffixesSuffixRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=suffix",
  })
  suffix: string;
}

export class GetSuffixesSuffixResponse extends SpeakeasyBase {
  /**
   * Get all the cards having the specified stage suffix
   */
  @SpeakeasyMetadata({ elemType: shared.CardResume })
  cardResumes?: shared.CardResume[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
