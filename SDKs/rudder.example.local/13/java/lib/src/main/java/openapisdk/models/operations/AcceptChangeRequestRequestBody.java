package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AcceptChangeRequestRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AcceptChangeRequestRequestBodyStatusEnum status;
    public AcceptChangeRequestRequestBody withStatus(AcceptChangeRequestRequestBodyStatusEnum status) {
        this.status = status;
        return this;
    }
}