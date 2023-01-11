package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TargetingValueRequestPlatformTargeting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestPlatforms")
    public String[] requestPlatforms;
    public TargetingValueRequestPlatformTargeting withRequestPlatforms(String[] requestPlatforms) {
        this.requestPlatforms = requestPlatforms;
        return this;
    }
}