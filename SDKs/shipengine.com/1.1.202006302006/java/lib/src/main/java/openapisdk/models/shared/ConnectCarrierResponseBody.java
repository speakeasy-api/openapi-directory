package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ConnectCarrierResponseBody
 * A connect account response body
**/
public class ConnectCarrierResponseBody {
    @JsonProperty("carrier_id")
    public String carrierId;
    public ConnectCarrierResponseBody withCarrierId(String carrierId) {
        this.carrierId = carrierId;
        return this;
    }
}