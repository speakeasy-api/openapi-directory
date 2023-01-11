package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateEmbeddedObjectBorderRequest
 * Updates an embedded object's border property.
**/
public class UpdateEmbeddedObjectBorderRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("border")
    public EmbeddedObjectBorder border;
    public UpdateEmbeddedObjectBorderRequest withBorder(EmbeddedObjectBorder border) {
        this.border = border;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public String fields;
    public UpdateEmbeddedObjectBorderRequest withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectId")
    public Integer objectId;
    public UpdateEmbeddedObjectBorderRequest withObjectId(Integer objectId) {
        this.objectId = objectId;
        return this;
    }
}