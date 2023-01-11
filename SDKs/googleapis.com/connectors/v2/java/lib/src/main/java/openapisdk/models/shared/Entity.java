package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Entity
 * 'Entity row'/ 'Entity' refers to a single row of an entity type.
**/
public class Entity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public java.util.Map<String, Object> fields;
    public Entity withFields(java.util.Map<String, Object> fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Entity withName(String name) {
        this.name = name;
        return this;
    }
}