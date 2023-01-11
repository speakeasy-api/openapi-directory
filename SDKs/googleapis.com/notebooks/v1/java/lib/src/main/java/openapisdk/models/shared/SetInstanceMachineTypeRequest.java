package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SetInstanceMachineTypeRequest
 * Request for setting instance machine type.
**/
public class SetInstanceMachineTypeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("machineType")
    public String machineType;
    public SetInstanceMachineTypeRequest withMachineType(String machineType) {
        this.machineType = machineType;
        return this;
    }
}