package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ThreeHeaders
 * Details of the Websocket you want to connect to
**/
public class ThreeHeaders {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customer_id")
    public String customerId;
    public ThreeHeaders withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
}