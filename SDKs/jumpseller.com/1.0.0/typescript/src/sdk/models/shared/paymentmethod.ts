/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PaymentMethodFields } from "./paymentmethodfields";
import { Expose, Type } from "class-transformer";

/**
 * OK
 */
export class PaymentMethod extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "payment_method" })
  @Type(() => PaymentMethodFields)
  paymentMethod?: PaymentMethodFields;
}
