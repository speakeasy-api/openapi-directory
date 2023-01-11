package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * YoutubeAndPartnersThirdPartyMeasurementSettings
 * Settings that control what third-party vendors are measuring specific line item metrics.
**/
public class YoutubeAndPartnersThirdPartyMeasurementSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brandLiftVendorConfigs")
    public ThirdPartyVendorConfig[] brandLiftVendorConfigs;
    public YoutubeAndPartnersThirdPartyMeasurementSettings withBrandLiftVendorConfigs(ThirdPartyVendorConfig[] brandLiftVendorConfigs) {
        this.brandLiftVendorConfigs = brandLiftVendorConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brandSafetyVendorConfigs")
    public ThirdPartyVendorConfig[] brandSafetyVendorConfigs;
    public YoutubeAndPartnersThirdPartyMeasurementSettings withBrandSafetyVendorConfigs(ThirdPartyVendorConfig[] brandSafetyVendorConfigs) {
        this.brandSafetyVendorConfigs = brandSafetyVendorConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reachVendorConfigs")
    public ThirdPartyVendorConfig[] reachVendorConfigs;
    public YoutubeAndPartnersThirdPartyMeasurementSettings withReachVendorConfigs(ThirdPartyVendorConfig[] reachVendorConfigs) {
        this.reachVendorConfigs = reachVendorConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("viewabilityVendorConfigs")
    public ThirdPartyVendorConfig[] viewabilityVendorConfigs;
    public YoutubeAndPartnersThirdPartyMeasurementSettings withViewabilityVendorConfigs(ThirdPartyVendorConfig[] viewabilityVendorConfigs) {
        this.viewabilityVendorConfigs = viewabilityVendorConfigs;
        return this;
    }
}