import { SpeakeasyBase } from "../../../internal/utils";
import { UrlRestriction } from "./urlrestriction";
/**
 * Represents an Authorized Buyers user list. Authorized Buyers can create/update/list user lists. Once a user list is created in the system, Authorized Buyers can add users to the user list using the bulk uploader API. Alternatively, users can be added by hosting a tag on the advertiser's page.
 */
export declare class UserListInput extends SpeakeasyBase {
    /**
     * The description for the user list.
     */
    description?: string;
    /**
     * Required. Display name of the user list. This must be unique across all user lists for a given account.
     */
    displayName?: string;
    /**
     * Required. The number of days a user's cookie stays on the user list. The field must be between 0 and 540 inclusive.
     */
    membershipDurationDays?: string;
    /**
     * Represents the URL restriction (for the URL captured by the pixel callback) for a user list.
     */
    urlRestriction?: UrlRestriction;
}
/**
 * Output only. The status of the user list. A new user list starts out as open.
 */
export declare enum UserListStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    Open = "OPEN",
    Closed = "CLOSED"
}
/**
 * Represents an Authorized Buyers user list. Authorized Buyers can create/update/list user lists. Once a user list is created in the system, Authorized Buyers can add users to the user list using the bulk uploader API. Alternatively, users can be added by hosting a tag on the advertiser's page.
 */
export declare class UserList extends SpeakeasyBase {
    /**
     * The description for the user list.
     */
    description?: string;
    /**
     * Required. Display name of the user list. This must be unique across all user lists for a given account.
     */
    displayName?: string;
    /**
     * Required. The number of days a user's cookie stays on the user list. The field must be between 0 and 540 inclusive.
     */
    membershipDurationDays?: string;
    /**
     * Output only. Name of the user list that must follow the pattern `buyers/{buyer}/userLists/{user_list}`, where `{buyer}` represents the account ID of the buyer who owns the user list. For a bidder accessing user lists on behalf of a child seat buyer, `{buyer}` represents the account ID of the child seat buyer. `{user_list}` is an int64 identifier assigned by Google to uniquely identify a user list.
     */
    name?: string;
    /**
     * Output only. The status of the user list. A new user list starts out as open.
     */
    status?: UserListStatusEnum;
    /**
     * Represents the URL restriction (for the URL captured by the pixel callback) for a user list.
     */
    urlRestriction?: UrlRestriction;
}
