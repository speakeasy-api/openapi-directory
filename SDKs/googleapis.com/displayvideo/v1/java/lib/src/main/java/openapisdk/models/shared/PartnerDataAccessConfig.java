package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PartnerDataAccessConfig
 * Settings that control how partner related data may be accessed.
**/
public class PartnerDataAccessConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sdfConfig")
    public SdfConfig sdfConfig;
    public PartnerDataAccessConfig withSdfConfig(SdfConfig sdfConfig) {
        this.sdfConfig = sdfConfig;
        return this;
    }
}