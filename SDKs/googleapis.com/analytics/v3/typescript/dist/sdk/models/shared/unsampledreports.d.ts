import { SpeakeasyBase } from "../../../internal/utils";
import { UnsampledReport } from "./unsampledreport";
/**
 * An unsampled report collection lists Analytics unsampled reports to which the user has access. Each view (profile) can have a set of unsampled reports. Each resource in the unsampled report collection corresponds to a single Analytics unsampled report.
 */
export declare class UnsampledReports extends SpeakeasyBase {
    /**
     * A list of unsampled reports.
     */
    items?: UnsampledReport[];
    /**
     * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
     */
    itemsPerPage?: number;
    /**
     * Collection type.
     */
    kind?: string;
    /**
     * Link to next page for this unsampled report collection.
     */
    nextLink?: string;
    /**
     * Link to previous page for this unsampled report collection.
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
