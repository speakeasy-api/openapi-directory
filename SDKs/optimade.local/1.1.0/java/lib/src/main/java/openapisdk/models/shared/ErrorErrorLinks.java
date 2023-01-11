package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ErrorErrorLinks
 * A Links object specific to Error objects
**/
public class ErrorErrorLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("about")
    public Object about;
    public ErrorErrorLinks withAbout(Object about) {
        this.about = about;
        return this;
    }
}