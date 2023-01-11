package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccessPolicy
 * Rights management policy for YouTube resources.
**/
public class AccessPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowed")
    public Boolean allowed;
    public AccessPolicy withAllowed(Boolean allowed) {
        this.allowed = allowed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exception")
    public String[] exception;
    public AccessPolicy withException(String[] exception) {
        this.exception = exception;
        return this;
    }
}