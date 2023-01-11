package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TrackingNumberResponse
 * The Tracking Number Response model
**/
public class TrackingNumberResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trackingNumber")
    public String trackingNumber;
    public TrackingNumberResponse withTrackingNumber(String trackingNumber) {
        this.trackingNumber = trackingNumber;
        return this;
    }
}