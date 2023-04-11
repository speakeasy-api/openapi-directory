import { SpeakeasyBase } from "../../../internal/utils";
import { HistogramQueryResult } from "./histogramqueryresult";
import { Location } from "./location";
import { MatchingJob } from "./matchingjob";
import { ResponseMetadata } from "./responsemetadata";
import { SpellingCorrection } from "./spellingcorrection";
/**
 * Response for SearchJob method.
 */
export declare class SearchJobsResponse extends SpeakeasyBase {
    /**
     * If query broadening is enabled, we may append additional results from the broadened query. This number indicates how many of the jobs returned in the jobs field are from the broadened query. These results are always at the end of the jobs list. In particular, a value of 0, or if the field isn't set, all the jobs in the jobs list are from the original (without broadening) query. If this field is non-zero, subsequent requests with offset after this result set should contain all broadened results.
     */
    broadenedQueryJobsCount?: number;
    /**
     * The histogram results that match with specified SearchJobsRequest.histogram_queries.
     */
    histogramQueryResults?: HistogramQueryResult[];
    /**
     * The location filters that the service applied to the specified query. If any filters are lat-lng based, the Location.location_type is Location.LocationType.LOCATION_TYPE_UNSPECIFIED.
     */
    locationFilters?: Location[];
    /**
     * The Job entities that match the specified SearchJobsRequest.
     */
    matchingJobs?: MatchingJob[];
    /**
     * Additional information returned to client, such as debugging information.
     */
    metadata?: ResponseMetadata;
    /**
     * The token that specifies the starting position of the next page of results. This field is empty if there are no more results.
     */
    nextPageToken?: string;
    /**
     * Spell check result.
     */
    spellCorrection?: SpellingCorrection;
    /**
     * Number of jobs that match the specified query. Note: This size is precise only if the total is less than 100,000.
     */
    totalSize?: number;
}
