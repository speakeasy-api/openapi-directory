package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RuleCategory {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public RuleCategory withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public RuleCategory withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public RuleCategory withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("parent")
    public String parent;
    public RuleCategory withParent(String parent) {
        this.parent = parent;
        return this;
    }
}