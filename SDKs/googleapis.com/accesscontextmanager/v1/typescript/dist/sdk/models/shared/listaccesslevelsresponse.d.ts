import { SpeakeasyBase } from "../../../internal/utils";
import { AccessLevel } from "./accesslevel";
/**
 * A response to `ListAccessLevelsRequest`.
 */
export declare class ListAccessLevelsResponse extends SpeakeasyBase {
    /**
     * List of the Access Level instances.
     */
    accessLevels?: AccessLevel[];
    /**
     * The pagination token to retrieve the next page of results. If the value is empty, no further results remain.
     */
    nextPageToken?: string;
}
