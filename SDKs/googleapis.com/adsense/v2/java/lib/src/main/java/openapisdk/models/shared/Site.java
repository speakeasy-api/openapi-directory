package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Site
 * Representation of a Site.
**/
public class Site {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoAdsEnabled")
    public Boolean autoAdsEnabled;
    public Site withAutoAdsEnabled(Boolean autoAdsEnabled) {
        this.autoAdsEnabled = autoAdsEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain")
    public String domain;
    public Site withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Site withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportingDimensionId")
    public String reportingDimensionId;
    public Site withReportingDimensionId(String reportingDimensionId) {
        this.reportingDimensionId = reportingDimensionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public SiteStateEnum state;
    public Site withState(SiteStateEnum state) {
        this.state = state;
        return this;
    }
}