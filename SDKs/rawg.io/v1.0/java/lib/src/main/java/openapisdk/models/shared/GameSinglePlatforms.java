package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GameSinglePlatforms {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platform")
    public GameSinglePlatformsPlatform platform;
    public GameSinglePlatforms withPlatform(GameSinglePlatformsPlatform platform) {
        this.platform = platform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("released_at")
    public String releasedAt;
    public GameSinglePlatforms withReleasedAt(String releasedAt) {
        this.releasedAt = releasedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requirements")
    public GameSinglePlatformsRequirements requirements;
    public GameSinglePlatforms withRequirements(GameSinglePlatformsRequirements requirements) {
        this.requirements = requirements;
        return this;
    }
}