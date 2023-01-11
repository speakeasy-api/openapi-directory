package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CanceledStateContext
 * Information specific to a subscription in canceled state.
**/
public class CanceledStateContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("developerInitiatedCancellation")
    public java.util.Map<String, Object> developerInitiatedCancellation;
    public CanceledStateContext withDeveloperInitiatedCancellation(java.util.Map<String, Object> developerInitiatedCancellation) {
        this.developerInitiatedCancellation = developerInitiatedCancellation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replacementCancellation")
    public java.util.Map<String, Object> replacementCancellation;
    public CanceledStateContext withReplacementCancellation(java.util.Map<String, Object> replacementCancellation) {
        this.replacementCancellation = replacementCancellation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("systemInitiatedCancellation")
    public java.util.Map<String, Object> systemInitiatedCancellation;
    public CanceledStateContext withSystemInitiatedCancellation(java.util.Map<String, Object> systemInitiatedCancellation) {
        this.systemInitiatedCancellation = systemInitiatedCancellation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userInitiatedCancellation")
    public UserInitiatedCancellation userInitiatedCancellation;
    public CanceledStateContext withUserInitiatedCancellation(UserInitiatedCancellation userInitiatedCancellation) {
        this.userInitiatedCancellation = userInitiatedCancellation;
        return this;
    }
}