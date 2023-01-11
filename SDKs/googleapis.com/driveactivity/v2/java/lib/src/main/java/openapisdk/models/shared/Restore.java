package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Restore
 * A deleted object was restored.
**/
public class Restore {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public RestoreTypeEnum type;
    public Restore withType(RestoreTypeEnum type) {
        this.type = type;
        return this;
    }
}