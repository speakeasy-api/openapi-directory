package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostEnterpriseAuthRefresh200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token")
    public String token;
    public PostEnterpriseAuthRefresh200ApplicationJson withToken(String token) {
        this.token = token;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ttl")
    public Long ttl;
    public PostEnterpriseAuthRefresh200ApplicationJson withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
}