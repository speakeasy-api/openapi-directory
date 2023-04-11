import { SpeakeasyBase } from "../../../internal/utils";
import { PagedPayeeInvitationStatusResponseV3Page } from "./pagedpayeeinvitationstatusresponsev3page";
import { PagedPayeeResponseV3Links } from "./pagedpayeeresponsev3links";
import { PayeeInvitationStatusResponseV4 } from "./payeeinvitationstatusresponsev4";
/**
 * List Payees Invitation Status Object
 */
export declare class PagedPayeeInvitationStatusResponseV4 extends SpeakeasyBase {
    content?: PayeeInvitationStatusResponseV4[];
    links?: PagedPayeeResponseV3Links[];
    page?: PagedPayeeInvitationStatusResponseV3Page;
}
