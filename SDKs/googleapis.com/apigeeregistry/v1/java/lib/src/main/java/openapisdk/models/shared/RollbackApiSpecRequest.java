package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RollbackApiSpecRequest
 * Request message for RollbackApiSpec.
**/
public class RollbackApiSpecRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionId")
    public String revisionId;
    public RollbackApiSpecRequest withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
}