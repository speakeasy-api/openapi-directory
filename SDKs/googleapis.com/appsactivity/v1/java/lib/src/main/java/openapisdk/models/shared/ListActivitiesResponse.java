package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListActivitiesResponse
 * The response from the list request. Contains a list of activities and a token to retrieve the next page of results.
**/
public class ListActivitiesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activities")
    public Activity[] activities;
    public ListActivitiesResponse withActivities(Activity[] activities) {
        this.activities = activities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListActivitiesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}