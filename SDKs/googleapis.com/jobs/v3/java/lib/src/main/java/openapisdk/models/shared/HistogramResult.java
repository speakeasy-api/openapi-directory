package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HistogramResult
 * Output only. Result of a histogram call. The response contains the histogram map for the search type specified by HistogramResult.field. The response is a map of each filter value to the corresponding count of jobs for that filter.
**/
public class HistogramResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("searchType")
    public HistogramResultSearchTypeEnum searchType;
    public HistogramResult withSearchType(HistogramResultSearchTypeEnum searchType) {
        this.searchType = searchType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public java.util.Map<String, Integer> values;
    public HistogramResult withValues(java.util.Map<String, Integer> values) {
        this.values = values;
        return this;
    }
}