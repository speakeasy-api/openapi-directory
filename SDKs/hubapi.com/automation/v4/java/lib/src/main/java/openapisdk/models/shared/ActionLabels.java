package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ActionLabels {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionCardContent")
    public String actionCardContent;
    public ActionLabels withActionCardContent(String actionCardContent) {
        this.actionCardContent = actionCardContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionDescription")
    public String actionDescription;
    public ActionLabels withActionDescription(String actionDescription) {
        this.actionDescription = actionDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionName")
    public String actionName;
    public ActionLabels withActionName(String actionName) {
        this.actionName = actionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appDisplayName")
    public String appDisplayName;
    public ActionLabels withAppDisplayName(String appDisplayName) {
        this.appDisplayName = appDisplayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputFieldDescriptions")
    public java.util.Map<String, String> inputFieldDescriptions;
    public ActionLabels withInputFieldDescriptions(java.util.Map<String, String> inputFieldDescriptions) {
        this.inputFieldDescriptions = inputFieldDescriptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputFieldLabels")
    public java.util.Map<String, String> inputFieldLabels;
    public ActionLabels withInputFieldLabels(java.util.Map<String, String> inputFieldLabels) {
        this.inputFieldLabels = inputFieldLabels;
        return this;
    }
}