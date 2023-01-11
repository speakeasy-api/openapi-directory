package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig
 * Options related to MultiFactor Authentication for the project.
**/
public class GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabledProviders")
    public GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigEnabledProvidersEnum[] enabledProviders;
    public GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig withEnabledProviders(GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigEnabledProvidersEnum[] enabledProviders) {
        this.enabledProviders = enabledProviders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigStateEnum state;
    public GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig withState(GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigStateEnum state) {
        this.state = state;
        return this;
    }
}