import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a dimension filter.
 */
export declare class DimensionFilter extends SpeakeasyBase {
    /**
     * The name of the dimension to filter.
     */
    dimensionName?: string;
    /**
     * The kind of resource this is, in this case dfareporting#dimensionFilter.
     */
    kind?: string;
    /**
     * The value of the dimension to filter.
     */
    value?: string;
}
