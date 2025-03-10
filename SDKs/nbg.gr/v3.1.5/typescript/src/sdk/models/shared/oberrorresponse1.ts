/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { OBError1 } from "./oberror1";
import { Expose, Type } from "class-transformer";

/**
 * An array of detail error codes, and messages, and URLs to documentation to help remediation.
 */
export class OBErrorResponse1 extends SpeakeasyBase {
  /**
   * High level textual error code, to help categorize the errors.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "Code" })
  code: string;

  /**
   * Gets or Sets Errors
   */
  @SpeakeasyMetadata({ elemType: OBError1 })
  @Expose({ name: "Errors" })
  @Type(() => OBError1)
  errors: OBError1[];

  /**
   * A unique reference for the error instance, for audit purposes, in case of unknown/unclassified errors.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "Id" })
  id?: string;

  /**
   * Brief Error message, e.g., 'There is something wrong with the request parameters provided'
   */
  @SpeakeasyMetadata()
  @Expose({ name: "Message" })
  message: string;
}
