package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaListLabelLocksResponse
 * The response to a ListLabelLocksRequest.
**/
public class GoogleAppsDriveLabelsV2betaListLabelLocksResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labelLocks")
    public GoogleAppsDriveLabelsV2betaLabelLock[] labelLocks;
    public GoogleAppsDriveLabelsV2betaListLabelLocksResponse withLabelLocks(GoogleAppsDriveLabelsV2betaLabelLock[] labelLocks) {
        this.labelLocks = labelLocks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleAppsDriveLabelsV2betaListLabelLocksResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}