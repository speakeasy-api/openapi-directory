/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Missing or Invalid Credentials
 */
export class ErrorUnauthorizedMissingCredentials extends SpeakeasyBase {
  /**
   * Additional information about the error
   */
  @SpeakeasyMetadata()
  @Expose({ name: "detail" })
  detail?: string;

  /**
   * Internal Trace ID
   */
  @SpeakeasyMetadata()
  @Expose({ name: "instance" })
  instance: string;

  /**
   * Generic error message
   */
  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;

  /**
   * Link to error / remediation options
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: string;
}
