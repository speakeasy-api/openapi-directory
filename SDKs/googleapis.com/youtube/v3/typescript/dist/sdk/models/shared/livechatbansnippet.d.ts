import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelProfileDetails } from "./channelprofiledetails";
/**
 * The type of ban.
 */
export declare enum LiveChatBanSnippetTypeEnum {
    LiveChatBanTypeUnspecified = "liveChatBanTypeUnspecified",
    Permanent = "permanent",
    Temporary = "temporary"
}
export declare class LiveChatBanSnippet extends SpeakeasyBase {
    /**
     * The duration of a ban, only filled if the ban has type TEMPORARY.
     */
    banDurationSeconds?: string;
    bannedUserDetails?: ChannelProfileDetails;
    /**
     * The chat this ban is pertinent to.
     */
    liveChatId?: string;
    /**
     * The type of ban.
     */
    type?: LiveChatBanSnippetTypeEnum;
}
