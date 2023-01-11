package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Delete
 * An object was deleted.
**/
public class Delete {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public DeleteTypeEnum type;
    public Delete withType(DeleteTypeEnum type) {
        this.type = type;
        return this;
    }
}