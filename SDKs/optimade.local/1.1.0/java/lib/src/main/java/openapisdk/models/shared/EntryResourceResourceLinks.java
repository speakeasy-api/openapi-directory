package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EntryResourceResourceLinks
 * A Resource Links object
**/
public class EntryResourceResourceLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public Object self;
    public EntryResourceResourceLinks withSelf(Object self) {
        this.self = self;
        return this;
    }
}