import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectDefinition } from "./objectdefinition";
/**
 * The schema definition for a data source.
 */
export declare class Schema extends SpeakeasyBase {
    /**
     * The list of top-level objects for the data source. The maximum number of elements is 10.
     */
    objectDefinitions?: ObjectDefinition[];
    /**
     * IDs of the Long Running Operations (LROs) currently running for this schema. After modifying the schema, wait for operations to complete before indexing additional content.
     */
    operationIds?: string[];
}
