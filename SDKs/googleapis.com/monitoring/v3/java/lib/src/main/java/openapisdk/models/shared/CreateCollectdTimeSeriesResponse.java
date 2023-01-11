package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateCollectdTimeSeriesResponse
 * The CreateCollectdTimeSeries response.
**/
public class CreateCollectdTimeSeriesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payloadErrors")
    public CollectdPayloadError[] payloadErrors;
    public CreateCollectdTimeSeriesResponse withPayloadErrors(CollectdPayloadError[] payloadErrors) {
        this.payloadErrors = payloadErrors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summary")
    public CreateTimeSeriesSummary summary;
    public CreateCollectdTimeSeriesResponse withSummary(CreateTimeSeriesSummary summary) {
        this.summary = summary;
        return this;
    }
}