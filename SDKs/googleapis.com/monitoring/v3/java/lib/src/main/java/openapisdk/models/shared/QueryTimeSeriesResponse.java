package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QueryTimeSeriesResponse
 * The QueryTimeSeries response.
**/
public class QueryTimeSeriesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public QueryTimeSeriesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partialErrors")
    public Status[] partialErrors;
    public QueryTimeSeriesResponse withPartialErrors(Status[] partialErrors) {
        this.partialErrors = partialErrors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeSeriesData")
    public TimeSeriesData[] timeSeriesData;
    public QueryTimeSeriesResponse withTimeSeriesData(TimeSeriesData[] timeSeriesData) {
        this.timeSeriesData = timeSeriesData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeSeriesDescriptor")
    public TimeSeriesDescriptor timeSeriesDescriptor;
    public QueryTimeSeriesResponse withTimeSeriesDescriptor(TimeSeriesDescriptor timeSeriesDescriptor) {
        this.timeSeriesDescriptor = timeSeriesDescriptor;
        return this;
    }
}