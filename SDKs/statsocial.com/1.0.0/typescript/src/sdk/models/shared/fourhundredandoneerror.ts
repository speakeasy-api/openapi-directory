/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * {success: 0, msg: Invalid API key, error_code_msg: API_INVALID_KEY}
 */
export class FourHundredAndOneError extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "error_code_msg" })
  errorCodeMsg?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "msg" })
  msg?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "success" })
  success?: string;
}
