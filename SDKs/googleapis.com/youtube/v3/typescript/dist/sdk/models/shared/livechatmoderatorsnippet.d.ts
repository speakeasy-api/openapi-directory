import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelProfileDetails } from "./channelprofiledetails";
export declare class LiveChatModeratorSnippet extends SpeakeasyBase {
    /**
     * The ID of the live chat this moderator can act on.
     */
    liveChatId?: string;
    moderatorDetails?: ChannelProfileDetails;
}
