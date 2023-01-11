package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListEndpointsResponse
 * The response message for RegistrationService.ListEndpoints.
**/
public class ListEndpointsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpoints")
    public Endpoint[] endpoints;
    public ListEndpointsResponse withEndpoints(Endpoint[] endpoints) {
        this.endpoints = endpoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListEndpointsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}