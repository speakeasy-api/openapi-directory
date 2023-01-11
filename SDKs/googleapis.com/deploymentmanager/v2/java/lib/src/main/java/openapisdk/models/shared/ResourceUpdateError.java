package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourceUpdateError
 * Output only. If errors are generated during update of the resource, this field will be populated.
**/
public class ResourceUpdateError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public ResourceUpdateErrorErrors[] errors;
    public ResourceUpdateError withErrors(ResourceUpdateErrorErrors[] errors) {
        this.errors = errors;
        return this;
    }
}