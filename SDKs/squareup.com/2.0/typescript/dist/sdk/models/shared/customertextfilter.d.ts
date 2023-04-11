import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A filter to select customers based on exact or fuzzy matching of
 *
 * @remarks
 * customer attributes against a specified query. Depending on the customer attributes,
 * the filter can be case-sensitive. This filter can be exact or fuzzy, but it cannot be both.
 */
export declare class CustomerTextFilter extends SpeakeasyBase {
    /**
     * Use the exact filter to select customers whose attributes match exactly the specified query.
     */
    exact?: string;
    /**
     * Use the fuzzy filter to select customers whose attributes match the specified query
     *
     * @remarks
     * in a fuzzy manner. When the fuzzy option is used, search queries are tokenized, and then
     * each query token must be matched somewhere in the searched attribute. For single token queries,
     * this is effectively the same behavior as a partial match operation.
     */
    fuzzy?: string;
}
