package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchJobsResponse
 * Output only. Response for SearchJob method.
**/
public class SearchJobsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("broadenedQueryJobsCount")
    public Integer broadenedQueryJobsCount;
    public SearchJobsResponse withBroadenedQueryJobsCount(Integer broadenedQueryJobsCount) {
        this.broadenedQueryJobsCount = broadenedQueryJobsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("estimatedTotalSize")
    public Integer estimatedTotalSize;
    public SearchJobsResponse withEstimatedTotalSize(Integer estimatedTotalSize) {
        this.estimatedTotalSize = estimatedTotalSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("histogramQueryResults")
    public HistogramQueryResult[] histogramQueryResults;
    public SearchJobsResponse withHistogramQueryResults(HistogramQueryResult[] histogramQueryResults) {
        this.histogramQueryResults = histogramQueryResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("histogramResults")
    public HistogramResults histogramResults;
    public SearchJobsResponse withHistogramResults(HistogramResults histogramResults) {
        this.histogramResults = histogramResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationFilters")
    public Location[] locationFilters;
    public SearchJobsResponse withLocationFilters(Location[] locationFilters) {
        this.locationFilters = locationFilters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchingJobs")
    public MatchingJob[] matchingJobs;
    public SearchJobsResponse withMatchingJobs(MatchingJob[] matchingJobs) {
        this.matchingJobs = matchingJobs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public ResponseMetadata metadata;
    public SearchJobsResponse withMetadata(ResponseMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public SearchJobsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spellCorrection")
    public SpellingCorrection spellCorrection;
    public SearchJobsResponse withSpellCorrection(SpellingCorrection spellCorrection) {
        this.spellCorrection = spellCorrection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalSize")
    public Integer totalSize;
    public SearchJobsResponse withTotalSize(Integer totalSize) {
        this.totalSize = totalSize;
        return this;
    }
}