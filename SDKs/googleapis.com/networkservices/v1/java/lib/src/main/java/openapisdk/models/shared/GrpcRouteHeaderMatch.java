package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GrpcRouteHeaderMatch
 * A match against a collection of headers.
**/
public class GrpcRouteHeaderMatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public GrpcRouteHeaderMatch withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GrpcRouteHeaderMatchTypeEnum type;
    public GrpcRouteHeaderMatch withType(GrpcRouteHeaderMatchTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public GrpcRouteHeaderMatch withValue(String value) {
        this.value = value;
        return this;
    }
}