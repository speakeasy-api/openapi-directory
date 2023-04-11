import { SpeakeasyBase } from "../../../internal/utils";
import { PayableIssueV4 } from "./payableissuev4";
export declare class PayeePayorRefV4 extends SpeakeasyBase {
    invitationStatus?: string;
    /**
     * The timestamp when the invitation status is updated
     */
    invitationStatusTimestamp?: Date;
    /**
     * Indicates any conditions which prevent the payee from being payable for this payor
     */
    payableIssues?: PayableIssueV4[];
    /**
     * Indicates if the payee is payable for this payor
     */
    payableStatus?: boolean;
    paymentChannelId?: string;
    payorId?: string;
    remoteId?: string;
}
