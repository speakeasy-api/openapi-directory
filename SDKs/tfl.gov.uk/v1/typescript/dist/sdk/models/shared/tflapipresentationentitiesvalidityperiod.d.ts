import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a period for which a planned works is valid.
 */
export declare class TflApiPresentationEntitiesValidityPeriod extends SpeakeasyBase {
    /**
     * Gets or sets the start date.
     */
    fromDate?: Date;
    /**
     * If true is a realtime status rather than planned or info
     */
    isNow?: boolean;
    /**
     * Gets or sets the end date.
     */
    toDate?: Date;
}
