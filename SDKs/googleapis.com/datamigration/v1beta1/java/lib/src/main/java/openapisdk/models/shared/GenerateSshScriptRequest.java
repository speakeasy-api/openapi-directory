package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GenerateSshScriptRequest
 * Request message for 'GenerateSshScript' request.
**/
public class GenerateSshScriptRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vm")
    public String vm;
    public GenerateSshScriptRequest withVm(String vm) {
        this.vm = vm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmCreationConfig")
    public VmCreationConfig vmCreationConfig;
    public GenerateSshScriptRequest withVmCreationConfig(VmCreationConfig vmCreationConfig) {
        this.vmCreationConfig = vmCreationConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmPort")
    public Integer vmPort;
    public GenerateSshScriptRequest withVmPort(Integer vmPort) {
        this.vmPort = vmPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmSelectionConfig")
    public VmSelectionConfig vmSelectionConfig;
    public GenerateSshScriptRequest withVmSelectionConfig(VmSelectionConfig vmSelectionConfig) {
        this.vmSelectionConfig = vmSelectionConfig;
        return this;
    }
}