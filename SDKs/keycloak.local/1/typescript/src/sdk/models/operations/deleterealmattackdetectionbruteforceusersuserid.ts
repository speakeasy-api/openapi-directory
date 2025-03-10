/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class DeleteRealmAttackDetectionBruteForceUsersUserIdRequest extends SpeakeasyBase {
  /**
   * realm name (not id!)
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=realm",
  })
  realm: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=userId",
  })
  userId: string;
}

export class DeleteRealmAttackDetectionBruteForceUsersUserIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
