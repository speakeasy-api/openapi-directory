package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CancelLeaseRequest
 * Request message for canceling a lease using CancelLease.
**/
public class CancelLeaseRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseView")
    public CancelLeaseRequestResponseViewEnum responseView;
    public CancelLeaseRequest withResponseView(CancelLeaseRequestResponseViewEnum responseView) {
        this.responseView = responseView;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduleTime")
    public String scheduleTime;
    public CancelLeaseRequest withScheduleTime(String scheduleTime) {
        this.scheduleTime = scheduleTime;
        return this;
    }
}