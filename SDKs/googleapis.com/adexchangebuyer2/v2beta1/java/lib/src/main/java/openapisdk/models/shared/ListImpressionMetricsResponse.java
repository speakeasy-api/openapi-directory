package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListImpressionMetricsResponse
 * Response message for listing the metrics that are measured in number of impressions.
**/
public class ListImpressionMetricsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("impressionMetricsRows")
    public ImpressionMetricsRow[] impressionMetricsRows;
    public ListImpressionMetricsResponse withImpressionMetricsRows(ImpressionMetricsRow[] impressionMetricsRows) {
        this.impressionMetricsRows = impressionMetricsRows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListImpressionMetricsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}