/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class DeleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailRequest extends SpeakeasyBase {
  /**
   * Assessment group id
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=groupId",
  })
  groupId: string;

  /**
   * offering's id
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=offeringId",
  })
  offeringId: string;

  /**
   * user's email
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=userEmail",
  })
  userEmail: string;
}

export class DeleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Bad Request
   */
  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
