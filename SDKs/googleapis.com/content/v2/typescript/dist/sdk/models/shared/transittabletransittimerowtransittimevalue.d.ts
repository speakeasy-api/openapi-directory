import { SpeakeasyBase } from "../../../internal/utils";
export declare class TransitTableTransitTimeRowTransitTimeValue extends SpeakeasyBase {
    /**
     * Must be greater than or equal to `minTransitTimeInDays`.
     */
    maxTransitTimeInDays?: number;
    /**
     * Transit time range (min-max) in business days. 0 means same day delivery, 1 means next day delivery.
     */
    minTransitTimeInDays?: number;
}
