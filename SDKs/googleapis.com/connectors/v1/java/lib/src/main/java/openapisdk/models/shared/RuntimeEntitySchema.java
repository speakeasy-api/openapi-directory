package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RuntimeEntitySchema
 * Schema of a runtime entity.
**/
public class RuntimeEntitySchema {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity")
    public String entity;
    public RuntimeEntitySchema withEntity(String entity) {
        this.entity = entity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public Field[] fields;
    public RuntimeEntitySchema withFields(Field[] fields) {
        this.fields = fields;
        return this;
    }
}