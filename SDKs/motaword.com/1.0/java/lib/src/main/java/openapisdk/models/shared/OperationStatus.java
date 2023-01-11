package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OperationStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public OperationStatusEnumEnum status;
    public OperationStatus withStatus(OperationStatusEnumEnum status) {
        this.status = status;
        return this;
    }
}