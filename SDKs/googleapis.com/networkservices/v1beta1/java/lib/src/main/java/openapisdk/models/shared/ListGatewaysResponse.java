package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListGatewaysResponse
 * Response returned by the ListGateways method.
**/
public class ListGatewaysResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gateways")
    public Gateway[] gateways;
    public ListGatewaysResponse withGateways(Gateway[] gateways) {
        this.gateways = gateways;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListGatewaysResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}