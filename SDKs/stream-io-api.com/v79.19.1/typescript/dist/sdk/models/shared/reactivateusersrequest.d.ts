import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReactivateUsersRequest extends SpeakeasyBase {
    /**
     * ID of the user who's reactivating the users
     */
    createdById?: string;
    /**
     * Restore previously deleted messages
     */
    restoreMessages?: boolean;
    /**
     * User IDs to reactivate
     */
    userIds: string[];
}
