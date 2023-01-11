package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccessSettings
 * Access related settings for IAP protected apps.
**/
public class AccessSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedDomainsSettings")
    public AllowedDomainsSettings allowedDomainsSettings;
    public AccessSettings withAllowedDomainsSettings(AllowedDomainsSettings allowedDomainsSettings) {
        this.allowedDomainsSettings = allowedDomainsSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("corsSettings")
    public CorsSettings corsSettings;
    public AccessSettings withCorsSettings(CorsSettings corsSettings) {
        this.corsSettings = corsSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcipSettings")
    public GcipSettings gcipSettings;
    public AccessSettings withGcipSettings(GcipSettings gcipSettings) {
        this.gcipSettings = gcipSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauthSettings")
    public OAuthSettings oauthSettings;
    public AccessSettings withOauthSettings(OAuthSettings oauthSettings) {
        this.oauthSettings = oauthSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyDelegationSettings")
    public PolicyDelegationSettings policyDelegationSettings;
    public AccessSettings withPolicyDelegationSettings(PolicyDelegationSettings policyDelegationSettings) {
        this.policyDelegationSettings = policyDelegationSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reauthSettings")
    public ReauthSettings reauthSettings;
    public AccessSettings withReauthSettings(ReauthSettings reauthSettings) {
        this.reauthSettings = reauthSettings;
        return this;
    }
}