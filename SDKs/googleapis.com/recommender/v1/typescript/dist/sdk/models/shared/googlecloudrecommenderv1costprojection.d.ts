import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeMoney } from "./googletypemoney";
/**
 * Contains metadata about how much money a recommendation can save or incur.
 */
export declare class GoogleCloudRecommenderV1CostProjection extends SpeakeasyBase {
    /**
     * Represents an amount of money with its currency type.
     */
    cost?: GoogleTypeMoney;
    /**
     * Duration for which this cost applies.
     */
    duration?: string;
}
