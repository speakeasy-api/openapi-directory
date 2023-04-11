import { SpeakeasyBase } from "../../../internal/utils";
/**
 * User details
 */
export declare class UserDetails extends SpeakeasyBase {
    /**
     * Unique internal identifier of the user, as a contributor
     */
    contributorId?: string;
    /**
     * Unique internal identifier of the user, as a purchaser
     */
    customerId?: string;
    /**
     * Email address of the user
     */
    email?: string;
    /**
     * First name of the user
     */
    firstName?: string;
    /**
     * Full name including first, middle, and last name of the user
     */
    fullName?: string;
    /**
     * Unique internal identifier for the user, not tied to contributor or purchasing customer
     */
    id?: string;
    /**
     * True if the user has access to the Premier collection, false otherwise
     */
    isPremier?: boolean;
    /**
     * True if the user has access to the Premier collection and also has child users
     */
    isPremierParent?: boolean;
    /**
     * Main language of the user account
     */
    language?: string;
    /**
     * Last name of the user
     */
    lastName?: string;
    /**
     * True if the user has an enterprise license, false otherwise
     */
    onlyEnhancedLicense?: boolean;
    /**
     * True if the user has access to sensitive use only, false otherwise
     */
    onlySensitiveUse?: boolean;
    /**
     * Unique internal identifier for the user's organization, specific to Premier users
     */
    organizationId?: string;
    /**
     * List of permissions allowed through the Premier client
     */
    premierPermissions?: string[];
    /**
     * User name associated to the user
     */
    username?: string;
}
