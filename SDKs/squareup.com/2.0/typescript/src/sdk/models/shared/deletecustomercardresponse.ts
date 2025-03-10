/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ErrorT } from "./error";
import { Expose, Type } from "class-transformer";

/**
 * Defines the fields that are included in the response body of
 *
 * @remarks
 * a request to the `DeleteCustomerCard` endpoint.
 */
export class DeleteCustomerCardResponse extends SpeakeasyBase {
  /**
   * Any errors that occurred during the request.
   */
  @SpeakeasyMetadata({ elemType: ErrorT })
  @Expose({ name: "errors" })
  @Type(() => ErrorT)
  errors?: ErrorT[];
}
