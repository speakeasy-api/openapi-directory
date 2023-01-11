package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ActionHelp {
    @JsonProperty("action_id")
    public String actionId;
    public ActionHelp withActionId(String actionId) {
        this.actionId = actionId;
        return this;
    }
    @JsonProperty("help_text")
    public String helpText;
    public ActionHelp withHelpText(String helpText) {
        this.helpText = helpText;
        return this;
    }
    @JsonProperty("service_id")
    public String serviceId;
    public ActionHelp withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
}