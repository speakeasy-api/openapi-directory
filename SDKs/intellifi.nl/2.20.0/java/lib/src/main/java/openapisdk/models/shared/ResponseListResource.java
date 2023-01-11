package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ResponseListResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Long status;
    public ResponseListResource withStatus(Long status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Long total;
    public ResponseListResource withTotal(Long total) {
        this.total = total;
        return this;
    }
}