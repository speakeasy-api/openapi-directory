package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ResponseDefaultResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource")
    public ResponseDefaultResourceResource resource;
    public ResponseDefaultResource withResource(ResponseDefaultResourceResource resource) {
        this.resource = resource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Long status;
    public ResponseDefaultResource withStatus(Long status) {
        this.status = status;
        return this;
    }
}