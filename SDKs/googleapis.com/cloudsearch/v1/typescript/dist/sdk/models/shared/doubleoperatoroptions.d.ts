import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Used to provide a search operator for double properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
 */
export declare class DoubleOperatorOptions extends SpeakeasyBase {
    /**
     * Indicates the operator name required in the query in order to use the double property in sorting or as a facet. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.
     */
    operatorName?: string;
}
