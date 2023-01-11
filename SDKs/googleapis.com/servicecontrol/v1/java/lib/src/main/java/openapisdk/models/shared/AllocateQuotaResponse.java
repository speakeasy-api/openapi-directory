package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AllocateQuotaResponse
 * Response message for the AllocateQuota method.
**/
public class AllocateQuotaResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allocateErrors")
    public QuotaError[] allocateErrors;
    public AllocateQuotaResponse withAllocateErrors(QuotaError[] allocateErrors) {
        this.allocateErrors = allocateErrors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allocateInfo")
    public AllocateInfo allocateInfo;
    public AllocateQuotaResponse withAllocateInfo(AllocateInfo allocateInfo) {
        this.allocateInfo = allocateInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operationId")
    public String operationId;
    public AllocateQuotaResponse withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quotaMetrics")
    public MetricValueSet[] quotaMetrics;
    public AllocateQuotaResponse withQuotaMetrics(MetricValueSet[] quotaMetrics) {
        this.quotaMetrics = quotaMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceConfigId")
    public String serviceConfigId;
    public AllocateQuotaResponse withServiceConfigId(String serviceConfigId) {
        this.serviceConfigId = serviceConfigId;
        return this;
    }
}