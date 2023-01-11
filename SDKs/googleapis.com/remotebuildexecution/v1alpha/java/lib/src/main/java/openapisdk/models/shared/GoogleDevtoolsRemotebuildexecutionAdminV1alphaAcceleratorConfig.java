package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig
 * AcceleratorConfig defines the accelerator cards to attach to the VM.
**/
public class GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acceleratorCount")
    public String acceleratorCount;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig withAcceleratorCount(String acceleratorCount) {
        this.acceleratorCount = acceleratorCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acceleratorType")
    public String acceleratorType;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig withAcceleratorType(String acceleratorType) {
        this.acceleratorType = acceleratorType;
        return this;
    }
}