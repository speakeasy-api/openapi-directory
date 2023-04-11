import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The creation source filter.
 *
 * @remarks
 *
 * If one or more creation sources are set, customer profiles are included in,
 * or excluded from, the result if they match at least one of the filter criteria.
 */
export declare class CustomerCreationSourceFilter extends SpeakeasyBase {
    /**
     * Indicates whether a customer profile matching the filter criteria
     *
     * @remarks
     * should be included in the result or excluded from the result.
     *
     * Default: `INCLUDE`.
     */
    rule?: string;
    /**
     * The list of creation sources used as filtering criteria.
     */
    values?: string[];
}
