package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstancesDemoteMasterRequest
 * Database demote primary instance request.
**/
public class InstancesDemoteMasterRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("demoteMasterContext")
    public DemoteMasterContext demoteMasterContext;
    public InstancesDemoteMasterRequest withDemoteMasterContext(DemoteMasterContext demoteMasterContext) {
        this.demoteMasterContext = demoteMasterContext;
        return this;
    }
}