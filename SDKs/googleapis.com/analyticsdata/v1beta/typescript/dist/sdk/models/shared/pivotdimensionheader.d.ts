import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";
/**
 * Summarizes dimension values from a row for this pivot.
 */
export declare class PivotDimensionHeader extends SpeakeasyBase {
    /**
     * Values of multiple dimensions in a pivot.
     */
    dimensionValues?: DimensionValue[];
}
