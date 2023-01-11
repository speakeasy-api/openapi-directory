package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OsPolicy
 * An OS policy defines the desired state configuration for a VM.
**/
public class OsPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowNoResourceGroupMatch")
    public Boolean allowNoResourceGroupMatch;
    public OsPolicy withAllowNoResourceGroupMatch(Boolean allowNoResourceGroupMatch) {
        this.allowNoResourceGroupMatch = allowNoResourceGroupMatch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public OsPolicy withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public OsPolicy withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mode")
    public OsPolicyModeEnum mode;
    public OsPolicy withMode(OsPolicyModeEnum mode) {
        this.mode = mode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceGroups")
    public OsPolicyResourceGroup[] resourceGroups;
    public OsPolicy withResourceGroups(OsPolicyResourceGroup[] resourceGroups) {
        this.resourceGroups = resourceGroups;
        return this;
    }
}