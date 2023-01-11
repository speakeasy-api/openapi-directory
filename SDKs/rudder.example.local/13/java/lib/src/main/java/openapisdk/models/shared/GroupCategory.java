package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GroupCategory {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GroupCategory withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GroupCategory withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GroupCategory withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("parent")
    public String parent;
    public GroupCategory withParent(String parent) {
        this.parent = parent;
        return this;
    }
}