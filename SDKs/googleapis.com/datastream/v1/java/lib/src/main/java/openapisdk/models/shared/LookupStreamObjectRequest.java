package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LookupStreamObjectRequest
 * Request for looking up a specific stream object by its source object identifier.
**/
public class LookupStreamObjectRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceObjectIdentifier")
    public SourceObjectIdentifier sourceObjectIdentifier;
    public LookupStreamObjectRequest withSourceObjectIdentifier(SourceObjectIdentifier sourceObjectIdentifier) {
        this.sourceObjectIdentifier = sourceObjectIdentifier;
        return this;
    }
}