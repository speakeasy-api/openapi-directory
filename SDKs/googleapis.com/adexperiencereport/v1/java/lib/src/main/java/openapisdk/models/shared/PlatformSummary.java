package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PlatformSummary
 * A site's Ad Experience Report summary on a single platform.
**/
public class PlatformSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("betterAdsStatus")
    public PlatformSummaryBetterAdsStatusEnum betterAdsStatus;
    public PlatformSummary withBetterAdsStatus(PlatformSummaryBetterAdsStatusEnum betterAdsStatus) {
        this.betterAdsStatus = betterAdsStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforcementTime")
    public String enforcementTime;
    public PlatformSummary withEnforcementTime(String enforcementTime) {
        this.enforcementTime = enforcementTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterStatus")
    public PlatformSummaryFilterStatusEnum filterStatus;
    public PlatformSummary withFilterStatus(PlatformSummaryFilterStatusEnum filterStatus) {
        this.filterStatus = filterStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastChangeTime")
    public String lastChangeTime;
    public PlatformSummary withLastChangeTime(String lastChangeTime) {
        this.lastChangeTime = lastChangeTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public PlatformSummaryRegionEnum[] region;
    public PlatformSummary withRegion(PlatformSummaryRegionEnum[] region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportUrl")
    public String reportUrl;
    public PlatformSummary withReportUrl(String reportUrl) {
        this.reportUrl = reportUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("underReview")
    public Boolean underReview;
    public PlatformSummary withUnderReview(Boolean underReview) {
        this.underReview = underReview;
        return this;
    }
}