package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApplicationInput
 * An Application resource contains the top-level configuration of an App Engine application.
**/
public class ApplicationInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authDomain")
    public String authDomain;
    public ApplicationInput withAuthDomain(String authDomain) {
        this.authDomain = authDomain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("databaseType")
    public ApplicationDatabaseTypeEnum databaseType;
    public ApplicationInput withDatabaseType(ApplicationDatabaseTypeEnum databaseType) {
        this.databaseType = databaseType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultCookieExpiration")
    public String defaultCookieExpiration;
    public ApplicationInput withDefaultCookieExpiration(String defaultCookieExpiration) {
        this.defaultCookieExpiration = defaultCookieExpiration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dispatchRules")
    public UrlDispatchRule[] dispatchRules;
    public ApplicationInput withDispatchRules(UrlDispatchRule[] dispatchRules) {
        this.dispatchRules = dispatchRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("featureSettings")
    public FeatureSettings featureSettings;
    public ApplicationInput withFeatureSettings(FeatureSettings featureSettings) {
        this.featureSettings = featureSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iap")
    public IdentityAwareProxyInput iap;
    public ApplicationInput withIap(IdentityAwareProxyInput iap) {
        this.iap = iap;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ApplicationInput withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationId")
    public String locationId;
    public ApplicationInput withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccount")
    public String serviceAccount;
    public ApplicationInput withServiceAccount(String serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("servingStatus")
    public ApplicationServingStatusEnum servingStatus;
    public ApplicationInput withServingStatus(ApplicationServingStatusEnum servingStatus) {
        this.servingStatus = servingStatus;
        return this;
    }
}