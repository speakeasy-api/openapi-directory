import { SpeakeasyBase } from "../../../internal/utils";
export declare class MemberLinksSelf extends SpeakeasyBase {
    href?: string;
}
export declare class MemberLinks extends SpeakeasyBase {
    self?: MemberLinksSelf;
}
/**
 * The channel that the member joins with
 */
export declare enum MemberChannelTypeEnum {
    App = "app"
}
export declare class MemberChannel extends SpeakeasyBase {
    /**
     * The channel that the member joins with
     */
    type?: MemberChannelTypeEnum;
}
export declare class MemberInitiatorInvited extends SpeakeasyBase {
    isSystem?: boolean;
}
export declare class MemberInitiatorJoined extends SpeakeasyBase {
    isSystem?: boolean;
}
export declare class MemberInitiator extends SpeakeasyBase {
    invited?: MemberInitiatorInvited;
    joined?: MemberInitiatorJoined;
}
/**
 * The current audio state for the member
 */
export declare class MemberMediaAudioSettings extends SpeakeasyBase {
    /**
     * Can the member hear other participants?
     */
    earmuffed?: boolean;
    /**
     * Is audio enabled?
     */
    enabled?: boolean;
    /**
     * Can the member speak to other participants?
     */
    muted?: boolean;
}
/**
 * The current media state for the member
 */
export declare class MemberMedia extends SpeakeasyBase {
    /**
     * The current audio state for the member
     */
    audioSettings?: MemberMediaAudioSettings;
}
/**
 * The state that the member is in for this conversation
 */
export declare enum MemberStateEnum {
    Invited = "INVITED",
    Joined = "JOINED"
}
export declare class MemberTimestamp extends SpeakeasyBase {
    /**
     * The time that an invitation was sent
     */
    invited?: string;
    /**
     * The time that the conversation was joined
     */
    joined?: string;
    /**
     * The time that the member left the conversation
     */
    left?: string;
}
export declare class Member extends SpeakeasyBase {
    links?: MemberLinks;
    channel?: MemberChannel;
    /**
     * The display name of the User
     */
    displayName?: string;
    /**
     * Member ID
     */
    id?: string;
    initiator?: MemberInitiator;
    /**
     * The current media state for the member
     */
    media?: MemberMedia;
    /**
     * The name of the User
     */
    name?: string;
    /**
     * The state that the member is in for this conversation
     */
    state?: MemberStateEnum;
    timestamp?: MemberTimestamp;
    /**
     * The ID of the User
     */
    userId?: string;
}
