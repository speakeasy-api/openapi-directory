package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleIdentityAccesscontextmanagerV1IngressTo
 * Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the ApiOperation intended to be performed on the target resource of the request. The request must satisfy what is defined in `operations` AND `resources` in order to match.
**/
public class GoogleIdentityAccesscontextmanagerV1IngressTo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operations")
    public GoogleIdentityAccesscontextmanagerV1ApiOperation[] operations;
    public GoogleIdentityAccesscontextmanagerV1IngressTo withOperations(GoogleIdentityAccesscontextmanagerV1ApiOperation[] operations) {
        this.operations = operations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resources")
    public String[] resources;
    public GoogleIdentityAccesscontextmanagerV1IngressTo withResources(String[] resources) {
        this.resources = resources;
        return this;
    }
}