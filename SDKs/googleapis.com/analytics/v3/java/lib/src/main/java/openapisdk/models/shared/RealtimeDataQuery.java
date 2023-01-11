package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RealtimeDataQuery
 * Real time data request query parameters.
**/
public class RealtimeDataQuery {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensions")
    public String dimensions;
    public RealtimeDataQuery withDimensions(String dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public String filters;
    public RealtimeDataQuery withFilters(String filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ids")
    public String ids;
    public RealtimeDataQuery withIds(String ids) {
        this.ids = ids;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max-results")
    public Integer maxResults;
    public RealtimeDataQuery withMaxResults(Integer maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public String[] metrics;
    public RealtimeDataQuery withMetrics(String[] metrics) {
        this.metrics = metrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sort")
    public String[] sort;
    public RealtimeDataQuery withSort(String[] sort) {
        this.sort = sort;
        return this;
    }
}