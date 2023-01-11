package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApigatewayListApisResponse
 * Response message for ApiGatewayService.ListApis
**/
public class ApigatewayListApisResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apis")
    public ApigatewayApi[] apis;
    public ApigatewayListApisResponse withApis(ApigatewayApi[] apis) {
        this.apis = apis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ApigatewayListApisResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachableLocations")
    public String[] unreachableLocations;
    public ApigatewayListApisResponse withUnreachableLocations(String[] unreachableLocations) {
        this.unreachableLocations = unreachableLocations;
        return this;
    }
}