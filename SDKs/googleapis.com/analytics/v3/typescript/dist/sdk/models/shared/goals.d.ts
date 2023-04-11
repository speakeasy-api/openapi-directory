import { SpeakeasyBase } from "../../../internal/utils";
import { Goal } from "./goal";
/**
 * A goal collection lists Analytics goals to which the user has access. Each view (profile) can have a set of goals. Each resource in the Goal collection corresponds to a single Analytics goal.
 */
export declare class Goals extends SpeakeasyBase {
    /**
     * A list of goals.
     */
    items?: Goal[];
    /**
     * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
     */
    itemsPerPage?: number;
    /**
     * Collection type.
     */
    kind?: string;
    /**
     * Link to next page for this goal collection.
     */
    nextLink?: string;
    /**
     * Link to previous page for this goal collection.
     */
    previousLink?: string;
    /**
     * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
     */
    startIndex?: number;
    /**
     * The total number of results for the query, regardless of the number of resources in the result.
     */
    totalResults?: number;
    /**
     * Email ID of the authenticated user
     */
    username?: string;
}
