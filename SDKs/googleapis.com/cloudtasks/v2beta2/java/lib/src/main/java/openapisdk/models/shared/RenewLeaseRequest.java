package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RenewLeaseRequest
 * Request message for renewing a lease using RenewLease.
**/
public class RenewLeaseRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leaseDuration")
    public String leaseDuration;
    public RenewLeaseRequest withLeaseDuration(String leaseDuration) {
        this.leaseDuration = leaseDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseView")
    public RenewLeaseRequestResponseViewEnum responseView;
    public RenewLeaseRequest withResponseView(RenewLeaseRequestResponseViewEnum responseView) {
        this.responseView = responseView;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduleTime")
    public String scheduleTime;
    public RenewLeaseRequest withScheduleTime(String scheduleTime) {
        this.scheduleTime = scheduleTime;
        return this;
    }
}