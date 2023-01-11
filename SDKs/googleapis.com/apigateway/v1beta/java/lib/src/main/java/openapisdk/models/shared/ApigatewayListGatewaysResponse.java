package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApigatewayListGatewaysResponse
 * Response message for ApiGatewayService.ListGateways
**/
public class ApigatewayListGatewaysResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gateways")
    public ApigatewayGateway[] gateways;
    public ApigatewayListGatewaysResponse withGateways(ApigatewayGateway[] gateways) {
        this.gateways = gateways;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ApigatewayListGatewaysResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachableLocations")
    public String[] unreachableLocations;
    public ApigatewayListGatewaysResponse withUnreachableLocations(String[] unreachableLocations) {
        this.unreachableLocations = unreachableLocations;
        return this;
    }
}