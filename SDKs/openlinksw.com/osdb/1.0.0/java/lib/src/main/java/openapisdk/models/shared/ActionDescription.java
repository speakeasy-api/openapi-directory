package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ActionDescription {
    @JsonProperty("action_id")
    public String actionId;
    public ActionDescription withActionId(String actionId) {
        this.actionId = actionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ActionDescription withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("entry_point")
    public EntryPoint entryPoint;
    public ActionDescription withEntryPoint(EntryPoint entryPoint) {
        this.entryPoint = entryPoint;
        return this;
    }
}