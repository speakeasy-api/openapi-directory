import { SpeakeasyBase } from "../../../internal/utils";
export declare class OrderLineItemReturnInfo extends SpeakeasyBase {
    /**
     * Required. How many days later the item can be returned.
     */
    daysToReturn?: number;
    /**
     * Required. Whether the item is returnable.
     */
    isReturnable?: boolean;
    /**
     * Required. URL of the item return policy.
     */
    policyUrl?: string;
}
