import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the value of a single dimension.
 */
export declare class GooglePlayDeveloperReportingV1alpha1DimensionValue extends SpeakeasyBase {
    /**
     * Name of the dimension.
     */
    dimension?: string;
    /**
     * Actual value, represented as an int64.
     */
    int64Value?: string;
    /**
     * Actual value, represented as a string.
     */
    stringValue?: string;
    /**
     * Optional. Human-friendly label for the value, always in English. For example, 'Spain' for the 'ES' country code. Whereas the dimension value is stable, this value label is subject to change. Do not assume that the (value, value_label) relationship is stable. For example, the ISO country code 'MK' changed its name recently to 'North Macedonia'.
     */
    valueLabel?: string;
}
