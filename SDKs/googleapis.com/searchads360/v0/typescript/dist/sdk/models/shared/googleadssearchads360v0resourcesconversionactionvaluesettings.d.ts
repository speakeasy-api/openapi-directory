import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings related to the value for conversion events associated with this conversion action.
 */
export declare class GoogleAdsSearchads360V0ResourcesConversionActionValueSettings extends SpeakeasyBase {
    /**
     * Controls whether the default value and default currency code are used in place of the value and currency code specified in conversion events for this conversion action.
     */
    alwaysUseDefaultValue?: boolean;
    /**
     * The currency code to use when conversion events for this conversion action are sent with an invalid or missing currency code, or when this conversion action is configured to always use the default value.
     */
    defaultCurrencyCode?: string;
    /**
     * The value to use when conversion events for this conversion action are sent with an invalid, disallowed or missing value, or when this conversion action is configured to always use the default value.
     */
    defaultValue?: number;
}
