package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NodeFullManagementTechnology {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capabilities")
    public String[] capabilities;
    public NodeFullManagementTechnology withCapabilities(String[] capabilities) {
        this.capabilities = capabilities;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public NodeFullManagementTechnology withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodeKind")
    public String nodeKind;
    public NodeFullManagementTechnology withNodeKind(String nodeKind) {
        this.nodeKind = nodeKind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rootComponents")
    public String[] rootComponents;
    public NodeFullManagementTechnology withRootComponents(String[] rootComponents) {
        this.rootComponents = rootComponents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public NodeFullManagementTechnology withVersion(String version) {
        this.version = version;
        return this;
    }
}