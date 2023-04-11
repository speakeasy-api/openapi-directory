import { SpeakeasyBase } from "../../../internal/utils";
import { RegionOrders } from "./regionorders";
export declare class CountryOrders extends SpeakeasyBase {
    code?: string;
    /**
     * Number of country orders.
     */
    count?: number;
    country?: string;
    /**
     * Orders per region.
     */
    orders?: RegionOrders[];
}
