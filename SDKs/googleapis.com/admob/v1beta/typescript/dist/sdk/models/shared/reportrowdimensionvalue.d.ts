import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Representation of a dimension value.
 */
export declare class ReportRowDimensionValue extends SpeakeasyBase {
    /**
     * The localized string representation of the value. If unspecified, the display label should be derived from the value.
     */
    displayLabel?: string;
    /**
     * Dimension value in the format specified in the report's spec Dimension enum.
     */
    value?: string;
}
