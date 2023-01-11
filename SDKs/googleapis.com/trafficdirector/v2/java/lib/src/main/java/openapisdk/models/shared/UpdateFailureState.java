package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateFailureState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public String details;
    public UpdateFailureState withDetails(String details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failedConfiguration")
    public java.util.Map<String, Object> failedConfiguration;
    public UpdateFailureState withFailedConfiguration(java.util.Map<String, Object> failedConfiguration) {
        this.failedConfiguration = failedConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdateAttempt")
    public String lastUpdateAttempt;
    public UpdateFailureState withLastUpdateAttempt(String lastUpdateAttempt) {
        this.lastUpdateAttempt = lastUpdateAttempt;
        return this;
    }
}