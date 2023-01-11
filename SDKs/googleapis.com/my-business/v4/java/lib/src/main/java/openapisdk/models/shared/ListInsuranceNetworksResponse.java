package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListInsuranceNetworksResponse
 * Response message for InsuranceNetworkService.ListInsuranceNetworks
**/
public class ListInsuranceNetworksResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networks")
    public InsuranceNetwork[] networks;
    public ListInsuranceNetworksResponse withNetworks(InsuranceNetwork[] networks) {
        this.networks = networks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListInsuranceNetworksResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}