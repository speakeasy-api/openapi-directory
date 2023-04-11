import { SpeakeasyBase } from "../../../internal/utils";
export declare class LinksConversationSelf extends SpeakeasyBase {
    /**
     * A link towards a conversation included in Conversation API
     */
    href?: string;
}
export declare class LinksConversation extends SpeakeasyBase {
    self?: LinksConversationSelf;
}
