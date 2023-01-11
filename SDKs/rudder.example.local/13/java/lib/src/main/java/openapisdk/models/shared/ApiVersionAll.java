package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ApiVersionAll {
    @JsonProperty("status")
    public Object status;
    public ApiVersionAll withStatus(Object status) {
        this.status = status;
        return this;
    }
    @JsonProperty("version")
    public Long version;
    public ApiVersionAll withVersion(Long version) {
        this.version = version;
        return this;
    }
}