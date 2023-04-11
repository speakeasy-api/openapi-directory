import { SpeakeasyBase } from "../../../internal/utils";
import { PayableIssueV3 } from "./payableissuev3";
export declare class PayeePayorRefV3 extends SpeakeasyBase {
    invitationStatus?: string;
    /**
     * The timestamp when the invitation status is updated
     */
    invitationStatusTimestamp?: Date;
    /**
     * Indicates any conditions which prevent the payee from being payable for this payor
     */
    payableIssues?: PayableIssueV3[];
    /**
     * Indicates if the payee is payable for this payor
     */
    payableStatus?: boolean;
    paymentChannelId?: string;
    payorId?: string;
    remoteId?: string;
}
