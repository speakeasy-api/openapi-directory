package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloseMatterResponse
 * Response to a CloseMatterRequest.
**/
public class CloseMatterResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matter")
    public Matter matter;
    public CloseMatterResponse withMatter(Matter matter) {
        this.matter = matter;
        return this;
    }
}