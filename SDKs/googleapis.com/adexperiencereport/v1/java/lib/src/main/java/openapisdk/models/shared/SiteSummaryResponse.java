package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SiteSummaryResponse
 * Response message for GetSiteSummary.
**/
public class SiteSummaryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("desktopSummary")
    public PlatformSummary desktopSummary;
    public SiteSummaryResponse withDesktopSummary(PlatformSummary desktopSummary) {
        this.desktopSummary = desktopSummary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobileSummary")
    public PlatformSummary mobileSummary;
    public SiteSummaryResponse withMobileSummary(PlatformSummary mobileSummary) {
        this.mobileSummary = mobileSummary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reviewedSite")
    public String reviewedSite;
    public SiteSummaryResponse withReviewedSite(String reviewedSite) {
        this.reviewedSite = reviewedSite;
        return this;
    }
}