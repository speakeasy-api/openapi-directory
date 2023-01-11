package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SetAccountInfoResponseProviderUserInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public SetAccountInfoResponseProviderUserInfo withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("federatedId")
    public String federatedId;
    public SetAccountInfoResponseProviderUserInfo withFederatedId(String federatedId) {
        this.federatedId = federatedId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("photoUrl")
    public String photoUrl;
    public SetAccountInfoResponseProviderUserInfo withPhotoUrl(String photoUrl) {
        this.photoUrl = photoUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("providerId")
    public String providerId;
    public SetAccountInfoResponseProviderUserInfo withProviderId(String providerId) {
        this.providerId = providerId;
        return this;
    }
}