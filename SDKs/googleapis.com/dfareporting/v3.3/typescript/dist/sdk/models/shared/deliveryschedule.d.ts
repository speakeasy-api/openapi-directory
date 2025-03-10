import { SpeakeasyBase } from "../../../internal/utils";
import { FrequencyCap } from "./frequencycap";
/**
 * Serving priority of an ad, with respect to other ads. The lower the priority number, the greater the priority with which it is served.
 */
export declare enum DeliverySchedulePriorityEnum {
    AdPriority01 = "AD_PRIORITY_01",
    AdPriority02 = "AD_PRIORITY_02",
    AdPriority03 = "AD_PRIORITY_03",
    AdPriority04 = "AD_PRIORITY_04",
    AdPriority05 = "AD_PRIORITY_05",
    AdPriority06 = "AD_PRIORITY_06",
    AdPriority07 = "AD_PRIORITY_07",
    AdPriority08 = "AD_PRIORITY_08",
    AdPriority09 = "AD_PRIORITY_09",
    AdPriority10 = "AD_PRIORITY_10",
    AdPriority11 = "AD_PRIORITY_11",
    AdPriority12 = "AD_PRIORITY_12",
    AdPriority13 = "AD_PRIORITY_13",
    AdPriority14 = "AD_PRIORITY_14",
    AdPriority15 = "AD_PRIORITY_15",
    AdPriority16 = "AD_PRIORITY_16"
}
/**
 * Delivery Schedule.
 */
export declare class DeliverySchedule extends SpeakeasyBase {
    /**
     * Frequency Cap.
     */
    frequencyCap?: FrequencyCap;
    /**
     * Whether or not hard cutoff is enabled. If true, the ad will not serve after the end date and time. Otherwise the ad will continue to be served until it has reached its delivery goals.
     */
    hardCutoff?: boolean;
    /**
     * Impression ratio for this ad. This ratio determines how often each ad is served relative to the others. For example, if ad A has an impression ratio of 1 and ad B has an impression ratio of 3, then Campaign Manager will serve ad B three times as often as ad A. Acceptable values are 1 to 10, inclusive.
     */
    impressionRatio?: string;
    /**
     * Serving priority of an ad, with respect to other ads. The lower the priority number, the greater the priority with which it is served.
     */
    priority?: DeliverySchedulePriorityEnum;
}
