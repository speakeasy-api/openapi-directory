/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class AddressViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "addressLine1" })
  addressLine1?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "addressLine2" })
  addressLine2?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "city" })
  city?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "country" })
  country?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "postalCode" })
  postalCode?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state?: string;
}
