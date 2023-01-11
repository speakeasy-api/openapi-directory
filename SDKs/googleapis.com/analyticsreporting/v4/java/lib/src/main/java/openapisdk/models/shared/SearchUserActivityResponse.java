package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchUserActivityResponse
 * The response from `userActivity:get` call.
**/
public class SearchUserActivityResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public SearchUserActivityResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sampleRate")
    public Double sampleRate;
    public SearchUserActivityResponse withSampleRate(Double sampleRate) {
        this.sampleRate = sampleRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sessions")
    public UserActivitySession[] sessions;
    public SearchUserActivityResponse withSessions(UserActivitySession[] sessions) {
        this.sessions = sessions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalRows")
    public Integer totalRows;
    public SearchUserActivityResponse withTotalRows(Integer totalRows) {
        this.totalRows = totalRows;
        return this;
    }
}