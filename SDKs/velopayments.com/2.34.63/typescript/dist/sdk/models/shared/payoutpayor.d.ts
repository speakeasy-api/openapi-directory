import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details of payor and principal participating in a payout.
 */
export declare class PayoutPayor extends SpeakeasyBase {
    /**
     * The alternate name of the payor.
     */
    dbaName: string;
    /**
     * The id of the payor.
     */
    payorId: string;
    /**
     * The name of the payor.
     */
    payorName: string;
    /**
     * Email address if principal is a user or ID if application.
     */
    principal: string;
    /**
     * The id of the principal.
     */
    principalId: string;
}
