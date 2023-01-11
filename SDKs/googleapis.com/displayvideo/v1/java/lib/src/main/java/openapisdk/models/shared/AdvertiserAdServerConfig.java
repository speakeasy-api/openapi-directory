package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdvertiserAdServerConfig
 * Ad server related settings of an advertiser.
**/
public class AdvertiserAdServerConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cmHybridConfig")
    public CmHybridConfig cmHybridConfig;
    public AdvertiserAdServerConfig withCmHybridConfig(CmHybridConfig cmHybridConfig) {
        this.cmHybridConfig = cmHybridConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thirdPartyOnlyConfig")
    public ThirdPartyOnlyConfig thirdPartyOnlyConfig;
    public AdvertiserAdServerConfig withThirdPartyOnlyConfig(ThirdPartyOnlyConfig thirdPartyOnlyConfig) {
        this.thirdPartyOnlyConfig = thirdPartyOnlyConfig;
        return this;
    }
}