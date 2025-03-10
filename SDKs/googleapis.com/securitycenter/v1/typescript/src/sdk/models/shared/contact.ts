/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The email address of a contact.
 */
export class Contact extends SpeakeasyBase {
  /**
   * An email address. For example, "`person123@company.com`".
   */
  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email?: string;
}
