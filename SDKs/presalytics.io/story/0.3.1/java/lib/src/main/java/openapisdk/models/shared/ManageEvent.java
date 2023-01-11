package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ManageEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public ManageEventActionEnum action;
    public ManageEvent withAction(ManageEventActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action_params")
    public java.util.Map<String, Object> actionParams;
    public ManageEvent withActionParams(java.util.Map<String, Object> actionParams) {
        this.actionParams = actionParams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ManageEvent withName(String name) {
        this.name = name;
        return this;
    }
}