package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DismissDecision
 * A decision that has been made to dismiss an approval request.
**/
public class DismissDecision {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dismissTime")
    public String dismissTime;
    public DismissDecision withDismissTime(String dismissTime) {
        this.dismissTime = dismissTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("implicit")
    public Boolean implicit;
    public DismissDecision withImplicit(Boolean implicit) {
        this.implicit = implicit;
        return this;
    }
}