package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetAncestryResponse
 * Response from the projects.getAncestry method.
**/
public class GetAncestryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ancestor")
    public Ancestor[] ancestor;
    public GetAncestryResponse withAncestor(Ancestor[] ancestor) {
        this.ancestor = ancestor;
        return this;
    }
}