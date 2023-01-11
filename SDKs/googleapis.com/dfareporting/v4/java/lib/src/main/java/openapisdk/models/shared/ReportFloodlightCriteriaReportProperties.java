package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportFloodlightCriteriaReportProperties
 * The properties of the report.
**/
public class ReportFloodlightCriteriaReportProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeAttributedIPConversions")
    public Boolean includeAttributedIPConversions;
    public ReportFloodlightCriteriaReportProperties withIncludeAttributedIpConversions(Boolean includeAttributedIPConversions) {
        this.includeAttributedIPConversions = includeAttributedIPConversions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeUnattributedCookieConversions")
    public Boolean includeUnattributedCookieConversions;
    public ReportFloodlightCriteriaReportProperties withIncludeUnattributedCookieConversions(Boolean includeUnattributedCookieConversions) {
        this.includeUnattributedCookieConversions = includeUnattributedCookieConversions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeUnattributedIPConversions")
    public Boolean includeUnattributedIPConversions;
    public ReportFloodlightCriteriaReportProperties withIncludeUnattributedIpConversions(Boolean includeUnattributedIPConversions) {
        this.includeUnattributedIPConversions = includeUnattributedIPConversions;
        return this;
    }
}