package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleIdentityAccesscontextmanagerV1IngressSource
 * The source that IngressPolicy authorizes access from.
**/
public class GoogleIdentityAccesscontextmanagerV1IngressSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessLevel")
    public String accessLevel;
    public GoogleIdentityAccesscontextmanagerV1IngressSource withAccessLevel(String accessLevel) {
        this.accessLevel = accessLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource")
    public String resource;
    public GoogleIdentityAccesscontextmanagerV1IngressSource withResource(String resource) {
        this.resource = resource;
        return this;
    }
}