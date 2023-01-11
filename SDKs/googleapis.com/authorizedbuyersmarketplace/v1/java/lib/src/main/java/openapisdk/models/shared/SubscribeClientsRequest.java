package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubscribeClientsRequest
 * Request message for SubscribeAuctionPackageClients.
**/
public class SubscribeClientsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clients")
    public String[] clients;
    public SubscribeClientsRequest withClients(String[] clients) {
        this.clients = clients;
        return this;
    }
}