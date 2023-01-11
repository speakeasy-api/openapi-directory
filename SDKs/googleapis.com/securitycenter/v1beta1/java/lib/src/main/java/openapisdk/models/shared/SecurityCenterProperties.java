package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SecurityCenterProperties
 * Security Command Center managed properties. These properties are managed by Security Command Center and cannot be modified by the user.
**/
public class SecurityCenterProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceName")
    public String resourceName;
    public SecurityCenterProperties withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceOwners")
    public String[] resourceOwners;
    public SecurityCenterProperties withResourceOwners(String[] resourceOwners) {
        this.resourceOwners = resourceOwners;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceParent")
    public String resourceParent;
    public SecurityCenterProperties withResourceParent(String resourceParent) {
        this.resourceParent = resourceParent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceProject")
    public String resourceProject;
    public SecurityCenterProperties withResourceProject(String resourceProject) {
        this.resourceProject = resourceProject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceType")
    public String resourceType;
    public SecurityCenterProperties withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}