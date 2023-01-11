package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EntityInput
 * 'Entity row'/ 'Entity' refers to a single row of an entity type.
**/
public class EntityInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public java.util.Map<String, Object> fields;
    public EntityInput withFields(java.util.Map<String, Object> fields) {
        this.fields = fields;
        return this;
    }
}