package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MenuValue
 * A single value that is part of a MenuItem.
**/
public class MenuValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public MenuValue withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iconUrl")
    public String iconUrl;
    public MenuValue withIconUrl(String iconUrl) {
        this.iconUrl = iconUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public MenuValue withState(String state) {
        this.state = state;
        return this;
    }
}