package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApiKeyOut
 * The API Key.
**/
public class ApiKeyOut {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("admin")
    public Boolean admin;
    public ApiKeyOut withAdmin(Boolean admin) {
        this.admin = admin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("anonymized")
    public Boolean anonymized;
    public ApiKeyOut withAnonymized(Boolean anonymized) {
        this.anonymized = anonymized;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiKey")
    public String apiKey;
    public ApiKeyOut withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("corporate")
    public Boolean corporate;
    public ApiKeyOut withCorporate(Boolean corporate) {
        this.corporate = corporate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabled")
    public Boolean disabled;
    public ApiKeyOut withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("learnable")
    public Boolean learnable;
    public ApiKeyOut withLearnable(Boolean learnable) {
        this.learnable = learnable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partner")
    public Boolean partner;
    public ApiKeyOut withPartner(Boolean partner) {
        this.partner = partner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("striped")
    public Boolean striped;
    public ApiKeyOut withStriped(Boolean striped) {
        this.striped = striped;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public String userId;
    public ApiKeyOut withUserId(String userId) {
        this.userId = userId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vetted")
    public Boolean vetted;
    public ApiKeyOut withVetted(Boolean vetted) {
        this.vetted = vetted;
        return this;
    }
}