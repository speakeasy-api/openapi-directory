package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EntityType
 * EntityType message contains metadata information about a single entity type present in the external system.
**/
public class EntityType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public Field[] fields;
    public EntityType withFields(Field[] fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public EntityType withName(String name) {
        this.name = name;
        return this;
    }
}