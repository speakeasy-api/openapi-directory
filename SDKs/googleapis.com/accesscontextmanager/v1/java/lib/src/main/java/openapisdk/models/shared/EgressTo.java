package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EgressTo
 * Defines the conditions under which an EgressPolicy matches a request. Conditions are based on information about the ApiOperation intended to be performed on the `resources` specified. Note that if the destination of the request is also protected by a ServicePerimeter, then that ServicePerimeter must have an IngressPolicy which allows access in order for this request to succeed. The request must match `operations` AND `resources` fields in order to be allowed egress out of the perimeter.
**/
public class EgressTo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalResources")
    public String[] externalResources;
    public EgressTo withExternalResources(String[] externalResources) {
        this.externalResources = externalResources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operations")
    public ApiOperation[] operations;
    public EgressTo withOperations(ApiOperation[] operations) {
        this.operations = operations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resources")
    public String[] resources;
    public EgressTo withResources(String[] resources) {
        this.resources = resources;
        return this;
    }
}