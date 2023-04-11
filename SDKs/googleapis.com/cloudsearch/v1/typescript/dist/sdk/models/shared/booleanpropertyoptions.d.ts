import { SpeakeasyBase } from "../../../internal/utils";
import { BooleanOperatorOptions } from "./booleanoperatoroptions";
/**
 * The options for boolean properties.
 */
export declare class BooleanPropertyOptions extends SpeakeasyBase {
    /**
     * Used to provide a search operator for boolean properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
     */
    operatorOptions?: BooleanOperatorOptions;
}
