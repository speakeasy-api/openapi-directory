package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MatchingJob
 * Output only. Job entry with metadata inside SearchJobsResponse.
**/
public class MatchingJob {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commuteInfo")
    public CommuteInfo commuteInfo;
    public MatchingJob withCommuteInfo(CommuteInfo commuteInfo) {
        this.commuteInfo = commuteInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("job")
    public Job job;
    public MatchingJob withJob(Job job) {
        this.job = job;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobSummary")
    public String jobSummary;
    public MatchingJob withJobSummary(String jobSummary) {
        this.jobSummary = jobSummary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobTitleSnippet")
    public String jobTitleSnippet;
    public MatchingJob withJobTitleSnippet(String jobTitleSnippet) {
        this.jobTitleSnippet = jobTitleSnippet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("searchTextSnippet")
    public String searchTextSnippet;
    public MatchingJob withSearchTextSnippet(String searchTextSnippet) {
        this.searchTextSnippet = searchTextSnippet;
        return this;
    }
}