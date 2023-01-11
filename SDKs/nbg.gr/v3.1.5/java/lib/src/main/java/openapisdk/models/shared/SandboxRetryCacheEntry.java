package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * SandboxRetryCacheEntry
 * Keeps the number of calls without x-fapi-customer-ip-address header present
**/
public class SandboxRetryCacheEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cacheKey")
    public String cacheKey;
    public SandboxRetryCacheEntry withCacheKey(String cacheKey) {
        this.cacheKey = cacheKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Integer count;
    public SandboxRetryCacheEntry withCount(Integer count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("expirationTimestamp")
    public OffsetDateTime expirationTimestamp;
    public SandboxRetryCacheEntry withExpirationTimestamp(OffsetDateTime expirationTimestamp) {
        this.expirationTimestamp = expirationTimestamp;
        return this;
    }
}