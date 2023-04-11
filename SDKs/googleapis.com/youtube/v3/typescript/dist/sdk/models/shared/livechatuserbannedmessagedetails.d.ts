import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelProfileDetails } from "./channelprofiledetails";
/**
 * The type of ban.
 */
export declare enum LiveChatUserBannedMessageDetailsBanTypeEnum {
    Permanent = "permanent",
    Temporary = "temporary"
}
export declare class LiveChatUserBannedMessageDetails extends SpeakeasyBase {
    /**
     * The duration of the ban. This property is only present if the banType is temporary.
     */
    banDurationSeconds?: string;
    /**
     * The type of ban.
     */
    banType?: LiveChatUserBannedMessageDetailsBanTypeEnum;
    bannedUserDetails?: ChannelProfileDetails;
}
