import { SpeakeasyBase } from "../../../internal/utils";
import { AccountUserProfile } from "./accountuserprofile";
/**
 * Account User Profile List Response
 */
export declare class AccountUserProfilesListResponse extends SpeakeasyBase {
    /**
     * Account user profile collection.
     */
    accountUserProfiles?: AccountUserProfile[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountUserProfilesListResponse".
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
}
