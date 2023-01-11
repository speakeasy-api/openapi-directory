package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecaptchaenterpriseV1WebKeySettings
 * Settings specific to keys that can be used by websites.
**/
public class GoogleCloudRecaptchaenterpriseV1WebKeySettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowAllDomains")
    public Boolean allowAllDomains;
    public GoogleCloudRecaptchaenterpriseV1WebKeySettings withAllowAllDomains(Boolean allowAllDomains) {
        this.allowAllDomains = allowAllDomains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowAmpTraffic")
    public Boolean allowAmpTraffic;
    public GoogleCloudRecaptchaenterpriseV1WebKeySettings withAllowAmpTraffic(Boolean allowAmpTraffic) {
        this.allowAmpTraffic = allowAmpTraffic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedDomains")
    public String[] allowedDomains;
    public GoogleCloudRecaptchaenterpriseV1WebKeySettings withAllowedDomains(String[] allowedDomains) {
        this.allowedDomains = allowedDomains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("challengeSecurityPreference")
    public GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreferenceEnum challengeSecurityPreference;
    public GoogleCloudRecaptchaenterpriseV1WebKeySettings withChallengeSecurityPreference(GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreferenceEnum challengeSecurityPreference) {
        this.challengeSecurityPreference = challengeSecurityPreference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integrationType")
    public GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationTypeEnum integrationType;
    public GoogleCloudRecaptchaenterpriseV1WebKeySettings withIntegrationType(GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationTypeEnum integrationType) {
        this.integrationType = integrationType;
        return this;
    }
}