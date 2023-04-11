import { SpeakeasyBase } from "../../../internal/utils";
/**
 * JSON template for a subscription renewal settings.
 */
export declare class RenewalSettings extends SpeakeasyBase {
    /**
     * Identifies the resource as a subscription renewal setting. Value: `subscriptions#renewalSettings`
     */
    kind?: string;
    /**
     * Renewal settings for the annual commitment plan. For more detailed information, see renewal options in the administrator help center. When renewing a subscription, the `renewalType` is a required property.
     */
    renewalType?: string;
}
