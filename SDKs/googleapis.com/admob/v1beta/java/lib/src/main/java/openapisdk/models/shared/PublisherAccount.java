package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PublisherAccount
 * A publisher account contains information relevant to the use of this API, such as the time zone used for the reports.
**/
public class PublisherAccount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public PublisherAccount withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PublisherAccount withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisherId")
    public String publisherId;
    public PublisherAccount withPublisherId(String publisherId) {
        this.publisherId = publisherId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportingTimeZone")
    public String reportingTimeZone;
    public PublisherAccount withReportingTimeZone(String reportingTimeZone) {
        this.reportingTimeZone = reportingTimeZone;
        return this;
    }
}