package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdvertiserDataAccessConfig
 * Settings that control how advertiser related data may be accessed.
**/
public class AdvertiserDataAccessConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sdfConfig")
    public AdvertiserSdfConfig sdfConfig;
    public AdvertiserDataAccessConfig withSdfConfig(AdvertiserSdfConfig sdfConfig) {
        this.sdfConfig = sdfConfig;
        return this;
    }
}