package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RotateServerCaContext
 * Instance rotate server CA context.
**/
public class RotateServerCaContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public RotateServerCaContext withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextVersion")
    public String nextVersion;
    public RotateServerCaContext withNextVersion(String nextVersion) {
        this.nextVersion = nextVersion;
        return this;
    }
}