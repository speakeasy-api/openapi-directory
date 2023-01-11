package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EmailVerifyResponse {
    @JsonProperty("domain")
    public String domain;
    public EmailVerifyResponse withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonProperty("domainError")
    public Boolean domainError;
    public EmailVerifyResponse withDomainError(Boolean domainError) {
        this.domainError = domainError;
        return this;
    }
    @JsonProperty("email")
    public String email;
    public EmailVerifyResponse withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("isCatchAll")
    public Boolean isCatchAll;
    public EmailVerifyResponse withIsCatchAll(Boolean isCatchAll) {
        this.isCatchAll = isCatchAll;
        return this;
    }
    @JsonProperty("isDeferred")
    public Boolean isDeferred;
    public EmailVerifyResponse withIsDeferred(Boolean isDeferred) {
        this.isDeferred = isDeferred;
        return this;
    }
    @JsonProperty("isDisposable")
    public Boolean isDisposable;
    public EmailVerifyResponse withIsDisposable(Boolean isDisposable) {
        this.isDisposable = isDisposable;
        return this;
    }
    @JsonProperty("isFreemail")
    public Boolean isFreemail;
    public EmailVerifyResponse withIsFreemail(Boolean isFreemail) {
        this.isFreemail = isFreemail;
        return this;
    }
    @JsonProperty("isPersonal")
    public Boolean isPersonal;
    public EmailVerifyResponse withIsPersonal(Boolean isPersonal) {
        this.isPersonal = isPersonal;
        return this;
    }
    @JsonProperty("provider")
    public String provider;
    public EmailVerifyResponse withProvider(String provider) {
        this.provider = provider;
        return this;
    }
    @JsonProperty("smtpResponse")
    public String smtpResponse;
    public EmailVerifyResponse withSmtpResponse(String smtpResponse) {
        this.smtpResponse = smtpResponse;
        return this;
    }
    @JsonProperty("smtpStatus")
    public String smtpStatus;
    public EmailVerifyResponse withSmtpStatus(String smtpStatus) {
        this.smtpStatus = smtpStatus;
        return this;
    }
    @JsonProperty("syntaxError")
    public Boolean syntaxError;
    public EmailVerifyResponse withSyntaxError(Boolean syntaxError) {
        this.syntaxError = syntaxError;
        return this;
    }
    @JsonProperty("typosFixed")
    public Boolean typosFixed;
    public EmailVerifyResponse withTyposFixed(Boolean typosFixed) {
        this.typosFixed = typosFixed;
        return this;
    }
    @JsonProperty("valid")
    public Boolean valid;
    public EmailVerifyResponse withValid(Boolean valid) {
        this.valid = valid;
        return this;
    }
    @JsonProperty("verified")
    public Boolean verified;
    public EmailVerifyResponse withVerified(Boolean verified) {
        this.verified = verified;
        return this;
    }
}