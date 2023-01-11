package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChangeRequestChangesRules {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public String action;
    public ChangeRequestChangesRules withAction(String action) {
        this.action = action;
        return this;
    }
}