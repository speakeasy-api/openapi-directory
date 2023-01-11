package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CalloutStatusRow
 * The number of impressions with the specified dimension values where the corresponding bid request or bid response was not successful, as described by the specified callout status.
**/
public class CalloutStatusRow {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calloutStatusId")
    public Integer calloutStatusId;
    public CalloutStatusRow withCalloutStatusId(Integer calloutStatusId) {
        this.calloutStatusId = calloutStatusId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("impressionCount")
    public MetricValue impressionCount;
    public CalloutStatusRow withImpressionCount(MetricValue impressionCount) {
        this.impressionCount = impressionCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rowDimensions")
    public RowDimensions rowDimensions;
    public CalloutStatusRow withRowDimensions(RowDimensions rowDimensions) {
        this.rowDimensions = rowDimensions;
        return this;
    }
}