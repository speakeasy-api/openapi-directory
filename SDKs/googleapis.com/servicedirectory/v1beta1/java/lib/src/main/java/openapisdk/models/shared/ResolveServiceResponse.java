package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResolveServiceResponse
 * The response message for LookupService.ResolveService.
**/
public class ResolveServiceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service")
    public Service service;
    public ResolveServiceResponse withService(Service service) {
        this.service = service;
        return this;
    }
}