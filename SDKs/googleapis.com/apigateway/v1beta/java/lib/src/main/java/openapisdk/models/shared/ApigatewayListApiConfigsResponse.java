package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApigatewayListApiConfigsResponse
 * Response message for ApiGatewayService.ListApiConfigs
**/
public class ApigatewayListApiConfigsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiConfigs")
    public ApigatewayApiConfig[] apiConfigs;
    public ApigatewayListApiConfigsResponse withApiConfigs(ApigatewayApiConfig[] apiConfigs) {
        this.apiConfigs = apiConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ApigatewayListApiConfigsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachableLocations")
    public String[] unreachableLocations;
    public ApigatewayListApiConfigsResponse withUnreachableLocations(String[] unreachableLocations) {
        this.unreachableLocations = unreachableLocations;
        return this;
    }
}