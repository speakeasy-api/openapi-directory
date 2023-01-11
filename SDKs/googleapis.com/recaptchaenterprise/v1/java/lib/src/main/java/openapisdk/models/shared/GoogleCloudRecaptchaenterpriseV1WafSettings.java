package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecaptchaenterpriseV1WafSettings
 * Settings specific to keys that can be used for WAF (Web Application Firewall).
**/
public class GoogleCloudRecaptchaenterpriseV1WafSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wafFeature")
    public GoogleCloudRecaptchaenterpriseV1WafSettingsWafFeatureEnum wafFeature;
    public GoogleCloudRecaptchaenterpriseV1WafSettings withWafFeature(GoogleCloudRecaptchaenterpriseV1WafSettingsWafFeatureEnum wafFeature) {
        this.wafFeature = wafFeature;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wafService")
    public GoogleCloudRecaptchaenterpriseV1WafSettingsWafServiceEnum wafService;
    public GoogleCloudRecaptchaenterpriseV1WafSettings withWafService(GoogleCloudRecaptchaenterpriseV1WafSettingsWafServiceEnum wafService) {
        this.wafService = wafService;
        return this;
    }
}