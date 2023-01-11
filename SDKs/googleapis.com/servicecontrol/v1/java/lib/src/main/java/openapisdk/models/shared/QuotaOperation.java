package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QuotaOperation
 * Represents information regarding a quota operation.
**/
public class QuotaOperation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consumerId")
    public String consumerId;
    public QuotaOperation withConsumerId(String consumerId) {
        this.consumerId = consumerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public QuotaOperation withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("methodName")
    public String methodName;
    public QuotaOperation withMethodName(String methodName) {
        this.methodName = methodName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operationId")
    public String operationId;
    public QuotaOperation withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quotaMetrics")
    public MetricValueSet[] quotaMetrics;
    public QuotaOperation withQuotaMetrics(MetricValueSet[] quotaMetrics) {
        this.quotaMetrics = quotaMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quotaMode")
    public QuotaOperationQuotaModeEnum quotaMode;
    public QuotaOperation withQuotaMode(QuotaOperationQuotaModeEnum quotaMode) {
        this.quotaMode = quotaMode;
        return this;
    }
}