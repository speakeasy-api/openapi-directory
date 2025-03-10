/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class ApiKeyIndividualLimit extends SpeakeasyBase {
  /**
   * `number` or `null` Limit set on the number of lookups that can be
   *
   * @remarks
   * performed from a single IP address. `null` means the limit is currently
   * disabled.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "limit" })
  limit: number;
}
