package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigManagementHierarchyControllerConfig
 * Configuration for Hierarchy Controller
**/
public class ConfigManagementHierarchyControllerConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableHierarchicalResourceQuota")
    public Boolean enableHierarchicalResourceQuota;
    public ConfigManagementHierarchyControllerConfig withEnableHierarchicalResourceQuota(Boolean enableHierarchicalResourceQuota) {
        this.enableHierarchicalResourceQuota = enableHierarchicalResourceQuota;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enablePodTreeLabels")
    public Boolean enablePodTreeLabels;
    public ConfigManagementHierarchyControllerConfig withEnablePodTreeLabels(Boolean enablePodTreeLabels) {
        this.enablePodTreeLabels = enablePodTreeLabels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public ConfigManagementHierarchyControllerConfig withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}