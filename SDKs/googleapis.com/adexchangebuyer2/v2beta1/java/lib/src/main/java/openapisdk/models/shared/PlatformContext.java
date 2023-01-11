package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PlatformContext
 * Output only. The type of platform the restriction applies to.
**/
public class PlatformContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platforms")
    public PlatformContextPlatformsEnum[] platforms;
    public PlatformContext withPlatforms(PlatformContextPlatformsEnum[] platforms) {
        this.platforms = platforms;
        return this;
    }
}