package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ManagedGroupConfig
 * Specifies the resources used to actively manage an instance group.
**/
public class ManagedGroupConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceGroupManagerName")
    public String instanceGroupManagerName;
    public ManagedGroupConfig withInstanceGroupManagerName(String instanceGroupManagerName) {
        this.instanceGroupManagerName = instanceGroupManagerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceTemplateName")
    public String instanceTemplateName;
    public ManagedGroupConfig withInstanceTemplateName(String instanceTemplateName) {
        this.instanceTemplateName = instanceTemplateName;
        return this;
    }
}