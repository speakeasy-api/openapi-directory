package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1ProvisionCloudIdentityRequestInput
 * Request message for CloudChannelService.ProvisionCloudIdentity
**/
public class GoogleCloudChannelV1ProvisionCloudIdentityRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudIdentityInfo")
    public GoogleCloudChannelV1CloudIdentityInfoInput cloudIdentityInfo;
    public GoogleCloudChannelV1ProvisionCloudIdentityRequestInput withCloudIdentityInfo(GoogleCloudChannelV1CloudIdentityInfoInput cloudIdentityInfo) {
        this.cloudIdentityInfo = cloudIdentityInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public GoogleCloudChannelV1AdminUser user;
    public GoogleCloudChannelV1ProvisionCloudIdentityRequestInput withUser(GoogleCloudChannelV1AdminUser user) {
        this.user = user;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validateOnly")
    public Boolean validateOnly;
    public GoogleCloudChannelV1ProvisionCloudIdentityRequestInput withValidateOnly(Boolean validateOnly) {
        this.validateOnly = validateOnly;
        return this;
    }
}