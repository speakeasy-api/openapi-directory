/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * An optional object to filter `/identity/get` results.
 */
export class IdentityGetRequestOptions extends SpeakeasyBase {
  /**
   * A list of `account_ids` to retrieve for the Item.
   *
   * @remarks
   * Note: An error will be returned if a provided `account_id` is not associated with the Item.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "account_ids" })
  accountIds?: string[];
}
