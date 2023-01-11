package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportRuntimeEventRequest
 * Request for reporting a Managed Notebook Event.
**/
public class ReportRuntimeEventRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event")
    public Event event;
    public ReportRuntimeEventRequest withEvent(Event event) {
        this.event = event;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmId")
    public String vmId;
    public ReportRuntimeEventRequest withVmId(String vmId) {
        this.vmId = vmId;
        return this;
    }
}