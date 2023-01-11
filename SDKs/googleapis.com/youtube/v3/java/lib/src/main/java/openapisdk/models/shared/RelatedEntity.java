package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RelatedEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity")
    public Entity entity;
    public RelatedEntity withEntity(Entity entity) {
        this.entity = entity;
        return this;
    }
}