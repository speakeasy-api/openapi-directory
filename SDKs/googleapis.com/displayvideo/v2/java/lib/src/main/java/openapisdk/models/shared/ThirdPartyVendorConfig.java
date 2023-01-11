package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ThirdPartyVendorConfig
 * Settings that control how third-party measurement vendors are configured.
**/
public class ThirdPartyVendorConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placementId")
    public String placementId;
    public ThirdPartyVendorConfig withPlacementId(String placementId) {
        this.placementId = placementId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vendor")
    public ThirdPartyVendorConfigVendorEnum vendor;
    public ThirdPartyVendorConfig withVendor(ThirdPartyVendorConfigVendorEnum vendor) {
        this.vendor = vendor;
        return this;
    }
}