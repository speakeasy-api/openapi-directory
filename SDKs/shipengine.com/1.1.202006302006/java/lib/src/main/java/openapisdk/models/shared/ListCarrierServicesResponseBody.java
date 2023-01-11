package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListCarrierServicesResponseBody
 * A carrier list services response body
**/
public class ListCarrierServicesResponseBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("services")
    public ListCarrierServicesResponseBodyService[] services;
    public ListCarrierServicesResponseBody withServices(ListCarrierServicesResponseBodyService[] services) {
        this.services = services;
        return this;
    }
}