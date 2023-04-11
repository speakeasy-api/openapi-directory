import { SpeakeasyBase } from "../../../internal/utils";
import { Count } from "./count";
/**
 * Defines an aggregation that produces a single result.
 */
export declare class Aggregation extends SpeakeasyBase {
    /**
     * Optional. Optional name of the field to store the result of the aggregation into. If not provided, Firestore will pick a default name following the format `field_`. For example: ``` AGGREGATE COUNT_UP_TO(1) AS count_up_to_1, COUNT_UP_TO(2), COUNT_UP_TO(3) AS count_up_to_3, COUNT(*) OVER ( ... ); ``` becomes: ``` AGGREGATE COUNT_UP_TO(1) AS count_up_to_1, COUNT_UP_TO(2) AS field_1, COUNT_UP_TO(3) AS count_up_to_3, COUNT(*) AS field_2 OVER ( ... ); ``` Requires: * Must be unique across all aggregation aliases. * Conform to document field name limitations.
     */
    alias?: string;
    /**
     * Count of documents that match the query. The `COUNT(*)` aggregation function operates on the entire document so it does not require a field reference.
     */
    count?: Count;
}
