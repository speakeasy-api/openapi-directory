import { SpeakeasyBase } from "../../../internal/utils";
export declare class SubscriptionRelations extends SpeakeasyBase {
    /**
     * A set of related Subscriptions that will be canceled automatically if this Subscription is canceled
     */
    children?: string[];
    /**
     * Unique identifier of this Subscription's parent
     */
    parent?: string;
}
