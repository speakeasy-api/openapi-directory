import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProductGroup extends SpeakeasyBase {
    /**
     * Primary key of a grouping of related Subscriptions
     */
    productGroupKey: string;
    /**
     * The number of Subscriptions that the shopper owns in this group
     */
    subscriptionCount: number;
}
