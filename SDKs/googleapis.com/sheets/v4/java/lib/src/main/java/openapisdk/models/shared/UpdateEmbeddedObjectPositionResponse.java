package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateEmbeddedObjectPositionResponse
 * The result of updating an embedded object's position.
**/
public class UpdateEmbeddedObjectPositionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
    public EmbeddedObjectPosition position;
    public UpdateEmbeddedObjectPositionResponse withPosition(EmbeddedObjectPosition position) {
        this.position = position;
        return this;
    }
}