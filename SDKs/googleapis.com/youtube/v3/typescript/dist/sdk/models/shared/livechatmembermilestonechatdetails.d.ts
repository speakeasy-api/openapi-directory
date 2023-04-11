import { SpeakeasyBase } from "../../../internal/utils";
export declare class LiveChatMemberMilestoneChatDetails extends SpeakeasyBase {
    /**
     * The name of the Level at which the viever is a member. The Level names are defined by the YouTube channel offering the Membership. In some situations this field isn't filled.
     */
    memberLevelName?: string;
    /**
     * The total amount of months (rounded up) the viewer has been a member that granted them this Member Milestone Chat. This is the same number of months as is being displayed to YouTube users.
     */
    memberMonth?: number;
    /**
     * The comment added by the member to this Member Milestone Chat. This field is empty for messages without a comment from the member.
     */
    userComment?: string;
}
