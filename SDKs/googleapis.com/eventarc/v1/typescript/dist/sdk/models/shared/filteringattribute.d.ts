import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A representation of the FilteringAttribute resource. Filtering attributes are per event type.
 */
export declare class FilteringAttribute extends SpeakeasyBase {
    /**
     * Output only. Attribute used for filtering the event type.
     */
    attribute?: string;
    /**
     * Output only. Description of the purpose of the attribute.
     */
    description?: string;
    /**
     * Output only. If true, the attribute accepts matching expressions in the Eventarc PathPattern format.
     */
    pathPatternSupported?: boolean;
    /**
     * Output only. If true, the triggers for this provider should always specify a filter on these attributes. Trigger creation will fail otherwise.
     */
    required?: boolean;
}
