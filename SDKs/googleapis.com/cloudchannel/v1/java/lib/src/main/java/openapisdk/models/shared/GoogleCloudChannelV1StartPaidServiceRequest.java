package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1StartPaidServiceRequest
 * Request message for CloudChannelService.StartPaidService.
**/
public class GoogleCloudChannelV1StartPaidServiceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public GoogleCloudChannelV1StartPaidServiceRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}