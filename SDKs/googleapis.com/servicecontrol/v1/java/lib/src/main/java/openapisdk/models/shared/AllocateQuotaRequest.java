package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AllocateQuotaRequest
 * Request message for the AllocateQuota method.
**/
public class AllocateQuotaRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allocateOperation")
    public QuotaOperation allocateOperation;
    public AllocateQuotaRequest withAllocateOperation(QuotaOperation allocateOperation) {
        this.allocateOperation = allocateOperation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceConfigId")
    public String serviceConfigId;
    public AllocateQuotaRequest withServiceConfigId(String serviceConfigId) {
        this.serviceConfigId = serviceConfigId;
        return this;
    }
}