package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataLeakPreventionChange
 * A change in the object's data leak prevention status.
**/
public class DataLeakPreventionChange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public DataLeakPreventionChangeTypeEnum type;
    public DataLeakPreventionChange withType(DataLeakPreventionChangeTypeEnum type) {
        this.type = type;
        return this;
    }
}