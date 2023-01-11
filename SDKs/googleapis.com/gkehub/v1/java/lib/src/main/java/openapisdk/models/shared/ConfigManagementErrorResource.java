package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigManagementErrorResource
 * Model for a config file in the git repo with an associated Sync error
**/
public class ConfigManagementErrorResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceGvk")
    public ConfigManagementGroupVersionKind resourceGvk;
    public ConfigManagementErrorResource withResourceGvk(ConfigManagementGroupVersionKind resourceGvk) {
        this.resourceGvk = resourceGvk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceName")
    public String resourceName;
    public ConfigManagementErrorResource withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceNamespace")
    public String resourceNamespace;
    public ConfigManagementErrorResource withResourceNamespace(String resourceNamespace) {
        this.resourceNamespace = resourceNamespace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourcePath")
    public String sourcePath;
    public ConfigManagementErrorResource withSourcePath(String sourcePath) {
        this.sourcePath = sourcePath;
        return this;
    }
}