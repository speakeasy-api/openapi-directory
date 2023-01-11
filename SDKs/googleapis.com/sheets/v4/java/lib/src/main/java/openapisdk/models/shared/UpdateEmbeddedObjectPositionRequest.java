package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateEmbeddedObjectPositionRequest
 * Update an embedded object's position (such as a moving or resizing a chart or image).
**/
public class UpdateEmbeddedObjectPositionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public String fields;
    public UpdateEmbeddedObjectPositionRequest withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newPosition")
    public EmbeddedObjectPosition newPosition;
    public UpdateEmbeddedObjectPositionRequest withNewPosition(EmbeddedObjectPosition newPosition) {
        this.newPosition = newPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectId")
    public Integer objectId;
    public UpdateEmbeddedObjectPositionRequest withObjectId(Integer objectId) {
        this.objectId = objectId;
        return this;
    }
}