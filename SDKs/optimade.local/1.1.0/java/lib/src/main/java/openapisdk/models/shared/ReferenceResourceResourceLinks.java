package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReferenceResourceResourceLinks
 * A Resource Links object
**/
public class ReferenceResourceResourceLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public Object self;
    public ReferenceResourceResourceLinks withSelf(Object self) {
        this.self = self;
        return this;
    }
}