package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateClientEventRequest
 * The report event request.
**/
public class CreateClientEventRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientEvent")
    public ClientEvent clientEvent;
    public CreateClientEventRequest withClientEvent(ClientEvent clientEvent) {
        this.clientEvent = clientEvent;
        return this;
    }
}