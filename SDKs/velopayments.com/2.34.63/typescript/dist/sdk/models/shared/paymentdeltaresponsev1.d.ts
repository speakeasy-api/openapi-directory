import { SpeakeasyBase } from "../../../internal/utils";
import { PagedPayeeInvitationStatusResponseV3Page } from "./pagedpayeeinvitationstatusresponsev3page";
import { PagedPayeeResponseV3Links } from "./pagedpayeeresponsev3links";
import { PaymentDeltaV1 } from "./paymentdeltav1";
/**
 * List Payment Changes Response Object
 */
export declare class PaymentDeltaResponseV1 extends SpeakeasyBase {
    content?: PaymentDeltaV1[];
    links?: PagedPayeeResponseV3Links[];
    page?: PagedPayeeInvitationStatusResponseV3Page;
}
