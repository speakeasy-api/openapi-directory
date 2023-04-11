import { SpeakeasyBase } from "../../../internal/utils";
import { CompositeFilter } from "./compositefilter";
import { FieldFilter } from "./fieldfilter";
import { UnaryFilter } from "./unaryfilter";
/**
 * A filter.
 */
export declare class Filter extends SpeakeasyBase {
    /**
     * A filter that merges multiple other filters using the given operator.
     */
    compositeFilter?: CompositeFilter;
    /**
     * A filter on a specific field.
     */
    fieldFilter?: FieldFilter;
    /**
     * A filter with a single operand.
     */
    unaryFilter?: UnaryFilter;
}
