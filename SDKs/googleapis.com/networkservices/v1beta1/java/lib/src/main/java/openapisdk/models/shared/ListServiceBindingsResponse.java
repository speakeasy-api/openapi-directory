package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListServiceBindingsResponse
 * Response returned by the ListServiceBindings method.
**/
public class ListServiceBindingsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListServiceBindingsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceBindings")
    public ServiceBinding[] serviceBindings;
    public ListServiceBindingsResponse withServiceBindings(ServiceBinding[] serviceBindings) {
        this.serviceBindings = serviceBindings;
        return this;
    }
}