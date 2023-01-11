package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchJobsRequest
 * Input only. The Request body of the `SearchJobs` call.
**/
public class SearchJobsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customRankingInfo")
    public CustomRankingInfo customRankingInfo;
    public SearchJobsRequest withCustomRankingInfo(CustomRankingInfo customRankingInfo) {
        this.customRankingInfo = customRankingInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disableKeywordMatch")
    public Boolean disableKeywordMatch;
    public SearchJobsRequest withDisableKeywordMatch(Boolean disableKeywordMatch) {
        this.disableKeywordMatch = disableKeywordMatch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diversificationLevel")
    public SearchJobsRequestDiversificationLevelEnum diversificationLevel;
    public SearchJobsRequest withDiversificationLevel(SearchJobsRequestDiversificationLevelEnum diversificationLevel) {
        this.diversificationLevel = diversificationLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableBroadening")
    public Boolean enableBroadening;
    public SearchJobsRequest withEnableBroadening(Boolean enableBroadening) {
        this.enableBroadening = enableBroadening;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("histogramFacets")
    public HistogramFacets histogramFacets;
    public SearchJobsRequest withHistogramFacets(HistogramFacets histogramFacets) {
        this.histogramFacets = histogramFacets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("histogramQueries")
    public HistogramQuery[] histogramQueries;
    public SearchJobsRequest withHistogramQueries(HistogramQuery[] histogramQueries) {
        this.histogramQueries = histogramQueries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobQuery")
    public JobQuery jobQuery;
    public SearchJobsRequest withJobQuery(JobQuery jobQuery) {
        this.jobQuery = jobQuery;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobView")
    public SearchJobsRequestJobViewEnum jobView;
    public SearchJobsRequest withJobView(SearchJobsRequestJobViewEnum jobView) {
        this.jobView = jobView;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offset")
    public Integer offset;
    public SearchJobsRequest withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderBy")
    public String orderBy;
    public SearchJobsRequest withOrderBy(String orderBy) {
        this.orderBy = orderBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageSize")
    public Integer pageSize;
    public SearchJobsRequest withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageToken")
    public String pageToken;
    public SearchJobsRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestMetadata")
    public RequestMetadata requestMetadata;
    public SearchJobsRequest withRequestMetadata(RequestMetadata requestMetadata) {
        this.requestMetadata = requestMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requirePreciseResultSize")
    public Boolean requirePreciseResultSize;
    public SearchJobsRequest withRequirePreciseResultSize(Boolean requirePreciseResultSize) {
        this.requirePreciseResultSize = requirePreciseResultSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("searchMode")
    public SearchJobsRequestSearchModeEnum searchMode;
    public SearchJobsRequest withSearchMode(SearchJobsRequestSearchModeEnum searchMode) {
        this.searchMode = searchMode;
        return this;
    }
}