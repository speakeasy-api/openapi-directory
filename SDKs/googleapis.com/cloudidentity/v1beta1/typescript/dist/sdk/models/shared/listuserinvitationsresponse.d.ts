import { SpeakeasyBase } from "../../../internal/utils";
import { UserInvitation } from "./userinvitation";
/**
 * Response message for UserInvitation listing request.
 */
export declare class ListUserInvitationsResponse extends SpeakeasyBase {
    /**
     * The token for the next page. If not empty, indicates that there may be more `UserInvitation` resources that match the listing request; this value can be used in a subsequent ListUserInvitationsRequest to get continued results with the current list call.
     */
    nextPageToken?: string;
    /**
     * The list of UserInvitation resources.
     */
    userInvitations?: UserInvitation[];
}
