import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A year-specific event insight object expressed as a JSON string, separated in to `qual` and `playoff` fields. See also Event_Insights_2016, Event_Insights_2017, etc.
 */
export declare class EventInsights extends SpeakeasyBase {
    /**
     * Insights for the playoff round of an event
     */
    playoff?: Record<string, any>;
    /**
     * Inights for the qualification round of an event
     */
    qual?: Record<string, any>;
}
