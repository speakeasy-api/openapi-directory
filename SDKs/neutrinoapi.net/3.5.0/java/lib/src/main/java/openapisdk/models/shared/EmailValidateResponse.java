package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EmailValidateResponse {
    @JsonProperty("domain")
    public String domain;
    public EmailValidateResponse withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonProperty("domainError")
    public Boolean domainError;
    public EmailValidateResponse withDomainError(Boolean domainError) {
        this.domainError = domainError;
        return this;
    }
    @JsonProperty("email")
    public String email;
    public EmailValidateResponse withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("isDisposable")
    public Boolean isDisposable;
    public EmailValidateResponse withIsDisposable(Boolean isDisposable) {
        this.isDisposable = isDisposable;
        return this;
    }
    @JsonProperty("isFreemail")
    public Boolean isFreemail;
    public EmailValidateResponse withIsFreemail(Boolean isFreemail) {
        this.isFreemail = isFreemail;
        return this;
    }
    @JsonProperty("isPersonal")
    public Boolean isPersonal;
    public EmailValidateResponse withIsPersonal(Boolean isPersonal) {
        this.isPersonal = isPersonal;
        return this;
    }
    @JsonProperty("provider")
    public String provider;
    public EmailValidateResponse withProvider(String provider) {
        this.provider = provider;
        return this;
    }
    @JsonProperty("syntaxError")
    public Boolean syntaxError;
    public EmailValidateResponse withSyntaxError(Boolean syntaxError) {
        this.syntaxError = syntaxError;
        return this;
    }
    @JsonProperty("typosFixed")
    public Boolean typosFixed;
    public EmailValidateResponse withTyposFixed(Boolean typosFixed) {
        this.typosFixed = typosFixed;
        return this;
    }
    @JsonProperty("valid")
    public Boolean valid;
    public EmailValidateResponse withValid(Boolean valid) {
        this.valid = valid;
        return this;
    }
}