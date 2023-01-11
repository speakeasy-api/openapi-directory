package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Relyingparty
 * Request of getting a code for user confirmation (reset password, change email etc.)
**/
public class Relyingparty {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("androidInstallApp")
    public Boolean androidInstallApp;
    public Relyingparty withAndroidInstallApp(Boolean androidInstallApp) {
        this.androidInstallApp = androidInstallApp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("androidMinimumVersion")
    public String androidMinimumVersion;
    public Relyingparty withAndroidMinimumVersion(String androidMinimumVersion) {
        this.androidMinimumVersion = androidMinimumVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("androidPackageName")
    public String androidPackageName;
    public Relyingparty withAndroidPackageName(String androidPackageName) {
        this.androidPackageName = androidPackageName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canHandleCodeInApp")
    public Boolean canHandleCodeInApp;
    public Relyingparty withCanHandleCodeInApp(Boolean canHandleCodeInApp) {
        this.canHandleCodeInApp = canHandleCodeInApp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("captchaResp")
    public String captchaResp;
    public Relyingparty withCaptchaResp(String captchaResp) {
        this.captchaResp = captchaResp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("challenge")
    public String challenge;
    public Relyingparty withChallenge(String challenge) {
        this.challenge = challenge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("continueUrl")
    public String continueUrl;
    public Relyingparty withContinueUrl(String continueUrl) {
        this.continueUrl = continueUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public Relyingparty withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iOSAppStoreId")
    public String iOSAppStoreId;
    public Relyingparty withIOsAppStoreId(String iOSAppStoreId) {
        this.iOSAppStoreId = iOSAppStoreId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iOSBundleId")
    public String iOSBundleId;
    public Relyingparty withIOsBundleId(String iOSBundleId) {
        this.iOSBundleId = iOSBundleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idToken")
    public String idToken;
    public Relyingparty withIdToken(String idToken) {
        this.idToken = idToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Relyingparty withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newEmail")
    public String newEmail;
    public Relyingparty withNewEmail(String newEmail) {
        this.newEmail = newEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestType")
    public String requestType;
    public Relyingparty withRequestType(String requestType) {
        this.requestType = requestType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userIp")
    public String userIp;
    public Relyingparty withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
}