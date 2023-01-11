package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * McfDataQuery
 * Analytics data request query parameters.
**/
public class McfDataQuery {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensions")
    public String dimensions;
    public McfDataQuery withDimensions(String dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end-date")
    public String endDate;
    public McfDataQuery withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public String filters;
    public McfDataQuery withFilters(String filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ids")
    public String ids;
    public McfDataQuery withIds(String ids) {
        this.ids = ids;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max-results")
    public Integer maxResults;
    public McfDataQuery withMaxResults(Integer maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public String[] metrics;
    public McfDataQuery withMetrics(String[] metrics) {
        this.metrics = metrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("samplingLevel")
    public String samplingLevel;
    public McfDataQuery withSamplingLevel(String samplingLevel) {
        this.samplingLevel = samplingLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("segment")
    public String segment;
    public McfDataQuery withSegment(String segment) {
        this.segment = segment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sort")
    public String[] sort;
    public McfDataQuery withSort(String[] sort) {
        this.sort = sort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start-date")
    public String startDate;
    public McfDataQuery withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start-index")
    public Integer startIndex;
    public McfDataQuery withStartIndex(Integer startIndex) {
        this.startIndex = startIndex;
        return this;
    }
}