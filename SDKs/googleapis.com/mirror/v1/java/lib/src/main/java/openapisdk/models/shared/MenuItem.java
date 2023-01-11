package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MenuItem
 * A custom menu item that can be presented to the user by a timeline item.
**/
public class MenuItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public String action;
    public MenuItem withAction(String action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contextual_command")
    public String contextualCommand;
    public MenuItem withContextualCommand(String contextualCommand) {
        this.contextualCommand = contextualCommand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public MenuItem withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payload")
    public String payload;
    public MenuItem withPayload(String payload) {
        this.payload = payload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("removeWhenSelected")
    public Boolean removeWhenSelected;
    public MenuItem withRemoveWhenSelected(Boolean removeWhenSelected) {
        this.removeWhenSelected = removeWhenSelected;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public MenuValue[] values;
    public MenuItem withValues(MenuValue[] values) {
        this.values = values;
        return this;
    }
}