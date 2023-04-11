import { SpeakeasyBase } from "../../../internal/utils";
export declare class FlexV1InsightsConversations extends SpeakeasyBase {
    /**
     * The id of the account.
     */
    accountId?: string;
    /**
     * The unique id of the conversation
     */
    conversationId?: string;
    /**
     * The count of segments for a conversation
     */
    segmentCount?: number;
    /**
     * The Segments of a conversation
     */
    segments?: any[];
}
