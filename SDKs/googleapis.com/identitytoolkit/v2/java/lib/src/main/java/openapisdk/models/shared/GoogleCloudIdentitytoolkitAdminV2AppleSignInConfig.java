package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig
 * Additional config for SignInWithApple.
**/
public class GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bundleIds")
    public String[] bundleIds;
    public GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig withBundleIds(String[] bundleIds) {
        this.bundleIds = bundleIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("codeFlowConfig")
    public GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig codeFlowConfig;
    public GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig withCodeFlowConfig(GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig codeFlowConfig) {
        this.codeFlowConfig = codeFlowConfig;
        return this;
    }
}