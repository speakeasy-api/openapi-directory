/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Money } from "./money";
import { Expose, Type } from "class-transformer";

/**
 * Describes a request to refund a payment using [RefundPayment](https://developer.squareup.com/reference/square_2021-08-18/refunds-api/refund-payment).
 */
export class RefundPaymentRequest extends SpeakeasyBase {
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   *
   * @remarks
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "amount_money" })
  @Type(() => Money)
  amountMoney: Money;

  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   *
   * @remarks
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "app_fee_money" })
  @Type(() => Money)
  appFeeMoney?: Money;

  /**
   *  A unique string that identifies this `RefundPayment` request. The key can be any valid string
   *
   * @remarks
   * but must be unique for every `RefundPayment` request.
   *
   * For more information, see [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "idempotency_key" })
  idempotencyKey: string;

  /**
   * The unique ID of the payment being refunded.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "payment_id" })
  paymentId: string;

  /**
   * A description of the reason for the refund.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "reason" })
  reason?: string;
}
