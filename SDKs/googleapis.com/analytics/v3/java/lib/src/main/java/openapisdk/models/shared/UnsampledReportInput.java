package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UnsampledReportInput
 * JSON template for Analytics unsampled report resource.
**/
public class UnsampledReportInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public UnsampledReportInput withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensions")
    public String dimensions;
    public UnsampledReportInput withDimensions(String dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end-date")
    public String endDate;
    public UnsampledReportInput withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public String filters;
    public UnsampledReportInput withFilters(String filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UnsampledReportInput withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public String metrics;
    public UnsampledReportInput withMetrics(String metrics) {
        this.metrics = metrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profileId")
    public String profileId;
    public UnsampledReportInput withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("segment")
    public String segment;
    public UnsampledReportInput withSegment(String segment) {
        this.segment = segment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start-date")
    public String startDate;
    public UnsampledReportInput withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public UnsampledReportInput withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webPropertyId")
    public String webPropertyId;
    public UnsampledReportInput withWebPropertyId(String webPropertyId) {
        this.webPropertyId = webPropertyId;
        return this;
    }
}