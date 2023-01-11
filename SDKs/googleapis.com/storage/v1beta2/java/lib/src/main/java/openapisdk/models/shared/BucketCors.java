package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BucketCors {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxAgeSeconds")
    public Integer maxAgeSeconds;
    public BucketCors withMaxAgeSeconds(Integer maxAgeSeconds) {
        this.maxAgeSeconds = maxAgeSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public String[] method;
    public BucketCors withMethod(String[] method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("origin")
    public String[] origin;
    public BucketCors withOrigin(String[] origin) {
        this.origin = origin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseHeader")
    public String[] responseHeader;
    public BucketCors withResponseHeader(String[] responseHeader) {
        this.responseHeader = responseHeader;
        return this;
    }
}