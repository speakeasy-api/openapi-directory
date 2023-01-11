package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig
 * Configures the regions where users are allowed to send verification SMS for the project or tenant. This is based on the calling code of the destination phone number.
**/
public class GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowByDefault")
    public GoogleCloudIdentitytoolkitAdminV2AllowByDefault allowByDefault;
    public GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig withAllowByDefault(GoogleCloudIdentitytoolkitAdminV2AllowByDefault allowByDefault) {
        this.allowByDefault = allowByDefault;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowlistOnly")
    public GoogleCloudIdentitytoolkitAdminV2AllowlistOnly allowlistOnly;
    public GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig withAllowlistOnly(GoogleCloudIdentitytoolkitAdminV2AllowlistOnly allowlistOnly) {
        this.allowlistOnly = allowlistOnly;
        return this;
    }
}