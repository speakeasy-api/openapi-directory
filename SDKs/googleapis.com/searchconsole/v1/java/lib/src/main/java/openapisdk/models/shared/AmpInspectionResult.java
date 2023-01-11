package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AmpInspectionResult
 * AMP inspection result of the live page or the current information from Google's index, depending on whether you requested a live inspection or not.
**/
public class AmpInspectionResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ampIndexStatusVerdict")
    public AmpInspectionResultAmpIndexStatusVerdictEnum ampIndexStatusVerdict;
    public AmpInspectionResult withAmpIndexStatusVerdict(AmpInspectionResultAmpIndexStatusVerdictEnum ampIndexStatusVerdict) {
        this.ampIndexStatusVerdict = ampIndexStatusVerdict;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ampUrl")
    public String ampUrl;
    public AmpInspectionResult withAmpUrl(String ampUrl) {
        this.ampUrl = ampUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("indexingState")
    public AmpInspectionResultIndexingStateEnum indexingState;
    public AmpInspectionResult withIndexingState(AmpInspectionResultIndexingStateEnum indexingState) {
        this.indexingState = indexingState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issues")
    public AmpIssue[] issues;
    public AmpInspectionResult withIssues(AmpIssue[] issues) {
        this.issues = issues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastCrawlTime")
    public String lastCrawlTime;
    public AmpInspectionResult withLastCrawlTime(String lastCrawlTime) {
        this.lastCrawlTime = lastCrawlTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageFetchState")
    public AmpInspectionResultPageFetchStateEnum pageFetchState;
    public AmpInspectionResult withPageFetchState(AmpInspectionResultPageFetchStateEnum pageFetchState) {
        this.pageFetchState = pageFetchState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("robotsTxtState")
    public AmpInspectionResultRobotsTxtStateEnum robotsTxtState;
    public AmpInspectionResult withRobotsTxtState(AmpInspectionResultRobotsTxtStateEnum robotsTxtState) {
        this.robotsTxtState = robotsTxtState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verdict")
    public AmpInspectionResultVerdictEnum verdict;
    public AmpInspectionResult withVerdict(AmpInspectionResultVerdictEnum verdict) {
        this.verdict = verdict;
        return this;
    }
}