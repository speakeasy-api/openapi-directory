package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Action {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public ActionActionEnum action;
    public Action withAction(ActionActionEnum action) {
        this.action = action;
        return this;
    }
}