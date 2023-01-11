package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IndexStatusInspectionResult
 * Results of index status inspection for either the live page or the version in Google's index, depending on whether you requested a live inspection or not. For more information, see the [Index coverage report documentation](https://support.google.com/webmasters/answer/7440203).
**/
public class IndexStatusInspectionResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coverageState")
    public String coverageState;
    public IndexStatusInspectionResult withCoverageState(String coverageState) {
        this.coverageState = coverageState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crawledAs")
    public IndexStatusInspectionResultCrawledAsEnum crawledAs;
    public IndexStatusInspectionResult withCrawledAs(IndexStatusInspectionResultCrawledAsEnum crawledAs) {
        this.crawledAs = crawledAs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleCanonical")
    public String googleCanonical;
    public IndexStatusInspectionResult withGoogleCanonical(String googleCanonical) {
        this.googleCanonical = googleCanonical;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("indexingState")
    public IndexStatusInspectionResultIndexingStateEnum indexingState;
    public IndexStatusInspectionResult withIndexingState(IndexStatusInspectionResultIndexingStateEnum indexingState) {
        this.indexingState = indexingState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastCrawlTime")
    public String lastCrawlTime;
    public IndexStatusInspectionResult withLastCrawlTime(String lastCrawlTime) {
        this.lastCrawlTime = lastCrawlTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageFetchState")
    public IndexStatusInspectionResultPageFetchStateEnum pageFetchState;
    public IndexStatusInspectionResult withPageFetchState(IndexStatusInspectionResultPageFetchStateEnum pageFetchState) {
        this.pageFetchState = pageFetchState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("referringUrls")
    public String[] referringUrls;
    public IndexStatusInspectionResult withReferringUrls(String[] referringUrls) {
        this.referringUrls = referringUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("robotsTxtState")
    public IndexStatusInspectionResultRobotsTxtStateEnum robotsTxtState;
    public IndexStatusInspectionResult withRobotsTxtState(IndexStatusInspectionResultRobotsTxtStateEnum robotsTxtState) {
        this.robotsTxtState = robotsTxtState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sitemap")
    public String[] sitemap;
    public IndexStatusInspectionResult withSitemap(String[] sitemap) {
        this.sitemap = sitemap;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userCanonical")
    public String userCanonical;
    public IndexStatusInspectionResult withUserCanonical(String userCanonical) {
        this.userCanonical = userCanonical;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verdict")
    public IndexStatusInspectionResultVerdictEnum verdict;
    public IndexStatusInspectionResult withVerdict(IndexStatusInspectionResultVerdictEnum verdict) {
        this.verdict = verdict;
        return this;
    }
}