import { SpeakeasyBase } from "../../../internal/utils";
import { MemberStateEnum } from "./memberstateenum";
/**
 * Retrieve Events Response Payload Object Item
 */
export declare class EventRetrieved extends SpeakeasyBase {
    /**
     * Event Body
     */
    body: Record<string, any>;
    /**
     * Member ID
     */
    from?: string;
    /**
     * A link towards a conversation event included in Conversation API
     */
    href: string;
    /**
     * Event id. This is a progressive integer
     */
    id: string;
    /**
     * The state that the member is in. Possible values are `invited`, `joined`, `left`, or `unknown`
     */
    state?: MemberStateEnum;
    /**
     * Time of creation
     */
    timestamp: string;
    /**
     * Member ID
     */
    to?: string;
    /**
     * Event type
     */
    type: string;
}
