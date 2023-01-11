package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListSchedulesResponse
 * Response for listing scheduled notebook job.
**/
public class ListSchedulesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListSchedulesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedules")
    public Schedule[] schedules;
    public ListSchedulesResponse withSchedules(Schedule[] schedules) {
        this.schedules = schedules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListSchedulesResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}