package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VmSelectionConfig
 * VM selection configuration message
**/
public class VmSelectionConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmZone")
    public String vmZone;
    public VmSelectionConfig withVmZone(String vmZone) {
        this.vmZone = vmZone;
        return this;
    }
}