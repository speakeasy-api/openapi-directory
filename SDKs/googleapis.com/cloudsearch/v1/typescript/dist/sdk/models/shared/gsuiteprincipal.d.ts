import { SpeakeasyBase } from "../../../internal/utils";
export declare class GSuitePrincipal extends SpeakeasyBase {
    /**
     * This principal represents all users of the Google Workspace domain of the customer.
     */
    gsuiteDomain?: boolean;
    /**
     * This principal references a Google Workspace group name.
     */
    gsuiteGroupEmail?: string;
    /**
     * This principal references a Google Workspace user account.
     */
    gsuiteUserEmail?: string;
}
