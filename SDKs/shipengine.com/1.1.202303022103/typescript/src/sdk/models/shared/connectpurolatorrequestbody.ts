/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * A Purolator account information request body
 */
export class ConnectPurolatorRequestBody extends SpeakeasyBase {
  /**
   * Account number
   */
  @SpeakeasyMetadata()
  @Expose({ name: "account_number" })
  accountNumber: string;

  /**
   * Activation key
   */
  @SpeakeasyMetadata()
  @Expose({ name: "activation_key" })
  activationKey: string;

  /**
   * Nickname
   */
  @SpeakeasyMetadata()
  @Expose({ name: "nickname" })
  nickname: string;
}
