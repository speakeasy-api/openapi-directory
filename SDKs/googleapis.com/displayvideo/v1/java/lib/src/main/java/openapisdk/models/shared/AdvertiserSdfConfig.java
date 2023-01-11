package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdvertiserSdfConfig
 * Structured Data Files (SDF) settings of an advertiser.
**/
public class AdvertiserSdfConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overridePartnerSdfConfig")
    public Boolean overridePartnerSdfConfig;
    public AdvertiserSdfConfig withOverridePartnerSdfConfig(Boolean overridePartnerSdfConfig) {
        this.overridePartnerSdfConfig = overridePartnerSdfConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sdfConfig")
    public SdfConfig sdfConfig;
    public AdvertiserSdfConfig withSdfConfig(SdfConfig sdfConfig) {
        this.sdfConfig = sdfConfig;
        return this;
    }
}