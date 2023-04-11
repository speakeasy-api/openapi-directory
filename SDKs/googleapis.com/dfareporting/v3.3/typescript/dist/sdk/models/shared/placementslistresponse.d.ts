import { SpeakeasyBase } from "../../../internal/utils";
import { Placement } from "./placement";
/**
 * Placement List Response
 */
export declare class PlacementsListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementsListResponse".
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
    /**
     * Placement collection.
     */
    placements?: Placement[];
}
