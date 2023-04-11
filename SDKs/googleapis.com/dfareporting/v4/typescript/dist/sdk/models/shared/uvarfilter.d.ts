import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates how the filter should be matched to the values.
 */
export declare enum UvarFilterMatchEnum {
    Unspecified = "UNSPECIFIED",
    Exact = "EXACT",
    Contains = "CONTAINS"
}
/**
 * Defines the filtering on a single uvar.
 */
export declare class UvarFilter extends SpeakeasyBase {
    /**
     * Return rows which don't match this filter.
     */
    complement?: boolean;
    /**
     * Custom variable index the filter is applied to.
     */
    index?: string;
    /**
     * The kind of resource this is, in this case dfareporting#uvarFilter.
     */
    kind?: string;
    /**
     * Indicates how the filter should be matched to the values.
     */
    match?: UvarFilterMatchEnum;
    /**
     * Values to filter on.
     */
    values?: string[];
}
