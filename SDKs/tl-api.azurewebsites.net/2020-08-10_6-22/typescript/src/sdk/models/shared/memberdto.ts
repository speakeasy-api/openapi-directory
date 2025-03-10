/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The MemeberDTO Class.
 *
 * @remarks
 * Contains relevant fields of Member DTO by masking actual Member entity's fields in application.
 *
 */
export class MemberDTO extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}
