import { SpeakeasyBase } from "../../../internal/utils";
import { PlaceActionTypeMetadata } from "./placeactiontypemetadata";
/**
 * Response message for PlaceActions.ListPlaceActionTypeMetadata.
 */
export declare class ListPlaceActionTypeMetadataResponse extends SpeakeasyBase {
    /**
     * If the number of action types exceeded the requested page size, this field will be populated with a token to fetch the next page on a subsequent call to `placeActionTypeMetadata.list`. If there are no more results, this field will not be present in the response.
     */
    nextPageToken?: string;
    /**
     * A collection of metadata for the available place action types.
     */
    placeActionTypeMetadata?: PlaceActionTypeMetadata[];
}
