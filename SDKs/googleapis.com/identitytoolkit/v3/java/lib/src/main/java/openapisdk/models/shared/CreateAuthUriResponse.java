package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateAuthUriResponse
 * Response of creating the IDP authentication URL.
**/
public class CreateAuthUriResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allProviders")
    public String[] allProviders;
    public CreateAuthUriResponse withAllProviders(String[] allProviders) {
        this.allProviders = allProviders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authUri")
    public String authUri;
    public CreateAuthUriResponse withAuthUri(String authUri) {
        this.authUri = authUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("captchaRequired")
    public Boolean captchaRequired;
    public CreateAuthUriResponse withCaptchaRequired(Boolean captchaRequired) {
        this.captchaRequired = captchaRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("forExistingProvider")
    public Boolean forExistingProvider;
    public CreateAuthUriResponse withForExistingProvider(Boolean forExistingProvider) {
        this.forExistingProvider = forExistingProvider;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public CreateAuthUriResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("providerId")
    public String providerId;
    public CreateAuthUriResponse withProviderId(String providerId) {
        this.providerId = providerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registered")
    public Boolean registered;
    public CreateAuthUriResponse withRegistered(Boolean registered) {
        this.registered = registered;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sessionId")
    public String sessionId;
    public CreateAuthUriResponse withSessionId(String sessionId) {
        this.sessionId = sessionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signinMethods")
    public String[] signinMethods;
    public CreateAuthUriResponse withSigninMethods(String[] signinMethods) {
        this.signinMethods = signinMethods;
        return this;
    }
}