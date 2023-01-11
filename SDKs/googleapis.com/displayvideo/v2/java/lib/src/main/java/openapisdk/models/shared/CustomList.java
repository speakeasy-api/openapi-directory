package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomList
 * Describes a custom list entity, such as a custom affinity or custom intent audience list.
**/
public class CustomList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customListId")
    public String customListId;
    public CustomList withCustomListId(String customListId) {
        this.customListId = customListId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public CustomList withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CustomList withName(String name) {
        this.name = name;
        return this;
    }
}