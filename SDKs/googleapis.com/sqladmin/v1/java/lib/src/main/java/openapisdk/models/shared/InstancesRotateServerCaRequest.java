package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstancesRotateServerCaRequest
 * Rotate server CA request.
**/
public class InstancesRotateServerCaRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rotateServerCaContext")
    public RotateServerCaContext rotateServerCaContext;
    public InstancesRotateServerCaRequest withRotateServerCaContext(RotateServerCaContext rotateServerCaContext) {
        this.rotateServerCaContext = rotateServerCaContext;
        return this;
    }
}