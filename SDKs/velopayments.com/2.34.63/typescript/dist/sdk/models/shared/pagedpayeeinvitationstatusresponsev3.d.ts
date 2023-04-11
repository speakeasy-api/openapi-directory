import { SpeakeasyBase } from "../../../internal/utils";
import { PagedPayeeInvitationStatusResponseV3Page } from "./pagedpayeeinvitationstatusresponsev3page";
import { PagedPayeeResponseV3Links } from "./pagedpayeeresponsev3links";
import { PayeeInvitationStatusResponseV3 } from "./payeeinvitationstatusresponsev3";
/**
 * List Payees Invitation Status Object
 */
export declare class PagedPayeeInvitationStatusResponseV3 extends SpeakeasyBase {
    content?: PayeeInvitationStatusResponseV3[];
    links?: PagedPayeeResponseV3Links[];
    page?: PagedPayeeInvitationStatusResponseV3Page;
}
