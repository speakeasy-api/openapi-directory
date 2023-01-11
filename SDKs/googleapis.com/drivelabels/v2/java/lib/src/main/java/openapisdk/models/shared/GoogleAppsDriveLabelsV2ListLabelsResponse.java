package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2ListLabelsResponse
 * Response for listing Labels.
**/
public class GoogleAppsDriveLabelsV2ListLabelsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public GoogleAppsDriveLabelsV2Label[] labels;
    public GoogleAppsDriveLabelsV2ListLabelsResponse withLabels(GoogleAppsDriveLabelsV2Label[] labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleAppsDriveLabelsV2ListLabelsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}