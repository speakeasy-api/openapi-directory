package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourceProperties
 * The properties associated with the resource of the request.
**/
public class ResourceProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludesDescendants")
    public Boolean excludesDescendants;
    public ResourceProperties withExcludesDescendants(Boolean excludesDescendants) {
        this.excludesDescendants = excludesDescendants;
        return this;
    }
}