import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Permission level of the member in the channel (DEPRECATED: use channel_role instead)
 */
export declare enum ChannelMemberRoleEnum {
    Member = "member",
    Moderator = "moderator",
    Admin = "admin",
    Owner = "owner"
}
export declare class ChannelMember extends SpeakeasyBase {
    /**
     * Expiration date of the ban
     */
    banExpires?: Date;
    /**
     * Whether member is banned this channel or not
     */
    banned: boolean;
    /**
     * Role of the member in the channel
     */
    channelRole: string;
    /**
     * Date/time of creation
     */
    createdAt: Date;
    deletedAt?: Date;
    /**
     * Date when invite was accepted
     */
    inviteAcceptedAt?: Date;
    /**
     * Date when invite was rejected
     */
    inviteRejectedAt?: Date;
    /**
     * Whether member was invited or not
     */
    invited?: boolean;
    /**
     * Whether member is channel moderator or not
     */
    isModerator?: boolean;
    /**
     * Permission level of the member in the channel (DEPRECATED: use channel_role instead)
     */
    role?: ChannelMemberRoleEnum;
    /**
     * Whether member is shadow banned in this channel or not
     */
    shadowBanned: boolean;
    /**
     * Date/time of the last update
     */
    updatedAt: Date;
    /**
     * Represents chat user
     */
    user?: Record<string, any>;
    userId?: string;
}
