import { SpeakeasyBase } from "../../../internal/utils";
import { DoubleOperatorOptions } from "./doubleoperatoroptions";
/**
 * The options for double properties.
 */
export declare class DoublePropertyOptions extends SpeakeasyBase {
    /**
     * Used to provide a search operator for double properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
     */
    operatorOptions?: DoubleOperatorOptions;
}
