package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StructureResourceResourceLinks
 * A Resource Links object
**/
public class StructureResourceResourceLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public Object self;
    public StructureResourceResourceLinks withSelf(Object self) {
        this.self = self;
        return this;
    }
}