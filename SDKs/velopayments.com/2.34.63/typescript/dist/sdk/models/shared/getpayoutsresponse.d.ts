import { SpeakeasyBase } from "../../../internal/utils";
import { PagedPayeeInvitationStatusResponseV3Page } from "./pagedpayeeinvitationstatusresponsev3page";
import { PagedPayeeResponseV3Links } from "./pagedpayeeresponsev3links";
import { PayoutSummaryAudit } from "./payoutsummaryaudit";
/**
 * List Payouts Response
 */
export declare class GetPayoutsResponse extends SpeakeasyBase {
    content?: PayoutSummaryAudit[];
    links?: PagedPayeeResponseV3Links[];
    page?: PagedPayeeInvitationStatusResponseV3Page;
}
