package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IngressTo
 * Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the ApiOperation intended to be performed on the target resource of the request. The request must satisfy what is defined in `operations` AND `resources` in order to match.
**/
public class IngressTo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operations")
    public ApiOperation[] operations;
    public IngressTo withOperations(ApiOperation[] operations) {
        this.operations = operations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resources")
    public String[] resources;
    public IngressTo withResources(String[] resources) {
        this.resources = resources;
        return this;
    }
}