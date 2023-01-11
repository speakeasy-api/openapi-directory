package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PatchesSchema
 * A JSON patch operation
**/
public class PatchesSchema {
    @JsonProperty("op")
    public PatchesSchemaOpEnum op;
    public PatchesSchema withOp(PatchesSchemaOpEnum op) {
        this.op = op;
        return this;
    }
    @JsonProperty("path")
    public String path;
    public PatchesSchema withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public java.util.Map<String, Object> value;
    public PatchesSchema withValue(java.util.Map<String, Object> value) {
        this.value = value;
        return this;
    }
}