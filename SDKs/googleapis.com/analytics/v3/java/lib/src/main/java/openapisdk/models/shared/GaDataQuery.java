package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GaDataQuery
 * Analytics data request query parameters.
**/
public class GaDataQuery {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensions")
    public String dimensions;
    public GaDataQuery withDimensions(String dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end-date")
    public String endDate;
    public GaDataQuery withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public String filters;
    public GaDataQuery withFilters(String filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ids")
    public String ids;
    public GaDataQuery withIds(String ids) {
        this.ids = ids;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max-results")
    public Integer maxResults;
    public GaDataQuery withMaxResults(Integer maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public String[] metrics;
    public GaDataQuery withMetrics(String[] metrics) {
        this.metrics = metrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("samplingLevel")
    public String samplingLevel;
    public GaDataQuery withSamplingLevel(String samplingLevel) {
        this.samplingLevel = samplingLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("segment")
    public String segment;
    public GaDataQuery withSegment(String segment) {
        this.segment = segment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sort")
    public String[] sort;
    public GaDataQuery withSort(String[] sort) {
        this.sort = sort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start-date")
    public String startDate;
    public GaDataQuery withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start-index")
    public Integer startIndex;
    public GaDataQuery withStartIndex(Integer startIndex) {
        this.startIndex = startIndex;
        return this;
    }
}