package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NodeInheritedPropertiesPropertiesHierarchy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public NodeInheritedPropertiesPropertiesHierarchy withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("kind")
    public NodeInheritedPropertiesPropertiesHierarchyKindEnum kind;
    public NodeInheritedPropertiesPropertiesHierarchy withKind(NodeInheritedPropertiesPropertiesHierarchyKindEnum kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public NodeInheritedPropertiesPropertiesHierarchy withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public NodeInheritedPropertiesPropertiesHierarchy withValue(String value) {
        this.value = value;
        return this;
    }
}