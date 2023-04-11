import { SpeakeasyBase } from "../../../internal/utils";
export declare class ConversationListLinksSelf extends SpeakeasyBase {
    href?: string;
}
export declare class ConversationListLinks extends SpeakeasyBase {
    self?: ConversationListLinksSelf;
}
export declare class ConversationListTimestamp extends SpeakeasyBase {
    /**
     * The time that the conversation was created
     */
    created?: string;
}
export declare class ConversationList extends SpeakeasyBase {
    links?: ConversationListLinks;
    /**
     * The public facing name of the conversation
     */
    displayName?: string;
    /**
     * The ID of the conversation
     */
    id?: string;
    /**
     * An image URL that you associate with the conversation
     */
    imageUrl?: string;
    /**
     * Your internal conversation name. Must be unique
     */
    name?: string;
    timestamp?: ConversationListTimestamp;
}
