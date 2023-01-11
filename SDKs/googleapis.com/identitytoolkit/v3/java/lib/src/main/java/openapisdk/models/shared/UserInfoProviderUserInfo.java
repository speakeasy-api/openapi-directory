package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserInfoProviderUserInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public UserInfoProviderUserInfo withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public UserInfoProviderUserInfo withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("federatedId")
    public String federatedId;
    public UserInfoProviderUserInfo withFederatedId(String federatedId) {
        this.federatedId = federatedId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneNumber")
    public String phoneNumber;
    public UserInfoProviderUserInfo withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("photoUrl")
    public String photoUrl;
    public UserInfoProviderUserInfo withPhotoUrl(String photoUrl) {
        this.photoUrl = photoUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("providerId")
    public String providerId;
    public UserInfoProviderUserInfo withProviderId(String providerId) {
        this.providerId = providerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rawId")
    public String rawId;
    public UserInfoProviderUserInfo withRawId(String rawId) {
        this.rawId = rawId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("screenName")
    public String screenName;
    public UserInfoProviderUserInfo withScreenName(String screenName) {
        this.screenName = screenName;
        return this;
    }
}