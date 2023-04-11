import { SpeakeasyBase } from "../../../internal/utils";
export declare class LoyaltyPoints extends SpeakeasyBase {
    /**
     * Name of loyalty points program. It is recommended to limit the name to 12 full-width characters or 24 Roman characters.
     */
    name?: string;
    /**
     * The retailer's loyalty points in absolute value.
     */
    pointsValue?: string;
    /**
     * The ratio of a point when converted to currency. Google assumes currency based on Merchant Center settings. If ratio is left out, it defaults to 1.0.
     */
    ratio?: number;
}
