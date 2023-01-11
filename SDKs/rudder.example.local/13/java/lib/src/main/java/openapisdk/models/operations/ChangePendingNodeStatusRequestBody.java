package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChangePendingNodeStatusRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ChangePendingNodeStatusRequestBodyStatusEnum status;
    public ChangePendingNodeStatusRequestBody withStatus(ChangePendingNodeStatusRequestBodyStatusEnum status) {
        this.status = status;
        return this;
    }
}