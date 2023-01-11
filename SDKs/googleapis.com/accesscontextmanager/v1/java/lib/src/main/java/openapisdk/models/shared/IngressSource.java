package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IngressSource
 * The source that IngressPolicy authorizes access from.
**/
public class IngressSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessLevel")
    public String accessLevel;
    public IngressSource withAccessLevel(String accessLevel) {
        this.accessLevel = accessLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource")
    public String resource;
    public IngressSource withResource(String resource) {
        this.resource = resource;
        return this;
    }
}