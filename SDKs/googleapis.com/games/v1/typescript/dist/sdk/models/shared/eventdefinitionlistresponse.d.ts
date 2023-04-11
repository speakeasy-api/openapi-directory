import { SpeakeasyBase } from "../../../internal/utils";
import { EventDefinition } from "./eventdefinition";
/**
 * A ListDefinitions response.
 */
export declare class EventDefinitionListResponse extends SpeakeasyBase {
    /**
     * The event definitions.
     */
    items?: EventDefinition[];
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#eventDefinitionListResponse`.
     */
    kind?: string;
    /**
     * The pagination token for the next page of results.
     */
    nextPageToken?: string;
}
