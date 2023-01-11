package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2ListJobTriggersResponse
 * Response message for ListJobTriggers.
**/
public class GooglePrivacyDlpV2ListJobTriggersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobTriggers")
    public GooglePrivacyDlpV2JobTrigger[] jobTriggers;
    public GooglePrivacyDlpV2ListJobTriggersResponse withJobTriggers(GooglePrivacyDlpV2JobTrigger[] jobTriggers) {
        this.jobTriggers = jobTriggers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GooglePrivacyDlpV2ListJobTriggersResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}