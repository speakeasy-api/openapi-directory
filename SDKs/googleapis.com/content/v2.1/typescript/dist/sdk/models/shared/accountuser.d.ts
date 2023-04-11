import { SpeakeasyBase } from "../../../internal/utils";
export declare class AccountUser extends SpeakeasyBase {
    /**
     * Whether user is an admin.
     */
    admin?: boolean;
    /**
     * User's email address.
     */
    emailAddress?: string;
    /**
     * Whether user is an order manager.
     */
    orderManager?: boolean;
    /**
     * Whether user can access payment statements.
     */
    paymentsAnalyst?: boolean;
    /**
     * Whether user can manage payment settings.
     */
    paymentsManager?: boolean;
    /**
     * Whether user is a reporting manager.
     */
    reportingManager?: boolean;
}
