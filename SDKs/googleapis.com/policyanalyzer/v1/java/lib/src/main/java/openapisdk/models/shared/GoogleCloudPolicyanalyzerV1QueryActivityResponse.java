package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPolicyanalyzerV1QueryActivityResponse
 * Response to the `QueryActivity` method.
**/
public class GoogleCloudPolicyanalyzerV1QueryActivityResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activities")
    public GoogleCloudPolicyanalyzerV1Activity[] activities;
    public GoogleCloudPolicyanalyzerV1QueryActivityResponse withActivities(GoogleCloudPolicyanalyzerV1Activity[] activities) {
        this.activities = activities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudPolicyanalyzerV1QueryActivityResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}