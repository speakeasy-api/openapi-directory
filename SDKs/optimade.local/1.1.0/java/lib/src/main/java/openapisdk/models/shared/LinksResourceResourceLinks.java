package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LinksResourceResourceLinks
 * A Resource Links object
**/
public class LinksResourceResourceLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public Object self;
    public LinksResourceResourceLinks withSelf(Object self) {
        this.self = self;
        return this;
    }
}