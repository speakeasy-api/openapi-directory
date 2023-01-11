package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InfoResponseBaseInfoResourceResourceLinks
 * A Resource Links object
**/
public class InfoResponseBaseInfoResourceResourceLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public Object self;
    public InfoResponseBaseInfoResourceResourceLinks withSelf(Object self) {
        this.self = self;
        return this;
    }
}