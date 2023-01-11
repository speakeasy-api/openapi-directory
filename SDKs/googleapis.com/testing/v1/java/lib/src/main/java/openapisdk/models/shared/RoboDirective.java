package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RoboDirective
 * Directs Robo to interact with a specific UI element if it is encountered during the crawl. Currently, Robo can perform text entry or element click.
**/
public class RoboDirective {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionType")
    public RoboDirectiveActionTypeEnum actionType;
    public RoboDirective withActionType(RoboDirectiveActionTypeEnum actionType) {
        this.actionType = actionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputText")
    public String inputText;
    public RoboDirective withInputText(String inputText) {
        this.inputText = inputText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceName")
    public String resourceName;
    public RoboDirective withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
}