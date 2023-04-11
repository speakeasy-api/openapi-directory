import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details of principal participating in a payout.
 */
export declare class PayoutPrincipal extends SpeakeasyBase {
    /**
     * Email address if principal is a user or ID if application.
     */
    principal: string;
    /**
     * The id of the principal.
     */
    principalId: string;
}
