import { SpeakeasyBase } from "../../../internal/utils";
import { Entity } from "./entity";
/**
 * Response message for EntityService.ListEntities
 */
export declare class ListEntitiesResponse extends SpeakeasyBase {
    /**
     * List containing entity rows.
     */
    entities?: Entity[];
    /**
     * Next page token if more records are available.
     */
    nextPageToken?: string;
}
