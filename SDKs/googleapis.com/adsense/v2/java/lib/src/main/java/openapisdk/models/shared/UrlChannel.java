package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UrlChannel
 * Representation of a URL channel. URL channels allow you to track the performance of particular pages in your site; see [URL channels](https://support.google.com/adsense/answer/2923836) for more information.
**/
public class UrlChannel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UrlChannel withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportingDimensionId")
    public String reportingDimensionId;
    public UrlChannel withReportingDimensionId(String reportingDimensionId) {
        this.reportingDimensionId = reportingDimensionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uriPattern")
    public String uriPattern;
    public UrlChannel withUriPattern(String uriPattern) {
        this.uriPattern = uriPattern;
        return this;
    }
}