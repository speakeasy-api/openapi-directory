package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OptimadeErrorErrorLinks
 * A Links object specific to Error objects
**/
public class OptimadeErrorErrorLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("about")
    public Object about;
    public OptimadeErrorErrorLinks withAbout(Object about) {
        this.about = about;
        return this;
    }
}