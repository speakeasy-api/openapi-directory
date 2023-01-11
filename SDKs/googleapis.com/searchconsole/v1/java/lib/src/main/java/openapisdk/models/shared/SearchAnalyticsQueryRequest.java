package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchAnalyticsQueryRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregationType")
    public SearchAnalyticsQueryRequestAggregationTypeEnum aggregationType;
    public SearchAnalyticsQueryRequest withAggregationType(SearchAnalyticsQueryRequestAggregationTypeEnum aggregationType) {
        this.aggregationType = aggregationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataState")
    public SearchAnalyticsQueryRequestDataStateEnum dataState;
    public SearchAnalyticsQueryRequest withDataState(SearchAnalyticsQueryRequestDataStateEnum dataState) {
        this.dataState = dataState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionFilterGroups")
    public ApiDimensionFilterGroup[] dimensionFilterGroups;
    public SearchAnalyticsQueryRequest withDimensionFilterGroups(ApiDimensionFilterGroup[] dimensionFilterGroups) {
        this.dimensionFilterGroups = dimensionFilterGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensions")
    public SearchAnalyticsQueryRequestDimensionsEnum[] dimensions;
    public SearchAnalyticsQueryRequest withDimensions(SearchAnalyticsQueryRequestDimensionsEnum[] dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public String endDate;
    public SearchAnalyticsQueryRequest withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rowLimit")
    public Integer rowLimit;
    public SearchAnalyticsQueryRequest withRowLimit(Integer rowLimit) {
        this.rowLimit = rowLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("searchType")
    public SearchAnalyticsQueryRequestSearchTypeEnum searchType;
    public SearchAnalyticsQueryRequest withSearchType(SearchAnalyticsQueryRequestSearchTypeEnum searchType) {
        this.searchType = searchType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public String startDate;
    public SearchAnalyticsQueryRequest withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startRow")
    public Integer startRow;
    public SearchAnalyticsQueryRequest withStartRow(Integer startRow) {
        this.startRow = startRow;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public SearchAnalyticsQueryRequestTypeEnum type;
    public SearchAnalyticsQueryRequest withType(SearchAnalyticsQueryRequestTypeEnum type) {
        this.type = type;
        return this;
    }
}