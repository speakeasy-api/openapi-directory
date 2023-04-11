import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A UserProfile resource lets you list all DFA user profiles that are associated with a Google user account. The profile_id needs to be specified in other API requests.
 */
export declare class UserProfile extends SpeakeasyBase {
    /**
     * The account ID to which this profile belongs.
     */
    accountId?: string;
    /**
     * The account name this profile belongs to.
     */
    accountName?: string;
    /**
     * Etag of this resource.
     */
    etag?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#userProfile".
     */
    kind?: string;
    /**
     * The unique ID of the user profile.
     */
    profileId?: string;
    /**
     * The sub account ID this profile belongs to if applicable.
     */
    subAccountId?: string;
    /**
     * The sub account name this profile belongs to if applicable.
     */
    subAccountName?: string;
    /**
     * The user name.
     */
    userName?: string;
}
