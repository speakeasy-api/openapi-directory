package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SwitchRuntimeRequest
 * Request for switching a Managed Notebook Runtime.
**/
public class SwitchRuntimeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acceleratorConfig")
    public RuntimeAcceleratorConfig acceleratorConfig;
    public SwitchRuntimeRequest withAcceleratorConfig(RuntimeAcceleratorConfig acceleratorConfig) {
        this.acceleratorConfig = acceleratorConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("machineType")
    public String machineType;
    public SwitchRuntimeRequest withMachineType(String machineType) {
        this.machineType = machineType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public SwitchRuntimeRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}