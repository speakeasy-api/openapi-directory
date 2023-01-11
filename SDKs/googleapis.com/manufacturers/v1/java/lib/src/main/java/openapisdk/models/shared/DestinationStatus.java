package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DestinationStatus
 * The destination status.
**/
public class DestinationStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination")
    public String destination;
    public DestinationStatus withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public DestinationStatusStatusEnum status;
    public DestinationStatus withStatus(DestinationStatusStatusEnum status) {
        this.status = status;
        return this;
    }
}