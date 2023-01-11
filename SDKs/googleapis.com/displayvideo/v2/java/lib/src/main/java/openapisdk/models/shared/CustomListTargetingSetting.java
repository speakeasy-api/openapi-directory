package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomListTargetingSetting
 * Details of custom list targeting setting.
**/
public class CustomListTargetingSetting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customListId")
    public String customListId;
    public CustomListTargetingSetting withCustomListId(String customListId) {
        this.customListId = customListId;
        return this;
    }
}