package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TagApiSpecRevisionRequest
 * Request message for TagApiSpecRevision.
**/
public class TagApiSpecRevisionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag")
    public String tag;
    public TagApiSpecRevisionRequest withTag(String tag) {
        this.tag = tag;
        return this;
    }
}