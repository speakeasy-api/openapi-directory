/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Too Many Requests
 */
export class TooManyRequests extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "error" })
  error?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "errors" })
  errors?: any[];

  @SpeakeasyMetadata()
  @Expose({ name: "link" })
  link?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "spam_warning_urn" })
  spamWarningUrn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: string;
}
