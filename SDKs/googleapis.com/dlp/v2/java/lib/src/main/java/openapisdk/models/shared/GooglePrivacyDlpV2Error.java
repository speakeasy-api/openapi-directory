package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2Error
 * Details information about an error encountered during job execution or the results of an unsuccessful activation of the JobTrigger.
**/
public class GooglePrivacyDlpV2Error {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public GoogleRpcStatus details;
    public GooglePrivacyDlpV2Error withDetails(GoogleRpcStatus details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestamps")
    public String[] timestamps;
    public GooglePrivacyDlpV2Error withTimestamps(String[] timestamps) {
        this.timestamps = timestamps;
        return this;
    }
}