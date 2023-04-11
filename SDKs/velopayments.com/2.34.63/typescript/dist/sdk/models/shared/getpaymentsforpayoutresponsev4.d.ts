import { SpeakeasyBase } from "../../../internal/utils";
import { GetPaymentsForPayoutResponseV4Summary } from "./getpaymentsforpayoutresponsev4summary";
import { PagedPayeeInvitationStatusResponseV3Page } from "./pagedpayeeinvitationstatusresponsev3page";
import { PagedPayeeResponseV3Links } from "./pagedpayeeresponsev3links";
import { PaymentResponseV4 } from "./paymentresponsev4";
/**
 * List Payments for payout
 */
export declare class GetPaymentsForPayoutResponseV4 extends SpeakeasyBase {
    content?: PaymentResponseV4[];
    links?: PagedPayeeResponseV3Links[];
    page?: PagedPayeeInvitationStatusResponseV3Page;
    summary?: GetPaymentsForPayoutResponseV4Summary;
}
