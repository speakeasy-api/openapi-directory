package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportRequestReportScope
 * The reportScope is a set of IDs that are used to determine which subset of entities will be returned in the report. The full lineage of IDs from the lowest scoped level desired up through agency is required.
**/
public class ReportRequestReportScope {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adGroupId")
    public String adGroupId;
    public ReportRequestReportScope withAdGroupId(String adGroupId) {
        this.adGroupId = adGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adId")
    public String adId;
    public ReportRequestReportScope withAdId(String adId) {
        this.adId = adId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;
    public ReportRequestReportScope withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agencyId")
    public String agencyId;
    public ReportRequestReportScope withAgencyId(String agencyId) {
        this.agencyId = agencyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignId")
    public String campaignId;
    public ReportRequestReportScope withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("engineAccountId")
    public String engineAccountId;
    public ReportRequestReportScope withEngineAccountId(String engineAccountId) {
        this.engineAccountId = engineAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keywordId")
    public String keywordId;
    public ReportRequestReportScope withKeywordId(String keywordId) {
        this.keywordId = keywordId;
        return this;
    }
}