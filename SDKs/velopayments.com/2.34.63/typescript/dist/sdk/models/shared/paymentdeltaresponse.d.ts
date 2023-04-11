import { SpeakeasyBase } from "../../../internal/utils";
import { PagedPayeeInvitationStatusResponseV3Page } from "./pagedpayeeinvitationstatusresponsev3page";
import { PagedPayeeResponseV3Links } from "./pagedpayeeresponsev3links";
import { PaymentDelta } from "./paymentdelta";
/**
 * List Payment Changes Response Object
 */
export declare class PaymentDeltaResponse extends SpeakeasyBase {
    content?: PaymentDelta[];
    links?: PagedPayeeResponseV3Links[];
    page?: PagedPayeeInvitationStatusResponseV3Page;
}
