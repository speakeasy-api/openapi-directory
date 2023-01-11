package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchAnalyticsQueryResponse
 * A list of rows, one per result, grouped by key. Metrics in each row are aggregated for all data grouped by that key either by page or property, as specified by the aggregation type parameter.
**/
public class SearchAnalyticsQueryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseAggregationType")
    public String responseAggregationType;
    public SearchAnalyticsQueryResponse withResponseAggregationType(String responseAggregationType) {
        this.responseAggregationType = responseAggregationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rows")
    public ApiDataRow[] rows;
    public SearchAnalyticsQueryResponse withRows(ApiDataRow[] rows) {
        this.rows = rows;
        return this;
    }
}