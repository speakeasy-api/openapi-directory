package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdvertiserTargetingConfig
 * Targeting settings related to ad serving of an advertiser.
**/
public class AdvertiserTargetingConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exemptTvFromViewabilityTargeting")
    public Boolean exemptTvFromViewabilityTargeting;
    public AdvertiserTargetingConfig withExemptTvFromViewabilityTargeting(Boolean exemptTvFromViewabilityTargeting) {
        this.exemptTvFromViewabilityTargeting = exemptTvFromViewabilityTargeting;
        return this;
    }
}