package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VerifyAssertionResponse
 * Response of verifying the IDP assertion.
**/
public class VerifyAssertionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public String action;
    public VerifyAssertionResponse withAction(String action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appInstallationUrl")
    public String appInstallationUrl;
    public VerifyAssertionResponse withAppInstallationUrl(String appInstallationUrl) {
        this.appInstallationUrl = appInstallationUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appScheme")
    public String appScheme;
    public VerifyAssertionResponse withAppScheme(String appScheme) {
        this.appScheme = appScheme;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("context")
    public String context;
    public VerifyAssertionResponse withContext(String context) {
        this.context = context;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateOfBirth")
    public String dateOfBirth;
    public VerifyAssertionResponse withDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public VerifyAssertionResponse withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public VerifyAssertionResponse withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailRecycled")
    public Boolean emailRecycled;
    public VerifyAssertionResponse withEmailRecycled(Boolean emailRecycled) {
        this.emailRecycled = emailRecycled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailVerified")
    public Boolean emailVerified;
    public VerifyAssertionResponse withEmailVerified(Boolean emailVerified) {
        this.emailVerified = emailVerified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessage")
    public String errorMessage;
    public VerifyAssertionResponse withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiresIn")
    public String expiresIn;
    public VerifyAssertionResponse withExpiresIn(String expiresIn) {
        this.expiresIn = expiresIn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("federatedId")
    public String federatedId;
    public VerifyAssertionResponse withFederatedId(String federatedId) {
        this.federatedId = federatedId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstName")
    public String firstName;
    public VerifyAssertionResponse withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullName")
    public String fullName;
    public VerifyAssertionResponse withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idToken")
    public String idToken;
    public VerifyAssertionResponse withIdToken(String idToken) {
        this.idToken = idToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputEmail")
    public String inputEmail;
    public VerifyAssertionResponse withInputEmail(String inputEmail) {
        this.inputEmail = inputEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isNewUser")
    public Boolean isNewUser;
    public VerifyAssertionResponse withIsNewUser(Boolean isNewUser) {
        this.isNewUser = isNewUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public VerifyAssertionResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public VerifyAssertionResponse withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastName")
    public String lastName;
    public VerifyAssertionResponse withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localId")
    public String localId;
    public VerifyAssertionResponse withLocalId(String localId) {
        this.localId = localId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("needConfirmation")
    public Boolean needConfirmation;
    public VerifyAssertionResponse withNeedConfirmation(Boolean needConfirmation) {
        this.needConfirmation = needConfirmation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("needEmail")
    public Boolean needEmail;
    public VerifyAssertionResponse withNeedEmail(Boolean needEmail) {
        this.needEmail = needEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nickName")
    public String nickName;
    public VerifyAssertionResponse withNickName(String nickName) {
        this.nickName = nickName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauthAccessToken")
    public String oauthAccessToken;
    public VerifyAssertionResponse withOauthAccessToken(String oauthAccessToken) {
        this.oauthAccessToken = oauthAccessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauthAuthorizationCode")
    public String oauthAuthorizationCode;
    public VerifyAssertionResponse withOauthAuthorizationCode(String oauthAuthorizationCode) {
        this.oauthAuthorizationCode = oauthAuthorizationCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauthExpireIn")
    public Integer oauthExpireIn;
    public VerifyAssertionResponse withOauthExpireIn(Integer oauthExpireIn) {
        this.oauthExpireIn = oauthExpireIn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauthIdToken")
    public String oauthIdToken;
    public VerifyAssertionResponse withOauthIdToken(String oauthIdToken) {
        this.oauthIdToken = oauthIdToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauthRequestToken")
    public String oauthRequestToken;
    public VerifyAssertionResponse withOauthRequestToken(String oauthRequestToken) {
        this.oauthRequestToken = oauthRequestToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauthScope")
    public String oauthScope;
    public VerifyAssertionResponse withOauthScope(String oauthScope) {
        this.oauthScope = oauthScope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauthTokenSecret")
    public String oauthTokenSecret;
    public VerifyAssertionResponse withOauthTokenSecret(String oauthTokenSecret) {
        this.oauthTokenSecret = oauthTokenSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originalEmail")
    public String originalEmail;
    public VerifyAssertionResponse withOriginalEmail(String originalEmail) {
        this.originalEmail = originalEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("photoUrl")
    public String photoUrl;
    public VerifyAssertionResponse withPhotoUrl(String photoUrl) {
        this.photoUrl = photoUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("providerId")
    public String providerId;
    public VerifyAssertionResponse withProviderId(String providerId) {
        this.providerId = providerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rawUserInfo")
    public String rawUserInfo;
    public VerifyAssertionResponse withRawUserInfo(String rawUserInfo) {
        this.rawUserInfo = rawUserInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refreshToken")
    public String refreshToken;
    public VerifyAssertionResponse withRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("screenName")
    public String screenName;
    public VerifyAssertionResponse withScreenName(String screenName) {
        this.screenName = screenName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeZone")
    public String timeZone;
    public VerifyAssertionResponse withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verifiedProvider")
    public String[] verifiedProvider;
    public VerifyAssertionResponse withVerifiedProvider(String[] verifiedProvider) {
        this.verifiedProvider = verifiedProvider;
        return this;
    }
}