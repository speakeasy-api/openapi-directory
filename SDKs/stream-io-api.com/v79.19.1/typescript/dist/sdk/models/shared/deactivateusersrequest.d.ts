import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeactivateUsersRequest extends SpeakeasyBase {
    /**
     * ID of the user who deactivated the users
     */
    createdById?: string;
    /**
     * Makes messages appear to be deleted
     */
    markMessagesDeleted?: boolean;
    /**
     * User IDs to deactivate
     */
    userIds: string[];
}
