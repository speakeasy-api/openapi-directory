package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GroupCategoryUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GroupCategoryUpdate withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GroupCategoryUpdate withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("parent")
    public String parent;
    public GroupCategoryUpdate withParent(String parent) {
        this.parent = parent;
        return this;
    }
}