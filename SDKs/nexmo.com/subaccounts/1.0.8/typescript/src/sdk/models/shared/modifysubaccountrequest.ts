/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class ModifySubaccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "suspended" })
  suspended?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "use_primary_account_balance" })
  usePrimaryAccountBalance?: boolean;
}
