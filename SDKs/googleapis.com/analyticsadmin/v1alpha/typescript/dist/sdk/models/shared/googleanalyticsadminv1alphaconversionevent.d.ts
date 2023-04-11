import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A conversion event in a Google Analytics property.
 */
export declare class GoogleAnalyticsAdminV1alphaConversionEvent extends SpeakeasyBase {
    /**
     * Output only. Time when this conversion event was created in the property.
     */
    createTime?: string;
    /**
     * Output only. If set to true, this conversion event refers to a custom event. If set to false, this conversion event refers to a default event in GA. Default events typically have special meaning in GA. Default events are usually created for you by the GA system, but in some cases can be created by property admins. Custom events count towards the maximum number of custom conversion events that may be created per property.
     */
    custom?: boolean;
    /**
     * Output only. If set, this event can currently be deleted with DeleteConversionEvent.
     */
    deletable?: boolean;
    /**
     * Immutable. The event name for this conversion event. Examples: 'click', 'purchase'
     */
    eventName?: string;
    /**
     * Output only. Resource name of this conversion event. Format: properties/{property}/conversionEvents/{conversion_event}
     */
    name?: string;
}
/**
 * A conversion event in a Google Analytics property.
 */
export declare class GoogleAnalyticsAdminV1alphaConversionEventInput extends SpeakeasyBase {
    /**
     * Immutable. The event name for this conversion event. Examples: 'click', 'purchase'
     */
    eventName?: string;
}
