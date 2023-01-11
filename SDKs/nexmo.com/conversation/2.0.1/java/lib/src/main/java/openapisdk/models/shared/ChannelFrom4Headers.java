package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelFrom4Headers
 * Details of the Websocket you want to connect to
**/
public class ChannelFrom4Headers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customer_id")
    public String customerId;
    public ChannelFrom4Headers withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
}