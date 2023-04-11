import { SpeakeasyBase } from "../../../internal/utils";
import { EstimationTimePoint } from "./estimationtimepoint";
import { Rate } from "./rate";
/**
 * The price of a SKU at a point int time.
 */
export declare class Price extends SpeakeasyBase {
    /**
     * Represents a point in time.
     */
    effectiveTime?: EstimationTimePoint;
    /**
     * The type of price. Possible values: "RATE"
     */
    priceType?: string;
    /**
     * A SKU price consisting of tiered rates.
     */
    rate?: Rate;
}
