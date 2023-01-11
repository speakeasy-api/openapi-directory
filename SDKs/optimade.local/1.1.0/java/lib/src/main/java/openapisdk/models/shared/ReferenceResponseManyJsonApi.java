package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReferenceResponseManyJsonApi
 * An object describing the server's implementation
**/
public class ReferenceResponseManyJsonApi {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public java.util.Map<String, Object> meta;
    public ReferenceResponseManyJsonApi withMeta(java.util.Map<String, Object> meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public ReferenceResponseManyJsonApi withVersion(String version) {
        this.version = version;
        return this;
    }
}