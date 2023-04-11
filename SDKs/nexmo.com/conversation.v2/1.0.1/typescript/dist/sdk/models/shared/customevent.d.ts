import { SpeakeasyBase } from "../../../internal/utils";
export declare class CustomEventLinksSelf extends SpeakeasyBase {
    href?: string;
}
export declare class CustomEventLinks extends SpeakeasyBase {
    self?: CustomEventLinksSelf;
}
/**
 * Custom
 */
export declare class CustomEvent extends SpeakeasyBase {
    links?: CustomEventLinks;
    /**
     * The body of your `custom` event
     */
    body?: Record<string, any>;
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
     * The event type (`custom:<YOUR_IDENTIFIER>`)
     */
    type?: string;
}
