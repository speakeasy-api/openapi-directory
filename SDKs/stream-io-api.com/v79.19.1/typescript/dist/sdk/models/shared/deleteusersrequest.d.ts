import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Conversation channels delete mode.
 *
 * @remarks
 * Conversation channel is any channel which only has two members one of which is the user being deleted.
 *
 * * null or empty string - doesn't delete any conversation channels
 * * soft - marks all conversation channels as deleted (same effect as Delete Channels with 'hard' option disabled)
 * * hard - deletes channel and all its data completely including messages (same effect as Delete Channels with 'hard' option enabled)
 *
 */
export declare enum DeleteUsersRequestDeleteConversationsEnum {
    Soft = "soft",
    Hard = "hard"
}
/**
 * Message delete mode.
 *
 * @remarks
 *
 * * null or empty string - doesn't delete user messages
 * * soft - marks all user messages as deleted without removing any related message data
 * * pruning - marks all user messages as deleted, nullifies message information and removes some message data such as reactions and flags
 * * hard - deletes messages completely with all related information
 *
 */
export declare enum DeleteUsersRequestDeleteMessagesEnum {
    Soft = "soft",
    Pruning = "pruning",
    Hard = "hard"
}
/**
 * User delete mode.
 *
 * @remarks
 *
 * * soft - marks user as deleted and retains all user data
 * * pruning - marks user as deleted and nullifies user information
 * * hard - deletes user completely. Requires 'hard' option for messages and conversations as well
 *
 */
export declare enum DeleteUsersRequestDeleteUserEnum {
    Soft = "soft",
    Pruning = "pruning",
    Hard = "hard"
}
export declare class DeleteUsersRequest extends SpeakeasyBase {
    /**
     * Conversation channels delete mode.
     *
     * @remarks
     * Conversation channel is any channel which only has two members one of which is the user being deleted.
     *
     * * null or empty string - doesn't delete any conversation channels
     * * soft - marks all conversation channels as deleted (same effect as Delete Channels with 'hard' option disabled)
     * * hard - deletes channel and all its data completely including messages (same effect as Delete Channels with 'hard' option enabled)
     *
     */
    conversations?: DeleteUsersRequestDeleteConversationsEnum;
    /**
     * Message delete mode.
     *
     * @remarks
     *
     * * null or empty string - doesn't delete user messages
     * * soft - marks all user messages as deleted without removing any related message data
     * * pruning - marks all user messages as deleted, nullifies message information and removes some message data such as reactions and flags
     * * hard - deletes messages completely with all related information
     *
     */
    messages?: DeleteUsersRequestDeleteMessagesEnum;
    newChannelOwnerId?: string;
    /**
     * User delete mode.
     *
     * @remarks
     *
     * * soft - marks user as deleted and retains all user data
     * * pruning - marks user as deleted and nullifies user information
     * * hard - deletes user completely. Requires 'hard' option for messages and conversations as well
     *
     */
    user?: DeleteUsersRequestDeleteUserEnum;
    /**
     * IDs of users to delete
     */
    userIds: string[];
}
