package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteEmbeddedObjectRequest
 * Deletes the embedded object with the given ID.
**/
public class DeleteEmbeddedObjectRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectId")
    public Integer objectId;
    public DeleteEmbeddedObjectRequest withObjectId(Integer objectId) {
        this.objectId = objectId;
        return this;
    }
}