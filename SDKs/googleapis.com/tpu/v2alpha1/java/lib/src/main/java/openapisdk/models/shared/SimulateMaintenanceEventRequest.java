package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SimulateMaintenanceEventRequest
 * Request for SimulateMaintenanceEvent.
**/
public class SimulateMaintenanceEventRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workerIds")
    public String[] workerIds;
    public SimulateMaintenanceEventRequest withWorkerIds(String[] workerIds) {
        this.workerIds = workerIds;
        return this;
    }
}