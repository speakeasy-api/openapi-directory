import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Filters events based on exact matches on the CloudEvents attributes.
 */
export declare class EventFilter extends SpeakeasyBase {
    /**
     * Required. The name of a CloudEvents attribute. Currently, only a subset of attributes are supported for filtering. All triggers MUST provide a filter for the 'type' attribute.
     */
    attribute?: string;
    /**
     * Optional. The operator used for matching the events with the value of the filter. If not specified, only events that have an exact key-value pair specified in the filter are matched. The only allowed value is `match-path-pattern`.
     */
    operator?: string;
    /**
     * Required. The value for the attribute.
     */
    value?: string;
}
