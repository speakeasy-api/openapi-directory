import { SpeakeasyBase } from "../../../internal/utils";
export declare class PayeeInvitationStatusResponseV4 extends SpeakeasyBase {
    gracePeriodEndDate?: Date;
    /**
     * Payee invitation status. One of the following values: ACCEPTED, PENDING, DECLINED
     */
    invitationStatus: string;
    payeeId: string;
}
