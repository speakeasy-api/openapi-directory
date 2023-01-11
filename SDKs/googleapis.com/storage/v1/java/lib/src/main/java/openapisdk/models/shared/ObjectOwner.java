package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObjectOwner
 * The owner of the object. This will always be the uploader of the object.
**/
public class ObjectOwner {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity")
    public String entity;
    public ObjectOwner withEntity(String entity) {
        this.entity = entity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityId")
    public String entityId;
    public ObjectOwner withEntityId(String entityId) {
        this.entityId = entityId;
        return this;
    }
}