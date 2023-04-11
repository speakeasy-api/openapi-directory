import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
export declare class ProductSubscriptionCost extends SpeakeasyBase {
    amount?: Price;
    /**
     * The type of subscription period.
     */
    period?: string;
    /**
     * The number of subscription periods the buyer has to pay.
     */
    periodLength?: string;
}
