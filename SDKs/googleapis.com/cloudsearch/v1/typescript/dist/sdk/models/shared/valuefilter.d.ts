import { SpeakeasyBase } from "../../../internal/utils";
import { Value } from "./value";
export declare class ValueFilter extends SpeakeasyBase {
    /**
     * The `operator_name` applied to the query, such as *price_greater_than*. The filter can work against both types of filters defined in the schema for your data source: 1. `operator_name`, where the query filters results by the property that matches the value. 2. `greater_than_operator_name` or `less_than_operator_name` in your schema. The query filters the results for the property values that are greater than or less than the supplied value in the query.
     */
    operatorName?: string;
    /**
     * Definition of a single value with generic type.
     */
    value?: Value;
}
