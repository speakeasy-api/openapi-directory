package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AutoFillRequest
 * Fills in more data based on existing data.
**/
public class AutoFillRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("range")
    public GridRange range;
    public AutoFillRequest withRange(GridRange range) {
        this.range = range;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceAndDestination")
    public SourceAndDestination sourceAndDestination;
    public AutoFillRequest withSourceAndDestination(SourceAndDestination sourceAndDestination) {
        this.sourceAndDestination = sourceAndDestination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useAlternateSeries")
    public Boolean useAlternateSeries;
    public AutoFillRequest withUseAlternateSeries(Boolean useAlternateSeries) {
        this.useAlternateSeries = useAlternateSeries;
        return this;
    }
}