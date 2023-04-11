import { SpeakeasyBase } from "../../../internal/utils";
import { GetPaymentsForPayoutResponseV3Page } from "./getpaymentsforpayoutresponsev3page";
import { GetPaymentsForPayoutResponseV3Summary } from "./getpaymentsforpayoutresponsev3summary";
import { GetPayoutsResponseV3Links } from "./getpayoutsresponsev3links";
import { PaymentResponseV3 } from "./paymentresponsev3";
/**
 * List Payments for payout
 */
export declare class GetPaymentsForPayoutResponseV3 extends SpeakeasyBase {
    content?: PaymentResponseV3[];
    links?: GetPayoutsResponseV3Links[];
    page?: GetPaymentsForPayoutResponseV3Page;
    summary?: GetPaymentsForPayoutResponseV3Summary;
}
