package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Platform
 * Each Platform is owned by a Product and owns a collection of channels. Available platforms are listed in Platform enum below. Not all Channels are available for every Platform (e.g. CANARY does not exist for LINUX).
**/
public class Platform {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Platform withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platformType")
    public PlatformPlatformTypeEnum platformType;
    public Platform withPlatformType(PlatformPlatformTypeEnum platformType) {
        this.platformType = platformType;
        return this;
    }
}