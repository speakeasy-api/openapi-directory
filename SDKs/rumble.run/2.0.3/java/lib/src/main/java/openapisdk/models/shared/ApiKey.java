package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public ApiKey withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public ApiKey withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("counter")
    public Long counter;
    public ApiKey withCounter(Long counter) {
        this.counter = counter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public Long createdAt;
    public ApiKey withCreatedAt(Long createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_by")
    public String createdBy;
    public ApiKey withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public ApiKey withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inactive")
    public Boolean inactive;
    public ApiKey withInactive(Boolean inactive) {
        this.inactive = inactive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_used_at")
    public Long lastUsedAt;
    public ApiKey withLastUsedAt(Long lastUsedAt) {
        this.lastUsedAt = lastUsedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_used_ip")
    public String lastUsedIp;
    public ApiKey withLastUsedIp(String lastUsedIp) {
        this.lastUsedIp = lastUsedIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_used_ua")
    public String lastUsedUa;
    public ApiKey withLastUsedUa(String lastUsedUa) {
        this.lastUsedUa = lastUsedUa;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization_id")
    public String organizationId;
    public ApiKey withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token")
    public String token;
    public ApiKey withToken(String token) {
        this.token = token;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public ApiKey withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usage_limit")
    public Long usageLimit;
    public ApiKey withUsageLimit(Long usageLimit) {
        this.usageLimit = usageLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usage_today")
    public Long usageToday;
    public ApiKey withUsageToday(Long usageToday) {
        this.usageToday = usageToday;
        return this;
    }
}