package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdvertiserCreativeConfig
 * Creatives related settings of an advertiser.
**/
public class AdvertiserCreativeConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dynamicCreativeEnabled")
    public Boolean dynamicCreativeEnabled;
    public AdvertiserCreativeConfig withDynamicCreativeEnabled(Boolean dynamicCreativeEnabled) {
        this.dynamicCreativeEnabled = dynamicCreativeEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iasClientId")
    public String iasClientId;
    public AdvertiserCreativeConfig withIasClientId(String iasClientId) {
        this.iasClientId = iasClientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("obaComplianceDisabled")
    public Boolean obaComplianceDisabled;
    public AdvertiserCreativeConfig withObaComplianceDisabled(Boolean obaComplianceDisabled) {
        this.obaComplianceDisabled = obaComplianceDisabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoCreativeDataSharingAuthorized")
    public Boolean videoCreativeDataSharingAuthorized;
    public AdvertiserCreativeConfig withVideoCreativeDataSharingAuthorized(Boolean videoCreativeDataSharingAuthorized) {
        this.videoCreativeDataSharingAuthorized = videoCreativeDataSharingAuthorized;
        return this;
    }
}