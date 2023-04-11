import { SpeakeasyBase } from "../../../internal/utils";
import { DateOperatorOptions } from "./dateoperatoroptions";
/**
 * The options for date properties.
 */
export declare class DatePropertyOptions extends SpeakeasyBase {
    /**
     * Optional. Provides a search operator for date properties. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
     */
    operatorOptions?: DateOperatorOptions;
}
