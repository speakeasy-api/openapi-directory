import { SpeakeasyBase } from "../../../internal/utils";
import { ActivityLinks } from "./activitylinks";
/**
 * Currently there are two available activity types; 'translated', 'proofread'.
 */
export declare enum ActivityTypeEnum {
    Translated = "translated",
    Proofread = "proofread"
}
/**
 * Activity model
 */
export declare class Activity extends SpeakeasyBase {
    /**
     * Unix epoch time
     */
    activityAt?: number;
    id?: number;
    links?: ActivityLinks;
    /**
     * Source text
     */
    sourceText?: string;
    /**
     * Target text of the activity, which is actually the translation of the source text.
     */
    targetText?: string;
    /**
     * Unique identifier of the translator/proofreader of this activity.
     */
    translator?: number;
    /**
     * Currently there are two available activity types; 'translated', 'proofread'.
     */
    type?: ActivityTypeEnum;
}
