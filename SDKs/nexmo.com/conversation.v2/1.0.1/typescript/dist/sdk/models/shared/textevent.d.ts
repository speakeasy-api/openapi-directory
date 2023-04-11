import { SpeakeasyBase } from "../../../internal/utils";
export declare class TextEventLinksSelf extends SpeakeasyBase {
    href?: string;
}
export declare class TextEventLinks extends SpeakeasyBase {
    self?: TextEventLinksSelf;
}
/**
 * The body of the `text` event
 */
export declare class TextEventBody extends SpeakeasyBase {
    /**
     * The text sent in this event
     */
    text?: string;
}
/**
 * Text
 */
export declare class TextEvent extends SpeakeasyBase {
    links?: TextEventLinks;
    /**
     * The body of the `text` event
     */
    body?: TextEventBody;
    /**
     * The ID of the Conversation that the member belongs to
     */
    conversationId?: string;
    /**
     * The member ID of the sender
     */
    from?: string;
    /**
     * The ID of the event
     */
    id?: number;
    /**
     * The time that the event happened
     */
    timestamp?: string;
    /**
     * The event type (`text`)
     */
    type?: string;
}
