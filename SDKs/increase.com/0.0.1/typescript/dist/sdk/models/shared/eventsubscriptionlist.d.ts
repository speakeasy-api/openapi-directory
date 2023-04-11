import { SpeakeasyBase } from "../../../internal/utils";
import { EventSubscription } from "./eventsubscription";
/**
 * A list of Event Subscription objects
 */
export declare class EventSubscriptionList extends SpeakeasyBase {
    /**
     * The contents of the list.
     */
    data: EventSubscription[];
    /**
     * A pointer to a place in the list.
     */
    nextCursor: string;
}
