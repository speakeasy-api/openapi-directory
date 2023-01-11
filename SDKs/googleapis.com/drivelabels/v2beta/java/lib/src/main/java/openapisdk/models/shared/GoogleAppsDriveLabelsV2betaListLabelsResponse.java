package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaListLabelsResponse
 * Response for listing Labels.
**/
public class GoogleAppsDriveLabelsV2betaListLabelsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public GoogleAppsDriveLabelsV2betaLabel[] labels;
    public GoogleAppsDriveLabelsV2betaListLabelsResponse withLabels(GoogleAppsDriveLabelsV2betaLabel[] labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleAppsDriveLabelsV2betaListLabelsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}