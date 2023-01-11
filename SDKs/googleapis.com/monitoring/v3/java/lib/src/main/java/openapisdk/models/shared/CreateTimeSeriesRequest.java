package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateTimeSeriesRequest
 * The CreateTimeSeries request.
**/
public class CreateTimeSeriesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeSeries")
    public TimeSeries[] timeSeries;
    public CreateTimeSeriesRequest withTimeSeries(TimeSeries[] timeSeries) {
        this.timeSeries = timeSeries;
        return this;
    }
}