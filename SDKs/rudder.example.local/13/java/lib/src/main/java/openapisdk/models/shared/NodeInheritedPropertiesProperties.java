package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NodeInheritedPropertiesProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hierarchy")
    public NodeInheritedPropertiesPropertiesHierarchy[] hierarchy;
    public NodeInheritedPropertiesProperties withHierarchy(NodeInheritedPropertiesPropertiesHierarchy[] hierarchy) {
        this.hierarchy = hierarchy;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public NodeInheritedPropertiesProperties withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("origval")
    public Object origval;
    public NodeInheritedPropertiesProperties withOrigval(Object origval) {
        this.origval = origval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provider")
    public NodeInheritedPropertiesPropertiesProviderEnum provider;
    public NodeInheritedPropertiesProperties withProvider(NodeInheritedPropertiesPropertiesProviderEnum provider) {
        this.provider = provider;
        return this;
    }
    @JsonProperty("value")
    public Object value;
    public NodeInheritedPropertiesProperties withValue(Object value) {
        this.value = value;
        return this;
    }
}