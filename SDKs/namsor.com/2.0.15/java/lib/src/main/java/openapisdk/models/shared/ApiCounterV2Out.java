package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApiCounterV2Out
 * Detailed usage as reported by the deduplicating API counter.
**/
public class ApiCounterV2Out {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiKey")
    public ApiKeyOut apiKey;
    public ApiCounterV2Out withApiKey(ApiKeyOut apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiService")
    public String apiService;
    public ApiCounterV2Out withApiService(String apiService) {
        this.apiService = apiService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdDateTime")
    public Long createdDateTime;
    public ApiCounterV2Out withCreatedDateTime(Long createdDateTime) {
        this.createdDateTime = createdDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastFlushedDateTime")
    public Long lastFlushedDateTime;
    public ApiCounterV2Out withLastFlushedDateTime(Long lastFlushedDateTime) {
        this.lastFlushedDateTime = lastFlushedDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUsedDateTime")
    public Long lastUsedDateTime;
    public ApiCounterV2Out withLastUsedDateTime(Long lastUsedDateTime) {
        this.lastUsedDateTime = lastUsedDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceFeaturesUsage")
    public java.util.Map<String, Long> serviceFeaturesUsage;
    public ApiCounterV2Out withServiceFeaturesUsage(java.util.Map<String, Long> serviceFeaturesUsage) {
        this.serviceFeaturesUsage = serviceFeaturesUsage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalUsage")
    public Long totalUsage;
    public ApiCounterV2Out withTotalUsage(Long totalUsage) {
        this.totalUsage = totalUsage;
        return this;
    }
}