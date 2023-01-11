package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateCallRequestTransferAnswerUrl {
    @JsonProperty("action")
    public RequestTransferActionParamEnum action;
    public UpdateCallRequestTransferAnswerUrl withAction(RequestTransferActionParamEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("destination")
    public UpdateCallRequestTransferAnswerUrlDestination destination;
    public UpdateCallRequestTransferAnswerUrl withDestination(UpdateCallRequestTransferAnswerUrlDestination destination) {
        this.destination = destination;
        return this;
    }
}