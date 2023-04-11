import { SpeakeasyBase } from "../../../internal/utils";
import { EntityType } from "./entitytype";
/**
 * Response message for EntityService.ListEntityTypes
 */
export declare class ListEntityTypesResponse extends SpeakeasyBase {
    /**
     * Next page token if more entity types available.
     */
    nextPageToken?: string;
    /**
     * List of metadata related to all entity types.
     */
    types?: EntityType[];
    /**
     * List of entity type names which contain unsupported Datatypes. Check datatype.proto for more information.
     */
    unsupportedTypeNames?: string[];
}
