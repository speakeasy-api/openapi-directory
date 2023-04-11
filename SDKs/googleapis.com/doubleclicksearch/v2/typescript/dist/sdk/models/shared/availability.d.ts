import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A message containing availability data relevant to DoubleClick Search.
 */
export declare class Availability extends SpeakeasyBase {
    /**
     * DS advertiser ID.
     */
    advertiserId?: string;
    /**
     * DS agency ID.
     */
    agencyId?: string;
    /**
     * The time by which all conversions have been uploaded, in epoch millis UTC.
     */
    availabilityTimestamp?: string;
    /**
     * Customer ID of a client account in the new Search Ads 360 experience.
     */
    customerId?: string;
    /**
     * The numeric segmentation identifier (for example, DoubleClick Search Floodlight activity ID).
     */
    segmentationId?: string;
    /**
     * The friendly segmentation identifier (for example, DoubleClick Search Floodlight activity name).
     */
    segmentationName?: string;
    /**
     * The segmentation type that this availability is for (its default value is `FLOODLIGHT`).
     */
    segmentationType?: string;
}
