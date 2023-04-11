import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the user whose eligibility is being evaluated.
 */
export declare class IncomeVerificationPrecheckUser extends SpeakeasyBase {
    /**
     * The user's email address
     */
    emailAddress?: string;
    /**
     * The user's first name
     */
    firstName?: string;
    /**
     * Data about the components comprising an address.
     */
    homeAddress?: Record<string, any>;
    /**
     * The user's last name
     */
    lastName?: string;
}
