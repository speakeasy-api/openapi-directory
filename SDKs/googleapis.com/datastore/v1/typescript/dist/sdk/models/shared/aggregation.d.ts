import { SpeakeasyBase } from "../../../internal/utils";
import { Count } from "./count";
/**
 * Defines an aggregation that produces a single result.
 */
export declare class Aggregation extends SpeakeasyBase {
    /**
     * Optional. Optional name of the property to store the result of the aggregation. If not provided, Datastore will pick a default name following the format `property_`. For example: ``` AGGREGATE COUNT_UP_TO(1) AS count_up_to_1, COUNT_UP_TO(2), COUNT_UP_TO(3) AS count_up_to_3, COUNT(*) OVER ( ... ); ``` becomes: ``` AGGREGATE COUNT_UP_TO(1) AS count_up_to_1, COUNT_UP_TO(2) AS property_1, COUNT_UP_TO(3) AS count_up_to_3, COUNT(*) AS property_2 OVER ( ... ); ``` Requires: * Must be unique across all aggregation aliases. * Conform to entity property name limitations.
     */
    alias?: string;
    /**
     * Count of entities that match the query. The `COUNT(*)` aggregation function operates on the entire entity so it does not require a field reference.
     */
    count?: Count;
}
