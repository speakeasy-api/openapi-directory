import { SpeakeasyBase } from "../../../internal/utils";
export declare class LinksConversationsListSelf extends SpeakeasyBase {
    /**
     * A link towards a conversations list included in Conversation API
     */
    href: string;
}
/**
 * A series of links between resources in this API in the http://stateless.co/hal_specification.html.
 */
export declare class LinksConversationsList extends SpeakeasyBase {
    self: LinksConversationsListSelf;
}
