import { SpeakeasyBase } from "../../../internal/utils";
import { CustomEventClickAnnotation } from "./customeventclickannotation";
import { CustomEventImpressionAnnotation } from "./customeventimpressionannotation";
import { CustomEventInsert } from "./customeventinsert";
import { CustomVariable } from "./customvariable";
/**
 * The type of event. If INSERT, the fields in insertEvent need to be populated. If ANNOTATE, the fields in either annotateClickEvent or annotateImpressionEvent need to be populated.
 */
export declare enum CustomEventEventTypeEnum {
    Unknown = "UNKNOWN",
    Insert = "INSERT",
    Annotate = "ANNOTATE"
}
/**
 * Experimental feature (no support provided) A custom event represents a third party impression, a third party click, an annotation on a first party impression, or an annotation on a first party click.
 */
export declare class CustomEvent extends SpeakeasyBase {
    /**
     * Annotate a click event.
     */
    annotateClickEvent?: CustomEventClickAnnotation;
    /**
     * Annotate an impression.
     */
    annotateImpressionEvent?: CustomEventImpressionAnnotation;
    /**
     * Custom variables associated with the event.
     */
    customVariables?: CustomVariable[];
    /**
     * The type of event. If INSERT, the fields in insertEvent need to be populated. If ANNOTATE, the fields in either annotateClickEvent or annotateImpressionEvent need to be populated.
     */
    eventType?: CustomEventEventTypeEnum;
    /**
     * Floodlight configuration ID of the advertiser the event is linked to. This is a required field.
     */
    floodlightConfigurationId?: string;
    /**
     * Custom event to be inserted.
     */
    insertEvent?: CustomEventInsert;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#customEvent".
     */
    kind?: string;
    /**
     * The ordinal of this custom event. This is a required field.
     */
    ordinal?: string;
    /**
     * The timestamp of this custom event, in Unix epoch micros. This is a required field.
     */
    timestampMicros?: string;
}
