import { SpeakeasyBase } from "../../../internal/utils";
import { Creative } from "./creative";
/**
 * Creative List Response
 */
export declare class CreativesListResponse extends SpeakeasyBase {
    /**
     * Creative collection.
     */
    creatives?: Creative[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativesListResponse".
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
}
