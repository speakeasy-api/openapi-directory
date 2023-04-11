import { SpeakeasyBase } from "../../../internal/utils";
import { PagedPayeeInvitationStatusResponseV3Page } from "./pagedpayeeinvitationstatusresponsev3page";
import { PagedPayeeResponseV3Links } from "./pagedpayeeresponsev3links";
import { PaymentV3 } from "./paymentv3";
/**
 * List Payees Response Object
 */
export declare class PagedPaymentsResponseV3 extends SpeakeasyBase {
    content?: PaymentV3[];
    links?: PagedPayeeResponseV3Links[];
    page?: PagedPayeeInvitationStatusResponseV3Page;
}
