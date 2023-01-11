package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigManagementGroupVersionKind
 * A Kubernetes object's GVK
**/
public class ConfigManagementGroupVersionKind {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group")
    public String group;
    public ConfigManagementGroupVersionKind withGroup(String group) {
        this.group = group;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ConfigManagementGroupVersionKind withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public ConfigManagementGroupVersionKind withVersion(String version) {
        this.version = version;
        return this;
    }
}