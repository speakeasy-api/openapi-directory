package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Actions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public ActionsActionEnum action;
    public Actions withAction(ActionsActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public Actions withLabel(String label) {
        this.label = label;
        return this;
    }
}