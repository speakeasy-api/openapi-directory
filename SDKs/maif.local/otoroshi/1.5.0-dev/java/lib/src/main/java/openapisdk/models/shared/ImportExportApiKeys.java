package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImportExportApiKeys
 * An Otoroshi Api Key. An Api Key is defined for a group of services to allow usage of the same Api Key for multiple services.
**/
public class ImportExportApiKeys {
    @JsonProperty("authorizedEntities")
    public String[] authorizedEntities;
    public ImportExportApiKeys withAuthorizedEntities(String[] authorizedEntities) {
        this.authorizedEntities = authorizedEntities;
        return this;
    }
    @JsonProperty("clientId")
    public String clientId;
    public ImportExportApiKeys withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("clientName")
    public String clientName;
    public ImportExportApiKeys withClientName(String clientName) {
        this.clientName = clientName;
        return this;
    }
    @JsonProperty("clientSecret")
    public String clientSecret;
    public ImportExportApiKeys withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dailyQuota")
    public Long dailyQuota;
    public ImportExportApiKeys withDailyQuota(Long dailyQuota) {
        this.dailyQuota = dailyQuota;
        return this;
    }
    @JsonProperty("enabled")
    public Boolean enabled;
    public ImportExportApiKeys withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, String> metadata;
    public ImportExportApiKeys withMetadata(java.util.Map<String, String> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monthlyQuota")
    public Long monthlyQuota;
    public ImportExportApiKeys withMonthlyQuota(Long monthlyQuota) {
        this.monthlyQuota = monthlyQuota;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("throttlingQuota")
    public Long throttlingQuota;
    public ImportExportApiKeys withThrottlingQuota(Long throttlingQuota) {
        this.throttlingQuota = throttlingQuota;
        return this;
    }
}