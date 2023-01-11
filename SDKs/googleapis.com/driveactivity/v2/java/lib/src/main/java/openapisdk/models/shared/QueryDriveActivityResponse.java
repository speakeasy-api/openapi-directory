package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QueryDriveActivityResponse
 * Response message for querying Drive activity.
**/
public class QueryDriveActivityResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activities")
    public DriveActivity[] activities;
    public QueryDriveActivityResponse withActivities(DriveActivity[] activities) {
        this.activities = activities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public QueryDriveActivityResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}