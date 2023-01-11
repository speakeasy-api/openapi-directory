package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResolveServiceRequest
 * The request message for LookupService.ResolveService. Looks up a service by its name, returns the service and its endpoints.
**/
public class ResolveServiceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpointFilter")
    public String endpointFilter;
    public ResolveServiceRequest withEndpointFilter(String endpointFilter) {
        this.endpointFilter = endpointFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxEndpoints")
    public Integer maxEndpoints;
    public ResolveServiceRequest withMaxEndpoints(Integer maxEndpoints) {
        this.maxEndpoints = maxEndpoints;
        return this;
    }
}