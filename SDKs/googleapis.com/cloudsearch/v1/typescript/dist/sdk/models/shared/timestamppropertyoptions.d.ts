import { SpeakeasyBase } from "../../../internal/utils";
import { TimestampOperatorOptions } from "./timestampoperatoroptions";
/**
 * The options for timestamp properties.
 */
export declare class TimestampPropertyOptions extends SpeakeasyBase {
    /**
     * Used to provide a search operator for timestamp properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
     */
    operatorOptions?: TimestampOperatorOptions;
}
