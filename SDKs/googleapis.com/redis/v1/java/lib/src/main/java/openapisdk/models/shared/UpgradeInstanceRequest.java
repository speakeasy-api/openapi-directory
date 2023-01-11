package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpgradeInstanceRequest
 * Request for UpgradeInstance.
**/
public class UpgradeInstanceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redisVersion")
    public String redisVersion;
    public UpgradeInstanceRequest withRedisVersion(String redisVersion) {
        this.redisVersion = redisVersion;
        return this;
    }
}