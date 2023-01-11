package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateCallRequestTransferNcco {
    @JsonProperty("action")
    public RequestTransferActionParamEnum action;
    public UpdateCallRequestTransferNcco withAction(RequestTransferActionParamEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("destination")
    public UpdateCallRequestTransferNccoDestination destination;
    public UpdateCallRequestTransferNcco withDestination(UpdateCallRequestTransferNccoDestination destination) {
        this.destination = destination;
        return this;
    }
}