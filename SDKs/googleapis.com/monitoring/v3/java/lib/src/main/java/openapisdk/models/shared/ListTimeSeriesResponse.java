package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListTimeSeriesResponse
 * The ListTimeSeries response.
**/
public class ListTimeSeriesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionErrors")
    public Status[] executionErrors;
    public ListTimeSeriesResponse withExecutionErrors(Status[] executionErrors) {
        this.executionErrors = executionErrors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListTimeSeriesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeSeries")
    public TimeSeries[] timeSeries;
    public ListTimeSeriesResponse withTimeSeries(TimeSeries[] timeSeries) {
        this.timeSeries = timeSeries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unit")
    public String unit;
    public ListTimeSeriesResponse withUnit(String unit) {
        this.unit = unit;
        return this;
    }
}