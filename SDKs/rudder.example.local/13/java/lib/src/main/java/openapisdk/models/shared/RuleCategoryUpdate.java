package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RuleCategoryUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public RuleCategoryUpdate withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public RuleCategoryUpdate withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("parent")
    public String parent;
    public RuleCategoryUpdate withParent(String parent) {
        this.parent = parent;
        return this;
    }
}