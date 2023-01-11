package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomListGroup
 * Details of custom list group. All custom list targeting settings are logically ‘OR’ of each other.
**/
public class CustomListGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public CustomListTargetingSetting[] settings;
    public CustomListGroup withSettings(CustomListTargetingSetting[] settings) {
        this.settings = settings;
        return this;
    }
}