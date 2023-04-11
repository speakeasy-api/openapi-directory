import { SpeakeasyBase } from "../../../internal/utils";
import { EditorialLivefeed } from "./editoriallivefeed";
/**
 * List of editorial livefeeds
 */
export declare class EditorialLivefeedList extends SpeakeasyBase {
    /**
     * Editorial livefeeds
     */
    data: EditorialLivefeed[];
    /**
     * Optional error message
     */
    message?: string;
    /**
     * Current page of the response
     */
    page?: number;
    /**
     * Number of results per page
     */
    perPage?: number;
    /**
     * Total count of all results
     */
    totalCount: number;
}
