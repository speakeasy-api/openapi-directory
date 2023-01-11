package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QuotaInfo
 * Contains the quota information for a quota check response.
**/
public class QuotaInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limitExceeded")
    public String[] limitExceeded;
    public QuotaInfo withLimitExceeded(String[] limitExceeded) {
        this.limitExceeded = limitExceeded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quotaConsumed")
    public java.util.Map<String, Integer> quotaConsumed;
    public QuotaInfo withQuotaConsumed(java.util.Map<String, Integer> quotaConsumed) {
        this.quotaConsumed = quotaConsumed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quotaMetrics")
    public MetricValueSet[] quotaMetrics;
    public QuotaInfo withQuotaMetrics(MetricValueSet[] quotaMetrics) {
        this.quotaMetrics = quotaMetrics;
        return this;
    }
}