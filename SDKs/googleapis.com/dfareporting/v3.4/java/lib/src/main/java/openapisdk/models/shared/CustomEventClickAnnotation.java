package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomEventClickAnnotation
 * Annotate a click event.
**/
public class CustomEventClickAnnotation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gclid")
    public String gclid;
    public CustomEventClickAnnotation withGclid(String gclid) {
        this.gclid = gclid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public CustomEventClickAnnotation withKind(String kind) {
        this.kind = kind;
        return this;
    }
}