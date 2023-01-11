package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SetInstanceAcceleratorRequest
 * Request for setting instance accelerator.
**/
public class SetInstanceAcceleratorRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coreCount")
    public String coreCount;
    public SetInstanceAcceleratorRequest withCoreCount(String coreCount) {
        this.coreCount = coreCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public SetInstanceAcceleratorRequestTypeEnum type;
    public SetInstanceAcceleratorRequest withType(SetInstanceAcceleratorRequestTypeEnum type) {
        this.type = type;
        return this;
    }
}