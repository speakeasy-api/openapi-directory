package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserInfo
 * Template for an individual account info.
**/
public class UserInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdAt")
    public String createdAt;
    public UserInfo withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customAttributes")
    public String customAttributes;
    public UserInfo withCustomAttributes(String customAttributes) {
        this.customAttributes = customAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customAuth")
    public Boolean customAuth;
    public UserInfo withCustomAuth(Boolean customAuth) {
        this.customAuth = customAuth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabled")
    public Boolean disabled;
    public UserInfo withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public UserInfo withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public UserInfo withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailVerified")
    public Boolean emailVerified;
    public UserInfo withEmailVerified(Boolean emailVerified) {
        this.emailVerified = emailVerified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastLoginAt")
    public String lastLoginAt;
    public UserInfo withLastLoginAt(String lastLoginAt) {
        this.lastLoginAt = lastLoginAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localId")
    public String localId;
    public UserInfo withLocalId(String localId) {
        this.localId = localId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passwordHash")
    public String passwordHash;
    public UserInfo withPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passwordUpdatedAt")
    public Double passwordUpdatedAt;
    public UserInfo withPasswordUpdatedAt(Double passwordUpdatedAt) {
        this.passwordUpdatedAt = passwordUpdatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneNumber")
    public String phoneNumber;
    public UserInfo withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("photoUrl")
    public String photoUrl;
    public UserInfo withPhotoUrl(String photoUrl) {
        this.photoUrl = photoUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("providerUserInfo")
    public UserInfoProviderUserInfo[] providerUserInfo;
    public UserInfo withProviderUserInfo(UserInfoProviderUserInfo[] providerUserInfo) {
        this.providerUserInfo = providerUserInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rawPassword")
    public String rawPassword;
    public UserInfo withRawPassword(String rawPassword) {
        this.rawPassword = rawPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("salt")
    public String salt;
    public UserInfo withSalt(String salt) {
        this.salt = salt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("screenName")
    public String screenName;
    public UserInfo withScreenName(String screenName) {
        this.screenName = screenName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validSince")
    public String validSince;
    public UserInfo withValidSince(String validSince) {
        this.validSince = validSince;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Integer version;
    public UserInfo withVersion(Integer version) {
        this.version = version;
        return this;
    }
}