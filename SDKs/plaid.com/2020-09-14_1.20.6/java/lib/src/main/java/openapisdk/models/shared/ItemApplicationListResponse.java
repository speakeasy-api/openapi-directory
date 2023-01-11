package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ItemApplicationListResponse
 * Describes the connected application for a particular end user.
**/
public class ItemApplicationListResponse {
    @JsonProperty("applications")
    public ConnectedApplication[] applications;
    public ItemApplicationListResponse withApplications(ConnectedApplication[] applications) {
        this.applications = applications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_id")
    public String requestId;
    public ItemApplicationListResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}