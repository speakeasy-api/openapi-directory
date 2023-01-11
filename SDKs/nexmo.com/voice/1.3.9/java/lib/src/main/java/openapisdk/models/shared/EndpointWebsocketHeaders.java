package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EndpointWebsocketHeaders
 * Details of the Websocket you want to connect to
**/
public class EndpointWebsocketHeaders {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customer_id")
    public String customerId;
    public EndpointWebsocketHeaders withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
}