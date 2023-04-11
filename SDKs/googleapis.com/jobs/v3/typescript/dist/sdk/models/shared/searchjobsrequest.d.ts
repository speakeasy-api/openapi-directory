import { SpeakeasyBase } from "../../../internal/utils";
import { HistogramFacets } from "./histogramfacets";
import { JobQuery } from "./jobquery";
import { RequestMetadata } from "./requestmetadata";
/**
 * Optional. Controls whether highly similar jobs are returned next to each other in the search results. Jobs are identified as highly similar based on their titles, job categories, and locations. Highly similar results are clustered so that only one representative job of the cluster is displayed to the job seeker higher up in the results, with the other jobs being displayed lower down in the results. Defaults to DiversificationLevel.SIMPLE if no value is specified.
 */
export declare enum SearchJobsRequestDiversificationLevelEnum {
    DiversificationLevelUnspecified = "DIVERSIFICATION_LEVEL_UNSPECIFIED",
    Disabled = "DISABLED",
    Simple = "SIMPLE"
}
/**
 * Optional. The desired job attributes returned for jobs in the search response. Defaults to JobView.SMALL if no value is specified.
 */
export declare enum SearchJobsRequestJobViewEnum {
    JobViewUnspecified = "JOB_VIEW_UNSPECIFIED",
    JobViewIdOnly = "JOB_VIEW_ID_ONLY",
    JobViewMinimal = "JOB_VIEW_MINIMAL",
    JobViewSmall = "JOB_VIEW_SMALL",
    JobViewFull = "JOB_VIEW_FULL"
}
/**
 * Optional. Mode of a search. Defaults to SearchMode.JOB_SEARCH.
 */
export declare enum SearchJobsRequestSearchModeEnum {
    SearchModeUnspecified = "SEARCH_MODE_UNSPECIFIED",
    JobSearch = "JOB_SEARCH",
    FeaturedJobSearch = "FEATURED_JOB_SEARCH"
}
/**
 * Input only. The Request body of the `SearchJobs` call.
 */
export declare class SearchJobsRequest extends SpeakeasyBase {
    /**
     * Optional. Controls whether to disable exact keyword match on Job.job_title, Job.description, Job.company_display_name, Job.locations, Job.qualifications. When disable keyword match is turned off, a keyword match returns jobs that do not match given category filters when there are matching keywords. For example, the query "program manager," a result is returned even if the job posting has the title "software developer," which does not fall into "program manager" ontology, but does have "program manager" appearing in its description. For queries like "cloud" that does not contain title or location specific ontology, jobs with "cloud" keyword matches are returned regardless of this flag's value. Please use Company.keyword_searchable_custom_fields or Company.keyword_searchable_custom_attributes if company specific globally matched custom field/attribute string values is needed. Enabling keyword match improves recall of subsequent search requests. Defaults to false.
     */
    disableKeywordMatch?: boolean;
    /**
     * Optional. Controls whether highly similar jobs are returned next to each other in the search results. Jobs are identified as highly similar based on their titles, job categories, and locations. Highly similar results are clustered so that only one representative job of the cluster is displayed to the job seeker higher up in the results, with the other jobs being displayed lower down in the results. Defaults to DiversificationLevel.SIMPLE if no value is specified.
     */
    diversificationLevel?: SearchJobsRequestDiversificationLevelEnum;
    /**
     * Optional. Controls whether to broaden the search when it produces sparse results. Broadened queries append results to the end of the matching results list. Defaults to false.
     */
    enableBroadening?: boolean;
    /**
     * Input only. Histogram facets to be specified in SearchJobsRequest.
     */
    histogramFacets?: HistogramFacets;
    /**
     * Input only. The query required to perform a search query.
     */
    jobQuery?: JobQuery;
    /**
     * Optional. The desired job attributes returned for jobs in the search response. Defaults to JobView.SMALL if no value is specified.
     */
    jobView?: SearchJobsRequestJobViewEnum;
    /**
     * Optional. An integer that specifies the current offset (that is, starting result location, amongst the jobs deemed by the API as relevant) in search results. This field is only considered if page_token is unset. The maximum allowed value is 5000. Otherwise an error is thrown. For example, 0 means to return results starting from the first matching job, and 10 means to return from the 11th job. This can be used for pagination, (for example, pageSize = 10 and offset = 10 means to return from the second page).
     */
    offset?: number;
    /**
     * Optional. The criteria determining how search results are sorted. Default is "relevance desc". Supported options are: * `"relevance desc"`: By relevance descending, as determined by the API algorithms. Relevance thresholding of query results is only available with this ordering. * `"posting_publish_time desc"`: By Job.posting_publish_time descending. * `"posting_update_time desc"`: By Job.posting_update_time descending. * `"title"`: By Job.title ascending. * `"title desc"`: By Job.title descending. * `"annualized_base_compensation"`: By job's CompensationInfo.annualized_base_compensation_range ascending. Jobs whose annualized base compensation is unspecified are put at the end of search results. * `"annualized_base_compensation desc"`: By job's CompensationInfo.annualized_base_compensation_range descending. Jobs whose annualized base compensation is unspecified are put at the end of search results. * `"annualized_total_compensation"`: By job's CompensationInfo.annualized_total_compensation_range ascending. Jobs whose annualized base compensation is unspecified are put at the end of search results. * `"annualized_total_compensation desc"`: By job's CompensationInfo.annualized_total_compensation_range descending. Jobs whose annualized base compensation is unspecified are put at the end of search results.
     */
    orderBy?: string;
    /**
     * Optional. A limit on the number of jobs returned in the search results. Increasing this value above the default value of 10 can increase search response time. The value can be between 1 and 100.
     */
    pageSize?: number;
    /**
     * Optional. The token specifying the current offset within search results. See SearchJobsResponse.next_page_token for an explanation of how to obtain the next set of query results.
     */
    pageToken?: string;
    /**
     * Input only. Meta information related to the job searcher or entity conducting the job search. This information is used to improve the performance of the service.
     */
    requestMetadata?: RequestMetadata;
    /**
     * This field is deprecated.
     */
    requirePreciseResultSize?: boolean;
    /**
     * Optional. Mode of a search. Defaults to SearchMode.JOB_SEARCH.
     */
    searchMode?: SearchJobsRequestSearchModeEnum;
}
