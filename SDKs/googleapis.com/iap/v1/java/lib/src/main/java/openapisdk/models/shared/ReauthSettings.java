package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReauthSettings
 * Configuration for IAP reauthentication policies.
**/
public class ReauthSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxAge")
    public String maxAge;
    public ReauthSettings withMaxAge(String maxAge) {
        this.maxAge = maxAge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public ReauthSettingsMethodEnum method;
    public ReauthSettings withMethod(ReauthSettingsMethodEnum method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyType")
    public ReauthSettingsPolicyTypeEnum policyType;
    public ReauthSettings withPolicyType(ReauthSettingsPolicyTypeEnum policyType) {
        this.policyType = policyType;
        return this;
    }
}