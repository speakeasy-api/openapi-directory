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
    @JsonProperty("abusiveStatus")
    public SiteSummaryResponseAbusiveStatusEnum abusiveStatus;
    public SiteSummaryResponse withAbusiveStatus(SiteSummaryResponseAbusiveStatusEnum abusiveStatus) {
        this.abusiveStatus = abusiveStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforcementTime")
    public String enforcementTime;
    public SiteSummaryResponse withEnforcementTime(String enforcementTime) {
        this.enforcementTime = enforcementTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterStatus")
    public SiteSummaryResponseFilterStatusEnum filterStatus;
    public SiteSummaryResponse withFilterStatus(SiteSummaryResponseFilterStatusEnum filterStatus) {
        this.filterStatus = filterStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastChangeTime")
    public String lastChangeTime;
    public SiteSummaryResponse withLastChangeTime(String lastChangeTime) {
        this.lastChangeTime = lastChangeTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportUrl")
    public String reportUrl;
    public SiteSummaryResponse withReportUrl(String reportUrl) {
        this.reportUrl = reportUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reviewedSite")
    public String reviewedSite;
    public SiteSummaryResponse withReviewedSite(String reviewedSite) {
        this.reviewedSite = reviewedSite;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("underReview")
    public Boolean underReview;
    public SiteSummaryResponse withUnderReview(Boolean underReview) {
        this.underReview = underReview;
        return this;
    }
}