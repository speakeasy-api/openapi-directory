package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig
 * Configuration for settings related to email privacy and public visibility. Settings in this config protect against email enumeration, but may make some trade-offs in user-friendliness.
**/
public class GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableImprovedEmailPrivacy")
    public Boolean enableImprovedEmailPrivacy;
    public GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig withEnableImprovedEmailPrivacy(Boolean enableImprovedEmailPrivacy) {
        this.enableImprovedEmailPrivacy = enableImprovedEmailPrivacy;
        return this;
    }
}