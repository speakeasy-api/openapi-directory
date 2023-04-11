import { SpeakeasyBase } from "../../../internal/utils";
import { UserProfile } from "./userprofile";
/**
 * Represents the list of user profiles.
 */
export declare class UserProfileList extends SpeakeasyBase {
    /**
     * Etag of this resource.
     */
    etag?: string;
    /**
     * The user profiles returned in this response.
     */
    items?: UserProfile[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#userProfileList".
     */
    kind?: string;
}
